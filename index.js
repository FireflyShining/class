class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }

  set salary(value) {
    this._salary = value;
  }
  get salary() {
    return this._salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  get proSalary() {
    return super.salary * 3;
  }
}

const user = new Programmer("Nick", "20", "3000", "eu");
const user1 = new Programmer("Mike", "27", "5700", "ua");
const user2 = new Programmer("Jane", "23", "3700", "lt");

console.log(user);
console.log(user1);
console.log(user2);
