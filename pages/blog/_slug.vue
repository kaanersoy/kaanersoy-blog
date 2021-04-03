<template>
  <div class="blog-in">
    <article>
      <nuxt-content :document="blog" />
    </article>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const blog = await $content('blogs', params.slug).fetch()
      return { blog }
    }
  }
</script>

<style lang="postcss">
.blog-in {
  @apply mx-auto;
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
  em {
    @apply text-center block;
  }
}
</style>
