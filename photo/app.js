const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

// node song.js test1 test2
// process.argv[2] = test1

/**
 * 1. 인자값에 들어온 폴더 읽기.
 * 2. 파일 확장별로 나누기.
 */

const targetPath = path.join(os.homedir(), process.argv[2]);

fs.promises
  .readdir(targetPath) //
  .then((list) => {
    list.forEach((file) => {
      switch (path.extname(file)) {
        case ".mp4":
        case ".mov":
          moveFile(file, "video");
          break;
        case ".png":
        case ".aae":
          moveFile(file, "captured");
          break;
        case ".jpg":
          if (file.includes("E")) {
            moveFile(file, "duplicated");
          }
          break;
      }
    });
  })
  .catch((error) => console.log("해당 폴더가 존재하지 않습니다."));

function moveFile(file, dirname) {
  const targetDir = path.join(targetPath, dirname);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const oldPath = path.join(targetPath, file);
  const newPath = path.join(targetDir, file);
  fs.rename(oldPath, newPath, (error) => {
    if (error) {
      console.log(`Error filename: ${file}`);
    }
    console.log(`move ${file} to ${dirname}`);
  });
}
