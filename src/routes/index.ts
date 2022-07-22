import { getSdkApollo } from "$lib/graphql/sdk";
import type { RequestEvent } from "@sveltejs/kit";

export async function GET(event: RequestEvent) {
    const sdk = getSdkApollo(event.locals.apolloClient);
    const getTodosQuery = await sdk.GetTodos({})
    return {
        status: 200,
        headers: {},
        body: {
            todos: getTodosQuery.todos
        }
    }
}