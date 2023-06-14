<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Heart } from 'lucide-vue-next'
import { useFavStore } from '@/stores/FavStore'
import { HeartOff } from 'lucide-vue-next'

const isOpen = ref(false)
const modalRef = ref(null)
const { favs, getIdExists, removeFav } = useFavStore()

onClickOutside(modalRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="drawer-container">
    <button class="drawer-button" @click.stop="isOpen = true">
      <Heart class="icon" :size="24" />
      <span>{{ favs.length }}</span>
    </button>
    <transition name="drawer">
      <div v-if="isOpen" class="drawer-wrapper">
        <div class="drawer-overlay"></div>
        <div class="drawer-content" ref="modalRef">
          <!-- Drawer content goes here -->
          <h2 class="title">Favourites</h2>
          <div class="favs">
            <div v-for="fav in favs" :key="fav.id" class="fav">
              <div class="fav-image">
                <img
                  :src="fav.thumbnail.path + '.' + fav.thumbnail.extension"
                  alt="fav.name"
                  class="image"
                />
              </div>
              <div class="fav-container">
                <div class="fav-name">{{ fav.title }}</div>
                <button
                  class="fav-button active"
                  v-if="getIdExists(fav.id)"
                  @click="() => removeFav(fav.id)"
                >
                  <HeartOff :size="24" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.drawer-container {
  position: relative;
}

.favs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.fav-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
  flex: 1;
}

.fav-button {
  background-color: $bg-color-transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: $primary-color;
  background: transparent;
}

.fav {
  display: flex;
  color: $text-color;
  gap: 10px;
}

.image {
  width: 65px;
  height: 100%;
  object-fit: cover;
}

.drawer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
}

.drawer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: $bg-drawer-overlay;
}

.drawer-button {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  font-size: 0.875rem;
  background-color: transparent;
  color: $text-color-transparent;
  line-height: 1.25rem;
  font-weight: 500;
  transition: color 0.1s ease-in-out;
  cursor: pointer;
  height: 2.25rem;
  &:hover {
    color: $text-color;
  }
  span {
    font-size: 0.65rem;
    position: absolute;
    top: -10%;
    border-radius: 100%;
    background-color: $primary-color;
    z-index: 21;
    right: 0%;
    height: 20px;
    color: $text-color;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.drawer-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: $bg-drawer;
  padding: 20px;
  z-index: 9999;
  overflow-y: auto;
}

.drawer-enter-active {
  transition: transform 0.3s ease;
}

.drawer-enter-from {
  transform: translateX(100%);
}

.drawer-leave-active {
  transition: transform 0.3s ease;
}

.drawer-leave-to {
  transform: translateX(100%);
}
</style>
