<template>
  <main class="main-page">
    <div class="picture">
      <img src="../assets/img/me.jpg" alt="Kaan Ersoy" />
    </div>
    <div class="head">
      <h1>Kaan Ersoy</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        excepturi aliquid nemo, animi eligendi odio quod. Molestias deleniti eum
        doloribus eos cupiditate? Cupiditate dolore facere omnis cum, dolores
        voluptatibus consequatur!
      </p>
      <div class="icons">
        <a href="">
          <img src="../assets/icons/github.svg" alt="Github" />
        </a>
        <a href="">
          <img src="../assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="">
          <img src="../assets/icons/twitter.svg" alt="Twitter" />
        </a>
        <a href="">
          <img src="../assets/icons/medium.svg" alt="Medium" />
        </a>
      </div>
    </div>
    <hr />
    <div class="body">
      <div class="project">
        <h4>PROJECTS</h4>
        <product v-for="(pr, i) in products" :key="i" :product="pr" />
      </div>
    </div>
  </main>
</template>

<script>
import product from '../components/product'
export default {
  name: 'Index',
  components: {
    product
  },
  async asyncData({ $content }) {
    const products = await $content('products').fetch()
    return { products }
  }
}


</script>

<style lang="postcss">
body{
  font-family: 'Inter', sans-serif;
}
main.main-page {
  hr {
    @apply border border-gray-300 my-4;
  }
  .picture {
    img {
      @apply rounded-full w-32 mx-auto;
    }
  }
  & > .head {
    h1 {
      @apply text-center text-4xl;
    }
    p {
      @apply text-lg;
    }
    .icons {
      @apply flex justify-center my-6 space-x-4;
      a {
        @apply w-10 rounded-full;
      }
    }
  }
  .body {
    .project {
      & > h4 {
        @apply font-bold text-3xl my-4 inline-block pb-4 border-b-2 border-gray-200;
      }
    }
  }
}
</style>
