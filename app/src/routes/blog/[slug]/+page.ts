/** @type {import('./$types').PageLoad} */
import { graphqlQuery } from "$lib/ts/query";

export async function load({ fetch, params }) {
    const query: string = `
      query {
        post: post_by_id(id: "${params.slug}") {
            title
            body
            date_created
            banner
        }
      }
    `
    const response = await graphqlQuery(query);
    if (response.ok) {
        const post = await response.json();
        return post.data;
    }
}
