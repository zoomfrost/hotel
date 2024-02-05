"use server";

import { Booking } from "@/models/booking";
import { IBooking } from "@/types";
import { connectToDB } from "@/utils/database";
import { revalidatePath } from "next/cache";

export const addBooking = async (formData: IBooking) => {
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
  // const name = formData.get("name");
  // const phone = formData.get("phone");
  // const room = formData.get("room");
  // const dateFrom = formData.get("dateFrom");
  // const dateTo = formData.get("dateTo");
  // const checkIn = formData.get("checkIn");
  // const canceled = formData.get("canceled");
  // const id = formData.get("id");
  // const created = formData.get("created");

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

    await Booking.findOneAndDelete({ id: id });
    // await Booking.findOneAndUpdate({ id: id }, { canceled: true });
    revalidatePath("/dashboard");
  } catch (error) {
    return error;
  }
};
