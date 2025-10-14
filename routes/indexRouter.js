//indexRouter.js
const { Router } = require ("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) =>{
    res.render("index", { title: "Mini Messageboard", messages: messages})

})

indexRouter.get("/new", (req,res) => {
    res.render("form")
})


indexRouter.post("/new", (req,res) => {
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/")
})

indexRouter.get("/messages/:id", (req, res) => {
    const message = messages[req.params.id];

    if(!messages) {
        return res.status(404).send("Message not found")
    }

    res.render("messagesDetails", {message})
})

module.exports = indexRouter;

