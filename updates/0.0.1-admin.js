const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = (done) => {
	new User.model({
		name: { first: 'admin', last: 'user' },
		email: 'admin@keystonejs.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);
};
