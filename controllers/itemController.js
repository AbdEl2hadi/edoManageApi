const Item = require('../models/Item');

// In-memory item storage (replace with database in production)
let items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1', quantity: 10, price: 99.99 },
  { id: 2, name: 'Item 2', description: 'Description for item 2', quantity: 5, price: 149.99 }
];

let nextItemId = 3;

// Get all items
const getAllItems = (req, res) => {
  try {
    res.json({
      success: true,
      data: items,
      count: items.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get item by ID
const getItemById = (req, res) => {
  try {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }
    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Create new item
const createItem = (req, res) => {
  try {
    const { name, description, quantity, price } = req.body;
    
    // Validate using Item model
    const validation = Item.validate({ name, quantity, price });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        error: validation.errors.join(', ')
      });
    }

    const newItem = {
      id: nextItemId++,
      name,
      description: description || '',
      quantity: quantity || 0,
      price: price || 0
    };

    items.push(newItem);

    res.status(201).json({
      success: true,
      data: newItem,
      message: 'Item created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update item
const updateItem = (req, res) => {
  try {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    const { name, description, quantity, price } = req.body;
    items[itemIndex] = {
      ...items[itemIndex],
      name: name || items[itemIndex].name,
      description: description !== undefined ? description : items[itemIndex].description,
      quantity: quantity !== undefined ? quantity : items[itemIndex].quantity,
      price: price !== undefined ? price : items[itemIndex].price
    };

    res.json({
      success: true,
      data: items[itemIndex],
      message: 'Item updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete item
const deleteItem = (req, res) => {
  try {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Item not found'
      });
    }

    const deletedItem = items.splice(itemIndex, 1)[0];

    res.json({
      success: true,
      data: deletedItem,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
