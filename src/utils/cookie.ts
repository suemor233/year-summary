import Cookies from 'js-cookie'

export const likeKey = 'suemor-summary-like'

/**
 * 带了 bearer
 */
export function getLike(): boolean | null {
  const value = Cookies.get(likeKey)
  return value
}

export function setLike(value: string) {
  if (typeof value !== 'string') {
    return
  }
  return Cookies.set(likeKey, value, {
    expires: 24,
  })
}
