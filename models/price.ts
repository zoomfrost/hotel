import { Schema, model, models } from "mongoose";

const PricingSchema = new Schema({
  roomType: String,
  price: String,
});

export const Price = models.Price || model("Price", PricingSchema);
