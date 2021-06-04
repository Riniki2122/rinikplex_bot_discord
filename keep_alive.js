var http = require('http');
http.createServer(function (req, res) {
  res.write("<h1>HttpServer</h1> <p>DiscordBot RinikPlex2.0</p>");
  res.end();
}).listen(0000);
