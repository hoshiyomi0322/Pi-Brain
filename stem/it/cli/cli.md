# [Bourne-Again SHell (Bash)](./bash/bash.md)
- ### [Vi IMproved (Vim)](./bash/linux-development-tools/text-editor/vim.md)
- ### [Fastfetch](./bash/linux-development-tools/fastfetch.md)
- ### [Git](../it-tools/git/git.md)
- ### [GNU Compiler Collection (GCC)](./bash/linux-development-tools/gcc.md)
- ### [Conda](./bash/linux-development-tools/conda.md)

# [PowerShell](./powershell/powershell.md)
- ### [Windows Subsystem for Linux (WSL)](./powershell/wsl.md)

# Termux
- ### [Termux](termux.md)

# CLI Shortcuts
|Shortcuts|Function|
|:---:|:---:|
|`Ctrl + C`|Interrupt the currently running process or command|
|`Ctrl + Shift + C`|Copy selected item in terminal|
|`Ctrl + Shift + V`|Paste selected item in terminal|
|`Ctrl + L`|Clear the terminal screen|
|`↑/↓`|Navigate through command history (previous/next command)|

# Command Format
|Notation Syntax|Definition|Example|
|:---:|:---:|:---:|
|`command`|Command|`ping`
|`[options]`|Optional parameters|`-v`, `-h`|
|`<arguments>`|Required parameters|`35`, `https://example.com`|
- ### Choice
    |Notation Syntax|Definition|Example|
    |:---:|:---:|:---:|
    |`options\|...\|options`|A choice from a list of options|`Y\|N`|
    |`[options\|...\|options]`|A optional choice from a list of options|`[enable\|disable]`|
    |`{options\|...\|options}`|A required choice from a list of options|`{read\|write\|delete}`|
- ### Repeatable
    |Notation Syntax|Definition|Example|
    |:---:|:---:|:---:|
    |`parameter...`|The parameter is repeatable|`file1 file2 file3`|
    |`[options...]`|The optional parameter is repeatable|`-s -t`|
    |`[arguments...]`|The Required parameters is repeatable|`main.c sub.c`|
- ### Combining Short Options：Combines multiple single-character options into a single group 
    ```bash
    command -a -b -c # Original
    command -abc # Combining Short Options
    ```

# Globbing
|Character|Definition|Example|
|:---:|:---:|:---:|
|`*`|zero or more characters|(`*` match `a.txt`, `sui.jpg`, `ken.md`, ...)<br>(`a*.txt` match `a.txt`, `a1.txt`, `a-a.txt`, `a 322.txt`, ...)|
|`?`|one character|(`a?.txt` match `a1.txt`, `aa.txt`, `a_.txt`,...)|
|`[]`|any one character enclosed within the brackets|(`a[AB6].txt` match `aA.txt`, `aB.txt`, `a6.txt`)<br>(`a[a-c3-5].txt` match `aa.txt`, `ab.txt`, `ac.txt`, `a3.txt`, `a4.txt`, `a5.txt`)|
|`[!]`|any one character not enclosed in the brackets|(`a[AB6].txt` match `aa.txt`, `a3.txt`, `a*.txt`)<br>(`a[a-c3-5].txt` match `a1.txt`, `aA.txt`, `ad.txt`, `a_.txt`, ...)|
- ### Recursive Globbing：recursively match all as and folders
    |Character|Definition|Example|
    |:---:|:---:|:---:|
    |`**/`|match file or folder at any level|(`**/a/` match `a/`, `src/a/`, `root/src/dir/a/`, ...)<br>(`**/a.txt` match `a.txt`, `src/a.txt`, `root/src/dir/a.txt`, ...)<br>(`**/a*.txt` match `abc.txt`, `src/a1.txt`, `root/src/dir/a.txt`, ...)|
    |`/**`|match everything inside a specific directory|`src/**` match `src/a/`, `src/sui.jpg`, `src/dir/35.txt`, ...|
    |`**/*`|match everything at any level within the hierarchy|`**/*` match `ab/`, `src/sui/`, `root/src/35.jpg`, ...|

