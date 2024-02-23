"use server";

import { Booking } from "@/models/booking";
import { Price } from "@/models/price";
import { BookingsFromDB, IBooking, IPricesFromDB } from "@/types";
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
    comment,
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
      comment,
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

export async function getBookings(roomType: string) {
  try {
    await connectToDB();

    const data: BookingsFromDB[] = await Booking.find({
      room: roomType,
      canceled: false,
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function createPrice(formData: {
  room: string;
  price: string;
  dateFrom: Date;
  dateTo: Date;
}) {
  const { room, price, dateFrom, dateTo } = await formData;
  try {
    await connectToDB();
    const newPrice = new Price({
      roomType: room,
      dates: { from: dateFrom, to: dateTo, price },
    });
    await newPrice.save();
    console.log(newPrice);

    // if (newPrices.length !== 0) {
    //   await Price.findOneAndUpdate({ roomType: room }, { price: price });
    // } else {
    //   const newPrice = new Price({
    //     roomType: room,
    //     price: price,
    //   });
    //   await newPrice.save();
    // }
    // return { status: "ok" };
  } catch (error) {
    return error;
  }
}

export async function deletePrices() {
  try {
    await connectToDB();
    const deleted = await Price.deleteMany();
    return deleted;
  } catch (error) {
    return error;
  }
}

export async function getPricesPerDay(): Promise<IPricesFromDB[]> {
  await connectToDB();
  const newPrices: IPricesFromDB[] = await Price.find();
  console.log(newPrices);
  return newPrices;
}

export async function getCurrentRoomPricePerDay(roomType: string) {
  try {
    await connectToDB();
    const newPrices: IPricesFromDB[] = await Price.find({ roomType: roomType });
    return newPrices.map((item) => {
      return +item.dates.price;
    });
  } catch (error) {
    return error;
  }
}
