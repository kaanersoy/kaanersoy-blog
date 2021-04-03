<template>
  <main class="about">
    <div class="header">
      <h1>About</h1>
      <article>
        <nuxt-content :document="about" />
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
  async asyncData({ $content }) {
    const about = await $content('about', 'about').fetch()
    return { about }
  },
}
</script>

<style lang="postcss">
main.about {
  h1 {
    @apply text-center m-8 relative py-6;
    &::after {
      content: "";
      @apply absolute left-1/2 bottom-0 h-1 w-full bg-gray-600 transform -translate-x-1/2;
    }
    &::before {
      content: "";
      @apply absolute left-1/2 h-4 w-4 bg-gray-600 transform -translate-x-1/2 rotate-45;
      bottom: -6px;
    }
  }
  article {
    @apply prose prose-lg max-w-none;
  }
  code {
    @apply bg-gray-100 border-2 border-gray-300 px-2 py-1 rounded;
  }
  img {
    @apply my-8 px-5 m-auto;
  }
  p {
    @apply text-lg;
  }
  blockquote {
    @apply bg-gray-100 border px-2 py-1 rounded;
  }
  ul {
    @apply my-3 border-t-2 border-b-2 border-gray-200 py-3;
    li {
    }
  }
}
</style>