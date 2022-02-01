---
title: Code Coverage
short_description: Percentage of the code lines that are covered by tests.
description: Percentage of the code lines that are covered by tests.
slug: code-coverage
link: /courses/angular/testing/unit-tests/code-coverage
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
logo: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/logo.svg
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

# Run tests

Run tests

```
> npx ng test
```

- place breakpoints

- run tests with code coverage

```
> npx ng test --no-watch --code-coverage
```

- create more methods in the `app.component.ts` and see how the coverage drops.

- set threshold in the `karma.conf.js`

```js
coverageReporter: {
  dir: require('path').join(__dirname, './coverage/example'),
  subdir: '.',
  reporters: [
    { type: 'html' },
    { type: 'text-summary' }
  ],
  check: {
    global: {
      statements: 70,
      branches: 70,
      functions: 0,
      lines: 70
    }
  }
},
```

- the coverage summary will specify the following:

## Statement

- an expression produces a value.
- statement preforms an action like if and for.

for example react in the curly brace expects an expression.

## branch

when you use if or other conditions it creates a branch.  
This check if your tests are hitting all the branches if no there is an if or else that are uncovered.

## Functions

functions including class methods

## lines

which lines of code are being hit
