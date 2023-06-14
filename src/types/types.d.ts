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
  }[]
  description: string | null
  id: number
  title: string
  thumbnail: {
    extension: string
    path: string
  }
}

export type ComicDataDetails = {
  characters: {
    items: {
      name: string
    }[]
  }
  id: number
  creators: {
    items: {
      name: string
      role: string
    }[]
  }
  dates: {
    type: string
    date: string
  }[]
  description: string | null
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

export type ComicDetails = {
  status: string
  code: number
  data: {
    results: ComicDataDetails[]
  }
}

export type FavItem = {
  id: number
  title: string
  thumbnail: { extension: string; path: string }
}
