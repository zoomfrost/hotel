import { Schema, model, models } from "mongoose";

const PricingSchema = new Schema({
  roomType: String,
  dates: { interval: { start: Date, end: Date }, price: String },
});

export const Price = models.Price || model("Price", PricingSchema);
