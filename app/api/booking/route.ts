import { IBooking } from "@/types";

let bookedRooms: IBooking[] = [
  {
    name: "Alex",
    canceled: false,
    checkIn: "15:00",
    dateFrom: new Date("01.12.2024"),
    dateTo: new Date("01.14.2024"),
    phone: "8911902632",
    room: "triple",
  },
  {
    name: "Alex",
    canceled: false,
    checkIn: "15:00",
    dateFrom: new Date("03.16.2024"),
    dateTo: new Date("03.19.2024"),
    phone: "8911902632",
    room: "triple",
  },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(bookedRooms));
}

export async function POST(request: Request) {
  const { name, phone, room, dateFrom, dateTo, checkIn, canceled } =
    await request.json();
  bookedRooms = [
    ...bookedRooms,
    { name, phone, room, dateFrom, dateTo, checkIn, canceled },
  ];

  return new Response(JSON.stringify(request));
}
