import { ApolloClient, InMemoryCache } from '@apollo/client/core/index';

const cache = new InMemoryCache();

const client = new ApolloClient({
	cache: cache,
	uri: `/graphql`
});

export default client;