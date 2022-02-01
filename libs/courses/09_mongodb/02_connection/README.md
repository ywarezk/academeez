---
title: Connecting to MongoDB
short_description: To perform action on a database we have to first connect to MongoDB
description: To perform action on a database we have to first connect to MongoDB
bg_img: https://github.com/ywarezk/academeez/raw/main/libs/courses/04_typescript/bg.png
slug: about-mongodb
link: /courses/mongodb/about-mongodb
video_url: 'https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8'
duration: 66
author: Yariv Katz
linkedin: https://il.linkedin.com/in/yariv-katz
code: https://github.com/ywarezk/academeez/raw/main/libs/courses/09_mongodb/02_connection/connect-mongo.js
---

## Creating the user

Open the mongo shell and run the following command to create a new user

```bash
> use admin
> db.createUser({user: 'academeez', pwd: '12345678', roles: ["root"]})
```
