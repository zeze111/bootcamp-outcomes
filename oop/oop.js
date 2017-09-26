class Person {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

  greeting() {
    return `Hi! I am ${this.name}`;
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
    return `Hi! I am ${this.name}, I am a Lecturer`;
  }

  getCourse() {
    return `${this.course}`;
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
    return `Salary is NGN${this.salary}`;
  }

  //add lecturer to array of benefiters
  qualifyBenefits() {
    if (this.age >= 60) {
      this.benefitLecturers.push(this.name);
      return `${this.name} is qualified for benefits`;
    }
    else {
      return `${this.name} does not qualify, must be 60 and above`;
    }
  }
}


class Tutor extends Lecturer {
  constructor(tName, tGender, tAge, tCourse, semester) {
    super(tName, tGender, tAge, tCourse)
    this.semester = semester;
    this.tSalary;
  }

  greeting() {
    return `Hi! I am ${this.name}, I am tutoring ${this.course} for Semester ${this.semester}`;
  }

  getTutorSemester() {
    return `Semester ${this, semester}`;
  }

  getSalary() {
    super.getSalary();
    this.tSalary = this.salary / 4;
    return `Salary for ${this.name} is NGN${this.tSalary}`
  }
}



class Student extends Person {
  constructor(sName, sGender, sAge, course, status) {
    super(sName, sGender, sAge);
    this.status = status;
    this.course = course;
    this.fees;
  }

  greeting() {
    return `Hi! I am ${this.name}, I am a ${this.course} student`;
  }

  //check status to get fees
  getFees() {
    if (this.status == 'full-time') {
      this.fees = 1000000;
    }
    if (this.status == 'part-time') {
      this.fees = 500000;
    }
    return `School Fees for ${this.name} is NGN${this.fees}`;
  }

  getCourse() {
    return `${this.course}`;
  }

  getStatus() {
    return `${this.status}`;
  }
}

module.exports = {
  Lecturer,
  Tutor,
  Student
};



