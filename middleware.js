module.exports = filterRoute = (req, res, next) => {
    if(!req.query.age){
        res.send("Please Provide age")
    } else if(req.query.age < 18){
        res.send("You are not allowed to access this page")
    } else {
        next()
    }
}