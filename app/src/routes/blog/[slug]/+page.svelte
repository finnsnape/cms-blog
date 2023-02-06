<script lang="ts">
    /** @type {import('./$types').PageData} */  export let data;
    function addClasses(body: string): string {
        const classMap = {
            "h2": "heading-2",
            "h3": "heading-3"
        }
        for (const [key, value] of Object.entries(classMap)) {
            body = body.replaceAll(`<${key}>`,`<${key} class="${value}">`);
        }
        return body;
    }

    function parseDate(date: string): string {
        const dateObject: Date = new Date(date);
        return dateObject.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    }

    data.post.body = addClasses(data.post.body);
    data.post.date_created = parseDate(data.post.date_created);
</script>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;
        align-self: center;
    }
</style>

<div class="wrapper stack-recursive">
    <img src="http://localhost:8055/assets/{data.post.banner}" alt="">
    <h1 class="heading-1 ch-xs">{data.post.title}</h1>
    <p>{data.post.date_created}</p>
    <div class="ch-xl paragraph-2">
        {@html data.post.body}
    </div>
</div>
