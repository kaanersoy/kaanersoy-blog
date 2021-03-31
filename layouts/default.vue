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
        <hamburger :is-open="isMenuOpened" @menuToggle="toggleMenu" />
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
  { to: '/blog', text: 'Blogs'},
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
  @apply fixed flex items-center justify-end top-0 right-0 w-full xl:w-1/2 min-h-screen z-20 pr-5 xl:pr-10;
  clip-path: polygon(100% 0, 0 0, 100% 100%);
  background: rgba(230, 230, 230, 0.5);
  -o-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  -webkit-transition: 500ms ease;
  -o-transition: 500ms ease;
  -moz-transition: 500ms ease;
  transition: 500ms ease;
  ul {
    position: absolute;
    li {
      @apply font-black text-5xl text-center;
      a {
        @apply text-gray-100 text-3xl  sm:text-4xl xl:text-5xl;

        background-color: transparent;
        -webkit-text-stroke-width: 1.5px;
        -webkit-text-stroke-color: black;
        /* -webkit-text-stroke: 1.5px black; */
      }
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
  -webkit-transition: 500ms ease;
  -o-transition: 500ms ease;
  -moz-transition: 500ms ease;
  transition: 500ms ease;
}
.menu-leave-to,
.menu-enter {
  clip-path: polygon(100% 0, 100% 0, 100% 100%);
}
/* .menu-enter-to,
.menu-enter {
  transform: translateX(0);
} */
</style>
