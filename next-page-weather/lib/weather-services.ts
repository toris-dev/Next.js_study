const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct?";
const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const fetchData = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch Data`);
  }
  const data = await res.json();
  return data as T;
};

export { API_KEY, BASE_URL, GEO_API_URL, fetchData };
