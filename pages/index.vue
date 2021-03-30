<template>
  <transition name="home" mode="out-in">
    <div class="container">
      <h1>Home Page</h1>
    </div>
  </transition>
</template>

<script>
export default {
  transition: {
    name: 'home',
    mode: 'out-in',
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  }
}
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
