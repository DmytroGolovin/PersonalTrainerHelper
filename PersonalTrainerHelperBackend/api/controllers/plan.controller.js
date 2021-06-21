const Plan = require("../models/plan.model.js");
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
    const plan = new Plan({
        title: req.body.title,
        description: req.body.description,
        version: version,
        Trainers_id: 1
    });

    // Save Plan in the database
    Plan.create(plan, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Error."
            });
        else res.status(201).send(data);
    });
};

exports.findAll = (req, res) => {
    Plan.findAll((err, data) => {
        if(err){
            res.status(500).send({
                message: "Error retrieving plans"
            });
        }else{
            res.send(data);
        }
    });
};

exports.findOne = (req, res) => {
    Plan.findById(req.params.planId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: `Plan with id ${req.params.planId}, not found.`
                });
            }else {
                res.status(500).send({
                    message: "Error retrieving plan with id " + req.params.planId
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
    const plan = new Plan({
        title: req.body.title,
        description: req.body.description,
        version: version,
    });

    Plan.updateById(req.params.planId, plan, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Plan with given id not found"
                });
            }else{
                res.status(500).send({
                    message: "Error updating plan with id " + req.params.planId
                });
            }
        }else{
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    Plan.remove(req.params.planId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Plan with required id was not found!" 
                 });
            }else{
                res.status(500).send({
                    message: "Erro deleting Plan!" 
                 });
            }
        }else{
            res.status(200).send({
               message: "Plan was successfuly deleted!" 
            });
        }
    });
};