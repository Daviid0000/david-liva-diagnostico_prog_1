const { Router } = require('express');

const router = Router();

const { postController } = require('../controller/post.controllers');


router.get('/', postController);

module.exports = router