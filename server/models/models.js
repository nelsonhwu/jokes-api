const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, { timestamp: true });

const Joke = mongoose.model("joke", JokeSchema);

module.exports = {
    Joke
}