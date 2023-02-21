/** @type {import('./$types').PageLoad} */
import { graphqlQuery } from "$lib/ts/query";

export async function load({ fetch, params }) {
    const query = `
      query {
        post {
          id
          title
          date_created
        }
      }
    `
    const response = await graphqlQuery(query);
    if (response.ok) {
        const post = await response.json();
        return post.data;
    }
}
