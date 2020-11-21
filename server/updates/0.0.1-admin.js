const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: 'admin',
		email: 'admin@gmail.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);
};
