const expect = require('chai').expect;

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let res = isRealString(98);
    expect(res).to.be.false;
  });

  it('should reject with only spaces', () => {
    let res = isRealString('     ');
    expect(res).to.be.false;
  });

  it('should allow string with non-space characters', () => {
    let res = isRealString('yeay');
    expect(res).to.be.true;
  });
});