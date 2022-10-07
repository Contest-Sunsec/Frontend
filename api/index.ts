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
    .post('/auth/forgotPassword', email)
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}

export async function resetPassword(data: { token: string; password: string }) {
  const res = await getAPI
    .post('/auth/resetPassword', data)
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}

export async function getHardwareInfo() {
  const res = await getAPI
    .get('/hardware')
    .then((res) => res)
    .catch((err) => err.response);
  return res;
}