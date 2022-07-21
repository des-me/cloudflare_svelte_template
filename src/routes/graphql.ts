import resolvers from '$lib/graphql/resolvers';
import { createServer } from '@graphql-yoga/common';
import typeDefs from '$lib/graphql/schema.graphql';
import type { RequestEvent } from '@sveltejs/kit';

const yogaApp = createServer<RequestEvent>({
	schema: {
		typeDefs,
		resolvers: resolvers
	},
	graphiql: {
		endpoint: '/graphql'
	}
});

export async function GET(event: RequestEvent) {
	return yogaApp.handleRequest(event.request, event);
}

export async function POST(event: RequestEvent) {
	return yogaApp.handleRequest(event.request, event);
}
