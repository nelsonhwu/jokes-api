const { Joke } = require('../models/models');

module.exports = {
    allJokes: (req, res) => {
        Joke.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }))
    },

    findOneSingleJoke: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(oneSingleUser => res.json({ joke: oneSingleJoke }))
            .catch(err => res.json({ message: "error", error: err }))
    },

    findRandomJoke: (req, res) => {
        var count = Joke.countDocuments();
        var random = Math.floor(Math.random() * count);
        Joke.findOne().skip(random)
            .then(randomJoke => res.json({ joke: randomJoke }))
            .catch(err => res.json({ message: "Error", error: err }))
    },

    createNewJoke: (req, res) => {
        Joke.create(req.body)
            .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
            .catch(err => res.json({ message: "Error", error: err }))
    },

    updateExisitingJoke: (req, res) => {
        Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "Error", eorr: err}))
    },

    deleteAnExistingJoke: (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: "Error", error: err }))
    }
}