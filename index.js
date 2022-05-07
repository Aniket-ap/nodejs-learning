const express = require("express")
const filterRoute = require("./middleware")
const app = express()

// app.use(filterRoute)

app.get("/",(req, res) => {
    res.send("Welcome to home page")
})

app.get("/user", filterRoute,(req, res) => {
    res.send("helle user")
})

app.listen(5000, () => {
    console.log("Server running")
})