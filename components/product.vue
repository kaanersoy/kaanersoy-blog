<template>
  <div class="project-box">
    <div class="head">
      <h5>{{ product.title }}</h5>
    </div>
    <div class="body">
      <div class="content">
        <nuxt-content :document="product" />
      </div>
      <div class="description">
        <h6>Description:</h6>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props:['product']
}
</script>

<style lang="postcss">
.project-box {
  & + .project-box {
    @apply border-t-2 border-gray-200 pt-6;
  }
  @apply my-3 xl:my-6;
  .head {
    & > h5 {
      @apply text-xl font-bold mb-4;
    }
  }
  .body {
    @apply xl:flex;
    & > * {
      @apply xl:w-1/2;
    }
    .content {
      @apply xl:mr-7;
      img {
        @apply w-full my-2;
      }
    }
    .description {
      h6 {
        @apply xl:border-b-2 text-gray-500 mb-2 xl:pb-2;
      }
      p {
        @apply text-lg font-light;
      }
    }
  }
}
</style>