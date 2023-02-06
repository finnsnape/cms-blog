<script>
  import "$lib/scss/app.scss";
  import Header from "$lib/components/general/Header.svelte";
  import Footer from "$lib/components/general/Footer.svelte";
</script>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
    }
</style>

<Header />
<div class="container">
    <slot />
</div>
<Footer />
