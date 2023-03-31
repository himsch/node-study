const EventEmitter = require("events");
const emitter = new EventEmitter();

// 'ellie' 라는 이벤트가 발생하면, 콜백함수를 실행.
const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("ellie", callback1);
emitter.on("ellie", (args) => {
  console.log("second callback - ", args);
});

// emit 사용해 ellie 라는 '이벤트 발생', 등록한 순차적으로 이벤트가 실행된다.
emitter.emit("ellie", { message: 1 }); // first callback -  { message: 1 } second callback -  { message: 1 }
emitter.emit("ellie", { message: 2 });
emitter.removeListener("ellie", callback1);
emitter.emit("ellie", { message: 3 });
