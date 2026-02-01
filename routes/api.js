const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');

// User routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Item routes
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItemById);
router.post('/items', itemController.createItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
