const expect = require('chai').expect;

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).is.a('number');
    expect(message).to.include({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'John';
    let latitude = '15';
    let longitude = '10';
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`

    let message = generateLocationMessage(from, latitude, longitude);

    expect(message).to.include({from, url});
  });
});