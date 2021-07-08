const express = require('express')
const imageController = require('../controllers/image.controller')
const imageUploader = require('../helpers/image-uploader')
const checkAuth = require('../middleware/check-auth.js');
const router = express.Router()

router.post('/upload', checkAuth, imageUploader.upload.single('image'), imageController.upload);
module.exports = router;