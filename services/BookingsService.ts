import { useHttp } from "@/hooks/http.hook";
import { IBooking, activeBooking } from "@/types";

const useBookingService = () => {
  const { loading, request } = useHttp();

  const _apiBase = "https://localhost:3000/api";

  const getAllBookings = async (): Promise<IBooking[]> => {
    const res = await request({ url: `${_apiBase}/booking` });
    return res;
  };

  const getAllActiveBookings = async () => {
    const res = await getAllBookings();
    const transformed: activeBooking[] = res.map((item: activeBooking) => {
      return {
        name: item.name,
        checkIn: item.checkIn,
        phone: item.phone,
        room: item.room,
        date: item.date,
      };
    });

    return transformed;
  };

  return {
    loading,
    getAllBookings,
    getAllActiveBookings,
  };
};
