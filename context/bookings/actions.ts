import { IBooking, ActiveBooking } from "@/types";

interface IActions {
  SET_ACTIVE_BOOKINGS: "SET_ACTIVE_BOOKINGS";
  SET_ALL_BOOKINGS: "SET_ALL_BOOKINGS";
  FETCHING_BOOKINGS: "FETCHING BOOKINGS";
  ERROR_FETCHING_BOOKINGS: "ERROR_FETCHING_BOOKINGS";
}

export type BookingAction =
  | {
      type: IActions["SET_ACTIVE_BOOKINGS"];
      payload: ActiveBooking[];
    }
  | {
      type: IActions["SET_ALL_BOOKINGS"];
      payload: IBooking[];
    }
  | {
      type: IActions["FETCHING_BOOKINGS"];
    }
  | {
      type: IActions["ERROR_FETCHING_BOOKINGS"];
    };
