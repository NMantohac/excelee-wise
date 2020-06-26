const router = require('express').Router();
const messageController = require('../controllers/messageController');

router.post('/email', messageController.sendMessage);

module.exports = router;
