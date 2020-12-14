# Welcome to webpack-boilerplate 👋

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: papoddev](https://img.shields.io/twitter/follow/papoddev.svg?style=social)](https://twitter.com/papoddev)

> Customizable Boilerplate using Webpack 5, Babel, PostCSS and Sass with an active development server and an optimized production build.

## Install

```sh
npm install
```

## Usage

### Development server

```bash
yarn start
```

You can view the development server at `localhost:3000`.

You can view the bundle Analyzer server at `http://127.0.0.1:8888`.

### Production build

```bash
yarn build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [ESlint-(airbnb)](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky - pre-commit](https://typicode.github.io/husky/#/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Optimize and minimize JavaScript

## Authors

👤 **Matheus Benites**

* Website: [Blog](https://bit.ly/Papo-de-Dev)
* Twitter: [@papoddev](https://twitter.com/papoddev)
* Github: [@benits](https://github.com/benits)
* LinkedIn: [@benites-amorim](https://linkedin.com/in/benites-amorim)

👤 **Uellington Palma**

* Twitter: [@uell_palma](https://twitter.com/uell_palma)
* Github: [@uellpalma](https://github.com/uellpalma)
* LinkedIn: [@uell-palma](https://linkedin.com/in/uell-palma)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/benits/boilerplate-webpack-5/issues). You can also take a look at the [contributing guide](https://github.com/benits/boilerplate-webpack-5/blob/main/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

***
