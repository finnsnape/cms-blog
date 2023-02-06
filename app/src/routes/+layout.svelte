<script>
  import "$lib/scss/app.scss";
  import Header from "$lib/components/general/Header.svelte";
  import Footer from "$lib/components/general/Footer.svelte";
</script>

<Header />
<slot />
<Footer />
