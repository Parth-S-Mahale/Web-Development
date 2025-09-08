const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

  //Handling GET request
  if (req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'content-type':'text/plain'})
        res.end('Welcome to homepage')
    } else {
        res.writeHead(404, {'content-type':'text/plain'})
        res.end('Page Not Found !')
    }


  //Handling POST request
    if (req.method === "POST" && req.url === "/submit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "Data received",
          data: body,
        })
      );
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route Not Found !");
  }


  // Handling Query Parameters
  if (req.method === "GET" && req.url.startsWith("/search")) {
    const queryObject = url.parse(req.url, true).query;

    res.writeHead(200, { 
      "content-type": "application/json", "custom-header": "Node JS Server",
      "custom-tracking": "1234"
    });
    res.end(JSON.stringify({ message: "Query received", queryObject }));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route Not Found !");
  }


});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
