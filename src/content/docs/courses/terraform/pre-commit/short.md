---
title: pre-commit short video
description: short video script
preview: false
publishDate: 2024-12-21
sidebar:
  hidden: true
---

Our advanced k8s Flux and Terraform course repository
is also aimed to be a starter kit filled with best practices.

It's important that our code would be prettified before it's commited.
(Video editor needs to place the first sequence with an X)

To make sure that non-prettified code is not commited, we will use `pre-commit` to help us generate the git pre commit hook and install the rules that are defined in `pre-commit-terraform`

- install `pre-commit` with pip
- define pre-commit configuration
- specify in the configuration that we want to use `pre-commit-terraform` hooks
- Let's run this configuration for all our files and push the much prettier files
- now it is guaranteed that no ugly files will be pushed.

View the full code example in our k8s flux course and repo.
link in the description.