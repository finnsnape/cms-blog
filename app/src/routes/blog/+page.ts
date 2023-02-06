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
	               post {
                      id
                      title
                      date_created
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
