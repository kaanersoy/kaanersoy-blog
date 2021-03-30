<template>
  <main class="blog">
    <h1>Blog page</h1>
    <ul>
      <li v-for="(b, i) in blogTitles" :key="i">{{ b }}</li>
    </ul>
  </main>
</template>

<script>
export default {
name:'BlogPage',
async asyncData({$content}){
    const blogs = await $content('blogs').fetch();
    return {blogTitles: blogs.map(b => b.title)}
  },
}
</script>

<style>
</style>