import { StaticImageData } from "next/image";

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
}

export interface IBookingRules {
  heading: string;
  rules: string[];
}

type HTTPRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";

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
  room: string;
  date: string;
  checkIn: string;
  canceled: boolean;
}

export type activeBooking = Omit<IBooking, "canceled">;
