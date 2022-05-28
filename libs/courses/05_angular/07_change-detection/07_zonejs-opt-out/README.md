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

We can opt out of zone.js and run angular with manual change detection.

## Advantages of removing Zone.js

- fine tuning of when change detection should run would prevent unnecessary and redundent runs of change detection and by doing so will improve performance.
- Application bundle size is reduced from **188KB** to **152KB**
- Avoid Zone.js logic as well as the need to wait for `Application.tick` will improve performance
- Reduce the amount of components that change detection is triggered in them.

## Cons of removing Zone.js

- You will have to trigger change detection manually
- async pipe is not working

## build with zone.js

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

## Build without zone.js

To remove Zone.js, edit the file: `src/polyfills.ts` and comment the zone.js import:

```typescript
// import 'zone.js';  // Included with Angular CLI.
```

Also in the `main.ts` you will need to bootstrap the application without zone.js

```typescript
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZone: 'noop'
})
.catch(err => console.error(err));
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

## Change Detection zone-less

Let's cover what triggers change detection in a zone-less angular.  
All the things that triggered change detection in the `OnPush` strategy like:

- Events
- `@Input` change
- `Async` pipe
- `ChangeDetectorRef.detectChanges`, `ChangeDetectorRef.markForCheck`

The only thing that will work in zone-less mode is the `ChangeDetectorRef.detectChanges`, so zone-less means you are in full control of when to activate change detection and the change detection works always synchronously right away.  
Change detection will work on the component that called it, and traverse down the tree to the children of that component.  
If you want more control and just the component that called the `detectChanges` to be rendered you can set all the components to `OnPush`.  

## Too many manually calls for detectChanges

The fact that you will have to manually  call `detectChanges` whenever you want the DOM to reflect your changes, means you will have to call it a lot, and it's a difficult way to manage your app like this.  
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
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{ counter$ | ngrxPush }}
    </p>
  `,
})
export class ChildComponent {
  counter$ = new BehaviorSubject(1);
}
```

## Manage State

In a zone-less angular app you will want to pass data to the template using Observables, Subject, BehaviorSubject, and using the `ngrxPush` pipe, creating too many of those Observables and managing the state of your component with them can be cummbersome as well, we have an entire chapter about `ngrx` where we explore two packages that can help you get your state as Observable.  
One is `@ngrx/store` which is global app state, and the other is `@ngrx/component-store` for local component subtree state.  
Those packages can help you manage state where you get the data as `Observables` and can subscribe to their content via `ngrxPush` without the need to worry about change detection too much.

