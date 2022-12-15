import useSWR, { mutate } from 'swr'

import config from '~/config'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export const likeUrl = `${config.mxConfig?.apiEndpoint}/notes/nid/${config.mxConfig?.note}`
export const useThumbsUpRequest = () => {
  const { data, error, isLoading } = useSWR<likeType>(likeUrl, fetcher)

  const reFetch = () => {
    mutate(likeUrl)
  }
  return {
    like: data?.data,
    isLoading,
    isError: error,
    reFetch,
  }
}

interface likeType {
  data: Data
  next?: any
  prev?: any
}

interface Data {
  id: string
  created: string
  comments_index: number
  allow_comment: boolean
  title: string
  text: string
  images: any[]
  modified?: any
  hide: boolean
  secret?: any
  mood: string
  weather: string
  has_memory: boolean
  count: Count
  music: any[]
  nid: number
  topic?: any
  meta?: any
}

interface Count {
  read: number
  like: number
}
