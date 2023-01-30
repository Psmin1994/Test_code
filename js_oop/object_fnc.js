var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };

function sum() {
  return this.first + this.second;
}

// call 메소드
console.log(sum.call(kim)); // sum 함수의 this는 kim 즉, kim의 메소드화
console.log(sum.call(lee)); // sum 함수의 this는 lee 즉, lee의 메소드화

// 두번째 인자 - 호출 함수의 인자 값
function sum2(prefix) {
  return prefix + (this.first + this.second);
}

console.log(sum2.call(kim, "=> "));
console.log(sum2.call(lee, ": "));

// bind 메소드
