import type { RequestEvent } from '@sveltejs/kit';
import type { Resolvers } from './generated/resolver-types';

const resolvers: Resolvers<RequestEvent> = {
	Query: {
		hello: (parent, args, context, info) => {
            console.log(`request from ${context.clientAddress}`)
			return 'Hello world';
		}
	}
};

export default resolvers;
