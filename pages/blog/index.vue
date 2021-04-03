<template>
  <main class="blog">
    <h1>My Blogs</h1>
    <ul>
      <li v-for="(b, i) in blogs" :key="i">
        <div class="thumbnail">
          <NuxtLink :to="`/blog/${b.slug}`">
            <img :src="b.thumbnail" />
          </NuxtLink>
        </div>
        <div class="head">
          <NuxtLink :to="`/blog/${b.slug}`"
            ><h3>{{ b.title }}</h3></NuxtLink
          >
          <p>{{ b.description }}</p>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content }) {
    const blogs = await $content('blogs').fetch()
    return { blogs }
  },
}
</script>

<style lang="postcss">
main.blog {
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
  ul {
    li {
      @apply flex flex-col justify-center xl:flex-row xl:justify-start xl:items-center;
      min-height: 250px;
      & + li {
        @apply border-gray-200 border-t-2 pt-5 mt-5 xl:pt-2 xl:mt-2;
      }
      .thumbnail {
        @apply w-full mb-6 xl:mb-0 xl:w-1/3;
        img {
          @apply w-full h-auto rounded;
        }
      }
      .head {
        @apply xl:ml-10 xl:w-2/3;
        h3 {
          @apply text-2xl text-gray-600 font-bold mb-4;
        }
        p {
          @apply font-light text-sm text-gray-500;
        }
      }
    }
  }
}
</style>