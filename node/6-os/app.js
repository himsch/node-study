const os = require('os');

// End Of Line 줄바꿈
console.log(os.EOL === '\n'); // Mac
console.log(os.EOL === '\r\n'); // Window

console.log(os.totalmem()); // 총 메모리
console.log(os.freemem()); // 사용가능한 메모리
console.log(os.type()); // 운영체제 타입
console.log(os.userInfo()); // 사용자 정보
console.log(os.cpus()); // cpu 정보
console.log(os.homedir()); // home 디렉토리
console.log(os.hostname()); // host 이름
