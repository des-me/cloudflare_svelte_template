import graphql from '@rollup/plugin-graphql';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), graphql()]
};

export default config;
