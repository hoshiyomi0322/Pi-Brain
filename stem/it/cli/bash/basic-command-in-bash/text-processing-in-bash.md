# Concatenate (cat)
|Command|Description|Example|
|:---:|:---:|:---:|
|`cat [options...] [files...]`|||
- ### Options
    |Options|Description|
    |:---:|:---:|
    |``||

# tac (reverse of cat)
|Command|Description|Example|
|:---:|:---:|:---:|
|`tac [options...] [file]`|

# Word Count (wc)
|Command|Description|Example|
|:---:|:---:|:---:|
|`wc [options...] [file]`|

# Less
|Command|Description|Example|
|:---:|:---:|:---:|
|`less [options] [file]`|View file contents|`less a.txt`, `history\|less`|
- ### Options
    |Options|Description|
    |:---:|:---:|
    |`-N`|Show line numbers|
    |`+G`|Start at the end of the file|
    |`-S`|Chop long lines instead of wrapping|
    |`-i`|Ignore case in [searches](#search) (case-insensitive)|
- ### Function
    |Command|Description|
    |:---:|:---:|
    |`Space`, `Ctrl + F`|Scroll one screen forward|
    |`b`, `Ctrl + B`|Scroll one screen backward|
    |`j`, `Ctrl + J`, `Enter`|Next line|
    |`y`, `Ctrl + Y`|Previous line|
    |`g`, `<`|Go to beginning of file|
    |`G`, `>`|Go to end of file|
    |`Ctrl + ←/→`|Scroll horizontally left/right|
    |`<n>G`|Go to `n`th line|
    |`q`|Quit|
    - #### Search
        |Command|Description|
        |:---:|:---:|
        |`/<string>`|Search forward for `string` in file|
        |`?<string>`|Search backward for `string` in file|
        |`n`|Jump to the next match|
        |`N`|Jump to the previous match|

# Head and Tail
|Command|Description|Example|
|:---:|:---:|:---:|
|`head [file]`|||
|`tail [file]`|||

# Globally, Regular Expression, Print (grep)
|Command|Description|Example|
|:---:|:---:|:---:|
|`grep [option] <"pattern"> [files...]`|Search for a `pattern` in files|`grep "sui" a.txt b.txt`, `history\|grep "cd"`|
|`grep -r [option] <"pattern"> [folders...]`|Search for a `pattern` in folders|`grep "^sui" a/ b/`|
- ### [Regular Expression](/stem/it/coding/coding.md#regular-expression-regex)
