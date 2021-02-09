const User = require(".././models/User");

test('create a new user', () => {
    this.id = user.id
    this.username = user.username
    this.email = user.email
    this.password = user.password
    
    const user = new User( '5', 'akelstrom', 'akelstrom@gmail.com', 'password');

    expect(user.id).toBe('5')
    expect(user.username).toBe('akelstrom')
    expect(user.email).toBe('akelstrom@gmail.com')
    expect(user.password).toBe('password')
});