# Next.js Starter App for Netlify

## Overview

This README will guide you in getting up and running with Next.js starter app with authentication (NextAuth.js) and deployed on Netlify. Immediately, you can allow users to sign up or login to your app, including a built-in admin panel with a users table (powered by PlanetScale).

We have configured this template for you to one-click deploy directly to Netlify. Alternatively, you can manually deploy to your choice of hosting platform for Next.js applications. For more information on why we created this starter app, read me more in our [blog post]().

[🖼 Live Demo](https://nextjs-planetscale-starter.netlify.app/)

![Example login screen](https://cdn.sanity.io/images/f1avhira/production/9767f106ce5d17f93054ba6ee8a930c546283348-2874x1586.png)

## 🥞 Stack

- Framework - [Next.js v12](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org/)
- Database - [PlanetScale](https://planetscale.com)
- ORM - [Prisma](https://prisma.io)
- Hosting - [Netlify](https://netlify.com)
- Styling - [TailwindCSS](https://tailwindcss.com)

## Getting Started

### One-click Deploy with Netlify (recommended)

The one-click deploy allows you to connect Netlify to your GitHub account to clone the `nextjs-planetscale-starter` repository and deploy it automatically. Be sure to go to [Netlify](https://app.netlify.com/signup) and sign up for an account before clicking the deploy button.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/planetscale/nextjs-planetscale-starter)

By clicking the above button, you will be navigated to the Netlify’s direct deploy page with the project’s repository passed as parameters in the URL. Click the **Connect to GitHub** button, name your repository, fill in the secret (for NextAuth.js), and Save & Deploy. 

Once the site is deployed, you **must** to set up your PlanetScale database that is working behind the scenes. These are the following steps required to do that: 

**Prerequisites:**
A PlanetScale account, [PlanetScale CLI](https://github.com/planetscale/cli#installation), and [Yarn](https://yarnpkg.com/getting-started/install)

1. Create a PlanetScale database and create a `shadow` branch (More info: [How to create a branch docs](https://docs.planetscale.com/concepts/branching#create-a-development-branch))
2. In your local development environment where you have the PlanetScale CLI installed, `git clone` the repo Netlify created for you for your app when you clicked the **Deploy to Netlify** button. (If you haven't clicked the button, see the button in the section above.)
3. Connect to your PlanetScale database main branch locally: \
   `pscale connect <database-name> main --port 3309`
4. Connect to your PlanetScale database shadow branch locally: \
   `pscale connect <database-name> shadow --port 3310`
5. Copy the example .env file with `cp .env.example .env` and fill in local environment variables: \
   `DATABASE_URL="mysql://root@127.0.0.1:3309/<database-name>"` \
   `SHADOW_DATABASE_URL="mysql://root@127.0.0.1:3310/<database-name>` \
   `NEXTAUTH_SECRET=<secret>`, use https://generate-secret.now.sh/32 to create a secret 
6. Run `yarn install`
7. Run `yarn db:migrate`. After this step, your PlanetScale database is ready. 
8. (Optional) Run `yarn db:seed` if you want to seed your database with users.
9. Back in Netlify, now that your PlanetScale database is set up, you need to add two more environment variables (found in **Site settings** > **Build & deploy** > **Environment**): 
- `DATABASE_URL`, get this one from inside PlanetScale connect modal, Prisma dropdown and copy URL from snippet
- `NEXTAUTH_URL`, this URL is the same as your Netlify's app's URL, for example: `https://laughing-fermat-f171ce.netlify.app/`
10. Under Deploys, select the **Trigger deploy** button to build your app with the new environment variables. 

Your app should be ready for use now!

Once the site is rebuilt in Netlify, go to the `/admin/setup` page to create an admin account to get started. Right now, you will only be able to create one admin account through this flow. You will not be able to access `/admin/setup` after you create the admin account.

## Admin accounts

Admin accounts have access to `/admin`, which contains a user dashboard (powered by PlanetScale). This dashboard is a great starting place to build out an admin dashboard for your app.

![Example users table](https://cdn.sanity.io/images/f1avhira/production/e2f1b5c5d47887315b2fa17f4039ee9c638e798e-2876x1588.png)

## 

## Caveats

This application is close to production ready, but there are a few things you will need to consider and implement.

#### What's not in this starter app?

- **Email Sending & Password Resets:**
We've left this implementation up to the user because we did not want to make adding an email provider a requirement. The default `VerificationToken` schema has the basics required for implementing sign up verification, or password reset requests.
- **API Security:** Although NextAuth.js can be used for authentication, it does not provide authorization out of the box. The application comes with and example of protecting API routes using NextAuth.js. It does not cover things like making sure only administrators can access certain routes or making sure that only a user is able to update their account. 
