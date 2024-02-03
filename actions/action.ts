"use server";

import { request } from "@/hooks/http.hook";
import { revalidatePath } from "next/cache";

export const addBooking = async (formData: any) => {
  const res = await request({
    url: "https://hotel-five-umber.vercel.app/api/booking",
    method: "POST",
    body: JSON.stringify(formData),
  });

  revalidatePath("/dashboard");
};

export const cancelBookingAction = async (id: string) => {
  const res = await request({
    url: `https://hotel-five-umber.vercel.app/api/booking?query=${id}`,
    method: "PATCH",
    body: JSON.stringify({ canceled: true }),
  });

  revalidatePath("/dashboard");
};
