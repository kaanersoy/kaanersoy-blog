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
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import hamburger from '@/components/hamburger'
import CustomFooter from '@/components/footer'

const menus = [
  { to: '/', text: 'Home' },
  { to: '/blog', text: 'Blogs' },
];

export default {
  name: 'DefaultLayout',
  components: {
    hamburger,
    CustomFooter
  },
  data() {
    return {
      menus,
      isMenuOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpened = !this.isMenuOpened;
    },
  },
};
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
  @apply fixed flex items-center justify-center top-0 right-0 w-full xl:w-80 min-h-screen z-20 bg-gray-200 bg-opacity-30;
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
      @apply font-black text-black text-5xl text-center;
      &::before {
        position: absolute;
      }
      a {
        @apply text-3xl sm:text-4xl xl:text-5xl;
      }
      & + li {
        @apply border-t-2 mt-3 pt-3 border-gray-500;
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
  transform: translateX(100%);
  /* clip-path: polygon(100% 0, 100% 0, 100% 100%); */
}
</style>
