import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = (event) => {
    console.log('pong')
    return {
        status: 200,
        body: 'pong'
    }
}