---
title: Opt-Out Zone.js
short_description: The implications of working with angular without Zone.js
description: The implications of working with angular without Zone.js
slug: opt-out-zonejs
link: /courses/angular/change-detection/zonejs-opt-out
code: https://github.com/ywarezk/academeez/raw/main/libs/courses/05_angular/07_change-detection/07_zonejs-opt-out/example
bgImg: https://github.com/ywarezk/academeez/raw/main/libs/courses/03_javascript/bg.png
video_url: "https://c563a7c556a91cdae32025bd25037548.egress.mediapackage-vod.eu-west-1.amazonaws.com/out/v1/c981d287b93543028c69b53d164248a3/9066c336968343c59ae6119f795c7d7c/9a1daa110f12415ebc81ad4bb65d7e95/index.m3u8"
---

# build with zone.js

```
Initial Chunk Files               | Names         |       Size
main.6234d3e5617c10397452.js      | main          |  133.75 kB
polyfills.e06d9d493fac0c3c5585.js | polyfills     |   35.96 kB
runtime.315239b3fbf8a1993bb9.js   | runtime       | 1021 bytes
styles.31d6cfe0d16ae931b73c.css   | styles        |    0 bytes
```

# Build without zone.js

```
Initial Chunk Files               | Names         |      Size
main.922e9fce5de025fd96db.js      | main          | 133.77 kB
runtime.3bfb8e14354e489e0296.js   | runtime       | 847 bytes
polyfills.48eb4740a0a1c2832fa0.js | polyfills     | 112 bytes
styles.31d6cfe0d16ae931b73c.css   | styles        |   0 bytes
```

save almost all the polyfills
