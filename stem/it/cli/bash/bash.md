# Operator
- ### Redirection Operators
    |Operators|Description|
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

# Basic
```bash
help
exit
read
timeout
clear
echo
sudo
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

# File Command in Bash
- ### [File Command in Bash](file-command-in-bash.md)

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
- ### [Vi IMproved (Vim)](./linux-development-tools/vim.md)
- ### [Fastfetch](./linux-development-tools/fastfetch.md)
- ### [Git Command](../../it-tools/git/git-command.md)
- ### [GNU Compiler Collection (GCC)](./linux-development-tools/gcc.md)
