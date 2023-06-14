import type { FavItem } from './../types/types.d'
import { defineStore } from 'pinia'

export const useFavStore = defineStore('favStore', {
  state: () => ({
    favs: <FavItem[]>[]
  }),
  getters: {
    length: (state) => state.favs.length,
    getIdExists: (state) => (id: number) => state.favs.some((fav) => fav.id === id)
  },
  actions: {
    addFav(fav: FavItem) {
      this.favs.push(fav)
    },
    removeFav(id: number) {
      const index = this.favs.findIndex((fav) => fav.id === id)
      this.favs.splice(index, 1)
    }
  }
})
