// axios
import axios from 'axios';
import type { UserLoginForm, UserRegisterForm } from '../types';

export const getAPI = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export async function postRegister(data: UserRegisterForm) {
  const res = await getAPI
    .post('/auth/register', data)
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}

export async function postLogin(data: UserLoginForm) {
  const res = await getAPI
    .post('/auth/login', data)
    .then((res) => {
      return res;
    })
    .catch((err) => err.response);
  return res;
}

export async function getUserData() {
  const res = await getAPI.get('/auth/user').catch((err) => err.response);
  return res;
}

export async function forgotPassword(email: object) {
  const res = await getAPI
    .post('/auth/forget', email)
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}

export async function resetPassword(data: { token: string; password: string }) {
  const res = await getAPI
    .post('/auth/reset', data)
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}

export async function getSensorById(id: string) {
  const res = await getAPI
    .get(`/sensor/${id}`)
    .then((res) => res.data)
    .catch((err) => err.response);
  return res;
}
