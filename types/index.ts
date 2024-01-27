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
