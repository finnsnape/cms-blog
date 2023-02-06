<script>
  /** @type {import('./$types').PageData} */  export let data;
</script>

<h1>{data.post.title}</h1>
<img src="http://localhost:8055/assets/{data.post.banner}" alt="">
<div>{@html data.post.body}</div>