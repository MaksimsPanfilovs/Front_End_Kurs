let x;

setTimeout(() => {
  x = 10;
}, 0);

console.log(x);

// Intervals

const printHello = () => {
  console.log("Hello");
};

const printHelloInterval = setInterval(printHello, 1500);

// остановит повторение через 10 секунд
setTimeout(() => {
  clearInterval(printHelloInterval);
}, 10_000);
