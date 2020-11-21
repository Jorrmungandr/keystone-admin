const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'admin',
		email: 'admin1@gmail.com',
		password: 'admin1',
		canAccessKeystone: true,
	}).save(done);
};
