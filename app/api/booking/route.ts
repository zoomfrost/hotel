import { IBooking } from "@/types";

let bookedRooms: IBooking[] = [
  {
    name: "Alex",
    canceled: false,
    checkIn: "15:00",
    date: "12.02.2024",
    phone: "8911902632",
    room: "triple",
  },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(bookedRooms));
}

export async function POST(request: Request) {
  const { name, phone, room, date, checkIn, canceled } = await request.json();
  bookedRooms = [
    ...bookedRooms,
    { name, phone, room, date, checkIn, canceled },
  ];
}
