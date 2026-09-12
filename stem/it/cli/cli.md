# [Bourne-Again SHell (Bash)](./bash/bash.md)
- ### [Vi IMproved (Vim)](./bash/linux-development-tools/vim.md)
- ### [Fastfetch](./bash/linux-development-tools/fastfetch.md)
- ### [Git Command](../it-tools/git/git-command.md)
- ### [GNU Compiler Collection (GCC)](./bash/linux-development-tools/gcc.md)

# CMD
- ### CMD

# Termux
- ### [Termux](termux.md)

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
