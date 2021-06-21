const mysql = require("./db.js");

//constructor
const Client = function (client){
    this.fname = client.fname;
    this.lname = client.lname;
    this.email = client.email;
    this.password = client.password;
    this.birthday = client.birthday;
    this.weight = client.weight;
    this.height = client.height;
    this.objective = client.objective;
    this.version = client.version;
    this.Trainers_id = client.Trainers_id;
}

Client.create = function(newClient, result){
    mysql.query("INSERT INTO" +
                    " clients " +
                "SET " +
                    "firstName = ?, " + 
                    "lastName = ?, " +
                    "email = ?, " + 
                    "password = ?, " + 
                    "birthday = ?, " +
                    "weight = ?, " +
                    "height = ?, " +
                    "objective = ?, "+ 
                    "version = ?, " + 
                    "createdAt= NOW(), " +
                    "updatedAt = NOW(), " + 
                    "Trainers_id = ?", 
    [
        newClient.fname, 
        newClient.lname, 
        newClient.email, 
        newClient.password, 
        newClient.birthday, 
        newClient.weight, 
        newClient.height, 
        newClient.objective,
        newClient.version,
        newClient.Trainers_id], 
    (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Client: ", {id: res.insertedId, ...newClient});
        result(null, { id: res.insertId, ...newClient });
    });
};

Client.findById = function(clientId, result){
    mysql.query("SELECT * FROM clients WHERE id = ?", clientId, (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("Found Client: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "404"}, null);
    });
}

Client.findAll = function(result){
    mysql.query("SELECT * FROM clients", (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }
        console.log("Selected this: ", res)
        result(null, res);
    });
}

Client.updateById = function(planId, plan, result){
    mysql.query("UPDATE clients SET title = ?, description = ?, version = ?, updatedAt = NOW() WHERE id = ?",
                [plan.title, plan.description, plan.version, planId], 
                (err,res) => {
                    if(err){
                        console.log("Error: ", err);
                        result(err, null);
                        return;
                    }

                    if(res.affectedRows == 0){
                        result({kind: "404"}, null);
                        return;
                    }

                    console.log("Updated Client with id: ", planId); 
                    result(null, {id: planId, ...plan});
    });
}

Client.remove = function(clientId, result) {
    mysql.query("DELETE FROM clients WHERE id = ?", clientId, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
  
      if (res.affectedRows == 0) {
        // Not found Client with the id
        result({ kind: "404" }, null);
        return;
      }
  
      console.log("Deleted Client with id: ", clientId);
      result(null, res);
    });
  };

module.exports = Client;