---
title: Opt-Out Zone.js
short_description: The implications of working with angular without Zone.js
description: The implications of working with angular without Zone.js
slug: opt-out-zonejs
link: /courses/angular/change-detection/zonejs-opt-out
code: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/07_change-detection/07_zonejs-opt-out/example
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
---

Angular has different change detection strategies that we can use.  
By default angular ships with automatic change detection - In this mode angular we trigger change detection often, on all the components from top to bottom.  
The default automatic change detection is slow and will calculate the template values more then it should.  
You can improve the performance by moving to the `OnPush` change detection strategy.  
In this cd mode the component will be marked as dirty when the following happens:

- Event
- Calling `ChangeDetectorRef.detectChanges()` or `ChangeDetectorRef.markForCheck()`
- When `@Input` is changing
- when using the `async` pipe

In fact we highly recommend to not use the default automatic cd, and atleast move to the `OnPush` strategy, you can set angular to create components by default in the `OnPush` cd by changing the following in `angular.json` file:

```json
{
	...
	"schematics": {
		"@schematics/angular:component": {
			"changeDetection": "OnPush",
			"style": "none"
		}
	},
}

```

In this lesson we will learn about the most performent change detection strategy - Opting out Zone.js and working with angular in zoneless mode.

## Change detection strategies

There are actually 3 change detection strategies, and you can combine them together.

- Automatic
- Semi automatic - OnPush
- Manual - Zoneless

and you can also combine them, for example you can keep zone.js and run part of your component tree in zoneless and the other part in `OnPush`, I call this mode - **Hybrid Mode** where you combine the 3 basic change detection strategies.  
The hybrid mode is really useful if you are in the `OnPush` strategy and want to improve the performance of your app, so you want to go zoneless, but since it's a big step you want part of the component tree to be zoneless and then gradually increase the part of your component tree that runs zoneless

## Why zoneless is faster

There are a few reasons why going zoneless is faster

- CD will run less
- CD will run on fewer components
- CD runs manually
- CD runs synchronously using `ChangeDetectorRef.detectChanges()`
- bundle size is smaller
- Bootstrap is faster
- No need to wait for zone.js to initiate triggering of CD

## Faster but at what cost?

When we move from one change detection strategy to the other, there are certain rules we have to keep in mind.  
Transition from the default automatic CD to the `OnPush` strategy came with some cost of learning a few rules and managing the state of our app with those rules, this for example made us utilize the `async` pipe for managing most of the transformation in an `OnPush` strategy.  
The same applies for the `zoneless` angular app.  
The rules here are simple, the only thing that cause CD to happen is simply a call to `ChangeDetectorRef.detectChanges()` calling it directly in your component, or using some kind of directive or pipe that calls it indirectly.  
This basically means the following cons:

- `async` pipe has to be replaced with `ngrxPush` pipe
- Events will not trigger CD
- Changes between components in the tree has to be done with `Observable` or `Subject`
- Libraries that depends on Events triggering CD will not be supported in zoneless

## How to remove Zone.js

## The big problem: support for 3rd party libraries

## How much do I save in bundle size

## ngrxPush pipe

### Build with Zone.js

To examine the bundle size we will try to build with and without **Zone.js**.  
First let's start by building with **Zone.js**

```bash
> npx ng build --prod
```

```
Initial Chunk Files               | Names         |       Size
main.6234d3e5617c10397452.js      | main          |  133.75 kB
polyfills.e06d9d493fac0c3c5585.js | polyfills     |   35.96 kB
runtime.315239b3fbf8a1993bb9.js   | runtime       | 1021 bytes
styles.31d6cfe0d16ae931b73c.css   | styles        |    0 bytes
```

The total bundle size is **170.731 KB**

### Build without zone.js

To remove Zone.js, edit the file: `src/polyfills.ts` and comment the zone.js import:

```typescript
// import 'zone.js';  // Included with Angular CLI.
```

Also in the `main.ts` you will need to bootstrap the application without zone.js

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZone: 'noop',
  })
  .catch((err) => console.error(err))
```

Let's try and build the app and examine the bundle size:

```
> npx ng build --prod
```

```
Initial Chunk Files               | Names         |      Size
main.922e9fce5de025fd96db.js      | main          | 133.77 kB
runtime.3bfb8e14354e489e0296.js   | runtime       | 847 bytes
polyfills.48eb4740a0a1c2832fa0.js | polyfills     | 112 bytes
styles.31d6cfe0d16ae931b73c.css   | styles        |   0 bytes
```

The bundle size is smaller in size, total bundle size is: **134.729 KB**

The difference in bundle size when you build without **Zone.js** is around **36 KB**

## Too many manually calls for detectChanges

The fact that you will have to manually call `detectChanges` whenever you want the DOM to reflect your changes, means you will have to call it a lot, and it's a difficult way to manage your app like this.  
When we work with the `OnPush` strategy, the way we managed the changes was mostly with the `async` pipe.  
The `ngrx` team released the package: `@ngrx/component` which contain helpers to help you manage an angular zone-less application.  
Among those tools is a pipe that we can use instead of the `async` pipe, to display Observable, Subject values, but unlike the `async` pipe, this pipe is aware if you are working in a zone-less app, and will call `detectChanges` for you when the Observable will change.  
To work in a zone-less mode using that pipe will help you manage the state of your components, and render when needed.

To install the package:

```bash
> npx ng add @ngrx/component@latest
```

After the package is installed we can now use the pipe like so:

```typescript
import { Component } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{ counter$ | ngrxPush }}
    </p>
  `,
})
export class ChildComponent {
  counter$ = new BehaviorSubject(1)
}
```

## Manage State

In a zone-less angular app you will want to pass data to the template using Observables, Subject, BehaviorSubject, and using the `ngrxPush` pipe, creating too many of those Observables and managing the state of your component with them can be cummbersome as well, we have an entire chapter about `ngrx` where we explore two packages that can help you get your state as Observable.  
One is `@ngrx/store` which is global app state, and the other is `@ngrx/component-store` for local component subtree state.  
Those packages can help you manage state where you get the data as `Observables` and can subscribe to their content via `ngrxPush` without the need to worry about change detection too much.
