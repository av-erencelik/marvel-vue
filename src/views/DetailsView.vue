<script setup lang="ts">
import { useFavStore } from '@/stores/FavStore'
import type { ComicDetails } from '@/types/types'
import { useQuery } from '@tanstack/vue-query'
import { HeartOff } from 'lucide-vue-next'
import { Heart } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.params.id
const store = useFavStore()
const { getIdExists } = storeToRefs(store)
const { isLoading, data, isFetching } = useQuery({
  queryKey: ['comic'],
  staleTime: 0,
  queryFn: async () => {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${import.meta.env.VITE_API_KEY}`
    )
    const data: ComicDetails = await response.json()
    console.log(data)
    return data
  }
})
</script>
<template>
  <section class="custom-container">
    <div v-if="isLoading || isFetching" class="loading">
      <span class="title">Loading...</span>
    </div>
    <div v-else-if="data">
      <div class="details-container">
        <img
          :src="
            data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension
          "
          alt="thumbnail"
          class="details-thumbnail"
        />
        <div class="details">
          <div class="details__texts">
            <div class="title_fav">
              <a class="details__title">{{ data.data.results[0].title }}</a>
              <button
                class="fav-button"
                v-if="!getIdExists(data.data.results[0].id)"
                @click="(e) => store.addFav({ id: data!.data.results[0].id, thumbnail: data!.data.results[0].thumbnail, title: data!.data.results[0].title })"
              >
                <Heart :size="24" />
              </button>
              <button
                class="fav-button active"
                v-else-if="getIdExists(data.data.results[0].id)"
                @click="() => store.removeFav(data!.data.results[0].id)"
              >
                <HeartOff :size="24" />
              </button>
            </div>

            <div>
              <h4 class="custom-title">Published</h4>
              <p class="details_date">
                {{
                  Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
                    new Date(data.data.results[0].dates[0].date)
                  )
                }}
              </p>
            </div>
            <div>
              <h4 class="custom-title">Description</h4>
              <p class="details__description" v-html="data.data.results[0].description"></p>
            </div>
          </div>

          <div class="details__creators">
            <div v-for="creator in data.data.results[0].creators.items" :key="creator.role">
              <h4 class="custom-title">
                {{ creator.role.charAt(0).toUpperCase() + creator.role.slice(1) }}
              </h4>
              <span class="details__creator_name">{{ creator.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.title {
  color: $primary-color;
  font-size: 1.8rem;
  font-weight: 700;
}

.active {
  color: $primary-color;
}

.title_fav {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}

.fav-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: $text-color;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: $primary-color;
  }
}
.loading {
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-title {
  color: $text-color;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.15rem;
}

.details-thumbnail {
  width: 350px;
  height: 538px;
  object-fit: cover;
  object-position: left;
  border-radius: 4px;
}

.details-container {
  margin-top: 25px;
  padding: 30px;
  display: flex;
  gap: 50px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
}

.details__texts {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.details_date {
  font-size: 1rem;
  font-weight: 400;
  color: $text-color-transparent;
}

.details__title {
  font-size: 1.8rem;
  font-weight: 700;
  color: $primary-color;
}

.details__description {
  font-size: 1rem;
  font-weight: 400;
  color: $text-color-transparent;
}

.details__creators {
  gap: 50px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.details__creator_name {
  font-size: 1rem;
  font-weight: 400;
  color: $text-color-transparent;
}

@media (max-width: 768px) {
  .details-container {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    gap: 20px;
  }

  .details__creators {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .details-thumbnail {
    width: 320px;
    height: 420px;
  }
}
</style>
