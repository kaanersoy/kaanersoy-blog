<template>
  <div>
    <transition name="menu">
      <nav v-if="isMenuOpened" mode="out-in">
        <ul>
          <li @click="toggleMenu" v-for="(m, i) in menus" :key="i">
            <NuxtLink :to="m.to">{{ m.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
    <header>
      <div class="menu">
        <hamburger @menuToggle="toggleMenu" />
      </div>
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <!-- <footer>
      <h3>footer</h3>
    </footer> -->
  </div>
</template>

<script>
const menus = [
  { to: '/', text: 'Home'},
  { to: '/blog', text: 'Yazilar'},
]

import hamburger from '../components/hamburger'

export default {
  name: 'DefaultLayout',
  components: {
    hamburger
  },
  data: function(){
    return {
      menus,
      isMenuOpened: false,
    }
  },
  methods: {
    toggleMenu: function(){
      this.isMenuOpened = !this.isMenuOpened
    }
  }
}
</script>


<style lang="postcss">
.container {
  @apply mx-auto px-5 xl:max-w-5xl pt-12;
}
h1 {
  @apply text-4xl font-bold my-4;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
nav {
  @apply fixed flex items-center justify-center w-full min-h-screen bg-gray-500 z-20;
  ul {
    li {
      @apply font-black text-5xl text-center text-gray-200;
      & + li {
        @apply mt-4;
      }
    }
  }
}
header {
  @apply py-4 px-6 fixed z-30 -inset-x-0 w-full;
  .hamburger {
    @apply block ml-auto;
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: 500ms ease;
  transform: translateX(0);
}
.menu-leave-to,
.menu-enter {
  transform: translateX(-100%);
}
/* .menu-enter-to,
.menu-enter {
  transform: translateX(0);
} */
</style>
