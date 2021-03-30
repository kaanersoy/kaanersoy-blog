<template>
  <h1>Blog page</h1>
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