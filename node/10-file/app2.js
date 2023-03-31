const fs = require('fs').promises;

// read a file
fs.readFile('./text.txt', 'utf-8') // 두번째 인자에 option을 설정할 수 있다.
  .then(data => console.log(data))
  .catch(console.error);

// writing a file
// 비동기 API 이므로 어떤 함수가 먼저 실행될지는 모른다. (순서보장 X)
// 순차적으로 하려면 then 안에서 처리.
fs.writeFile('./file.txt', 'Hello, Dream Coders!!') //
  .catch(console.error);

fs.writeFile('./file.txt', 'Yo! Hello, Dream Coders!!') // 기존 파일이 있다면 overwrite.
  .catch(console.error);

fs.appendFile('./file.txt', 'append, Hello, Dream Coders!!') // 기존 파일이 있으면 추가, 없으면 생성.
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') // 비동기 이므로 내용을 write하기 전에 copy가 되면 내용이 비어있을 수 있다.
  .catch(console.error);

// folder
fs.mkdir('sub-folder') // 현재 경로에서 서브폴더 생성.
  .catch(console.error);

fs.readdir('./') // 인자(./)경로에 있는 모든 파일,폴더를 읽는다.
  .then(console.log)
  .catch(console.error);
