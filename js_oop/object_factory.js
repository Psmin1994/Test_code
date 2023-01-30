// 생성자 함수 constructor function
function Person(name, f, s, t) {
  this.name = name;
  this.first = f;
  this.second = s;
  this.third = t;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}

var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
