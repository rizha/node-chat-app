const expect = require('chai').expect;

const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Jen';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message.createdAt).is.a('number');
    expect(message).to.include({from, text});
  });
});