const ideaController = require("../controllers/idea.controller");

module.exports = (app) => {
    app.get("/ideasApp/api/v1/ideas", ideaController.getIdeas);
    app.get("/ideasApp/api/v1/ideas/:id", ideaController.getIdeadBasedOnId);
    app.post("/ideasApp/api/v1/ideas/", ideaController.createIdea);
    app.put("/ideasApp/api/v1/ideas/:id", ideaController.updateIdea);
    app.delete("/ideasApp/api/v1/ideas/:id", ideaController.deleteIdea);
}