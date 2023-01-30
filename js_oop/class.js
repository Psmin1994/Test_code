// JS에서의 클래스
// ES6 이후 등장

class Person {
  constructor(name, f, s) {
    this.name = name;
    this.first = f;
    this.second = s;
  }

  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};

var lee = new Person("kim", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
