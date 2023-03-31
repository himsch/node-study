const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 현재 실행되고있는 경로
console.log(__filename); // 현재 실행되고있는 경로와 파일의 이름까지

console.log(path.sep); // 경로 구분자는 무엇인지
console.log(path.delimiter); // 환경변수 구분자는 무엇인지

// basename
console.log(path.basename(__filename)); // 파일명만 가져오기
console.log(path.basename(__filename, '.js')); // 파일명에서 확장자 제거 후 가져오기

// dirname
console.log(path.dirname(__filename)); // 현재 파일의 디렉토리명 가져오기

// extension
console.log(path.extname(__filename)); // 현재 파일의 확장자명 가져오기

// parse
const parsed = path.parse(__filename); // 현재 파일의 경로를 분리할 수 있다.
console.log(parsed); // object 형태로 출력
parsed.root; // object이므로 키값을 이용해 사용할 수 있다.
parsed.name;

const str = path.format(parsed); // parsed된 경로를 다시 string 형태로 변환.
console.log(str);

// isAbsolute 절대 경로인지 확인하는 방법
console.log('isAbsolute?', path.isAbsolute(__dirname)); // true
console.log('isAbsolute?', path.isAbsolute('../')); // false

// normalize 경로에서 에러가있을때 알아서 고쳐준다.
console.log(path.normalize('./folder/////sub')); // folder/sub

// join 현재 디렉토리에 서브 폴더를 만들고 싶을때
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
