---
title: Building desktop apps using Electron and React
video_url: "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8"
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
logo: https://github.com/ywarezk/academeez/raw/main/libs/blog/01_introduction-to-electron-react/logo.svg
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/blog/01_introduction-to-electron-react/bg.png
prerequisites:
  - html-css
  - javascript
  - typescript
  - react
code: https://github.com/ywarezk/academeez/raw/main/libs/blog/01_introduction-to-electron-react/react-electron-demo
---

Web technologies can also be used today to create desktop apps.  
This fact only increases the importance of software developers to familiarize themselves with web technologies, since they are becoming an integral part of frontend development, and not only web development.

In this article I wanted to go over the process of developing a desktop application using [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/)

## Electron showcase

So you want to create a desktop app, and one of the questions that pops in your head is probably: "Should I choose Electron for building my desktop app".    
There Are many technologies you can use for building a desktop app, choosing one that is open sourced and built with Javascript like electron has the strong advantage of popularity, which means the community has a lot of libraries for Electron and for [Node.js](https://nodejs.org/) that you can use.

Another thing that is really a huge advantage of choosing **Electron** is the impressive showcase.  
Alot of big organizations, and many popular apps are built with **Electron** which means a lot of organizations have strong intrest in the technology being pushed forward.  
If you are afraid a technology might be deprecated in the future - just follow the money - Examine the amount of apps and how complex and popular they are, if a company is investing a lot of money in an app that is built with a technology, that company has strong intrest to push it forward which means less chance of that technology being deprecated.  

Here are a bunch of popular apps that are built using **Electron**

- [VSCode](https://code.visualstudio.com/)
- [Whatsapp](https://www.whatsapp.com/)
- [Slack](https://slack.com/intl/en-il/)

And the fact the **Electron** is their choice makes our doubts a bit smaller.

Adding to the fact that the apps we build are cross platform makes our lifes even easier.  
No need to worry too much about support for windows, and mac, and linux.  
Electrong is a cross platform solution.

Electron is an open source project that is maintained by **github** so a large organization like github and microsoft (that baught github) are pushing electron forward as well.

## What is Electron?

Electron allows the development of desktop applications using web technologies.  
When started to look at **Electron** the concept kind of reminded me of [Cordova](https://cordova.apache.org/) or [ionic](https://ionicframework.com/) which allows us to build mobile apps using web technologies.  
Basically we have a shell which can spawn a browser window with a web page loaded to that browser window.  
The browser window is just the screen without the url and controls, so the user cannot really notice that it is a browser window and for all intent and purpose he sees a regular screen.  

Electron does the same.  
The shell is the [main process](https://www.electronjs.org/docs/glossary#main-process).  
There can only be one **main process** and it can spawn one or more [renderer process](https://www.electronjs.org/docs/glossary#renderer-process) which are browser windows which can run our web app.

Our job in this article is to create an **Electron** app with a **main process** that will open one **renderer process** which runs a React app.

## Electron React starter kit

The easiest way to start a new project using **React and Electron** is by using [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)

We will start by clonning the starter kit:

```bash
> git clone --depth 1 --single-branch https://github.com/electron-react-boilerplate/electron-react-boilerplate.git react-electron-demo
```

Next step will be to install all the packages.  
CD into the created directory and install all the packages.  

```bash
> cd react-electron-demo
> yarn
```

To start developing the app run:

```bash
> yarn start
```

## Going over the files

### Build tools

We already have some fancy building tools already configured for us.

[Webpack](https://webpack.js.org/) is used to bundle our project together.  
The **Webpack** configuration files are located in the `.erb` folder.  

[Babel](https://babeljs.io/) is configured for us so we can write ES6+ code along with JSX.

[Jest](https://jestjs.io/) is configured for testing so we can create `*.test.js` files to test our react components.

[Typescript](https://www.typescriptlang.org/) you can write your code using typescript

### Main process

The main process is the entry point for **Electron** and is defined in the file `src/main.dev.ts`.  
It will be built by webpack configured in `.erb/configs/webpack.config.main.prod.babel.js` and the file `main.prod.js` will be built at the root folder after you finish.

There is a `src/package.json` that will also be copied to the root folder and in this file you will see:

```json
"main": "./main.prod.js"
```

which points electron to the entry point file of the main process.  
**Electron** will start the main process and will expose the `app` class that you can use to control the main process and subscribe to lifecycle events (it is extending [Node.js EventEmitter](https://nodejs.org/dist/latest-v16.x/docs/api/events.html))

So going over the `src/main.dev.ts` file we can see the following:

```typescript
import { app, BrowserWindow, shell } from 'electron';

...

app.whenReady().then(createWindow).catch(console.log);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
```

the `createWindow()` function will open a browser window and will load the file `src/index.html` to that window (not exactly the `src/index.html` rather the built with webpack version of that file with the configuration at: `.erb/configs/webpack.config.renderer.dev.babel.js`)

So the **Electron** entry point, the file `main.dev.ts` is making the main process open a render process.

### Menu

The `main.dev.ts` is also importing the `MenuBuilder`, and using the file to build the menu of our app.

That part is located in the file `src/menu.ts` and you will notice that the menu items is describe in Javascript object like structure.

```typescript
const subMenuViewProd: MenuItemConstructorOptions = {
  label: 'View',
  submenu: [
    {
      label: 'Toggle Full Screen',
      accelerator: 'Ctrl+Command+F',
      click: () => {
        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
      },
    },
  ],
};
```

### React part

As mentioned before the `main.dev.ts` opens a renderer process and the `src/index.html` is loaded to that renderer process.  

The `index.html` file is the entry point of our renderer process, and it will load the Javascript entry point located in the file `src/index.tsx` which will use `react-dom` to render the root component located in the file `App.tsx`.

### App.tsx

Our root component `App` is defined in this file.  
Notice that routing is already defined for us using the `react-router-dom` package.  

```typescript
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
```

We have one route in the root which place the `Hello` component, that is located in the same file.

Few things to notice here
- we use import images to place images in our app, they can be placed in the `assets` folder or in your `src` folder.

```typescript
import icon from '../assets/icon.svg';
...
<img width="200px" alt="icon" src={icon} />
```

- We import `css/scss` files to include those styles.

```typescript
import './App.global.css';
```

We have one style file `App.global.css` which contains the global styling language of our app, and you can split that file and also create styling files for your components.

## Developing and debugging our app

To start our app in development mode, you run in the terminal the following command:

```bash
> yarn start
```

This will open the app along with with the developer tools web developers are used to work with.  

So you use the developer tools, same way you do in the browser, to inspect the dom, debug the source code and more.  

[Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) is configured so the moment you change your source code, the app is updated without the need to recompile your code.

One of the killer features in working with **Electron** is the fact that you design the screen in the same way we design the screen on a website.  
We are working with `HTML` and `JSX`, we can use the developer tools to change appearance on the developer tools and examine how the changes will look like live.  

Designing the screen I would say take developers the majority of their time when building an app with other desktop apps technologies, the fact that we are using web technologies along with instant view of our changes is kind of a killer feature in my opinion and saves the developer tons of development time.

## Material Design

React is the most popular ui library out there.  
The fact that it is open sourced and highly adopted, created an amazing community that creates tons of quality libraries that we can use.  

Nothing is stopping us from using them in our react electron app.

In your terminal use the following command to install [React Material-ui](https://material-ui.com/)

```bash
> yarn add @material-ui/core
```

In the `Hello` component, try and replace one of the existing button with Material ui buttons.

```typescript
import Button from '@material-ui/core/Button';

...

<Button color="primary" variant="contained">
  <span role="img" aria-label="books">
    📚
  </span>
  Read our docs
</Button>
```

You have the entire material ui package at your disposal.  
Other technologies for creating desktop apps usually provide component libraries as well but they come with a price and not MIT licensed.  

Using Javascript gives us amazing community power in our app, much more than other technologies which means amazing app on short time, which is another big advantage with **Electron** 

## Server communication

We usually do not give access to our database in the frontend, and information from our database is delivered to our frontend using a backend server, using some communication protocol: REST, GraphQL, etc.

Let's add another screen in our app that will display a todo list that is taken from a server.

For this task we have a backend [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) server that expose an api in the following url: `https://nztodo.herokuapp.com/api/tasks/?format=json`

Sending a GET request (you can test in your browser) will return a list of todo tasks from the server, where each task contains:

```typescript
{
  "id": 10104,
  "title": "title:0.7193547719438698",
  "description":"description:0.7402325067755231",
  "group":"group:test",
  "when":"2020-12-02T20:47:58.628000Z"
}
```

Let's connect this api to our app.

Modifying our `App.tsx` we will add a route that will point to the page that displays todo, and also place a link to that page.

```typescript
export default function App() {
  return (
    <Router>
      <Link to="/todo">
        Todo
      </Link>

      <Switch>
        <Route path="/todo" component={Todo} />
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
```

Now create the `Todo` component.  
In the `src` folder, create the file `Todo.tsx`

```typescript
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState, useEffect } from 'react';

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
      .then(response => response.json())
      .then(json => setTasks(json));
  }, [])

  return (
    <List>
      {
        tasks.map((task: any) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.description} />
          </ListItem>
        ))
      }
    </List>
  )
}

```

We have the same rules apply to backend frontend communication.  
So web development and **Electron** development are pretty similar in that aspect.

## IPC

The main process can talk with the renderer process.  
We would want this communication if we want the renderer to access restricted things that a web browser cannot do, like the file system, or OS related things.  

First let's start with a simple message sending from the renderer to the main process.

Modify the `App.tsx` the `Home` component:

```typescript
import { ipcRenderer } from 'electron'

const Hello = () => {
  const sendMessage = () => {
    ipcRenderer.send('send-message', 'hello world');
  }

  ipcRenderer.on('recieve-message', (_event, msg) => {
    console.log(msg);
  });

  return (
    <div className="hello">
      <Button
        onClick={sendMessage}
        color="primary"
        variant="contained"
      >
        Send hello
      </Button>
    </div>
  );
};
```

Electron is providing us with the `ipcRenderer` object we can use to send message to the main like this hello world.

Now in the `main.dev.ts` we can respond to the renderer sending the message.

```typescript
import { ipcMain } from 'electron';

...



ipcMain.on('send-message', (event, msg) => {
  console.log(msg);
  event.reply('recieve-message', 'foo bar');
})

```

Now the main process can act on behalf of the renderer process to interact with the OS or restricted api's that are not allowed in the browser.  
So the renderer and the main process can communicate via **IPC**

## Deploying the app

After we finished creating our desktop app, it's time to deploy it.  
In the terminal run the following command:

```bash
> yarn package
```

The distribution will be located in the `release` folder.  
You will notice that the app size is rather big for the small app we just created,  
this is one of the negative sides of electron, it packages [Chromium](https://www.chromium.org/) in the distribution as well.  
Which means large bundle size as well as more memory and cpu consumption, the performance is a bit of a downside of **Electron**

After the packaging is finished you can view the app in `release/mac` (if your current platform is mac) and double click the app file or move it to the `Applications` folder to install it.

## Summary

Using **Electron** for building a desktop apps has many advantages.  
The fact that we can use **React** with it's many libraries along with web development tools for building our app and designing our screen means a faster development experience.  
**Electron** is highly adopted among popular organizations, and it allows us to easily create cross platform desktop apps.



