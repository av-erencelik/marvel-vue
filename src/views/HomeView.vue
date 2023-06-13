<script setup lang="ts">
import TheBannerVue from '@/components/TheBanner.vue'
import ComicCarousel from '@/components/ComicCarousel.vue'
import { useQuery } from '@tanstack/vue-query'
import type { ComicDatas } from '@/types/types'

const { isLoading, data } = useQuery({
  queryKey: ['todos'],
  queryFn: async () => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/comics?orderBy=-focDate&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
    const data: ComicDatas = await response.json()
    console.log(data)
    return data
  }
})
</script>

<template>
  <TheBannerVue />
  <section class="custom-container">
    <div v-if="isLoading" class="loading">
      <span class="title">Loading...</span>
    </div>
    <div v-else-if="data">
      <ComicCarousel :data="data.data.results" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.loading {
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  color: $primary-color;
  font-size: 1.8rem;
  font-weight: 700;
}
</style>
