<script setup lang="ts">
import TheBannerVue from '@/components/TheBanner.vue'
import ComicCarousel from '@/components/ComicCarousel.vue'
import { useQuery } from '@tanstack/vue-query'
import type { ComicDatas } from '@/types/types'

const { isLoading, data, isFetching } = useQuery({
  queryKey: ['comics'],
  staleTime: 1000,
  queryFn: async () => {
    const response = await fetch(
      `https://gateway.marvel.com/v1/public/comics?orderBy=modified&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    )
    const data: ComicDatas = await response.json()
    return data
  }
})
</script>

<template>
  <TheBannerVue />
  <section class="custom-container section">
    <div v-if="isLoading" class="loading">
      <span class="title">Loading...</span>
    </div>
    <div v-else-if="data">
      <ComicCarousel :data="data.data.results" />
    </div>
  </section>
</template>

<style lang="scss">
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

@media screen and (max-width: 768px) {
  .section {
    padding-left: 1rem;
  }
}
</style>
