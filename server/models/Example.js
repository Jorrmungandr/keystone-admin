const keystone = require('keystone');

const { Types } = keystone.Field;

const Example = new keystone.List('Examples');

Example.add({
  name: { type: Types.Text, required: true, initial: true, index: true },
  image: { type: Types.CloudinaryImages, require: true, initial: true, },
});

Example.register();