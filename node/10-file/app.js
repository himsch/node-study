const fs = require('fs');

// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { }
// promises.rename().then().catch()

try {
  fs.renameSync('./text.txt', './text-new.txt'); // 경로의 기준(./)은 node(어플리케이션)를 실행하고 있는 위치.
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', error => {
  console.log(error);
});
console.log('hello');

// 콜백함수로 전달하기 싫을때 사용.
fs.promises
  .rename('./text2.txt', './text2-new.txt') //
  .catch(console.error);
