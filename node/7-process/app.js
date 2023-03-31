const process = require('process');

console.log(process.execPath); // 현재 실행 되고있는 노드의 위치 (설치된 위치)
console.log(process.version); // 노드의 버전
console.log(process.pid); // 프로세스 아이디
console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform); // 플랫폼에 대한 정보들
console.log(process.env); // 현재 컴퓨터에 저장된 '환경변수'에 대한 모든 정보
console.log(process.uptime()); // 얼마나 실행되고 있었는지
console.log(process.cwd()); // 현재 실행하고 있는 노드의 경로 (실행된 위치)
console.log(process.cpuUsage()); // CPU 사용량

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

for (let i = 0; i < 100000; i++) {
  console.log('for loop');
}
