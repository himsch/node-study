const fs = require("fs");

// stream 조금조금씩 읽어오기 때문에, Event 베이스이다.
const data = [];
fs.createReadStream("./file.txt", {
  highWaterMark: 8, // 한번에 얼마만큼 데이터를 읽을지, 기본값 64kb
  encoding: "utf-8",
})
  .once("data", (chunk) => {
    data.push(chunk);
    console.count("data");
  })
  .on("end", () => {
    console.log(data.join(""));
  })
  .on("error", (error) => {
    console.error(error);
  });
