# Next.js Starter App for Netlify

## Overview

This README will guide you in getting up and running with Next.js starter app with authentication [NextAuth.js](https://next-auth.js.org/) and deployed on Netlify. Immediately, you can allow users to sign up or login to your app, including a built-in admin panel with a users table (powered by [PlanetScale](https://planetscale.com)).

We have configured this template for you to one-click deploy directly to Netlify. Alternatively, you can manually deploy to your choice of hosting platform for Next.js applications. For more information on why we created this starter app, read me more in our [blog post](https://planetscale.com/blog/nextjs-netlify-planetscale-starter-app).

[🖼 Live Demo](https://nextjs-planetscale-starter.netlify.app/)

![Example login screen](https://cdn.sanity.io/images/f1avhira/production/9767f106ce5d17f93054ba6ee8a930c546283348-2874x1586.png)

## 🥞 Stack

- Framework - [Next.js v12](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org/)
- Auth - [NextAuth.js](https://next-auth.js.org/)
- Database - [PlanetScale](https://planetscale.com)
- ORM - [Prisma](https://prisma.io)
- Hosting - [Netlify](https://netlify.com)
- Styling - [TailwindCSS](https://tailwindcss.com)

## Getting Started

To follow along with this guide, you'll need the following:

- A [free PlanetScale account](https://auth.planetscale.com/sign-up)
- The [PlanetScale CLI](https://github.com/planetscale/cli#installation)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Node (LTS)](https://nodejs.org/en/)
- A [free Netlify account](https://app.netlify.com/signup)

### One-click Deploy with Netlify (recommended)

The one-click deploy button allows you to connect Netlify to your GitHub account to clone the nextjs-planetscale-starter repository and automatically deploy it. Be sure to sign up for a Netlify account before clicking the deploy button.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/planetscale/nextjs-planetscale-starter)

Once you click the button, you'll be taken to Netlify’s direct deploy page with the pre-built project’s repository passed as a parameter in the URL. Click the "Connect to GitHub" button to authorize access.

Next, you'll be asked to configure your site variables. For the Secret value, navigate to [https://generate-secret.now.sh/32](https://generate-secret.now.sh/32) to generate a secret and then paste that in. You can leave the Database URL and NextAuth URL values blank for now. Click "Save & Deploy".

Your site will take about a minute to build and then you'll be taken to a settings page. A unique Netlify URL will be generated for the project. You can click that now to see your live site!

**Important:** Once the site is deployed, [follow these steps](https://docs.planetscale.com/tutorials/nextjs-planetscale-netlify-template) to get your PlanetScale database up and running. 

> Note: If you do not follow the steps to get your database set up, you will see a 500 error on your live site.

## Admin accounts

Admin accounts have access to `/admin`, which contains a user dashboard (powered by PlanetScale). This dashboard is a great starting place to build out an admin dashboard for your app.

![Example users table](https://cdn.sanity.io/images/f1avhira/production/e2f1b5c5d47887315b2fa17f4039ee9c638e798e-2876x1588.png)

## Caveats

This application is close to production ready, but there are a few things you will need to consider and implement.

#### What's not in this starter app?

- **Email Sending & Password Resets:**
We've left this implementation up to the user because we did not want to make adding an email provider a requirement. The default `VerificationToken` schema has the basics required for implementing sign up verification, or password reset requests.
- **API Security:** Although NextAuth.js can be used for authentication, it does not provide authorization out of the box. The application comes with and example of protecting API routes using NextAuth.js. It does not cover things like making sure only administrators can access certain routes or making sure that only a user is able to update their account. 
- **Multiple admin accounts**
