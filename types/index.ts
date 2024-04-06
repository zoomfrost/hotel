import { StaticImageData } from "next/image";

export interface IHeaderData {
  name: string;
  link: string;
  id: number;
}

export interface IHeaderDataProps {
  links: IHeaderData[];
  isDashboard: boolean;
}

export interface IPromoProps {
  title: string;
  isHomePage?: boolean;
}

interface IDescriptionData {
  photo: string | StaticImageData;
  heading: string;
  text: string;
}
export interface IDescriptionDataProps {
  photos: IDescriptionData[];
  isHomePage: boolean;
}

export interface IBooking {
  name: string;
  phone: string;
  room: string;
  dateFrom: Date;
  dateTo: Date;
  checkIn: string;
  canceled: boolean;
  id: string;
  created: Date;
  comment: string;
}

export interface BookingsFromDB extends IBooking {
  _id?: string;
  __v?: number;
}

export type ActiveBooking = Omit<IBooking, "canceled">;

export interface IPricesFromDB {
  roomType: string;
  dates: {
    interval: { start: Date; end: Date };
    price: string;
  };
}
