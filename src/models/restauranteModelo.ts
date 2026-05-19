import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//El restaurante se asocia a un usuario que es el administrador del restaurante mediante el id

const restauranteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  restaurantName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  estimatedDeliveryTime: {
    type: Number,
    required: true,
  },
  cuisines: [
    {
      type: String,
      required: true,
    },
  ],
  menuItems: {
    type: [menuItemSchema],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Restaurante", restauranteSchema);
