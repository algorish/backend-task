import axios from "axios";
import { baseURL } from "./constants";

export const fetchAbout = async () => {
  let response = await axios.get(`${baseURL}/info`);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const payload = { email, password };
  let response = await axios.post(`${baseURL}/auth/login`, payload);
  return response.data;
};

export const fetchProfile = async (token: string | boolean) => {
  let response = await axios.get(`${baseURL}/profile?token=${token}`);
  return response.data;
};

export const fetchAuthor = async (token: string | boolean) => {
  let response = await axios.get(`${baseURL}/author?token=${token}`);
  return response.data;
};

export const fetchQuote = async (token: string | boolean) => {
  let response = await axios.get(`${baseURL}/quote?token=${token}`);
  return response.data;
};
