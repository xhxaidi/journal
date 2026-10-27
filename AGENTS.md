# Rules for AI agents

**Never commit.** AI agents must not run `git commit` (or `git commit --amend`, `git merge`,
`git rebase`, `git cherry-pick`, `git revert` or anything else that creates a commit) in this repo,
even when asked to. Stage nothing, push nothing. Leave changes in the working tree and tell the
user what changed. The user commits by hand.

See `CONTEXT.md` for what's in `public/` and how each file was made.
