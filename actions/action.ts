"use server";

import { Booking } from "@/models/booking";
import { BookingsFromDB, IBooking } from "@/types";
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
    return { error };
  }
};

export const cancelBookingAction = async (id: string) => {
  try {
    await connectToDB();

    await Booking.findOneAndUpdate({ id: id }, { canceled: true });
    revalidatePath("/dashboard");
    return { status: "ok" };
  } catch (error) {
    return error;
  }
};

export const deleteBookingAction = async (id: string) => {
  try {
    await connectToDB();

    await Booking.findOneAndDelete({ id: id });

    revalidatePath("/dashboard");
    return { status: "ok" };
  } catch (error) {
    return error;
  }
};

export async function getBookings() {
  try {
    await connectToDB();

    const data: BookingsFromDB[] = await Booking.find({});

    return data;
  } catch (error) {
    return error;
  }
}
