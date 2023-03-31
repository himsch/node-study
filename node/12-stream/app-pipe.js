const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./file.txt");
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream("./file4.zip");
// 스트림 데이터를 읽어오면서 그대로 연결하는 것.
const piping = readStream.pipe(zlibStream).pipe(writeStream); // readStream 데이터를 받아서, writeStream 으로 연결.
piping.on("finish", () => {
  console.log("done!!!!");
});

const http = require("http");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./file.txt");
  stream.pipe(res);
  // fs.readFile("file.txt", (err, data) => {
  //   res.end(data);
  // });
});
server.listen(3000);
