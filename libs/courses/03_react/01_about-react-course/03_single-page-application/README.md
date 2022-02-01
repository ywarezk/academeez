---
title: Single Page Application
short_description: What kind of websites are we going to build with React
description: What kind of websites are we going to build with React
slug: single-page-application
link: /courses/react/about-react-course/single-page-application
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

Our main focus in this course is building a fast responsive website or web application.  
Using React we can develop a kind of website that is called [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application)  
Before we really understand what a Single Page Application website is, we have to take a brief look on the history of websites.

## React can be a team player

React can be embedded in other sites as well

## Looking on history

The web really started to become popular among the average users, when the graphical interface browsers emerged.

1993 was the turning point for the web with the first Graphical web browser called `Mosaic`.  
Influenced from `Mosaic` a new popular browser was born in 1994 called `Netscape`.  
Another key player that joined the race of web browsers was Microsoft's Internet Explorer that was first released on 1995 and soon after became the most popular browser on the market, mostly due to the fact that it was shipped with the popular microsoft OS `windows`.

The first versions of the Graphical browsers could only display static pages.  
Which means they could get an HTML file from a server and transform that HTML to a static screen.  
At first the screen remained static and the way to change the screen is to press a link to a different screen.  
Once the HTML was loaded the screen was static.

But when we look at this example of a post from Seinfeld group we can see that without reloading the page the post is changing to inform us of someone that is typing and also to push new comments.

Netscape wanted to support changes in the screen without reloading a fully new screen.  
So they invented a scripting language called `JavaScript` that we can use to change the page without the reload.

The first version of `JavaScript` was released by Netscape on 1995 which allowed dynamic change of a page without reload.

## Single Page Application

Since changes done with Javascript do not force page reload and are friendlier to the user, web developers started to make the changes in the screen using Javascript.  
The result was more professional sites with better user experience.  
So more of the changes were pushed to Javascript, and not only the small changes but also more complex screen changes.  
We still handled the navigation the old way but if you think about it, when you navigate to a different page, a lot of page screen remains without change, for example the general layout like the header footer and navigation, usually remain when you transition, also a lot of the downloaded files are reused like the CSS fonts, etc.  
So why navigate the user and preform an entire reload let's draw only the change.  
This created an even better user experience where the site wasn't reloaded at all.  
After the site was initially loaded all the changes including navigating to different pages, was done using Javascript.
This gave the website a look and feel like a desktop app where every transition is immediate, and those site were coined `Single Page Applications`, Single Page cause there was one HTML loaded at the initial load (single page), and application cause those sites behaved like a desktop application

## The problem
