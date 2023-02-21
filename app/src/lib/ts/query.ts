export async function graphqlQuery(query: string) {
  return await fetch("http://localhost:8055/graphql", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    });
}