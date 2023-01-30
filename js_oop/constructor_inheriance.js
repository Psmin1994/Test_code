function Person(name, f, s) {
  this.name = name;
  this.first = f;
  this.second = s;
}
Person.prototype.sum = function () {
  return this.first + this.second;
};

function PersonPlus(name, f, s, t) {
  Person.call(this, name, f, s); // this 는 만들어질 객체
  this.third = t;
}

// PersonPlus.prototype.__proto__ = Person.prototype;
// 위 코드는 표준이 아니다.

PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;
// 새로 avg 메소드를 추가를 위에서 실행시 create할때 사라진다.

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

var kim = new PersonPlus("kim", 10, 20, 30);

console.log("kim.sum() : ", kim.sum());
console.log("kim.avg() : ", kim.avg());
console.log("kim.constructor : ", kim.constructor);

// 결론 ES6 사용 가능할 때는 Class를 사용하자..
// 개념은 잡아놓자!
