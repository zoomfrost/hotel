"use server";

import { request } from "@/hooks/http.hook";
import { revalidatePath } from "next/cache";

export const addBooking = async (formData: any) => {
  const res = await request({
    url: "http://localhost:3000/api/booking",
    method: "POST",
    body: JSON.stringify(formData),
  });

  revalidatePath("/dashboard");
};

export const cancelBookingAction = async (id: string) => {
  const res = await request({
    url: `http://localhost:3000/api/booking/${id}`,
    method: "PATCH",
    body: JSON.stringify({ canceled: true }),
  });

  revalidatePath("/dashboard");
};
