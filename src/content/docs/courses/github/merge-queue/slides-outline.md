# Merge Queue — Slide Deck Outline

Source: [merge-queue.mdx](../../merge-queue.mdx)

---

## Slide 1: Merge Queue

**Title:** Merge Queue

**Content (bullets):**

- Helps you manage and merge a queue of PRs
- Automatically merges your PR when the required checks and workflows pass
- Runs those checks while upholding **Require branches to be up to date before merging**
- Solves the problem of developers having to go to the PR page, rebase their branch with the latest main, and run the checks again

**Speaker note:** This slide introduces GitHub Merge Queue and why it matters. Each bullet can be a separate line on the slide or combined into short phrases.

---

## Slide 2: Coding time — Demo

**Title:** Coding time...

**Subtitle:** Demo: PR Race Condition

**Content:** Transition slide — live demo of the PR race condition (e.g., using [github-merge-queue](https://github.com/Nerdeez/github-merge-queue)).

---

## Slide 3: Solution — Merge Queue

**Title:** Solution: Merge Queue

**Description:** Merge Queue will automatically merge the PR for you while taking into consideration the order of the PRs in the queue.

**Content (bullets):**

- Solve the problem with GitHub Merge Queue
- Enable it in **Settings** → **Rules** → **Rulesets** (same place as branch protection)
- Enable the **Merge Queue** option in the ruleset
- Available for: public repos owned by an organization, or private repos with GitHub Enterprise Cloud
- Next: high-level view of how Developer A and Developer B interact with the merge queue

---

## Slide 4: Development flow with Merge Queue

**Title:** Development flow with Merge Queue

**Description:** Developers will have a **Merge when ready** option, and their PR will automatically be merged without the need to rebase and rerun checks.

**Content (bullets):**

- PR checks still need to pass
- Once checks pass the PR will be transferred to the Merge Queue
- PRs will need to pass checks in the Merge Queue
- If their checks pass they will be merged in the same order in the queue

**Final sentence:** Let's demonstrate the new development flow when using Merge Queue

---

## Slide 5: Order of merge

**Title:** Order of merge

**Description:** _(to be added)_

**Content:** Examples shown with diagrams:

- **Example 1:** Three PRs in order: PR 123, PR 120, PR 115 — all pass → merged in that order
- **Example 2:** Same three PRs — PR 120 fails → PR 123 and PR 115 merged in order
