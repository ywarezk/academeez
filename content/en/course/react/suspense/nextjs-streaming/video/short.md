---
title: "short video for nextjs suspense and streamin"
description: Text for short video about nextjs suspense and HTML streaming
isReady: false
publishDate: "2024-01-23"
---

## Narator 1

With HTML streaming, you can split your html response to chunks.

> at this point video editor will show the video: `01-comp`

## Narator 2

The client browser will progressivly render the response chunks as they arrive

> At this point video editor will show the client browser window: `02-comp`
> The editor should start the video with `first chunk` appears (cut the beginning where you see all the chunks).
> The editor should make the different chunks more noticeable by making the dely between the chunks a bit longer (currently it's 1 sec maybe make it 2 sec)

## Narator 3

When Server Side Rendering your React web site, using `<Suspense>` will create HTML streaming, the `<Suspense>` fallback prop will arrive as a response chunk, and  async children will arrive as another response chunk once the suspense promises are resolved.
We are using this technique in the following NextJS server side rendered React application.

> Video editor should show the `03-comp` video and should do the following rectangle marking on the screen:
>> Mark both of the `fallback` props and write `chunk 1`
>> Mark the `<ShortLoad />` component and write `chunk 2`
>> Mark the `<LongLoad />` component and write `chunk 3`

## Narator 4

With server side rendering you can really shorten the time the user has to wait before starting to see the initial content in your site,
and with `<Suspense>` and HTML streaming you can make your site user experience even better.

> video editor: show the browser and mark: `chunk 1` after `chunk 2` and after `chunk 3`

## Narator 5

Visit academeez.com for the full lesson on suspense and server side rendering, link in the description.

> video editor should show the closing screen


