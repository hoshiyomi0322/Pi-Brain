# Bash
- ### [Bash](../../../bash.md)

# Vi IMproved (Vim)
|Command|Description|
|:---:|:---:|
|`vim <file>`|Open or create file|
|`Esc`|Return to [Normal Mode](#normal-mode)|
- ### Mode
    |Mode|Description|
    |:---:|:---:|
    |**[Normal Mode](#normal-mode)**|<img src="./image/normal-mode.png" width=60%><br>Used for moving the cursor, copying, pasting, deleting, and running shortcuts|
    |**[Insert Mode](#insert-mode)**|<img src="./image/insert-mode.png" width=60%><br>Used for typing and editing text directly|
    |**[Command-line Mode](#command-line-mode)**|<img src="./image/command-line-mode.png" width=60%><br>Used for saving, quitting, and running search-and-replace commands|
    |**[Visual Mode](#visual-mode)**|<img src="./image/visual-mode.png" width=60%><br>Used for selecting text to delete, copy, or indent|

# Normal Mode
- ### File Operations
    |Command|Description|
    |:---:|:---:|
    |`ZZ`|Exit, same as `:wq`|
- ### Cursor Movement
    |Command|Description|
    |:---:|:---:|
    |`k`/`j`/`h`/`l`|Jump Up/Down/Left/Right|
    |`0`/`$`|Jump to the beginning/end of the current line|
    |`gg`/`G`|Jump to the first/last line of the file (Go)|
    |`<n>G`|Jump to `n`th line|
    - #### Word
        |Command|Description|
        |:---:|:---:|
        |`b`|Jump to the start of the current/previous word (Back)|
        |`e`|Jump to the end of the current/next word (End)|
        |`w`|Jump to the start of the next word|
- ### Editing
    |Command|Description|
    |:---:|:---:|
    |`u`/`Ctrl + r`|Undo/Redo|
    |`x`|Cut the character under the cursor|
    |`dd`|Cut the current line (Delete)|
    |`yy`|Copy the current line (Yank)|
    |`p`/`P`|Paste after/before the cursor|
- ### Search
    |Command|Description|
    |:---:|:---:|
    |`/<string>`|Search forward for `string` in file|
    |`?<string>`|Search backward for `string` in file|
    |`n`|Jump to the next match|
    |`N`|Jump to the previous match|
- ### Mark

# Insert Mode
- ### [Normal Mode](#normal-mode) $\to$ [Insert Mode](#insert-mode)
    |Command|Description|
    |:---:|:---:|
    |`i`|Start [Inserting](#insert-mode) before the current cursor|
    |`I`|Start [Inserting](#insert-mode) at the beginning of the line|
    |`a`|Start [Inserting](#insert-mode) after the current cursor|
    |`A`|Start [Inserting](#insert-mode) at the end of the line|
    |`o`|Start [Inserting](#insert-mode) on a new line below the current line|
    |`O`|Start [Inserting](#insert-mode) on a new line above the current line|

# Command-line Mode
- ### Mode Switching：[Normal Mode](#normal-mode) $\to$ [Command-line Mode](#command-line-mode)
    |Command|Description|
    |:---:|:---:|
    |`:<ex_command>`|Execute an [Ex command](ex-command.md) in [Command-line mode](#command-line-mode)|
- ### [Ex Command](ex-command.md)
- ### Range
    - #### Line Address
        |Line Address|Description|Example|
        |:---:|:---:|:---:|
        |`.`|Current line|`:.s/old/new/g`|
        |`$`|Last line of the file|`:$d`|
        |`%`|Entire file|`:%s/old/new/g`|
        |`<n>`|`n`th line|`:10d`|
        |`+<n>/-<n>`|`n` lines below/above current line|`:+3d`|
        |`'<x>`|Line containing mark `x`|`:'ad`|
        |`/<pattern>/`|Next line matching `pattern`|`:/text/d`|
        |`?<pattern>?`|Previous line matching `pattern`|`:?text?d`|
        - `pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex)
    - #### Interval
        |Interval|Description|
        |:---:|:---:|
        |`<start>,<end>`|Range from `start` line to `end` line|
        |`3,5`|Frome the 3rd line to the 5th line|
        |`.,$`|From the current line to the last line of the file|
        |`1,.`|From the first line to the current line|
        |`.,+5`|From the current line to the next 5 lines|
        |`-2,+3`|From the previous 2 lines to the next 3 lines|
        |`'a,'b`|From mark a to mark b|
        |`'<,'>`|[Selected lines](#visual-mode) (from start mark < to end mark >)|
        |`/start/,/end/`|From the next line matching `start` to the next line matching `end`|

# Visual Mode
- ### Mode Switching：[Normal Mode](#normal-mode) $\to$ [Visual Mode](#visual-mode)
    |Command|Mode|Selection Scope|Description|
    |:---:|:---:|:---:|:---:|
    |`v`|Visual Mode|Character|Selects text character by character|
    |`V`|Visual Line Mode|Line|Selects entire lines at once|
    |`Ctrl + V`, `Ctrl + Q`|Visual Block Mode|Block|Selects a vertical rectangular block of text|
- ### Editing
    |Command|Description|
    |:---:|:---:|
    |`d`/`x`|Cut the selected text (Delete)|
    |`y`|Copy the selected text (Yank)|
    |`p`|Replace the selected text with copied/cut content (Paste)|
    |`c`/`s`|Cut the selected text and enter [Insert Mode](#insert-mode)|
- ### Formatting
    |Command|Description|
    |:---:|:---:|
    |`>`/`<`|Indent or unindent the selected lines|
    |`=`|Auto-indent the selected lines|
    |`~`|Toggle case (uppercase/lowercase) of the selected text|
    |`u`/`U`|Convert the selected text to lowercase/uppercase|
    |`J`|Join the selected lines into a single line|
- ### Mode Switching：[Visual Mode](#visual-mode) $\to$ [Command-line Mode](#command-line-mode)
    <img src="./image/visual-to-command-line.png" width=60%>

    |Command|Description|
    |:---:|:---:|
    |`:'<,'><ex_command>`|Execute an [Ex command](ex-command.md) on the selected lines|
