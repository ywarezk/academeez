---
title: Universal/Isomorphic javascript code
short_description: Isomorphic javascript code can be run by a server running Node.js as well as a web browser.
description: Isomorphic javascript code can be run by a server running Node.js as well as a web browser.
slug: universal-isomorphic-code
link: /courses/angular/angular-universal-ssr/universal-isomorphic-code
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

Isomorphic Javascript or Universal Javascript, is javascript code that can run on multiple platforms like: browser and node.  

Today Javascript is used not only in Browsers. We run javascript with Node.js to create backend apps, We run javascript with react-native to building mobile apps, we can use javascript to build desktop apps and of course web apps.  
Whomever is running Javascript we call platform. For example Node.js is a platform, Browser is a platform and so on.  
Angular is platform agnostic which means it can run on multiple platforms, angular can run both on Node and also on the browser as well.
Universal javascript code in our case is code that can run both on the browser and on Node.js in the server side.  
You see each platform is running javascript with small differences.
For example: the browser has an object called `document` through which one can access the DOM, however Node.js does not have the `document` object since there is no DOM in the server side.
So a code using document will only be able to run on the browser, and since universal code can run both on the browser and on Node.js that is not universal code.  
An easy solution can be something like this:

```javascript
if (typeof document !== "undefined") {
    console.log("we are in the browser do something with document");
} else {
    console.log("we are in Node.js there is no document");
}
```

placing a condition before using an exclusive browser API will again make the code universal again, since in Node.js we simply have a fallback without using `document`.


Creating an app which in Server Side Rendered, will mean the code you write will have to run on a server running Node.js as well.
This has direct implications on the code, that is why it is important to know from the get go if you need your application to be server rendered or not.  
Also bare in mind that writing your entire app in universal code is obviously harder, you will have to form conditions before using browser API, but also you will have to form conditions around certain libraries.
If a certain library is using some browser only API, that library might crash your server side rendered. For example if your app is using [JQuery](https://jquery.com/) (in general might be best to avoid if possible the usage of jQuery in angular application) than `jQuery` is using browser only API and cannot run in the Node.js section.  
There will be times that simply doing an import to a library that is not universally supported will create you angular app to crash on the Node.js part, so you will have to use dynamic import to place a condition around an import.
More on that later on but the important thing to notice here is the added complexity in your app.
Developing your app with isomorphic code with be more complex and will require more time.
