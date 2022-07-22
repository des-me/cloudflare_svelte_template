import fs from 'node:fs';
console.log("post processing: fixing codegen files")

function operations() {
    let contents = fs.readFileSync('src/lib/graphql/generated/operations.ts').toString()
    contents = `/* eslint-disable @typescript-eslint/ban-types */\n` + contents.replace(`import { DocumentNode } from 'graphql';`, `import type { DocumentNode } from 'graphql';`)
    fs.writeFileSync('src/lib/graphql/generated/operations.ts', contents)
}
function resolverTypes() {
    let contents = fs.readFileSync('src/lib/graphql/generated/resolver-types.ts').toString()
    contents = `/* eslint-disable @typescript-eslint/ban-types */\n` + contents.replace(`import { GraphQLResolveInfo } from 'graphql';`, `import type { GraphQLResolveInfo } from 'graphql';`)
    fs.writeFileSync('src/lib/graphql/generated/resolver-types.ts', contents)
}
operations()
resolverTypes()
console.log("post processing: done!")