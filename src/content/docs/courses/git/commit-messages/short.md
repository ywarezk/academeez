---
title: Change commit message
description: short video script
preview: false
publishDate: 2025-01-14
sidebar:
  hidden: true
---

Did you create a commit but now you want to change the message that you wrote?
git rebase interactive for the rescue!
In the following example we are creating 2 commits.
Unfortunately we want to change the commit message of our first commit.
we can type `git rebase -i HEAD~2` cause we want to change the 2nd commit before the HEAD.

Change to r next to the commit that you want to change.
Git editor will pop and you can change your commit message.

In case you already pushed that commit to the remote repository
it will require you to force push in order for the change to propagate to the remote repository.

DO NOT FORCE PUSH ON SHARED BRANCHES LIKE MAIN!
