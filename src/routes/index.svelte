<script lang="ts">
import { browser } from "$app/env";

import { Hello } from "$lib/graphql/generated/operations";
    $: hello = browser ? Hello({}) : undefined
</script>

<h1>Welcome to SvelteKit</h1>

<pre>loading: {JSON.stringify($hello?.loading)}</pre>
<pre>data: {JSON.stringify($hello?.data)}</pre>
<pre>error: {JSON.stringify($hello?.error)}</pre>
<pre>errors: {JSON.stringify($hello?.errors)}</pre>