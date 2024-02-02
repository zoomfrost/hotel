import { StaticImageData } from "next/image";
import { DateRange } from "react-day-picker";

interface IHeaderData {
  name: string;
  link: string;
  id: number;
}

export interface IHeaderDataProps {
  links: IHeaderData[];
  isDashboard: boolean;
}

interface IDescriptionData {
  photo: StaticImageData;
  heading: string;
  text: string;
}
export interface IDescriptionDataProps {
  photos: IDescriptionData[];
  isHomePage: boolean;
}

export interface IBookingRules {
  heading: string;
  rules: string[];
}

type HTTPRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";
export type loadingStatusOptions = "idle" | "loading" | "error";

interface IHTTPHeaders {
  [key: string]: string;
}

export interface IRequestConfig {
  url: string;
  method?: HTTPRequestMethods;
  body?: string | null;
  headers?: IHTTPHeaders;
}

export interface IBooking {
  name: string;
  phone: string;
  room: "double" | "triple";
  dateFrom: Date;
  dateTo: Date;
  checkIn: string;
  canceled: boolean;
  id: string;
}

export type ActiveBooking = Omit<IBooking, "canceled">;
