const keystone = require('keystone');
const Types = keystone.Field.Types;
const path = require('path');

const Recipe = new keystone.List('Recipe', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-createdAt',
});

const recipeImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./public/uploads/files'),
    generateFilename: function (file, index) {
      return file.originalname;
    },
    whenExists: 'error',
    publicPath: '/public/uploads/files',
  },
});

Recipe.add({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft'
  },
  author: {
    type: Types.Relationship,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  publishedAt: Date,
  image: {
    type: Types.File,
    storage: recipeImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg',
  },
  ingredientList: {
    type: Types.Html,
    wysiwyg: true,
    height: 150
  },
  cookingInstructions: {
    type: Types.Html,
    wysiwyg: true,
    height: 500
  }
});

// Setting the default order of the columns on the admin tab
Recipe.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Recipe.register();