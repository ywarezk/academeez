---
title: Redux Store
short_description: The Redux Store holds the current state.
description: The Redux Store holds the current state.
slug: store
link: /courses/angular/ngrx/store
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

In the previous lesson we learned about ngrx state.  
The state represents application memory held data, at a certain time point of our app.  
State in `NGRX` is represented by a simple, serialized JSON object.  
In this lesson we will learn about the service that holds the state: the `Store`.

## Installing

`@ngrx/*` supplies an easy installation commands for all of it's libraries.  
To install `@ngrx/store` run the following command.

```bash
> npx ng add @ngrx/store@latest
```

this will modify the root module `app.module.ts` and add the `StoreModule.forRoot` in the `imports` array of the `AppModule`.  
Every other module that wants to add data to the state will have to include in the imports array: `StoreModule.forFeature`.  
The required argument to supply those module creator functions is an object with the reducers, we will talk about reducers in a lesson later on.

## @ngrx/store-devtools


