import { IBooking } from "@/types";

let bookedRooms: IBooking[] = [
  {
    name: "Alex",
    canceled: true,
    checkIn: "15:00",
    dateFrom: new Date("01.12.2024"),
    dateTo: new Date("01.14.2024"),
    phone: "8911902632",
    room: "triple",
    id: "1",
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
  },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(bookedRooms));
}

export async function POST(request: Request) {
  const { name, phone, room, dateFrom, dateTo, checkIn, canceled, id } =
    await request.json();
  bookedRooms = [
    ...bookedRooms,
    { name, phone, room, dateFrom, dateTo, checkIn, canceled, id },
  ];

  return new Response(JSON.stringify(request));
}
