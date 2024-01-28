import { IRequestConfig } from "@/types";
import { useState, useCallback, use } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async ({
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
    }: IRequestConfig) => {
      setLoading("loading");

      try {
        const response = await fetch(url, { method, body, headers });
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, ${response.status}`);
        }

        const data = await response.json();

        setLoading("idle");
        return data;
      } catch (e) {
        setLoading("error");
        throw e;
      }
    },
    []
  );

  return { loading, request };
};
