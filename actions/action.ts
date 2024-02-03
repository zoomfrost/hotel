"use server";

import { Booking } from "@/models/booking";
import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";

export const addBooking = async (formData: any) => {
  const {
    name,
    phone,
    room,
    dateFrom,
    dateTo,
    checkIn,
    canceled,
    id,
    created,
  } = await formData;

  try {
    await connectToDB();
    const newBooking = new Booking({
      name,
      phone,
      room,
      dateFrom,
      dateTo,
      checkIn,
      canceled,
      id,
      created,
    });

    await newBooking.save();
    revalidatePath("/dashboard");
  } catch (error) {
    return new Response("Failed to create a new booking");
  }
};

export const cancelBookingAction = async (id: string) => {
  try {
    await connectToDB();

    // await Booking.findOneAndDelete({ id: id });
    await Booking.findOneAndUpdate({ id: id }, { canceled: true });
    revalidatePath("/dashboard");
  } catch (error) {
    return error;
  }
};
