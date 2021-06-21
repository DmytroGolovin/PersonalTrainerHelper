const Exercise = require("../models/exercise.model");
const crypto = require("crypto");

exports.create = (req, res) => {
    // Validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a new Plan
    const version = crypto.randomBytes(16).toString("hex");
    const exercise = new Exercise({
        title: req.body.title,
        description: req.body.description,
        version: version
    });

    // Save Plan in the database
    Exercise.create(exercise, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Error."
            });
        else res.status(201).send(data);
    });
};

exports.findAll = (req, res) => {
    Exercise.findAll((err, data) => {
        if(err){
            res.status(500).send({
                message: "Error retrieving exercises"
            });
        }else{
            res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    Exercise.findById(req.params.exerciseId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: `Exercise with id ${req.params.exerciseId}, not found.`
                });
            }else {
                res.status(500).send({
                    message: "Error retrieving exercise with id " + req.params.planexerciseIdId
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const version = crypto.randomBytes(16).toString("hex");
    const exercise = new Exercise({
        title: req.body.title,
        description: req.body.description,
        version: version,
    });

    Exercise.updateById(req.params.exerciseId, exercise, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Exercise with given id not found"
                });
            }else{
                res.status(500).send({
                    message: "Error updating exercise with id " + req.params.exerciseId
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    Exercise.remove(req.params.exerciseId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Exercise with required id was not found!" 
                 });
            }else{
                res.status(500).send({
                    message: "Erro deleting Exercise!" 
                 });
            }
        }else{
            res.status(200).send({
               message: "Exercise was successfuly deleted!" 
            });
        }
    });
};