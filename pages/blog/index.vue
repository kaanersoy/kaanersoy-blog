<template>
  <main class="blog">
    <h1>Blog page</h1>
    <ul>
      <li v-for="(b, i) in blogs" :key="i">
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

<style>
</style>