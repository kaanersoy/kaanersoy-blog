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
          <NuxtLink :to="`/blog/${b.slug}`">{{ b.title }}</NuxtLink>
        </div>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm-6 2h-8v1h8v-1zm11-10c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/></svg> -->
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "BlogPage",
  async asyncData({ $content }) {
    const blogs = await $content("blogs").fetch();
    return { blogs };
  },
};
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
      .thumbnail {
        @apply w-full mb-3 xl:mb-0 xl:w-1/3;
        img {
          @apply w-full h-auto;
        }
      }
      .head {
        @apply text-2xl text-gray-500 xl:ml-10 font-bold;
      }
      & + li {
        @apply border-gray-200 border-t-2 pt-2 mt-2;
      }
    }
  }
}
</style>