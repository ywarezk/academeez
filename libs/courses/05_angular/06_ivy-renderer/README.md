---
title: Ivy Renderer
short_description: Ivy Renderer is the new Angular compiler and render engine
description: Ivy Renderer is the new Angular compiler and render engine
slug: ivy-renderer
link: /courses/angular/ivy-renderer
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
---

**Ivy** is the new Angular compiler.  
The new compiler provides with with significant improvements, let's go over the main improvements we are getting.

## Preparations

Create two angular projects using `@angular/cli`

```bash
> npx @angular/cli new with-ivy
> npx @angular/cli@8.0.0 new no-ivy
``` 

## build time

around 13 sec with Ivy.  
around 21 sec without Ivy


## Bundle size

with Ivy 168KB.  
without Ivy 466KB

## Serve

with Ivy by default serve is doing an AOT compilation.  
Without Ivy we have a JIT compilation.

