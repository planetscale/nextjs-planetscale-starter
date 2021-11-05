# nextjs-planetscale-starter

https://docs.planetscale.com/reference/secure-connections
https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-integrity
https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database
https://www.prisma.io/docs/guides/database/seed-database

https://tailwindui.com/
http://tailwindcss.com


https://nextjs.org/docs/api-reference/next/server
https://nextjs.org/docs/api-reference/edge-runtime


https://www.npmjs.com/package/node-jose-tools
https://next-auth.js.org/errors#jwt_session_error
https://github.com/nextauthjs/next-auth/issues/484
https://next-auth.js.org/configuration/options#json-web-token-options


## Getting Started
1. Start planetscale instance 
2. Start second planetscale instance for shadow database
3. Fill in local environment variables for database urls
4. Fill in local environment variables for NEXTAUTH_URL and BASE_URL
5. Run `yarn install`
6. Run `yarn db:migrate`
7. Run `yarn db:seed`
8. Run `yarn dev`