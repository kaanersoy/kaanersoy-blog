<template>
  <footer>
    <div class="wrapper">
      <p>
        <a href="https://github.com/kaanersoy" target="_blank">Kaan Ersoy</a>
      </p>
      <p>Personal Website</p>
      <div class="icons">
        <a href="#">
          <img src="../assets/icons/github.svg" alt="Kaan Ersoy | Github" />
        </a>
        <a href="#">
          <img src="../assets/icons/medium.svg" alt="Kaan Ersoy | Medium" />
        </a>
        <a href="#">
          <img src="../assets/icons/linkedin.svg" alt="Kaan Ersoy | LinkedIN" />
        </a>
        <a href="#">
          <img src="../assets/icons/twitter.svg" alt="Kaan Ersoy | Twitter" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter'
}
</script>

<style lang="postcss">
footer {
  @apply flex flex-col items-center m-3 py-4 border-t-2;
  .wrapper {
    p {
      @apply font-bold text-gray-500 text-center;
      & + p {
        @apply border-t-2 border-gray-200 pt-1 font-light mt-1;
      }
    }
    .icons {
      @apply flex justify-center mt-3;
      img {
        @apply w-9;
      }
      a {
        & + a {
          @apply ml-2;
        }
      }
    }
  }
}
</style>