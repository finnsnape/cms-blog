<script>
    import { page } from '$app/stores';
</script>

<style lang="scss">
  .wrapper {
    display: flex;
    margin: $space-xl-3xl 0;
    align-items: center;
    justify-content: center;
  }
  h1 {

  }
</style>

<div class="wrapper">
  <h1>{$page.error.message}</h1>
</div>

