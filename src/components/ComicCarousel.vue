<template>
  <div>
    <h2 class="title">Comic Books</h2>
  </div>
  <Carousel :breakpoints="breakpoints">
    <Slide v-for="slide in data" :key="slide.id">
      <SlideItem :data="slide" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import type { ComicData } from '@/types/types'
import 'vue3-carousel/dist/carousel.css'
import SlideItem from './SlideItem.vue'

export default defineComponent({
  name: 'BasicCarousel',
  components: {
    Carousel,
    Slide,
    Navigation,
    SlideItem
  },
  props: {
    data: {
      type: Object as () => ComicData[],
      required: true
    }
  },
  data: () => ({
    breakpoints: {
      100: {
        itemsToShow: 2,
        snapAlign: 'center'
      },

      700: {
        itemsToShow: 3.5,
        snapAlign: 'center'
      },

      1024: {
        itemsToShow: 5,
        snapAlign: 'start'
      }
    }
  })
})
</script>

<style lang="scss">
.title {
  color: $text-color;
  font-size: 1.8rem;
  margin-left: 10px;
  font-weight: 600;
  margin-bottom: 10px;
}

.carousel__slide {
  padding: 20px 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: $primary-color-light;
  transition: color 0.2s ease-in-out;
  font-size: 3rem;
  width: 50px;
  height: 50px;
  &:hover {
    color: $primary-color;
  }
}
</style>
