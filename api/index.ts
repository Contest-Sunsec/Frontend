// axios
import axios from 'axios'
import type { UserLoginForm, UserRegisterForm } from '../types'

const getAPI = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export async function postRegister (data: UserLoginForm) {
    const res = await getAPI.post('/auth/register', data).then(res => res).catch(err => err.response)
    return res
}

export async function postLogin (data: UserRegisterForm) {
    const res = await getAPI.post('/auth/login', data).then(res => res).catch(err => err.response)
    return res
}

export async function forgotPassword (email: string) {
    const res = await getAPI.post('/auth/forgotPassword', email).then(res => res).catch(err => err.response)
    return res
}

export async function resetPassword (data: {token:string; password:string}) {
    const res = await getAPI.post('/auth/resetPassword', data).then(res => res).catch(err => err.response)
    return res
}