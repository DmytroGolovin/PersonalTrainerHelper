const mysql = require("./db.js");

//constructor
const Exercise = function (training){
    this.title = training.title;
    this.description = training.description;
    this.version = training.version;
    this.createdAt = training.createdAt;
    this.updatedAt = training.updatedAt;
}

Exercise.create = function(newExercise, result){
    mysql.query("INSERT INTO exercises SET title = ?, description = ?, version = ?, createdAt= NOW(), updatedAt = NOW()", 
    [newExercise.title, newExercise.description, newExercise.version], 
    (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Exercise: ", {id: res.insertedId, ...newExercise});
        result(null, { id: res.insertId, ...newExercise });
    });
};

Exercise.findById = function(exerciseId, result){
    mysql.query("SELECT * FROM exercises WHERE id = ?", exerciseId, (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("Found Exercise: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "404"}, null);
    });
}

Exercise.findAll = function(result){
    mysql.query("SELECT * FROM exercises", (err, res) => {
        if(err){
            console.log("Error: ", err);
            result(err, null);
            return;
        }
        console.log("Selected this: ", res)
        result(null, res);
    });
}

Exercise.updateById = function(exerciseId, exercise, result){
    mysql.query("UPDATE exersises SET title = ?, description = ?, version = ?, updatedAt = NOW() WHERE id = ?",
                [exercise.title, exercise.description, exercise.version, exerciseId], 
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

                    console.log("Updated exercise with id: ", exerciseId); 
                    result(null, {id: exerciseId, ...exercise});
    });
}

Exercise.remove = function(exerciseId, result) {
    mysql.query("DELETE FROM exercises WHERE id = ?", exerciseId, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(err, null);
        return;
      }
  
      if (res.affectedRows == 0) {
        // Not found Exercise with the id
        result({ kind: "404" }, null);
        return;
      }
  
      console.log("Deleted exercise with id: ", exerciseId);
      result(null, res);
    });
  };

module.exports = Exercise;