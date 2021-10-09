class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    if(typeof num !== "number") {
      console.log('Invalid input: numberOfStudents must be set to a Number') 
      } else {
          this._numberOfStudents = num;
      }
  }

  quickFacts() {
    return `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`
  }

  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}
