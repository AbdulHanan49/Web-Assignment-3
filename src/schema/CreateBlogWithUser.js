const moongose = require('mongoose');
const Schema = moongose.Schema;

const blog = new Schema({
  user: String,
  title: String,
  content: String,
  image: String,
  comments: [{ type: String }],
});

const blogdata = moongose.model('blogdata',blog);
module.exports = blogdata;

