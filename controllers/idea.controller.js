const ideaModel = require("../models/idea.model");
const ideas = require("../models/idea.model");

var count = 1;
exports.getIdeas = (req, res) => {

    res.status(200).send(ideas);
}


exports.getIdeadBasedOnId = (req, res) => {
    res.status(200).send(ideas[req.params.id]);
}

exports.createIdea = (req, res) => {
    req.body.id = ++count;
    ideas[count] = req.body;
    res.status(201).send(ideas[count]);
}

exports.updateIdea = (req, res) => {
    if (ideas[req.params.id]) {
        ideas[req.params.id] = req.body;
        res.status(200).send(ideas[req.params.id]);
    } else {
        res.status(400).send({
            message: "Idea id passed is not valid"
        });
    }
}


exports.deleteIdea = (req, res) => {
    if (ideas[req.params.id]) {
        delete ideas[req.params.id];
        res.status(200).send({
            message: "Successfully deleted"
        });
    } else {
        res.status(400).send({
            message: "Idea id passed is not valid"
        });
    }
}