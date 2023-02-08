const express = require("express");
const birdRouter = require("./routes/birdRouter");
const usersRouter = require("./routes/usersRouter");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "pug");

app.use("/bird", birdRouter);
app.use("/users", usersRouter);

app.get("/profile", (req, res) => {
    res.render("profile", {
        title: "Hey",
        message: "Hello This is in the pug gggggggg",
    });
});

app.get("/avater", (req, res) => {
    res.sendFile(`${__dirname}/avater.jpg`);
});

app.use("/", (req, res, next) => {
    console.log("Time", Date.now());
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World in index");
});

app.post("/", (req, res) => {
    res.send("This is in the index post menthod!!!");
});

app.put("/", (req, res) => {
    res.send("This is in the index put menthod!!!");
});

app.delete("/", (req, res) => {
    res.send("This sentence in the index has been deleted !!!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
