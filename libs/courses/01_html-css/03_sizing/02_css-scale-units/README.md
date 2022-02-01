---
title: CSS Scale Units
short_description: Going over relative types, and absolute types, and the different sizes we have in each group
description: Going over relative types, and absolute types, and the different sizes we have in each group
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
img: https://en.wikipedia.org/wiki/React_(JavaScript_library)#/media/File:React-icon.svg
code: https://codesandbox.io/s/html-css-sizing-css-scale-units-gqtez
link: /courses/html-css/css-size-units/unit-types
---

Certain design characteristics require us to add a unit of size.  
If I want my heading to be a certain size I can set: `font-size: 2.5rem`.  
If I want the border of a div to be in a certain size I can set: `border: 3px solid black`.  
I can set an image size by doing: `width: 50%`

There are various css scale units available for us to use: `%, px, rem, vh, vw`, In this article we will review the popular css units we have for scalling and when to use what.

## Relative / Absolute values

The scaling units available for us are either relative or obsolute.  
Absolute scale unit will stay the same on all screen size.  
In web design the most popular absolute value is the `px`.  
If you set a font size to be `16px` it will be the same size on all screen sizes.  
If you want an element size to change depending on the device screen size, or if user zoom's or change the browser font size, this will probably not be the right choice.

Relative sizes are more fluid and will vary depending on what they are relative to.  
They are often used in responsive web sites.

## PX

pixel is the popular absolute value we use in web design.  
Although there are other absolute units we can use, as specified [here](https://developer.mozilla.org/en-US/docs/Web/CSS/length#units) they are mostly used for print and not for screen.

A good example of using pixels would be on `border` where we usually want the border size to remain the same size no matter of the device.

Let's review the popular relative values:

## %

We can use percentage for a relative to parent scale.  
If the parent container width is `600px` setting the child to be `50%` width will mean the child width will be `300px`.  
In responsive design there are times when a child should take `50%` on large screens but the layout should change and should take `100%` in small screens, so bare in mind that on responsive design where size depends on the screen size, percent alone might not be enough.

## rem/em

`em` depends on the parent size so if the parent container `font-size: 30px;` then `font-size: 1em` on the child will be `30px`.  
It's kind of similar to `%` where the size depends on the parent, only with a single value set to the `font-size` of the parent.  
The difference between this and percentage is that the size only depends on `font-size` of the parent.  
So if the child set `width: 5em;` it will be `5 * font size of parent` while if setting `width: 50%` it will be `50% of the width of the parent`.  
In general `em` and `%` are relative to parent while `em` is a single relative value `width` are different values depending on the property

`rem` is more frequently used and it is relevant to the `font-size` set to the `<html>`.  
By default that value is `16px` but the user can change the base font size and this means elements will grow when the user change the browser font size which is often needed for accessability.

Getting inspired from [bootstrap](https://getbootstrap.com/)...  
The following sizes are set using `rem`:

- Typography - although if you want a font to grow or shrink according to screen size `rem` might not be suited
- Padding-margins

### vh/vw

`1vh` or `1vw` is one percent of the screen height or width respectively.  
This sizing help us make a fluid size that depends on the device running our site.  
If anything should change in size in mobile you should probably use this value on way or the other.  
If using this value it is recommended to place in the `<head>` section the following

```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Since mobile devices can sometime lie about their actual width.

### Summary

Example of the size usage is available [here](https://codesandbox.io/s/html-css-sizing-css-scale-units-gqtez)
