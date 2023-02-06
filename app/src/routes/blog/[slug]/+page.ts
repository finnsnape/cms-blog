/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const response = await fetch("http://localhost:8055/graphql", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
	               post: post_by_id(id: "${params.slug}") {
                      title
                      body
                      date_created
                      banner
	               }
                }
            `
        })
    });
    if (response.ok) {
        const post = await response.json();
        return post.data;
    }
}
