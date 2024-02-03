import { IRequestConfig } from "@/types";

export const request = async ({
  url,
  method = "GET",
  body = null,
  headers = { "Content-Type": "application/json" },
}: IRequestConfig) => {
  try {
    const response = await fetch(url, { method, body, headers });
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (e) {
    throw e;
  }
};
