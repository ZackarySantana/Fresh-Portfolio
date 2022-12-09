# Portfolio

My personal portfolio [demo](https://zackaryjamessantana.com)

-   [Installation](#installation)
-   [Development](#development)
-   [Deployment](#deployment)
    -   [Fly](#fly)
    -   [Locally](#locally)
-   [Runtime and Tools](#runtime-and-tools)
-   [Technologies](#technologies)
    -   [Frontend](#frontend)
    -   [Backend](#backend)

## Installation

Install [pre-reqs](#runtime-and-tools)

Then:

Run

```
git clone https://github.com/ZackarySantana/Portfolio.git portfolio
```

If it doesn't work, run

```
git clone git@github.com:ZackarySantana/Portfolio.git portfolio
```

Then make sure to cd (change directory) in to the folder

```
cd portfolio
```

<i>Make sure you have followed [installing and setting up fly](#fly)</i>

And deploy to the web with

```
fly launch
```

If you have already deployed it once, run

```
fly deploy
```

If either command fails, just run it again or message me for help!

For more info on deploying, head to [deploy with fly](#fly)

## Development

### `deno task dev` or `deno task dev-local`

`deno task dev-local` uses the local installation of Fresh with the latest updates (not necessarily a friendly build)

Runs the app in the development mode.<br>
The page will reload if you make edits.<br>

## Deployment

### Fly

Make sure to install [Fly.io](https://fly.io) (You don't need Docker to deploy this project!). You'll need to setup Fly by following their [docs](https://fly.io/docs/speedrun/).

### Locally

#### `deno task deploy`

Deno has no build step! This will start the app in production.

## Runtime and Tools:

To install:

-   [Git](https://git-scm.com/) (Installation)
-   [Visual Studio Code](https://code.visualstudio.com/) (Recommended code editor)
-   [Deno](https://deno.com/) (Only for local development)
-   [Flyctl](https://fly.io/docs/speedrun/) (Deployment)

If you have a mac, I recommend you install [homebrew](https://brew.sh/) and then run the following to install everything:

```
brew install git visual-studio-code deno flyctl
```

Don't have to install:

-   [Docker](https://www.docker.com/) (The project just uses this tool but you don't need it installed locally)

## Technologies:

No need to try installing these, these are installed automatically when running your app

### Frontend:

-   [Fresh](https://fresh.deno.dev/) - Main Framework
-   [TypeScript](https://www.typescriptlang.org/docs/) - Main language
-   [Twind](https://twind.dev/) - Used in all components
  -   [Tailwind](https://tailwindcss.com/) - What Twind compiles down to
-   [Preact.js](https://preactjs.com/) - Used in all components
  -   [React.js](https://reactjs.org/) - Preact.js tries to be a 'minified' version of React.js

### Backend:

-   [Fresh](https://fresh.deno.dev/) - Main Framework
