const keystone = require('keystone');

const { Types } = keystone.Field;

const Post = new keystone.List('Posts');

Post.add({
  name: {
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  image: {
    type: Types.CloudinaryImages,
    require: true,
  },
});

Post.register();