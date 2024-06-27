[![codecov](https://codecov.io/github/2280727/DVT-senior-role-challenge/graph/badge.svg?token=N615D9VBK0)](https://codecov.io/github/2280727/DVT-senior-role-challenge)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project description
This was a challenge I got from DVT for a front-end opportunity,
this challenge was set out to help them understand my proficiency over a number of facets of development.

Some of these are
- Good commit & branching conventions
- Handling of network requests
- Typescript
- Routing
- State management
- Framework (Angular or React) conventions
- Semantic HTML
- CSS and general ability to produce a polished end result  - responsiveness is low priority, but appreciated

## Problem statement 
We're asking you to build a basic storefront using [[https://fakestoreapi](https://fakestoreapi.com/)](Fake Store API)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You might need to install packages first

```bash
npm install
# or
yarn 
# or
pnpm install
# or
bun install
```

## packages abd dependencies

# Handling Network Request 
I created an API service using [https://www.axios.com](axios),
which will be a medium for all requests, in the app.
Then to handling request, I used [https://tanstack.com/query/latest/docs/framework/react/overview](react query)
to simplify data fetching and caching. 

# Handling Styling of the app
To simplify the development process I opted for [https://tailwindcss.com](Tailwind),
and used tailwinds mobile first approch to ensure seamless responsiveness

# Handling global state management 
I used [https://jotai.org](Jotai), because its lightweight and flexible, making it easy to set up.
This is a simple project, I saw no need for a complex management system like redux.

# Routing 
This project uses the recent updated NextJS app router, that handles routing simple in a seamless way. 

