export async function GET(request: Request) {
  const bookedRooms = [
    {
      name: "Alex",
      phone: "7932323923",
      room: "3",
      date: "12.12.2024",
    },
    {
      name: "Alex",
      phone: "7932323923",
      room: "3",
      date: "12.12.2024",
    },
    {
      name: "Alex",
      phone: "7932323923",
      room: "3",
      date: "12.12.2024",
    },
    {
      name: "Alex",
      phone: "7932323923",
      room: "3",
      date: "12.12.2024",
    },
  ];
  return new Response(JSON.stringify(bookedRooms));
}
