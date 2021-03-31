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
    </div>
    <hr />
    <div class="body">
      <div class="project">
        <h4>Projects</h4>
        <div class="project-box">
          <div class="head">
            <h3>Project name</h3>
          </div>
          <div class="body">
            <img src="" alt="" />
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="postcss">
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
      @apply text-center;
    }
    p {
      @apply text-lg;
    }
  }
  .body {
    .project {
      & > h4 {
        @apply font-bold text-2xl my-6;
      }
    }
  }
}
</style>
