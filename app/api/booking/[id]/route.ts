import { bookedRooms } from "../route";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { canceled } = await request.json();

  bookedRooms.forEach((room) => {
    if (room.id === params.id) {
      room.canceled = canceled;
    }
  });

  return new Response(JSON.stringify(bookedRooms));
}
