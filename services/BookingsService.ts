import { useHttp } from "@/hooks/http.hook";
import { IBooking, ActiveBooking } from "@/types";

const useBookingService = () => {
  const { loading, request } = useHttp();

  const _apiBase = "https://hotel-five-umber.vercel.app/api";

  const getAllBookings = async (): Promise<IBooking[]> => {
    const res = await request({ url: `${_apiBase}/booking` });
    return res;
  };

  const getAllActiveBookings = async () => {
    const res = await getAllBookings();
    const transformed: ActiveBooking[] = res
      .filter((item) => !item.canceled)
      .map((item: ActiveBooking) => {
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

  const postBooking = async (data: IBooking) => {
    const res = await request({
      url: `${_apiBase}/booking`,
      method: "POST",
      body: JSON.stringify(data),
    });
    return res;
  };

  return {
    loading,
    getAllBookings,
    getAllActiveBookings,
    postBooking,
  };
};

export default useBookingService;
