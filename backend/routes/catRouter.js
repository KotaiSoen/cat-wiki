const express = require('express');
const router = express.Router();
const catController = require('../controllers/catController');

router.get('/breeds', catController.cat_all_breeds);
router.get('/search', catController.cat_one_breed);
router.get('/images/:id', catController.cat_one_image);
router.get('/top-ten', catController.top_ten_breeds );
router.get('/random-images', catController.random_images_cats);

module.exports = router;