<template>
  <main class="main-page">
    <div class="picture">
      <img src="../assets/img/me.jpg" alt="Kaan Ersoy" />
    </div>
    <div class="head">
      <h1>Kaan Ersoy</h1>
      <h4>Hi 👋</h4>
      <p>
        I am a web developer about two years, and very interested in Javascript.
        Also working at
        <a href="https://vivoo.io">Vivoo</a> as a <b>Front-end Developer</b>. I
        am developing <b>Vue.js, React.js and Nuxt</b> Apps for a long time.
        Writing blogs about <b>Javascript</b> and <b>Web Developement</b> and
        very interested in <b>open-source projects</b>.
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
        <div class="title">
          <h4>PROJECTS</h4>
        </div>
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
body {
  font-family: "Inter", sans-serif;
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
    h4 {
      @apply text-2xl text-center my-4;
    }
    .dot {
      @apply text-center my-1;
    }
    p {
      @apply text-lg my-1;
      letter-spacing: 0.5px;
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
      .title {
        @apply text-center;
        h4 {
          @apply font-bold  relative text-3xl my-4 inline-block pb-4 border-b-2 border-gray-700 text-gray-700;
          &::after {
            content: "";
            @apply absolute left-1/2 -bottom-2 w-3 h-3 bg-gray-700 rounded-full;
          }
        }
      }
    }
  }
}
</style>
