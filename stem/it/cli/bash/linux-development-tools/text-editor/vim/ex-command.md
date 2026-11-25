# File Operations
|Ex Command|Description|
|:---:|:---:|
|`w`|Write|
|`q`|Quit|
|`wq`|Write and Quit|
|`q!`|Quit without write|
|`x`|Exit, same as `wq`|
|`e`|Open or create file (Edit)|

# Line Operations
|Ex Command|Description|
|:---:|:---:|
|`<range>p`|Print lines in a specific [range](vim.md#range)|
|`<range>d`|Cut lines in a specific [range](vim.md#range) (Delete)|
|`<range>y`|Copy lines in a specific [range](vim.md#range) (Yank)|
|`<range>m <address>`|Move lines in a specific [range](vim.md#range) to below [address](vim.md#line-address)|
|`<range>t <range>`|Copy lines in a specific [range](vim.md#range) to below [address](vim.md#line-address)|
|`<range>j`|Join lines in a specific [Range](vim.md#range) into a single line|

# Global Commands
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`[range]g/<pattern>/[ex_command]`|Execute [Ex command](ex-command.md) on all lines matching `pattern` in a specific [range](vim.md#range)|`:g/miko/d`|
|`[range]v/<pattern>/[ex_command]`|Execute [Ex command](ex-command.md) on all lines not matching `pattern` in a specific [range](vim.md#range)|`:v/miko/d`|
- `pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex)

# Substitute
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`[range]s/<pattern>/<string>/[flag]`|Replace the first match of `pattern` with `string` on each line in a specific [range](vim.md#range)<br>(`pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex))|`:s/peko/miko/`|
- ### Flag
    |Flag|Description|
    |:---:|:---:|
    |`g`|Replace all matches on each line (Global)|
    |`c`|Confirm each substitution<br>(`y` = yes, `n` = no, `a` = all, `q` = quit)|
    |`i`|Ignore case when matching|
    |`I`|Force case-sensitive matching|
    |`n`|Count matches without replacing|

# Sort
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`[range]sort [flags]`|Sort lines alphabetically in a specific [range](vim.md#range)<br>(default entire file)|`:'<,'>sort`|
- ### Flags
    |Flags|Description|Example|
    |:---:|:---:|:---:|
    |`!`|Reverse the sort order (descending)|`:%sort!`|
    |`i`|Ignore case when sorting|`:%sort i`|
    |`u`|Keep only unique lines (remove duplicates)|`:%sort u`|
    |`n`|Sort numerically based on the first decimal number on each line|`:%sort n`|
    |`r /<pattern>/`|Sort based on the text matching a `pattern` instead of the whole line<br>(`pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex))|`:%sort nr /\d\+/`|

# Indentation and Alignment
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`<range>>`|Indent lines to the right in a specific [range](vim.md#range)|`:.>`|
|`<range><`|Indent lines to the left (unindent) in a specific [range](vim.md#range)|`:.<`|
|`<range>le [indent]`|Left-align lines in a specific [range](vim.md#range)<br>(`indent` = leading spaces to keep, default `0`)|`:'<,'>le`|
|`<range>ce [width]`|Center-align lines in a specific [range](vim.md#range)<br>(`width` = line width in characters, default `80`)|`:'<,'>ce`|
|`<range>ri [width]`|Right-align lines in a specific [range](vim.md#range)<br>(`width` = line width in characters, default `80`)|`:'<,'>ri`|
|`<range>retab`|Replace `<Tab>` characters with spaces in a specific [range](vim.md#range)|`:%retab`|
|`<range>retab!`|Replace spaces characters with `<Tab>` in a specific [range](vim.md#range)|`:%retab`|

# Set Options
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`set all`|Display all [options](#option) and their current values|`set all`|
|`set <option>`|Enable an [option](#option)|`:set number`|
|`set no<option>`|Disable a [boolean option](#boolean-option)|`:set nonumber`|
|`set <option>!`|Toggle a [boolean option](#boolean-option) (on/off)|`:set number!`|
|`set <option>?`|Check the current value or state of an [option](#option)|`:set fileencoding?`|
|`set <option>=<value>`|Set a value for a [value option](#value-option)|`:set tabstop=4`|
- ### Option
    - #### Boolean Option
        |Option|Description|Example|
        |:---:|:---:|:---:|
        |`number`, `nu`|Show line numbers|`:set nu`|
        |`relativenumber`, `rnu`|Show line numbers relative to the cursor line|`:set rnu`|
        |`cursorline`, `cul`|Highlight the screen line of the cursor|`:set cursorline`|
        |`wrap`|Wrap long lines visually onto the next line|`:set nowrap`|
        |`ignorecase`, `ic`|Ignore case in search patterns|`:set ignorecase`|
        |`smartcase`, `scs`|Override `ignorecase` if pattern contains uppercase letters|`:set smartcase`|
        |`hlsearch`, `hls`|Highlight all matches of the previous search pattern|`:set hlsearch`|
        |`incsearch`, `is`|Show match for search pattern as you type|`:set incsearch`|
        |`expandtab`, `et`|Convert `<Tab>` into spaces when pressing Tab|`:set expandtab`|
        |`autoindent`, `ai`|Copy indent from the current line when starting a new line|`:set autoindent`|
        |`spell`|Enable spell checking|`:set spell`|
        |`paste`|Put Vim into Paste mode (disables auto-indent when pasting)|`:set paste`|
    - #### Value Option
        |Option|Description|Example|
        |:---:|:---:|:---:|
        |`fileencoding`, `fenc`|Show or set the file character encoding of the current buffer|`:set fenc=utf-8`|
        |`encoding`, `enc`|Set internal character encoding used inside Vim|`:set encoding=utf-8`|
        |`tabstop`, `ts`|Number of spaces per `<Tab>`|`:set tabstop=4`|
        |`shiftwidth`, `sw`|Number of spaces per indent|`:set shiftwidth=4`|
        |`scrolloff`, `so`|Minimum number of lines to keep above and below the cursor|`:set scrolloff=5`|
        |`signcolumn`, `scl`|When and how to display the sign/gutter column<br>(`auto` = Show only when signs exist, `yes` = Always show, `no` = Always hide)|`:set signcolumn=yes`|
        |`clipboard`, `cb`|Share clipboard with the system OS clipboard<br>(` ` = Disabled clipboard, `unnamedplus` = Enable clipboard)|`:set cb=unnamedplus`|
        |`mouse`|Enable mouse support<br>(` ` = Disabled, `a` = Enable All, `n` = Enable [Normal Mode](vim.md#normal-mode), `i` = Enable [Insert Mode](vim.md#insert-mode), `c` = Enable [Command-line Mode](vim.md#command-line-mode), `v` = Enable [Visual Mode](vim.md#visual-mode))|`:set mouse=a`|

# Others
|Ex Command|Description|Example|
|:---:|:---:|:---:|
|`[range]norm <command>`|Execute a [Normal Mode command](vim.md#normal-mode) on each line in a specific [range](vim.md#range)|`:'<,'>norm A;`|
|`<n>`|Jump to `n`th line|
