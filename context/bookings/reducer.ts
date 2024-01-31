import { ActiveBooking, IBooking } from "@/types";
import { BookingAction } from "./actions";

export interface IInitialState {
  allBookings: IBooking[] | [];
  allActiveBookings: ActiveBooking[] | [];
}

export default function reducer(state: IInitialState, action: BookingAction) {
  switch (action.type) {
    case "SET_ALL_BOOKINGS":
      return { ...state, allBookings: action.payload };
    case "SET_ACTIVE_BOOKINGS":
      return { ...state, allActiveBookings: action.payload };
    default:
      return state;
  }
}
