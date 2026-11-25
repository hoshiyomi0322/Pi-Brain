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
    |`g`/`G`|Jump to the first/last line of the file (Go)|
    |`<n>G`|Jump to `n`th line|
    |`Ctrl + ←/→`|Scroll horizontally left/right|
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
- `pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex)

# AWK
|Command|Description|Example|
|:---:|:---:|:---:|
|`awk [option] '[pattern] {<action>}' [files...]`||
- ### Action
    |Action|Description|
    |:---:|:---:|
    |
- ### Pattern
    |Pattern|Description|Example|
    |:---:|:---:|:---:|
    |`<expression>`|Matches when a numeric or string condition is true|
    |`<pattern1>, <pattern2>`|Matches all lines starting from `pattern1` up to `pattern2`|
    |`BEGIN`||
    |`END`||
    - #### [Regular Expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex)
        |Pattern|Description|Example|
        |:---:|:---:|:---:|
        |`/<pattern>/`|Matches when the entire line fits the pattern|`/^Error/ { print $0 }`|
        |`<field> ~ /<pattern>/`|Matches when a specific [field](#field) fits the pattern|`$2 ~ /^[0-9]+$/ { print $1 }`|
        |`<field> !~ /<pattern>/`|Matches when a specific [field](#field) does not fit the pattern|`$1 !~ /^#/ { print $0 }`|
        - `pattern` is [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex)
- ### Option
    |Option|Description|Example|
    |:---:|:---:|:---:|
    |`-F <field_separator>`||
    |`-f`||
    |`-v`||
- ### Field
    |Field|Description|Example|
    |:---:|:---:|:---:|
    |`$<n>`||`$3`|
    |`$0`|||
    |`$NF`|||
    |`$(NF-<n>)`||`$(NF-5)`|
