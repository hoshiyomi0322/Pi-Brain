# Bash
- ### [Bash](../../cli/bash/bash.md)

# Initialize
```bash
git init # initialize
git clone
```
# Workflow
- ### git status
    ```bash
    git status # 查看目前檔案狀態
    ```
- ### git add
    - ### `git add` + [Path](../../cli/bash/bash.md#path)
        ```bash
        git add file.txt # add file.txt
        git add ./folder/file.txt # add ./folder/file.txt
        git add . # add Current Directory
        ```
    - ### Options
        |Options|Description|
        |:---:|:---:|
        |-A|All|
        |-u|update|
        |-p|patch|

```bash
git commit -a
git commit -m "message" # 提交變更
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

