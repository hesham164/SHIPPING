const mongoose = require(mongoose);

const ShippingSchema = new mongoose.Schema(
  {
    id { type String },
    status {type String}
  }
);

module.exports = mongoose.model(Shipping, ShippingSchema);