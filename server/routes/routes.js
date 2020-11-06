const controller = require('../controllers/controller')

module.exports = app => {
    //C
    app.post("/api/jokes/new", controller.createNewJoke);
    //R
    app.get("/api/jokes", controller.allJokes);
    app.get("/api/jokes/:_id", controller.findOneSingleJoke);
    app.get("/api/jokes/random", controller.findRandomJoke);
    //U
    app.put("/api/jokes/update/:_id", controller.updateExisitingJoke);
    //D
    app.delete("/api/jokes/delete/:_id", controller.deleteAnExistingJoke);
}