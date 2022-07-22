/// <reference types="@sveltejs/kit" />

interface Emitters {
	emitCount(value: number): void
}

interface Context {
	respondWith(response: Promise<Response>|Response): void;
	waitUntil(promise: Promise<unknown>): void;
	passThroughOnException(): void
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	import type Toucan from "toucan-js";
	import type { ApolloClient } from "@apollo/client/core";

	interface Env {
		TODOLIST: KVNamespace
	}
	interface Locals {
		session: App.Session
		sentry: Toucan,
		apolloClient: ApolloClient
		emitters: Emitters
	}
	interface Platform {
		request: Request
		env: Env
		context: Context
	}
	interface Session {
		ipAddress: string
		source: string
	}
	// interface Stuff {}
}
