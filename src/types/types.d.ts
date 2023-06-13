export type ComicData = {
  creators: {
    items: {
      name: string
      role: string
    }[]
  }
  dates: {
    type: string
    date: string
  }
  description: string | null
  id: number
  title: string
  thumbnail: {
    extension: string
    path: string
  }
}

export type ComicDatas = {
  status: string
  code: number
  data: {
    results: comicData[]
  }
}
