"use client";

import { createContext, useReducer } from "react";
import reducer, { IBookingState } from "./reducer";
import useBookingService from "@/services/BookingsService";

const initialState: IBookingState = {
  allBookings: [],
  allActiveBookings: [],
  loadingStatus: "idle",
};

interface IBookingsContextValue extends IBookingState {
  getBookings: () => void;
  getActiveBookings: () => void;
}
export const BookingContext = createContext<IBookingsContextValue>({
  allBookings: initialState.allBookings,
  allActiveBookings: initialState.allActiveBookings,
  loadingStatus: initialState.loadingStatus,
  getBookings: () => {},
  getActiveBookings: () => {},
});

const BookingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, getAllBookings, getAllActiveBookings } = useBookingService();

  const value: IBookingsContextValue = {
    allBookings: state.allBookings,
    allActiveBookings: state.allActiveBookings,
    loadingStatus: loading,
    getBookings: () => {
      getAllBookings().then((data) =>
        dispatch({ type: "SET_ALL_BOOKINGS", payload: data })
      );
    },
    getActiveBookings: () => {
      getAllActiveBookings().then((data) =>
        dispatch({ type: "SET_ACTIVE_BOOKINGS", payload: data })
      );
    },
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export default BookingContextProvider;
