const { Router } = require("express");
const newRouter = Router();
const messages = require("../messages");

newRouter.get("/", (req, res) => {
    res.render("form")
});

newRouter.post("/", (req, res) => {
    const message = {
        text: req.body.messageInput,
        user: req.body.authorNameInput,
        added: new Date()
    };

    messages.push(message);
    res.redirect("/");
});

module.exports = newRouter;
