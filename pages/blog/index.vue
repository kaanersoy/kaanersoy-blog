<template>
  <main class="blog">
    <h1>My Blogs</h1>
    <ul>
      <li v-for="(b, i) in blogs" :key="i">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm0 2h-14v1h14v-1zm-6 2h-8v1h8v-1zm11-10c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14zm-3 14h-18v-14h18v14zm1.5-6.5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"/></svg>
        <NuxtLink :to="`/blog/${b.slug}`">{{ b.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
name:'BlogPage',
async asyncData({$content}){
    const blogs = await $content('blogs').fetch();
    return { blogs }
  },
}
</script>

<style lang="postcss">
main.blog{
  h1{
    @apply text-center
  }
  ul{
    li{
      @apply text-2xl text-gray-700 flex items-center;
      svg{
        @apply w-5 mr-5;
      }
      & + li{
        @apply border-gray-200 border-t-2 pt-2 mt-2; 
      }
    }
  }
}
</style>