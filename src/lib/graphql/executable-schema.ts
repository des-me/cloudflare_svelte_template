import resolvers from '$lib/graphql/resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from '$lib/graphql/schema.graphql';
import type { RequestEvent } from '@sveltejs/kit';

const executableSchema = makeExecutableSchema<{ event: RequestEvent }>({
	typeDefs,
	resolvers
});

export default executableSchema