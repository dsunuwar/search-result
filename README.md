
# Introduction

Please note this is not the main app directory. 
In order to run the project, cd into hotels directory.
Please check README file for getting started.

## Project Structure

```text

[hotels]
    |- .vscode  // vscode extension and settings
    |- app
    |   |- lib  // mock data, util functions, data type definitions
    |   |- ui   // both react client components, next.js server component, unit tests
    |   |- layout.tsx   // default 
    |   `- page.tsx // main entry file similar to index
    |- public   // assets
    |- package.json
    |- .nvmrc   // node version used for this project development
    |- .gitignore   // let git know what not to track
    |- .prettierrc   // let IDE know this project uses prettier for code formatting
    |- .prettierignore   // let prettier know what not to format
    |- jest.config.ts   // unit config using jest
    `- README.MD

```

## Project boilerplate setup

I've chosen to use [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app), a Next.js CLI to generate base app instead of [create-react-app](https://create-react-app.dev/docs/getting-started/) which is now is deprecated.

Next.js framework allows to build front end first and progressively build backend as needed.

## Code organization

I've followed similar structure as Next.js, but co-located test files along with source file. This is common pattern in React development. Because, it’s easier to locate test files compared to keeping them separately from source file.

## File naming conventions

I've followed Next.js convention. Because, both server components and client components are co-located. So, this approach keeps naming convention simple and clean.

## Code standard

I’ve used standard prettier tool for formatting the code. I’ve also saved the vs code extension and settings in the project itself. This allows peers to use same formatting rules, thus promoting consistency. Consistent formatting leads to clean diffs during pull request generation and code commits.  

## Node version

I’m using node version v18.19.1 to build this project. So, to ensure correct version of node use, please run:
`nvm use`
