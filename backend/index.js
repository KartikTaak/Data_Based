const http = require('http');   
const app = require("./app.js");  
const PORT = 5000 || process.env.PORT;
const server = http.createServer(app);
server.listen(PORT);     