const chai = require('chai');
const app = require('./index');
const aritGeo = app.aritGeo;
const assert = chai.assert;
chai.should();
const expect = chai.expect;

describe('aritGeo', function () {
  it('should check that arithmetic is true', function () {
    const list = [2, 4, 6, 8, 10];
    aritGeo(list);
    assert.equal(aritGeo(list), 'arithmetic');
  });
  it('should check that geometric is true', function () {
    const list = [2, 4, 8, 16, 32];
    aritGeo(list);
    assert.equal(aritGeo(list), 'geometric');
  });
  it('should check that array is not empty', function () {
    const list = [];
    app.aritGeo(list);
    assert.equal(aritGeo(list), 0);
  });
  it('should check that parameter does not start with 0', function () {
    const list = [0, 2, 4, 6];
    aritGeo(list);
    assert.equal(aritGeo(list), 0)
  });
  it('should check that is not geometric/arithmetic', function () {
    const list = [1, 4, 7, 16, 32];
    aritGeo(list);
    assert.equal(aritGeo(list), -1);
  });
  it('should check that arithmetic is true', function () {
    const list = [4, 8, 12, 16, 20];
    aritGeo(list);
    assert.equal(aritGeo(list), 'arithmetic');
  });
  it('should check that geometric is true', function () {
    const list = [3, 9, 27, 81];
    aritGeo(list);
    assert.equal(aritGeo(list), 'geometric');
  });
  it('should check that that is not geometric/arithmetic', function () {
    const list = [3, 9, 21, 63];
    aritGeo(list);
    assert.equal(aritGeo(list), -1);
  });
  it('should check that array is not string', function () {
    const list = [2, 4, '9', 16, 32];
    aritGeo(list);
    assert.equal(aritGeo(list), 'please input an array of numbers');
  });
  it('should check that parameter does not start with 0', function () {
    const list = [0, 3, 9, 27, 81];
    aritGeo(list);
    assert.equal(aritGeo(list), 0);
  });
});
