import axios from 'axios'
import { parseCookies } from 'nookies'

export const api = getApiClient()

export function getApiClient(ctx?: any) {
  const { accessToken } = parseCookies(ctx)

  const api = axios.create({
    baseURL: process.env.REMOTE_API_URL
  })

  if (accessToken) {
    api.defaults.headers.Authorization = `Bearer ${accessToken}`
  }

  return api
}
