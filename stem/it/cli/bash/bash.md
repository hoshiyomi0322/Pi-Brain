# Bash Shortcuts
|Shortcuts|Function|
|:---:|:---:|
|`Ctrl + R`|Search the command history as you type|
- ### [CLI Shortcuts](../cli.md#cli-shortcuts)

# Operator
- ### Redirection Operators
    |Operators|Description|
    |:---:|:---:|
    |`>`||
    |`>>`||
    |`<`||
    |`<<`||

# Path
|Path|Description|
|:---:|:---:|
|`/`|Root Directory or Path Separator|
|`.`|Current Directory|
|`..`|Parent Directory|
|`~`|Current User's Home Directory|
|`~username`|`username`'s Home Directory|
- ### Example
    ```bash
    # Current Path：/Root/1/2/3/4/4-1.txt
    
    / # /Root
    
    . # /Root/1/2/3/4
    ./4-2.txt # /Root/1/2/3/4/4-2.txt
    
    .. # /Root/1/2/3
    ../.. # /Root/1/2
    ../../.. # /Root/1
    ../3-1.txt # /Root/1/2/3/3-1.txt
    ../../../1-1.txt # /Root/1/1-1.txt
    ```

# Brace Expansion
|Brace|Description|Example|
|:---:|:---:|:---:|
|`{}`|Combinations of multiple independent strings|`{a,b,c}`, `{,sui}`, `s/c/{1,2}.txt`, `{A{1,2},b}{c,d}`|
|`{..}`|Sequences of numbers or letters with a specified range|`{a..c}`, `{3..5}`|
- ### Example
    ```bash
    echo {a{1,2},b,c} # echo a1 a2 b c
    echo {A..C}{1,2} # echo A1 A2 B1 B2 C1 C2
    echo {a,b}{1,2}{c,d} # echo a1c a1d a2c a2d b1c b1d b2c b2d
    cp file{,_copy}.txt # cp file.txt file_copy.txt
    rm s/g/f/{a,b}.jpg # rm s/g/f/a.jpg s/g/f/b.jpg
    mv f/m/{a,b}{1,2} src/ # mv f/m/a1 f/m/a2 f/m/b1 f/m/b2 src/
    ```

# Selection in Bash
- ### If else
- ### Case

# Loop in Bash
- ### For
- ### While
- ### Until

# Basic
- ### Help
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`help <command_name>`|display information about commands|`help ping`|
- ### Type
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`type [options] <command_name>`|display information about command type|`type ping`|
    - #### Options
        |Options|Description|
        |:---:|:---:|
        |`-a`|List all matching types that have the same name as `command_name`|
        |`-t`|Print only a single word describing the Type of `command_name`|
        |`-p`|Print the Path of `command_name`|
- ### History
    |Command|Description|Example|
    |:---:|:---:|:---:|
    |`history [n]`|Display only the last `n` commands in the history list|`history`, `history 200`|
    |`history -c`|Clear the history list in memory|
    - #### History Expansion
        |Command|Description|Example|
        |:---:|:---:|:---:|
        |`!n`|Executes the `n`th command from the history list|`!35`|
        |`!-n`|Executes the command `n` lines back from the history list|`!-322`|
- ### Superuser Do (sudo)
    - Command：`sudo [option] <command>`
```bash
exit
read
timeout
clear
echo
```

# System
```bash
shutdown
top
htop
ps
kill
free
```

# User Management Commands in Bash
- ### [User Management Commands in Bash](user-management-commands-in-bash.md)

# File and Directory in Bash
- ### [File and Directory in Bash](file-and-directory-in-bash.md)

# Text Processing in Bash
- ### [Text Processing in Bash](text-processing-in-bash.md)

# Advanced Package Tool (APT)
```bash
sudo apt update
sudo apt upgrade
sudo apt install <package-name>
sudo apt remove <package-name>
```

# Networking Command in Bash
- ### [Networking Command in Bash](networking-command-in-bash.md)

# fdisk

# Compress and Extract in Bash
- ### [Compress and Extract in Bash](compress-and-extract-in-bash.md)

# Linux Development Tools
- ### Text Editor
    - ### [Vi IMproved (Vim)](./linux-development-tools/text-editor/vim.md)
    - ### GNU nano (nano)
- ### [Fastfetch](./linux-development-tools/fastfetch.md)
- ### [Git Command](../../it-tools/git/git-command.md)
- ### [GNU Compiler Collection (GCC)](./linux-development-tools/gcc.md)
- ### [Conda](./linux-development-tools/conda.md)
