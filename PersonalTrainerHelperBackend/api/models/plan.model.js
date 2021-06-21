const mysql = require("./db.js");

//constructor
const Plan = function (plan){
    this.title = plan.title;
    this.description = plan.description;
    this.version = plan.version;
    this.createdAt = plan.createdAt;
    this.updatedAt = plan.updatedAt;
    this.Trainers_id = plan.Trainers_id;
}

Plan.create = function(newPlan, result){
    mysql.query("INSERT INTO plans SET title = ?, description = ?, version = ?, createdAt= NOW(), updatedAt = NOW(), Trainers_id = ?", 
    [newPlan.title, newPlan.description, newPlan.version, newPlan.Trainers_id], 
    (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Plan: ", {id: res.insertedId, ...newPlan});
        result(null, { id: res.insertId, ...newPlan });
    });
};

Plan.findById = function(planId, result){
    mysql.query("SELECT * FROM plans WHERE id = ?", planId, (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("Found Plan: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "404"}, null);
    });
}

Plan.findAll = function(result){
    mysql.query("SELECT * FROM plans", (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }
        console.log("Selected this: ", res)
        result(null, res);
    });
}

Plan.updateById = function(planId, plan, result){
    mysql.query("UPDATE plans SET title = ?, description = ?, version = ?, updatedAt = NOW() WHERE id = ?",
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

                    console.log("Updated plan with id: ", planId); 
                    result(null, {id: planId, ...plan});
    });
}

Plan.remove = function(planId, result) {
    mysql.query("DELETE FROM plans WHERE id = ?", planId, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
  
      if (res.affectedRows == 0) {
        // Not found Plan with the id
        result({ kind: "404" }, null);
        return;
      }
  
      console.log("Deleted plan with id: ", planId);
      result(null, res);
    });
  };

module.exports = Plan;