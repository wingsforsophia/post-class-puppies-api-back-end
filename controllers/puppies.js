const Puppy = require('../models/puppy')

module.exports = {
    index, 
    show, 
    create, 
    update, 
    delete: deleteOne
}

function index(req, res) {
    Puppy.find({})
    .then(puppies => {
        res.json(puppies)
    })
}

function show(req, res) {
    Puppy.findById(req.params.id)
    .then(puppy => {
        res.json(puppy)
    })
}

function create(req, res) {
    Puppy.create(req.body)
    .then(puppy => {
        res.json(puppy)
    })
}

function update(req, res) {
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(puppy => {
        res.json(puppy)
    })
}

function deleteOne(req, res) {
    Puppy.findByIdAndDelete(req.params.id)
    .then(puppy => {
        res.json(puppy)
    })
}