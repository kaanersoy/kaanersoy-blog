<template>
  <div class="blog">
    <div class="blog container">
      <article>
        <nuxt-content :document="blog" />
      </article>
    </div>
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
.blog {
  @apply mx-auto;
}
  h1 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 36px;
  }
  code {
    background-color: #101010;
    color: #fff;
    padding: 2px 10px;
    font-size: inherit;
  }
  img {
    @apply px-2 py-5 w-full;
  }
  p {
    font-size: 18px;
    margin: 10px 0;
  }
  blockquote {
    background: #e6e6e6;
    padding: 10px;
    margin-left: 10px;
    font-style: italic;
  }
</style>
