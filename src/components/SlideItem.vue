<template>
  <div class="carousel__item">
    <RouterLink :to="`/comic/${data.id}`">
      <img
        :src="data.thumbnail.path + '.' + data.thumbnail.extension"
        alt="thumbnail"
        class="thumbnail"
      />
      <div class="details__container">
        <div class="details">
          <div class="details__texts">
            <a class="details__title">{{ data.title }}</a>
            <p class="details__description">{{ data.description }}</p>
          </div>

          <div class="details__creators">
            <div v-for="(creator, index) in data.creators.items" :key="creator.role">
              <span v-if="index < 2" class="details__creator_name">{{ creator.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { ComicData } from '@/types/types'

defineProps({
  data: {
    type: Object as () => ComicData,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.carousel__item {
  height: 350px;
  width: 100%;
  background-color: transparent;
  color: $text-color;
  font-size: 1rem;
  border-radius: 4px;
  position: relative;
  transition: scale 0.1s ease-in-out;
  &:hover {
    scale: 1.05;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
    border-radius: 4px;
    cursor: pointer;
  }
  .details__container {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    background-color: $bg-color-transparent;
    height: 100px;
    .details {
      padding: 10px;
      display: flex;
      gap: 6px;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      justify-content: space-between;
      .details__texts {
        display: flex;
        gap: 3px;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
      }
      .details__creators {
        display: flex;
        gap: 3px;
        flex-direction: row;
        align-items: flex-start;
        .details__creator_name {
          font-size: 0.7rem;
          font-weight: 400;
          color: $text-color-transparent;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .details__title {
        font-size: 0.8rem;
        font-weight: 700;
        color: $primary-color;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        transition: color 0.1s ease-in-out;
        &:hover {
          color: $primary-color-light;
        }
      }
      .details__description {
        font-size: 0.75rem;
        font-weight: 400;
        color: $text-color;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
        text-align: left;
      }
    }
  }
}
</style>
