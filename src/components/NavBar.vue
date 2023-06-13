<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import DrawerMenu from './DrawerMenu.vue'
import { Github } from 'lucide-vue-next'
import { Linkedin } from 'lucide-vue-next'
const { y } = useWindowScroll()
</script>

<template>
  <header class="nav">
    <div class="navbar" :class="[y > 0 ? 'nav-fill' : '']">
      <div class="container">
        <div>
          <RouterLink to="/" class="title">Demo</RouterLink>
        </div>
        <div class="flex-row">
          <DrawerMenu />
          <div class="social flex-row">
            <a href="https://github.com/av-erencelik/marvel-vue" target="_blank" rel="noopener">
              <Github :size="20" :stroke-width="2" class="social-link" />
            </a>
            <a href="https://www.linkedin.com/in/av-erencelik/" target="_blank" rel="noopener">
              <Linkedin :size="20" class="social-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav {
  height: $navbar-height;
  width: 100%;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  .navbar {
    height: 100%;
    width: 100%;
    padding: 0 32px;
    background-color: $bg-color;
    transition: all 0.3s ease-in-out;
  }
  .social {
    border-left: 1px solid $border-color;
    border-color: $border-color;
    padding-left: 0.9rem;
    gap: 10px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .social-link {
      color: $text-color;
      color: $text-color-transparent;
      transition: color 0.1s ease-in-out;
      &:hover {
        color: $text-color;
      }
    }
  }
  .nav-fill {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: $bg-color-transparent;
  }
  .title {
    font-size: 1.215rem;
    font-weight: 500;
    text-decoration: none;
    transition: opacity 0.1s ease-in-out;
    color: $text-color-transparent;
    transition: color 0.1s ease-in-out;
    &:hover {
      color: $text-color;
    }
  }
  .container {
    max-width: $max-width;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

@media (max-width: $mobile-breakpoint) {
  .nav {
    .navbar {
      padding: 0 16px;
    }
    .title {
      font-size: 1rem;
    }
  }
}
</style>
