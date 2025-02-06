var http = require('http');

http.createServer(async function (req, res) {
  const { upperCase } = await import('upper-case'); // Use dynamic import here
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(upperCase("Hello Worldee!"));
  res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080/");