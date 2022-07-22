import { browser } from '$app/env';
import type { RequestEvent } from '@sveltejs/kit';
import type { Resolvers, Todo } from './generated/resolver-types';

function updateList(event: RequestEvent, list: Todo[]) {
	const kv = event.platform.env.TODOLIST;
	event.platform.context.waitUntil(kv.put('default', JSON.stringify(list)));
}


async function getList(event: RequestEvent) {
	const kv = event.platform.env.TODOLIST;
	let list = await kv.get<Todo[] | null>('default', {
		type: 'json'
	});
	if (!list) {
		list = [];
		updateList(event, list)
	}
	return list;
}

export interface ResolverContext {
	event: RequestEvent;
}

const resolvers: Resolvers<ResolverContext> = {
	Query: {
		async todos(_parent, _args, context) {
			const list = await getList(context.event);
			return list;
		}
	},
	Mutation: {
		async createTodo(_parent, args, context) {
			const list = await getList(context.event);
			const todo = {
				id: crypto.randomUUID(),
				title: args.title,
				description: args.description
			};
			list.push(todo);
			updateList(context.event, list)
			return todo;
		},
		async updateTodo(_parent, args, context) {
			const list = await getList(context.event);
			const todo = list.find(i => i.id === args.id)!
			todo.title = args.title
			todo.description = args.description
			updateList(context.event, list)
			return todo
		},
		async deleteTodo(_parent, args, context) {
			const list = await getList(context.event);
			const todo = list.find(i => i.id === args.id)!
			const filtered = list.filter(i => i.id !== args.id)
			updateList(context.event, filtered)
			return todo
		}
	}
};

export default resolvers;
