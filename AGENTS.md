# Rules for AI agents

**Never commit.** AI agents must not run `git commit` (or `git commit --amend`, `git merge`,
`git rebase`, `git cherry-pick`, `git revert` or anything else that creates a commit) in this repo,
even when asked to. Stage nothing, push nothing. Leave changes in the working tree and tell the
user what changed. The user commits by hand.

**Stop after each phase.** The site is built in phases from `PLAN.md`. After finishing a phase, or a
project in Phase 3, stop: ask the user to commit, then wait until they say "continue". Before building
a project's page, ask the user to paste its GitHub link and live link.

See `CONTEXT.md` for what's in `public/` and how each file was made.
