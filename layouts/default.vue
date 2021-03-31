<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Ev</NuxtLink>
        <span>|</span>
        <NuxtLink to="/blog">Yazılar</NuxtLink>
      </nav>
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <!-- <footer>
      <h3>footer</h3>
    </footer> -->
  </div>
</template>

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
header {
  @apply py-4 px-6 bg-opacity-30 fixed -inset-x-0;
  nav {
    @apply text-right;
    a,
    span {
      @apply text-2xl font-bold;
    }
    span {
      @apply mx-4;
    }
  }
}
</style>
