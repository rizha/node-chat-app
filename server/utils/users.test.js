const expect = require('chai').expect;

let { Users } = require('./users');

describe('Users', () => {
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'John',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Ellie',
      room: 'Music Course'
    }]
  });

  it('should add new users', () => {
    let users = new Users();

    let user = {
      id: '123',
      name: 'John',
      room: 'The office Fans'
    };

    let resUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).to.deep.equal([user]);
  });

  it('should remove a user', () => {
    let userId = '1';
    let user = users.removeUser(userId);

    expect(user.id).to.be.equal(userId);
    expect(users.users.length).to.be.equal(2);
  });

  it('should not remove user', () => {
    let userId = '4';
    let user = users.removeUser(userId);

    expect(user).to.not.exist;
    expect(users.users.length).to.be.equal(3);
  });

  it('should find user', () => {
    let userId = '2';
    let user = users.getUser(userId);

    expect(user.id).to.be.equal(userId);
  });

  it('should not find user', () => {
    let userId = '4';
    let user = users.getUser(userId);

    expect(user).to.not.exist;
  });

  it('should return names for Node course', () => {
    let userList = users.getUserList('Node Course');
    
    expect(userList).to.deep.equal(['Mike']);
  });

  it('should return names for React course', () => {
    let userList = users.getUserList('React Course');
    
    expect(userList).to.deep.equal(['John']);
  });

})