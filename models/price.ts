import { Schema, model, models } from "mongoose";

const PricingSchema = new Schema({
  roomType: String,
  dates: { from: Date, to: Date, price: String },
});

export const Price = models.Price || model("Price", PricingSchema);
