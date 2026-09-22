const http = require("http")



// GET "/users" --> "User details are received"
// POST "/user" --> "User details are sent"
// PUT "/user--> "User detail is updated"
// PATCH --> "User detail is updated"
// DELETE --> "User detail is deleted"

const server = http.createServer((req, res) => {
    console.log("Req is received!");
    if (req.method == "GET" && req.url=="/getUser") {
        res.write("User details are received")
        res.end()
    }
    else if (req.method == "POST" && req.url=="/user") {
        res.write("User details are sent")
        res.end()
    }
    else if (req.method == "PUT" && req.url=="/user") {
        res.write("User detail is updated")
        res.end()
    }
    else if (req.method == "PATCH") {
        res.write("User detail is patched")
        res.end()
    }
    else if (req.method == "DELETE") {
        res.write("User details are deleted")
        res.end()
    }
})

server.listen(3000, () => {
    console.log("Server is listening");
})