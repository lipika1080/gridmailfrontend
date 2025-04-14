// src/api.ts
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/';

export const sendMarketingEmail = (data: {
  recipient: string;
  subject: string;
  body: string;
}) => {
  return axios.post(`${BASE_URL}/send-email`, data);
};

export const bookAppointment = (data: any) => {
  return axios.post(`${BASE_URL}/appointments`, data);
};

export const getAppointments = () => {
  return axios.get(`${BASE_URL}/appointments`);
};
