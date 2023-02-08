const express = require("express");
const birdRouter = express.Router();

// middleware that is specific to this router
// birdRouter.use((req, res, next) => {
//     console.log("Time: ", Date.now());
//     next();
// });
// define the home page route

const birds = [
    { name: "bird1", species: "SarKaLay" },
    { name: "bird2", species: "KeeKan" },
    { name: "bird3", species: "Kho" },
    { name: "bird4", species: "Daung" },
];

birdRouter.get("/", (req, res) => {
    res.send(birds);
});
// define the about route
birdRouter.get("/about", (req, res) => {
    res.send("About birds");
});

birdRouter.post("/addBirds", (req, res) => {
    res.send("Add a bird");
});

module.exports = birdRouter;
