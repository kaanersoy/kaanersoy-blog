<template>
  <button
    @click="emit"
    class="hamburger hamburger--elastic"
    :class="isOpen ? 'is-active' : ''"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
import './hamburgers.css'

export default {
  name: 'Hamburger',
  data: function(){
    return{
      isOpen: false,
    }
  },
  methods:{
    emit: function(){
      this.isOpen = !this.isOpen;
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss">
button:focus {
  outline: none;
  border: none;
}
</style>