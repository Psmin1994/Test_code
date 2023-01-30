// 프로토 타입

function Person(name, f, s, t) {
  this.name = name;
  this.first = f;
  this.second = s;
}

Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
var lee = new Person("kim", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
