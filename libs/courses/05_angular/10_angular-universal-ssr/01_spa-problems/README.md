---
title: Problems with Single Page Applications
short_description: Be carful, you have to address these potential problems when creating a single page application
description: Be carful, you have to address these potential problems when creating a single page application
slug: spa-problems
link: /courses/angular/angular-universal-ssr/spa-problems
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/bg.png
---

In this lesson we will review the problems we have on an angular app that is not using `Server Side Rendering`.

## Angular without Server Side Rendering (SSR)

To understand what is SSR and what problem it solves, we need to view an angular application without SSR.   
Angular application without SSR is the default mode when creating an angular app.
So let's review angular app without SSR up close, by creating a new project with @angular/cli:

```bash
> npx @angular/cli new no-ssr
```

When asked about routing choose `no` and for styling choose `CSS`

The default app we create using `@angular/cli` has no SSR. Let's build our app and review the created app after we build our app.  
In the terminal type:

```bash
> npx ng build
```

after this command `@angular/cli` will compile the app, and output the compiled files in the `dist` folder.
if we look inside the `dist` folder we will find the folder `no-ssr` and in it the compiled files which for the most part are a bunch of `js` files and `css` file, and also an `index.html` file.  
That `index.html` is the entry point of our app, that is the file that the browser will load first and will start our entire app.  
If we look at the content of the file we will find something like this:  

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>NoSsr</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>
    <body>
        <app-root></app-root>
        <script src="runtime-es2015.js" type="module"></script>
        <script src="runtime-es5.js" nomodule defer></script>
        <script src="polyfills-es5.js" nomodule defer></script>
        <script src="polyfills-es2015.js" type="module"></script>
        <script src="styles-es2015.js" type="module"></script>
        <script src="styles-es5.js" nomodule defer></script>
        <script src="vendor-es2015.js" type="module"></script>
        <script src="vendor-es5.js" nomodule defer></script>
        <script src="main-es2015.js" type="module"></script>
        <script src="main-es5.js" nomodule defer></script>
    </body>
</html>
```

Notice that the html have an almost empty body.
there is only `app-root` tag and a bunch of js files are loaded.
This means that the html is not in charge of drawing our app, rather the js files will do that (which is kind of obvious cause we are creating a single page application right?)

## Running our built app

we can run our app from the compiled dist folder by mimicking a static server that will just send the `index.html` and all the static files that are pointed from the `index.html`.
we can use the [http-server](https://www.npmjs.com/package/http-server) package to do so.
cd into the `dist/no-ssr` folder and activate our static files server like so:  

```bash
> cd dist/no-ssr
> npx http-server
```

This will open the static server on port `8080` and now you can view your built app by opening the browser and typing the url: `localhost:8080`.

Now let's try and examine the effect of a slow internet connection to the loading of our page.  
Open chrome developer tools, and in the developer tools click the network tab, you will find a combobox with the text `online` in it. Change that combobox to: `Slow 3G`.
Also make sure the `Disable cache` checkbox is checked.
Now try and reload the application.
The result is a white screen until all the js files are loaded and then our app appears.
It took almost 1 minute for our site to load.
Now obviously we can place a nice loading spinner for the user but even with the most pretty loading sign the user will still have to wait a minute for our app to load.
According to google's statistics if our site will take longer than 3 seconds to load we will lose more than 50% of our users who won't have the patience to wait. 
The reason is kind of obvious, since the JS files are in charge of drawing our app, and since those files become bigger in size on Single Page Applications like our angular app, it is obvious that on slow connection it will take longer for those JS files to be downloaded, and as a result our app will load slower.

Of course the 50% of the users leaving will generally increase as the loading time takes longer, bare in mind that this is a statistic that reflects an average in all the sites, that average does not necessarily reflect the app that you are building.
Let me give you an example, let's say you are creating an angular app for doctors to input their patients details, the doctors have to use your app to record every patient.
Since the doctor is obligated to input the patient details he will have to wait until the app is loaded, we refer to this as a captivated user, the user will have to wait even if the waiting period is long.

Let's try to reload our app and this time choose the `Fast 3G`.
When I choose that the app took almost 15 seconds to load.
This means that not only on slow connection our app will not load fast enough even on regular 3g connection, which is the connection speed our mobile users will have, even in that speed our site loaded slow and we lost more than 50% of our users.

So the loading time can be a really big problem if your app is accessed by mobile phones.
If our users are captivated, or they are accessing our app from a fast connection (which is usually the case if our app is for desktops only) all the time, than the initial loading is less problematic.  
It's important to note that users on their mobile phone with a 3G connection will load an angular app without SSR slow, so unless they are captivated, more than half of them will lose their patience and leave the site.

## SEO problem with angular with no SSR

SEO stands for Search Engine Optimization, and it means how high the search engines will rank my site on certain queries.   
Search engines crawl websites using crawlers that are called `search bots`.
Those bots will reach websites and load the websites html and javascript and than process the content and the links of the site.
The result of the processing will yield something called an `Index` which is the ranking of your site for search queries.  
If you app gets higher index ranking it will show  at the top results on certain search queries, which means more traffic.
The crawlers will index your site according to the search engine algorithms, which take into account: links to your site, user interaction, content.  
For you to increase you ranking you have to follow certain rules which the search engines publish.  
For example your content has to be arranged with headline h1, h2, h3, ... tags, the content should be in a paragraph tag, maintain proper site title, maintain meta tags and a lot of these rules that you have to keep for your content.
The content should also load fast, search engines will give reduce ranking on slow sites.
Search engines will also take into account user interaction, so if the user is waiting too long for your site to load and loses his patience cause the site is loading too slow and leaves it will reduce ranking for your site.

When the bots examine the content of your site, some search engine bots will only look at the html content. 
As noted our HTML as seen in `index.html` is practically empty since the entire drawing of our screen is done with the javascript files, so those bots will not be able to asses the content of our site and we will probably get bad ranking as a result. 
Some bots (like google's) do run the javascript, and examine the content after running the javascript files, there are some problems with that as well. 
The running and downloading of the js files might be slow or buggy in the bot which will affect what the bot will see, it might even fail in the bot and it will be hard to know that and to debug the issue. 
Site that are Single Page Application like we are creating with Angular usually rank low in search engines. 

## Share site link in social media

When you share you site in social media, some of the places will show a preview of your site, in most of social media sites, that preview is created by examining the html content of the site, since our html is practically empty you will often see bad results when you share your angular site on social media.

## So... Do I need SSR

By examining the problems we showed, we can now answer the question: Do I need SSR in my angular app?  
To answer that question answer the following questions:

### Are my users captivated?

Like our doctor's app to input patient details, the doctors will wait more than 3 seconds for our app to load so we can drop the ssr.
So if the answer for this question is YES you can skip server side rendering.

### Do users with phone access my site?

If the answer is YES users with 3G connection will access my app and they are not captivated than they will have a slowish connection and i have to load my app in less than 3 seconds
I should use SSR.

### Is SEO important to me?

Am I expecting a lot of users to reach my site from search engines? 
If the answer is yes I should be concerned about my SEO ranking and use SSR.

### Links will be posted in social media?

If my site will be published in social media I should display the preview properly by doing SSR.

Answering the question: Do I need SSR? 
Is really important before you write the first line of code. 
If you answered yes I need SSR it will highly effect your development process and it is better to know the answer before you start coding your app. 
It is much harder to transform a non SSR app to SSR after you wrote million of lines of code.
