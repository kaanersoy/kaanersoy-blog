<template>
  <transition name="home" mode="out-in">
    <div class="container">
      <ul>
        <li v-for="b in blogTitles">{{ b }}</li>
      </ul>
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
