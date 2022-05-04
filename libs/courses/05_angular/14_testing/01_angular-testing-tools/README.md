---
title: Testing tools supplied with @angular/cli
description: When you start a new angular project using @angular/cli, some testing tools are already setup for you.
slug: testing-tools
link: /courses/angular/testing/testing-tools
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
logo: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/logo.svg
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

When you start a new angular project using `@angular/cli`, you get some nifty testing tools that are already set-up for you by `@angular/cli`.  
In this lesson we will go over those tools, and in this chapter we will focus on writing tests using those tools.

But first let's start a new angular project with the command:

```bash
> npx @angular/cli new testing-tools-example
```

## Unit testing tools

`@angular/cli` already set up tools for unit testing your angular components, directives, and services.  
Let's briefly go over those tools, we will later have a more thorough lesson about them.  

### Jasmine

[Jasmine](https://jasmine.github.io/) is a framework for writing tests, it contains functions like:
- `describe`
- `it`
- `expect`

which you can use to write your tests.

`@angular/cli` already supplied you with a test example written using `Jasmine`, you can examine the test file located at `src/app/app.component.spec.ts`.  
In fact the project is setup so every file that ends with `*.spec.ts` is a test file

### Karma

[Karma](https://karma-runner.github.io/) is a test runner.  
It can take the tests you write with `Jasmine` and run them on the browser.

### Running the tests

You can run the unit tests with the following command:

```bash
> npx ng test
```

A browser will open when we can examine the components, and use the chrome developer tools to place breakpoints and examine our component.

# E2E Testing
