const posts  =  require('../posts');
 
 postController = (req, res) => {
    res.render('index', { title: 'Página de inicio', posts });
  }

  module.exports = { postController}