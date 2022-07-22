import helixFlare from 'helix-flare';
import type { RequestEvent } from '@sveltejs/kit';
import executableSchema from '$lib/graphql/executable-schema';
import type { ResolverContext } from '$lib/graphql/resolvers';

async function handler(event: RequestEvent) {
	return await helixFlare<ResolverContext>(
		event.request,
		executableSchema,
		{
			contextFactory: () => {
				return { 
					event
				};
			}
		}
	);
}

export const GET = handler;
export const POST = handler;
