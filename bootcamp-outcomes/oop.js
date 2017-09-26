Person = function (name, gender, age) {
  this.id = 1000;
  id++;
  this.name = name;
  this.gender = gender;
  this.age = age;

  Person.prototype = {
    greeting: function () {
      alert('Hi! I\'m ' + this.name + '.');
    },

    get_gender: function () {
      return this.gender;
    },

    get_age: function () {
      return this.age;
    }
  }
}



Lecturer = function (name, gender, age, course) {
  Person.call(this, name, gender, age);
  this.course = course;

  Lecturer.prototype = Object.create(Person.prototype);
  Lecturer.prototype.constructor = Lecturer;

  Lecturer.prototype = {
    greeting: function () {

    },

    get_salary: function () {

    },

    qualify_benefits: function () {
      //add to array of benefiters
    }
  }
}


Student = function (name, gender, age, status) {
  Person.call(this, name, gender, age);
  this.stautus = status;

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  Lecturer.prototype = {
    greeting: function () {

    },

    get_fees: function () {
      //check status and get fees
    },

    get_course: function () {
      //check age and asign course
    }
  }





}
