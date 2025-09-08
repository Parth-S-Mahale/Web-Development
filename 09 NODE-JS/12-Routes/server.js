const http = require("http");
const url = require("url");

// Route Handler
/* const routes = {
  "/": (req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Welcome to Home Page");
  },

  "/about": (req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("This is the About Page");
  },

  "/notfound": (req, res) => {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Page Not Found !");
  },
}; */


// Handling Dynamic Routes



const server = http.createServer((req, res) => {
  // Route Handler Server Configuration
  /* const { pathname } = url.parse(req.url)
    if (routes[pathname]){
        routes[pathname](req, res)
    } else{
        routes['/notfound'](req, res)
    } */
  

  // Handling Dynamic Routes
  const {pathname} = url.parse(req.url)

  if(pathname.startsWith('/user/')){
    const userId = pathname.split("/")[2];
    res.writeHead(200, {'content-type':'text/plain'})
    res.end(`User Id:${userId}`)
  } else{
    res.writeHead(404, {'content-type':'text/plain'})
    res.end('Route Not Found !')
  }

  
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
