#!/bin/bash



NODE_OPTIONS=--max_old_space_size=2048 npx ts-node -r tsconfig-paths/register --project $1/tsconfig.spec.json node_modules/.bin/karma start $1/karma.conf.ts --single-run true --no-auto-watch --watch false --auto-watch false --browsers ChromeHeadlessNoSandbox
