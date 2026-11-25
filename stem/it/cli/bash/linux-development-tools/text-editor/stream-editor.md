# Stream Editor (sed)
|Command|Description|Example|
|:---:|:---:|:---:|
|`sed [option] '[range]<action>' <files...>`|Execute an [Action](#action) in a specific [range](#range) of files|`sed -i '1,5s/old/new/g' file.txt`|

# Action
|Action|Description|Example|
|:---:|:---:|:---:|
|`d`|Delete matching lines|`sed '3d' file.txt`|
|`p`|Print matching lines<br>(Usually used with `-n` option)|`sed -n '1,5p' file.txt`|
|`i <string>`|Insert `string` above matching lines|`sed '1i Header' file.txt`|
|`a <string>`|Append `string` below matching lines|`sed '$a Footer' file.txt`|
|`c <string>`|Replace entire matching lines with `string` (Change)|`sed '2c New line' file.txt`|
|`s/<pattern>/<string>/[flag]`|Replace the first match of `pattern` with `string` (Substitute)<br>(`pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex))|`sed 's/old/new/g' file.txt`|
- ### Flag
    |Flag|Description|
    |:---:|:---:|
    |`g`|Replace all matches on each line (Global)|
    |`i`|Ignore case when matching|

# Range
- #### Line Address
    |Line Address|Description|Example|
    |:---:|:---:|:---:|
    |`$`|Last line of the file|`$d`|
    |`<n>`|`n`th line|`10d`|
    |`/<pattern>/`|Next line matching `pattern`<br>(`pattern` can be plain text or [regular expression](/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/regular-language/regular-language.md#regular-expression-regex))|`/text/d`|
- #### Interval
    |Interval|Description|
    |:---:|:---:|
    |`<start>,<end>`|Range from `start` line to `end` line|
    |`3,5`|Frome the 3rd line to the 5th line|
    |`3,$`|From the 3rd line to the last line of the file|
    |`/start/,/end/`|From the next line matching `start` to the next line matching `end`|

# Option
|Option|Description|
|:---:|:---:|
|`-i`||
|`-n`||
|`-r`||
|`-e`||

