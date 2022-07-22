import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core/index';

const cache = new InMemoryCache();

export default function getClient() {
	const httpLink = new HttpLink({
		uri: '/graphql'
	});

	const client = new ApolloClient({
		cache: cache,
		link: httpLink
	});

	return client
}
