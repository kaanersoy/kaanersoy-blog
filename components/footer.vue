<template>
  <footer>
    <div class="wrapper">
      <p>
        <a href="https://github.com/kaanersoy" target="_blank">Kaan Ersoy</a>
        | Personal Website
      </p>
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
    & > * + * {
      @apply mt-2;
    }
    p {
      @apply font-bold text-gray-500;
    }
    .icons {
      @apply flex justify-center gap-3;
      img {
        @apply w-9;
      }
    }
  }
}
</style>