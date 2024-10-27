const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("<h1>Hello world! </h1>")
    }

})


server.listen(3000, (err) => {
    if (err) throw err;
    console.log("server is up and running on port 3000")
});
