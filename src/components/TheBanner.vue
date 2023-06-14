<template>
  <div class="banner">
    <div class="banner-overlay">
      <div class="banner-front">
        <h1 class="banner-title">Welcome to Marvel Comics</h1>
        <h5 class="banner-description">
          Unleash Your Marvelous Imagination! Explore Epic Adventures, Unforgettable Heroes, and
          Unparalleled Power on our Marvel Comic Website!
        </h5>
        <div class="banner-buttons">
          <router-link to="#comics">
            <button class="btn btn-primary">Comics</button>
          </router-link>
          <router-link to="#comics">
            <button class="btn btn-secondary">Favourites</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: none;
  }
  &.btn-primary {
    background-color: $primary-color;
    color: $text-color;
  }
  &.btn-secondary {
    background-color: transparent;
    color: $primary-color;
    border: 1px solid $primary-color;
  }
}
.banner {
  height: 50vh;
  width: 100%;
  background-color: $bg-color;
  background-image: url('/banner.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
}
.banner-overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.banner-front {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: $max-width;
}

.banner-description {
  color: $text-color;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  max-width: 500px;
}

.banner-title {
  color: $text-color;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
}

.banner-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 500px;
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 1.5rem;
  }
  .banner-description {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .banner-buttons {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .banner-front {
    padding: 0 2rem;
  }
}
</style>
