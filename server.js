const express = require("express");
const users = require("./db.json");
const app = express();
const port = process.env.PORT || 3000; 


app.get('/api/users', (req, res) => {

    res.json(users);
 
 })

 app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)))
 
 })




app.get("/Rattapoom", (req, res) => { res.send("Hello! My name is Rattapoom.");});


app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:3000/ " + port + "/Rattapoom");
    console.log("Starting node.js at http://127.0.0.1:3000/ " + port + "/api/users");

});