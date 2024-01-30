export async function GET(request: Request) {
  const bookedRooms = [
    {
      name: "Alex",
      phone: "7932323923",
      room: "triple",
      date: "12.05.2024",
      checkIn: "",
      canceled: false,
    },
    {
      name: "Bob",
      phone: "7932323923",
      room: "triple",
      date: "12.05.2024",
      checkIn: "",
      canceled: false,
    },
    {
      name: "Carol",
      phone: "7932323923",
      room: "double",
      date: "12.05.2024",
      checkIn: "",
      canceled: true,
    },
  ];
  return new Response(JSON.stringify(bookedRooms));
}
