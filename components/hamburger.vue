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
  props:{
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    emit: function(){
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