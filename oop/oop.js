class Person {
  constructor(name, gender, age) {
    this.id = 1000;
    id++;
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  greeting() {
    return 'Hi! I\'m ${this.name}';
  }

  getGender() {
    return this.gender;
  }

  getAge() {
    return this.age;
  }
}


class Lecturer extends Person {
  constructor(lName, lGender, lAge, course) {
    super(lName, lGender, lAge);
    this.course = course;
    this.salary;
    this.benefitLecturers = [];
  }

  greeting() {
    return 'Hi! I\'m ${this.name} , I\'m a Lecturer';
  }

  //get salary dependent on course taught
  getSalary() {
    if (this.course == 'law') {
      this.salary = 400000;
    }
    if (this.course == 'technology' || this.course == 'engineering' || this.course == 'science') {
      this.salary = 500000;
    }
    if (this.course == 'medicine') {
      this.salary = 700000;
    }
    return 'Salary is NGN ${this.salary}';
  }

  //add lecturer to array of benefiters
  qualifyBenefits() {
    if (this.age >= 60) {
      this.benefitLecturers.push(this.name);
      return '${this.name} is qualified for benefits';
    }
    else {
      return '${this.name} does not qualify, must be 60 and above';
    }
  }
}


class Tutor extends Lecturer {
  constructor(tName, tGender, tAge, tCourse, semester) {
    super(tName, tGender, tAge, tCourse)
    this.semester = semester;
  }

  greeting() {
    return 'Hi! I\'m ${this.name} , I\'m tutoring ${this.course} for Semester ${this.semester}';
  }

  getTutorSemester() {
    return 'Semester ${this,semester}';
  }

  getSalary() {
    this.salary = super.getSalary() / 4;
  }
}



class Student extends Person {
  constructor(sName, sGender, sAge, course, status) {
    super(sName, sGender, sAge);
    this.stautus = status;
    this.course = course;
    this.fees;
  }

  greeting() {
    return 'Hi! I\'m ${this.name} , I\'m a ${this.course} student';
  }

  //check status, course and get fees
  getFees() {
    if (this.course == 'technology' || this.course == 'engineering' || this.course == 'science' && this.status == 'part-time') {
      this.fees = 300000;
    }
    if (this.course == 'technology' || this.course == 'engineering' || this.course == 'science' && this.status == 'full-time') {
      this.fees = 600000;
    }
    if (this.course == 'law' && this.status == 'part-time') {
      this.fees = 250000;
    }
    if (this.course == 'law' && this.status == 'full-time') {
      this.fees = 250000;
    }
    if (this.course === 'medicine' && this.status == 'part-time') {
      this.fees = 500000;
    }
    if (this.course === 'medicine' || this.status == 'full-time') {
      this.fees = 700000;
    }
    return 'School Fees for ${this.name} is NGN ${this.fees}';
  }

  getCourse() {
    return '${this.course}';
  }

  getStatus() {
    return '${this.status}';
  }
}



