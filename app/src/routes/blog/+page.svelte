<script lang="ts">
    /** @type {import('./$types').PageData} */  export let data;
    console.log(data);
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        align-self: center;
    }

    h1 {
        margin-top: $size-040;
    }

</style>

<div class="wrapper stack-recursive">
    <h1 class="heading-1">Posts</h1>
    {#each data.post as post }
    <div>
        <a href="/blog/{post.id}"><h2>{post.title}</h2></a>
    </div>
    {/each}
</div>
