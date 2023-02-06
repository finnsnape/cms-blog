<script>
  /** @type {import('./$types').PageData} */  export let data;
console.log(data);
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.body}</div>