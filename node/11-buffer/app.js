// Fixed-size chuck of memory
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi', 'utf8'); // 두번째 인자로 인코딩을 전달할 수 있다. 기본값은 utf-8
console.log(buf); // 유니코드 형태로 출력된다.
console.log(buf.length);
console.log(buf[0]); // 배열로 접근하면 ASCII 형태로 출력된다.
console.log(buf[1]);
console.log(buf.toString()); // 우리가 친숙한 문자열 형태로 변환.
console.log(buf.toString('utf-8')); // 인코딩을 전달할 수 있다. 기본값은 utf-8

// create
// alloc = allocation(할당량) 약자
const buf2 = Buffer.alloc(2); // 사이즈가 '2'개인 버퍼를 만든다. 사용가능한 메모리(덩어리)를 찾아서 '초기화' 시켜준다.
const buf3 = Buffer.allocUnsafe(2); // Fast, 초기화를 하지않음, 기존에 다른 데이터가 들어있으나 사용되지 않는 메모리일 수 있다. (데이터가 들어있을 수 있음)
buf2[0] = 72; // ASCII 할당
buf2[1] = 105;
buf2.copy(buf3); // buf2 데이터를 buf3으로 복사.
console.log(buf2.toString());
console.log(buf3.toString());

// concat
// 여러가지 버퍼를 모을 수 있다.
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
