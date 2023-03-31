console.log('logging...');
console.clear();

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, 'not same!'); // 참이 아닌 경우에만 로그 출력
console.assert(2 === 2, 'same!');

// print object
const student = { name: 'song', age: 20, company: { name: 'DC' } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// measuring time 성능확인.
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
function a() {
  console.count('a function');
}
a();
console.countReset('a function');
a();

// trace 해당함수가 어떻게 호출되었는지? 누가 함수를 호출했는지 파악가능.
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}
f1();
