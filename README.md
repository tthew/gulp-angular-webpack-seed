# gulp-angular-webpack-seed

[![Build Status][2]][1]

  [1]: https://travis-ci.org/tthew/gulp-angular-webpack-seed
  [2]: https://travis-ci.org/tthew/gulp-angular-webpack-seed.svg

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

## Disclaimer

This is a WIP / Sandbox project and is in **no way** suggested to be any kind of 'best practice'. Expect breaking changes. Use wisely and at your own risk.

## Licence

The MIT License (MIT)

Copyright (c) 2014 Matt Richards

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
