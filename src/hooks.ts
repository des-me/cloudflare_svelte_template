import { prerendering } from '$app/env';
import executableSchema from '$lib/graphql/executable-schema';
import { ApolloClient, InMemoryCache } from '@apollo/client/core/index';
import { SchemaLink } from '@apollo/client/link/schema/index';
import type { GetSession, Handle, HandleError } from '@sveltejs/kit';
import Toucan from 'toucan-js';

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.session = {
    ipAddress: prerendering ? 'prerendering' : event.clientAddress,
    source: event.url.toJSON()
  }

  event.locals.apolloClient = new ApolloClient({
		ssrMode: true,
		link: new SchemaLink({
			schema: executableSchema,
			context: { event }
		}),
		cache: new InMemoryCache()
	});


  if (event.platform) {
    const platform = event.platform
    const sentry = event.locals.sentry = new Toucan({
      dsn: 'https://d62d22004fe243629dd86e3e4396ae3c@o1329993.ingest.sentry.io/6592356',
      context: platform.context, 
      request: event.request,
      allowedHeaders: ['user-agent'],
      allowedSearchParams: /(.*)/,
    });

    sentry.setUser(event.locals.session)
    sentry.addBreadcrumb({
      category: 'trace',
      level: 'info',
      message: 'Initialize'
    })
  }

  try {
    return await resolve(event)
  } catch (e) {
    if (event.locals.sentry) {
      event.locals.sentry.captureException(e);
    }
    throw e
  }
};

export const getSession: GetSession = async (event) => {
  return event.locals.session
}

export const handleError: HandleError = async ({ error, event }) => {
  if (event.locals.sentry) {
      event.locals.sentry.captureException(error);
  }
};