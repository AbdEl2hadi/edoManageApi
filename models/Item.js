class Item {
  constructor(id, name, description = '', quantity = 0, price = 0) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Validate item data
  static validate(itemData) {
    const errors = [];

    if (!itemData.name || itemData.name.trim().length === 0) {
      errors.push('Name is required');
    }

    if (itemData.quantity !== undefined && itemData.quantity < 0) {
      errors.push('Quantity cannot be negative');
    }

    if (itemData.price !== undefined && itemData.price < 0) {
      errors.push('Price cannot be negative');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Calculate total value
  getTotalValue() {
    return this.quantity * this.price;
  }

  // Convert to JSON representation
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      quantity: this.quantity,
      price: this.price,
      totalValue: this.getTotalValue(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = Item;
