import { createServer } from "http";
import { readFile } from "fs/promises";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  readFile("index.html")
    .then((contents) => {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(contents);
    })
    .catch((err) => {
      res.writeHead(500);
      res.end(err);
      return;
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
