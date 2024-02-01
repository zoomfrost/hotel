import { ActiveBooking, IBooking, loadingStatusOptions } from "@/types";
import { BookingAction } from "./actions";

export interface IBookingState {
  allBookings: IBooking[] | [];
  allActiveBookings: ActiveBooking[] | [];
  loadingStatus: loadingStatusOptions;
}

export default function reducer(
  state: IBookingState,
  action: BookingAction
): IBookingState {
  switch (action.type) {
    case "SET_ALL_BOOKINGS":
      return {
        ...state,
        allBookings: action.payload,
      };
    case "SET_ACTIVE_BOOKINGS":
      return {
        ...state,
        allActiveBookings: action.payload,
      };
    case "FETCHING BOOKINGS":
      return {
        ...state,
        loadingStatus: "loading",
      };
    case "ERROR_FETCHING_BOOKINGS":
      return { ...state, loadingStatus: "error" };
    default:
      return state;
  }
}
