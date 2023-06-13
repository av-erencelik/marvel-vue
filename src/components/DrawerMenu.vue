<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Heart } from 'lucide-vue-next'

const isOpen = ref(false)
const modalRef = ref(null)

onClickOutside(modalRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="drawer-container">
    <button class="drawer-button" @click.stop="isOpen = true">
      <Heart class="icon" :size="24" />
      <span>0</span>
    </button>
    <transition name="drawer">
      <div v-if="isOpen" class="drawer-wrapper">
        <div class="drawer-overlay"></div>
        <div class="drawer-content" ref="modalRef">
          <!-- Drawer content goes here -->
          <h2>Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.drawer-container {
  position: relative;
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
  width: 250px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
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
