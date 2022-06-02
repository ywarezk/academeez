---
title: Cookies
description: "A special header which can be set by the client or server which the browser will automatically send on certain requests"
slug: cookies
link: /courses/express/cookies
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
is_featured: true
---

Cookies are a way to save data which will be automatically sent by the browser on certain requests.

## What is cookies?

## what are cookies used for?

- Save data (shopping cart)
- Track browsing activity
- Authentication

## who can set the cookie

- server
- client

## When will the browser send the cookie

The scope of the cookie is determined by the `domain` and `path` which determines what URL's the cookie should be sent to.  

if you set the `Domain` then subdomains are included as well.  
If you set the `path` then it is considered the prefix path.

## who can delete the cookie

client or server can delete a cookie by setting the Expired of the cookie to be in the past.  
Client will not be able to delete a cookie set by a server with the flag **Http** set

## CSRF

Cross-Site request forgery is a form of attack where the hacker takes advantage of the fact that the browser is automatically sending the cookies that were set on a certain logged in domain.

