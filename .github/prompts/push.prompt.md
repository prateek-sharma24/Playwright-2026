---
description: "Review intended repository changes, commit them, and push the current branch to its upstream remote"
agent: "agent"
---

When I run `/push`, carry out the Git workflow below. Do not only print suggested commands; execute each safe step in the terminal and report the results.

1. Confirm the repository root with `git rev-parse --show-toplevel`, then inspect `git status --short --branch`. Run Git commands from that repository root.
2. Review all staged, unstaged, deleted, and untracked changes—not just the active editor file. Inspect the diffs and file names to determine which changes are intended for this push.
3. Do not stage generated dependencies or build output (including `node_modules/`), secrets, credentials, or unrelated changes. If you cannot confidently distinguish intended changes from unrelated work, stop and ask me before staging anything.
4. Stage intended changes by naming their paths explicitly with `git add -A -- <paths>`. Do not blindly stage the entire working tree.
5. Review the staged file list with `git diff --cached --name-status` and inspect the staged changes. If any staged change is unrelated, unclear, or contains a secret, stop and ask me; do not commit it or silently alter the existing index. If there are no staged changes, do not create an empty commit.
6. Since invoking `/push` is my authorization to publish the reviewed intended changes, do not ask for an extra confirmation. Use a concise commit message that describes the staged changes, unless I supplied one.
7. If there are staged changes, commit them. If the commit fails, report the error and do not push.
8. Push the current branch to its configured upstream with `git push`. If it has no upstream, use `git push --set-upstream origin HEAD` only when the `origin` remote exists; otherwise stop and report the missing remote. Never force-push.
9. If there are already committed local changes ahead of the upstream but no new changes to commit, push those commits. If there is nothing new to commit or push, say so clearly.
10. After a successful push, verify the current branch is synchronized using `git status --short --branch` and report the commit and push outcome. If the push is rejected or verification fails, report the error; do not hide it or resolve it by force-pushing.
