"use server";

import { Booking } from "@/models/booking";
import { Price } from "@/models/price";
import { BookingsFromDB, IBooking, IPricesFromDB } from "@/types";
import { connectToDB } from "@/utils/database";
import {
  add,
  areIntervalsOverlapping,
  getOverlappingDaysInIntervals,
  isFuture,
} from "date-fns";
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
    const newBooking = await Booking.create({
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

    if (newBooking) revalidatePath("/dashboard");
  } catch (error) {
    return { error };
  }
};

export const cancelBookingAction = async (id: string) => {
  try {
    await connectToDB();

    const canceledBooking = await Booking.findOneAndUpdate(
      { id: id },
      { canceled: true }
    );
    if (canceledBooking) revalidatePath("/dashboard");
    return { status: "ok" };
  } catch (error) {
    return error;
  }
};

export const deleteBookingAction = async (id: string) => {
  try {
    await connectToDB();

    const deletedBooking = await Booking.findOneAndDelete({ id: id });

    if (deletedBooking) revalidatePath("/dashboard");
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
      dates: {
        interval: { start: dateFrom, end: add(dateTo, { days: 1 }) },
        price,
      },
    });
    await newPrice.save();

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

export async function deletePrices(roomType: string) {
  await connectToDB();
  const deleted = await Price.deleteMany({ roomType: roomType });
  return deleted;
}

export async function getPricesPerDay(): Promise<IPricesFromDB[]> {
  await connectToDB();
  const newPrices: IPricesFromDB[] = await Price.find();
  return newPrices.filter((price) => isFuture(price.dates.interval.end));
}

interface IReturnCurrentRoomPrice {
  price: number;
  days: number;
}

export async function getCurrentRoomPricePerDay(
  roomType: string,
  dates: { start: Date; end: Date }
): Promise<IReturnCurrentRoomPrice[]> {
  await connectToDB();
  const newPrices: IPricesFromDB[] = await Price.find({ roomType: roomType });

  return newPrices
    .filter((item) =>
      areIntervalsOverlapping(dates, item.dates.interval, { inclusive: true })
    )
    .map((item, i) => {
      return {
        price: +item.dates.price,
        days: getOverlappingDaysInIntervals(dates, item.dates.interval),
      };
    });
}
