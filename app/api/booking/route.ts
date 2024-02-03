import { IBooking } from "@/types";
import { NextRequest } from "next/server";

let bookedRooms: IBooking[] = [
  {
    name: "Alex",
    canceled: false,
    checkIn: "15:00",
    dateFrom: new Date("01.12.2024"),
    dateTo: new Date("01.14.2024"),
    phone: "8911902632",
    room: "triple",
    id: "1",
    created: new Date("01.14.2024"),
  },
  {
    name: "Bob",
    canceled: false,
    checkIn: "15:00",
    dateFrom: new Date("02.16.2024"),
    dateTo: new Date("02.19.2024"),
    phone: "8911902632",
    room: "triple",
    id: "2",
    created: new Date("01.14.2024"),
  },
  {
    name: "Alex",
    canceled: false,
    checkIn: "15:00",
    dateFrom: new Date("03.16.2024"),
    dateTo: new Date("03.19.2024"),
    phone: "8911902632",
    room: "triple",
    id: "3",
    created: new Date("01.14.2024"),
  },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(bookedRooms));
}

export async function PATCH(request: NextRequest) {
  const { canceled } = await request.json();
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  bookedRooms.forEach((room) => {
    if (room.id === query) {
      room.canceled = canceled;
    }
  });

  return new Response(JSON.stringify(bookedRooms));
}

export async function POST(request: Request) {
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
  } = await request.json();
  bookedRooms = [
    ...bookedRooms,
    { name, phone, room, dateFrom, dateTo, checkIn, canceled, id, created },
  ];

  return new Response(JSON.stringify(request));
}
