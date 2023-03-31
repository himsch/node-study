const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");
writeStream.on("finish", () => {
  console.log("finished!!");
});

console.log(writeStream.write("hello2!"));
writeStream.write("world2!");
writeStream.end(); // 끝을 명시해야한다.
