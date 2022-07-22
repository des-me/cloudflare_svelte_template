<script lang="ts">
import { getSdkApollo } from "$lib/graphql/sdk";
import getClient from "$lib/graphql/browserClient";
    export let todos: any
    const client = getClient()
    const sdk = getSdkApollo(client);

    async function handleOnSubmit(event) {
        event.preventDefault();
        const todo = {
            title: event.target.elements.title.value,
            description: event.target.elements.description.value
        }
        const result = await sdk.CreateTodo(todo)
		console.log("Done!", result)
	}
</script>

<h1>Welcome to SvelteKit</h1>

<h2>Todo list</h2>
<pre>{JSON.stringify(todos, null, 2)}</pre>

<h3>Create todo</h3>
<form on:submit={handleOnSubmit}>
    <label>Title</label>
    <input name="title" type="text" />
    <label>Description</label>
    <input name="description" type="text" />
    <button type="submit">Submit</button>
</form>

<pre>{JSON.stringify(todos)}</pre>