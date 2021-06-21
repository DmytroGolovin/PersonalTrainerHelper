const Client = require("../models/client.model");
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
    const client = new Client({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
        weight: req.body.weight,
        height: req.body.height,
        objective: req.body.objective,
        version: version,
        Trainers_id: 1
    });

    // Save Plan in the database
    Client.create(client, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Error."
            });
        else res.status(201).send(data);
    });
};

exports.findAll = (req, res) => {
    Client.findAll((err, data) => {
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
    Client.findById(req.params.clientId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: `Plan with id ${req.params.clientId}, not found.`
                });
            }else {
                res.status(500).send({
                    message: "Error retrieving plan with id " + req.params.clientId
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
    const plan = new Client({
        title: req.body.title,
        description: req.body.description,
        version: version,
    });

    Client.updateById(req.params.planId, plan, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Client with given id not found"
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
    Client.remove(req.params.clientId, (err, data) => {
        if(err){
            if(err.kind === "404"){
                res.status(404).send({
                    message: "Client with required id was not found!" 
                 });
            }else{
                res.status(500).send({
                    message: "Erro deleting Plan!" 
                 });
            }
        }else{
            res.status(200).send({
               message: "Client was successfuly deleted!" 
            });
        }
    });
};