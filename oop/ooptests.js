const chai = require('chai');
const app = require('./oop.js');
const Lecturer = app.Lecturer;
const Student = app.Student;
const Tutor = app.Tutor;
const assert = chai.assert;

const lecturer1 = new Lecturer('Helen', 'Female', 60, 'engineering');
const student1 = new Student('Omono', 'Female', 23, 'law', 'Part-time');
const tutor1 = new Tutor('Ehi', 'Male', 30, 'science', 'B');


describe('OOP', () => {
  describe('Object Initialisation and Polymorphism', () => {
    it('should greet as Lecturer', () => {
      const testLecturer = new Lecturer('Eseosa', 'Female', 35, 'Medicine');
      assert.equal(testLecturer.greeting(), 'Hi! I am Eseosa, I am a Lecturer');
    });
    it('should greet as Student', () => {
      const testStudent = new Student('Osaze', 'Female', 19, 'Technology', 'full-time');
      assert.equal(testStudent.greeting(), 'Hi! I am Osaze, I am a Technology student');
    });
    it('should greet as Tutor', () => {
      const testTutor = new Tutor('Dave', 'Male', 24, 'Law', 'A');
      assert.equal(testTutor.greeting(), 'Hi! I am Dave, I am tutoring Law for Semester A');
    });
  });
  describe('Query handling', () => {
    it('should return age of lecturer from method', () => {
      assert.equal(lecturer1.getAge(), 60);
    });
    it('check if lecturer is qualified for benefits', () => {
      assert.equal(lecturer1.qualifyBenefits(), 'Helen is qualified for benefits');
    });
    it('should return gender of tutor from method', () => {
      assert.equal(tutor1.getGender(), 'Male');
    });
    it('should return name of student', () => {
      assert.equal(student1.name, 'Omono');
    });
    it('should return the salary for lecturer', () => {
      assert.equal(lecturer1.getSalary(), 'Salary is NGN500000');
    });
    it('should return school fees of student', () => {
      assert.equal(student1.getFees(), 'School Fees for Omono is NGN500000');
    });
    it('should return new value of salary method for tutor', () => {
      assert.equal(tutor1.getSalary(), 'Salary for Ehi is NGN125000');
    });
  });
  describe('Reassignment handling', () => {
    it('should change lecturer course', () => {
      lecturer1.course = 'science';
      assert.equal(lecturer1.getCourse(), 'science');
    });
    it('should change student status', () => {
      student1.status = 'full-time';
      assert.equal(student1.getStatus(), 'full-time');
    });
  });
});
