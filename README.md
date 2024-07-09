
# Diffuse Design System of hytag

Diffuse is a Design System built with React.

## Stack

This project uses Yarn, JavaScript, Storybook, Sass, Styled Components, React.

Maybe you want to read about them:

- [Yarn](https://classic.yarnpkg.com/en/docs/getting-started)
- [JavaScript](https://www.javascript.com/)
- [Storybook](https://storybook.js.org/)
- [Sass](https://sass-lang.com/)
- [Styled Components](https://styled-components.com/)
- [React](https://reactjs.org/)

This project also uses [Husky](https://github.com/typicode/husky) to prevent commit and push messy and wrong code.

## Overview

This project contains shareable styles of components, UI Components using React and Storybook's presentation and build configs need to stay here.

## Commands

#### Install
```sh
yarn install
```
#### Run storybook library

```sh
yarn storybook
```

## Running the local Project

- To test on a project that is consuming our package we can run our project with
``` sh
yarn run build:npm:watch
```

- To be exposed as a local package
``` sh
npm link
```

- In the project that consumes this package we will run the command
``` sh
npm link diffuse-ds
```

## Publish in NPM

- To prepare your package to be published:
``` sh
yarn build:lib
```

- If you haven’t already, sign-up to npm. 
- Go into your terminal.
``` sh
npm login
```

``` sh
npm publish
```


## 📝 License

Copyright © 2022
