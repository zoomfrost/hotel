import { useHttp } from "@/hooks/http.hook";
import { IBooking, ActiveBooking } from "@/types";
import { differenceInDays } from "date-fns";

const useBookingService = () => {
  const { loading, request } = useHttp();

  const _apiBase = "http://localhost:3000/api";

  const getAllBookings = async (): Promise<IBooking[]> => {
    const res = await request({ url: `${_apiBase}/booking` });
    return res;
  };

  const getAllActiveBookings = async () => {
    const res = await getAllBookings();
    const transformed: ActiveBooking[] = res
      .filter((item) => {
        return (
          !item.canceled && differenceInDays(item.dateFrom, new Date()) > 0
        );
      })
      .map((item: ActiveBooking) => {
        return {
          name: item.name,
          checkIn: item.checkIn,
          phone: item.phone,
          room: item.room,
          dateFrom: item.dateFrom,
          dateTo: item.dateTo,
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
