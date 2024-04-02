import { env } from '@/env'

export function api(path: string, init?: RequestInit) {
  const baseURL = env.NEXT_PUBLIC_API_BASE_URL
  const url = new URL(path, baseURL)

  fetch(url, init)
}
