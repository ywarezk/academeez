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

The `@ngrx/store-devtools` package, allows you to inspect the state in the store, and understand exactly how the state reached it's current value.

To install `@ngrx/store-devtools`:

```bash
> npx ng add @ngrx/store-devtools@latest
```

Examining the state is done with a chrome extension.  
Install the following extension:

[redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

Open the chrome developer tools and you should see a new `Redux` tab where you can examine ngrx store.


## AppModule state

`AppModule` will add the following to the state:

```typescript
{
  user: {
    firstName: 'academeez',
    lastName: 'Open Source code learning'
  }
}
```

The `AppModule` maintains a user in the state.

## LayoutModule state

we will create an eagerly loaded module called `LayoutModule`, which will add the following to the state.

```typescript
{
  user: {
    firstName: 'academeez',
    lastName: 'Open Source code learning'
  },
  layout: {
    menu: [
      'home',
      'about',
      'blog'
    ]
  }
}
```

## Lazy load state data

Data in the state should be lazy loaded to reduce memory consumption.  
This lazy loaded module will only be available after route transition to the url `/lazy`.  
It will add the following to the state:

```typescript
{
  ...
  lazy: {
    books: [
      {id: 1, title: 'some book 1'},
      {id: 2, title: 'some book 2'}
    ]
  }
}
```

## Examining the Store service

### Store is a singleton.  

Store is a service which is added to the root module injector when you add to the `AppModule` `imports` array the line:

```typescript
@NgModule({
  ...
  imports: [
    StoreModule.forRoot(...)
  ]
})
export class AppModule {}
```

### Store is an Observable

The `Store` service extends `Observable`

```typescript
@Injectable()
export class Store<T = object> extends Observable<T> implements Observer<Action>
{
  ...
}
```

The Store emits the `state` every time it gets a new state (remember that the state is immutable).  

it also implements a few `Subject` methods `implements Observer`, like `next`, `error`, `complete`, where `next` is similar to `dispatch` and `error`, `complete` allows you to close the `Store` observable, but those methods are not often used so they will not be our main focus (not referring to `dispatch` where we will focus on upcoming lessons).  
The fact that the `Store` is an observable means that we can utilize all of `rxjs` operators to manipulate the state and read the exact content that we desire in the component.

Let's take advantage of the `Observable` fact and use what we know about operators to read the content of the state in the `Store`

On the next lesson we will cover more thoroughly about the proper way to read the store content.

### Summary

