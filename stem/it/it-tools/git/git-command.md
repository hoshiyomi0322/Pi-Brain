# Bash
- ### [Bash](../../cli/bash/bash.md)

# [Git Workflow](git.md#git-workflow) Command
- ### Initialize
    ```bash
    git init # initialize
    git clone
    ```
- ### git status
    ```bash
    git status # 查看目前檔案狀態
    ```
- ### git add
    - #### Command：`git add [option] [path]`
        ```bash
        git add file.txt # add file.txt
        git add ./folder/file.txt # add ./folder/file.txt
        git add . # add Current Directory
        ```
    - #### Options
        |Options|Description|
        |:---:|:---:|
        |`-A`|All|
        |`-u`|update|
        |`-p`|patch|
- ### git remove (rm)
    - #### Command：`git rm [option] [path]`
        ```bash
        git rm file.txt # remove file.txt
        git rm ./folder/file.txt # remove ./folder/file.txt
        git rm . # remove Current Directory
        ```
    - #### Options
        |Options|Description|
        |:---:|:---:|
        |`-f`|Force deletion|
        |`-r`|Recursive deletion|
        |`--cached`|Remove files from the [Git index](git.md#staging-area-stage-index) only, keeping the local files intact.|
- ### git commit
    ```bash
    git commit -a
    git commit -m "message" # create a new commit with message
    ```
- ### git stash
    ```bash
    git stash
    git stash pop
    git stash list
    git stash apply
    git stash clear
    git stash drop
    ```

```bash
git diff # difference, 查看工作目錄與暫存區的差異

git restore
git reset
```

# Remote
```bash
git remote
git push

git fetch
git pull
```

# Branch
```bash
git branch
git merge
```

# [Git Object](git.md#git-object) Command
- ### Garbage Collection (gc)
    ```bash
    git gc
    git gc --auto
    git gc --prune=now
    ```
