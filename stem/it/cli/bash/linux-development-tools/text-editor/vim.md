# Bash
- ### [Bash](../../bash.md)

# Vi IMproved (Vim)
|Command|Description|
|:---:|:---:|
|`vim <file>`|Open or create file|
|`Esc`|Return to [Normal Mode](#normal-mode)|
- ### Mode
    |Mode|Description|
    |:---:|:---:|
    |**[Normal Mode](#normal-mode)**|<img src="./image/normal-mode.png" width=100%><br>Used for moving the cursor, copying, pasting, deleting, and running shortcuts|
    |**[Insert Mode](#insert-mode)**|<img src="./image/insert-mode.png" width=100%><br>Used for typing and editing text directly|
    |**[Visual Mode](#visual-mode)**|<img src="./image/visual-mode.png" width=100%><br>Used for selecting text to delete, copy, or indent|
    |**[Command-line Mode](#command-line-mode)**|<img src="./image/command-line-mode.png" width=100%><br>Used for saving, quitting, and running search-and-replace commands|

# Normal Mode
|Command|Description|
|:---:|:---:|
|`ZZ`|Exit, same as `:wq`|
- ### Cursor Movement
    |Command|Description|
    |:---:|:---:|
    |`k`/`j`/`h`/`l`|Move Up/Down/Left/Right|
    |`0`/`$`|Move to the beginning/end of the current line|
    |`gg`/`G`|Move to the first/last line of the file (Go)|
    |`<n>G`|Move to `n`th line|
    - #### Word
        |Command|Description|
        |:---:|:---:|
        |`b`|Move to the start of the current/previous word (Back)|
        |`e`|Move to the end of the current/next word (End)|
        |`w`|Move to the start of the next word|
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

# Command-line Mode
- ### Mode Switching：[Normal Mode](#normal-mode) $\to$ [Command-line Mode](#command-line-mode)
    |Command|Description|
    |:---:|:---:|
    |`:[command]`|Execute a command in [Command-line mode](#command-line-mode)|
- ### Write and Quit
    |Command|Description|
    |:---:|:---:|
    |`:w`|Write|
    |`:q`|Quit|
    |`:wq`|Write and Quit|
    |`:q!`|Quit without write|
    |`:x`|Exit, same as `:wq`|
- ### Others
    |Command|Description|
    |:---:|:---:|
    |`:p`||
    |`:s`||
    |`:%s`||
    |`:set number`||
    |`:<n>`|Move to `n`th line|
