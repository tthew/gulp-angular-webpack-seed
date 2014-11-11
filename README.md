# tthew-gulp-angular-webpack-seed

![Build Status](https://travis-ci.org/tthew/tthew-gulp-angular-webpack-seed.svg)

An Angular.js based Single Page Application seed.

Features:

- Modular design with the help of Webpack
- Stateful GUI utilising ui.router
- RESTful data consumption with Restangular
- I18n/l10n with angular-translate
- 'Atomic' Modules / Components
- Self-documenting project structure
- Build Environment using Gulp

## Prerequisites

- Node (~0.10)
- Npm
- Gulp
- Bower

### Installation

    > npm install && bower install

#### Running the development server

    > gulp serve

#### Running the test suite

    > gulp test

Or like this to run either `unit` or `e2e` tests in isolation:

    # Unit Tests
    > gulp test:unit

    # Integration Tests
    > gulp test:e2e
