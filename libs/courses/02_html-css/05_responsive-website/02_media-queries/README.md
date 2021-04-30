---
title: Media Queries
video_url: "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8"
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
img: https://en.wikipedia.org/wiki/React_(JavaScript_library)#/media/File:React-icon.svg
code: https://codesandbox.io/s/html-css-responsive-media-queries-vq646?file=/index.html
---


With **Media Queries** we can apply css rules on devices that match certain characteristics.  
A popular use case will be to give different styles for different screen size, for example I want to make a font bigger or smaller on smarphone devices.

Let's review a few popular examples...

## Different styles for different screen size

Media queries are an important aspect of making you web site responsive.  
It will allow us to give different styles for different device screen size.  
In the following example we set a `font-size` according to the width of the device.  
The font will be bigger on desktop, medium on tablets, and small on mobile devices.

Our HTML:

```html
<h1 class="responsive-heading">
  The font size will change depending on the screen size
</h1>
```

Our CSS

```CSS
.responsive-heading {
  font-size: 72px;
}

@media (max-width: 600px) {
  .responsive-heading {
    font-size: 36px;
  }
}

@media (min-width: 600px) and (max-width: 1200px) {
  .responsive-heading {
    font-size: 52px;
  }
}
```

In this example we set the `font-size: 72px` for large screens.  
For mobile screens with screen width up to `600px` the font size will be `36px`.  
For tablets with screen width greater then `600px` and smaller then `1200px` we set the `font-size: 52px`.  

With media queries we create conditions on the device.  
A condition can be device screen size, device type, orientation, etc.  
Conditions can also be combined with logical operators like `and, or, not`. 

You can view this example [here](https://codesandbox.io/s/html-css-responsive-media-queries-vq646?file=/style.css)

## Apply css file conditionally with @media queries

You can also use `@media` queries in combination with css `@import` or `<link>` or `<style>` tags to apply css to certain device which the `@media` queries are true for that device.

In this example we create special css file for mobile devices, with styles that apply only to devices with width lower than `600px`.  
We placed the following in the `<head>` section.

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="style-mobile.css" media="(max-width: 600px)" />
```

Notice that we placed the `style-mobile.css` further down from the `style.css` so the rules of the `style-mobile.css` will be stronger.  
While placing `@media` queries in css files takes precedence over regular rules, this will not apply when loading an entire css so it's important to keep it further down.

## Summary

With `@media` queries we can set different styles according to screen sizes.  
It is common to keep persistent screen sizes called **breakpoints** and keep the same 3-5 sizes throughout the styling.  
This approach is done also in popular libraries like [Bootstrap](https://getbootstrap.com/) and [Material Design](https://material.io/design).
