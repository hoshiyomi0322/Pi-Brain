# Git Workflow
<div align="center"><img src="./image/git-workflow.png" width="70%"></div>

- ### Working Directory
- ### Staging Area (Index)
- ### [Git Remote Operations](git-remote-operations.md)：Local Repo $\leftrightarrow$ Remote Repo

# git status
|Command|Description|
|:---:|:---:|
|`git status`|Show the status of the current repo|
|`git status -s`|Show the status of the current repo in Short-format|

# git log
|Command|Description|
|:---:|:---:|
|`git log`||

# git add
|Command|Description|Example|
|:---:|:---:|:---:|
|`git add [option] [files...]`|Add contents of new or modified files to the index|`git add ./folder/file.txt`, `git add a.md b.jpg`|
|`git add .`|Add all new, modified, and deleted files in the [Current Directory (.)](/stem/it/cli/bash/bash.md#path) to the index|
|`git add -A`|Add All new, modified, and deleted files in the repo to the index|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-u`|update|
    |`-p`|patch|

# git remove (git rm)
|Command|Description|Example|
|:---:|:---:|:---:|
|`git rm [option] <files...>`|Remove files from the working directory and index|`git rm ./folder/file.txt`, `git rm a.md b.jpg`|
|`git rm -r [option] <folder>`|Recursively remove a folder from the working directory and index|`git rm -r a/`, `git rm -rf a/b/`, `git rm -rf .`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-f`|Force remove|
    |`--cached`|Remove files from the index only, keeping the local files intact.|

# git commit
```bash
git commit -a
git commit -m "message" # create a new commit with message
```

# git stash
```bash
git stash
git stash pop
git stash list
git stash apply
git stash clear
git stash drop
```

# git difference (git diff)
```bash
git diff # 查看工作目錄與暫存區的差異
```

# Restore and Reset
```bash
git restore
git reset
```

# Branch
```bash
git branch
git merge
```

# git initialize (git init)
```bash
git init
```

