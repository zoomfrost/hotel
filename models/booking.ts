import { Schema, model, models } from "mongoose";

const BookingSchema = new Schema({
  name: String,
  phone: String,
  room: String,
  dateFrom: Date,
  dateTo: Date,
  checkIn: String,
  canceled: Boolean,
  id: String,
  created: Date,
});

export const Booking = models.Booking || model("Booking", BookingSchema);
