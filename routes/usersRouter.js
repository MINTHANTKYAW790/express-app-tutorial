const express = require("express");
const usersRouter = express.Router();

const usersList = [
    { name: "user1", email: "user1@gmail.com" },
    { name: "user2", email: "user2@gmail.com" },
    { name: "user3", email: "user3@gmail.com" },
    { name: "user4", email: "user4@gmail.com" },
];

usersRouter.get("/", (req, res) => {
    res.send(usersList);
});
// define the about route
usersRouter.get("/about", (req, res) => {
    res.send("Information about users");
});

usersRouter.post("/add-user", (req, res) => {
    res.send("Add a user");
});

module.exports = usersRouter;
