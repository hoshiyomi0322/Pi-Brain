# Environment
- ### Being, End
    ```latex
    \begin{}
    \end{}
    ```
- ### Aligned &
    $\begin{aligned}
    abc&\\&edf
    \end{aligned}$
    ```latex
    \begin{aligned}
    abc&\\edf
    \end{aligned}
    ```
- ### Line Break
    - #### Line Break
        $abc\\edf$
        ```latex
        abc\\edf
        ```
    - #### Line Spacing
        $abc\\[5mm]edf$
        ```latex
        abc\\[5mm]edf
        ```

# Text
- ### Boldface
    $\mathbf{text}$
    ```latex
    \mathbf{text}
    ```
- ### Underline
    $\underline{text}$
    ```latex
    \underline{text}
    ```
- ### Not：`\not`+operator
    $\not>$
    $\not\le$
    ```latex
    \not>
    \not\le
    ```
    

- ### Comment
    ```latex
    %comment
    ```
- ### Overset/Underset
    - #### Overset
        $\overset{above}{mid}$
        ```latex
        \overset{above}{mid}
        ```
    - #### Underset
        $\underset{below}{mid}$
        ```latex
        \underset{below}{mid}
        ```

# Superscript and Subscript
- ### Superscript
    $a^{b}$
    ```latex
    a^{b}
    ```
- ### Subscript
    $a_{b}$
    ```latex
    a_{b}
    ```
- ### Superscript and Subscript
    $a^{b}_{c}$
    ```latex
    a^{b}_{c}
    ```

# Fraction
$\frac{a}{b}$
```latex
\frac{a}{b}
```

# Root
- ### Sqrt
    $\sqrt{a}$
    ```latex
    \sqrt{a}
    ```
- ### nth root
    $\sqrt[n]{a}$
    ```latex
    \sqrt[n]{a}
    ```

# Operator
- ### Arithmetic Operator
    |Operation|Operator|LaTex|
    |:---:|:---:|:---:|
    |Times|$\times$|`\times`|
    |Divide|$\div$|`\div`|
    |Plus-Minus|$\pm$|`\pm`|
    |Minus-Plus|$\mp$|`\mp`|
- ### Relational Operator
    |Operation|Operator|LaTex|
    |:---:|:---:|:---:|
    |Less than or Equal to|$\le$|`\le`|
    |Greater than or Equal to|$\ge$|`\ge`|
    |Much Less than|$\ll$|`\ll`|
    |Much Greater than|$\gg$|`\gg`|
    |Not Equal|$\ne$|`\ne`|
    |Proportional to|$\propto$|`\propto`|
    |Divides|$\mid$|`\mid`|
    |Perpendicular|$\perp$|`\perp`|
    |Parallel|$\parallel$|`\parallel`|
    - #### Similar
        |Operation|Operator|LaTex|
        |:---:|:---:|:---:|
        |Equivalent|$\equiv$|`\equiv`|
        |Similar|$\sim$|`\sim`|
        |Similar or Equal to|$\simeq$|`\simeq`|
        |Approximately Equal|$\approx$|`\approx`|
        |Congruent|$\cong$|`\cong`|
    - #### Set Relation
        |Operation|Operator|LaTex|
        |:---:|:---:|:---:|
        |Subset|$\subset$|`\subset`|
        |Superset|$\supset$|`\subset`|
        |Subset or Equal|$\subseteq$|`\subseteq`|
        |Superset or Equal|$\supseteq$|`\subseteq`|
        |Element of|$\in$|`\in`|
        |Contains as Member|$\ni$|`\ni`|

# Symbol
- ### Bar
    $\bar{ab}$
    ```latex
    \bar{ab}
    ```
- ### Overline
    $\overline{ab}$
    ```latex
    \overline{ab}
    ```
- ### Vector
    $\vec{a}$
    ```latex
    \vec{a}
    ```
# Arrow
- ### Basic Arrow：`\direction+arrow`
    - #### Left/Right Arrow
        |Direction|Symbol|LaTex|
        |:---:|:---:|:---:|
        |right|$\rightarrow$|`\rightarrow`、`\to`|
        |left|$\leftarrow$|`\leftarrow`、`\gets`|
        |left-right|$\leftrightarrow$|`\leftrightarrow`|
        - #### Long Arrow：`\long`+[Left/Rithgt Arrow](#leftright-arrow)
            |Symbol|LaTex|
            |:---:|:---:|
            |$\longrightarrow$|`\longrightarrow`|
            |$\longleftarrow$|`\longleftarrow`|
            |$\longleftrightarrow$|`\longleftrightarrow`|
    - #### Up/Down Arrow
        |Direction|Symbol|LaTex|
        |:---:|:---:|:---:|
        |up|$\uparrow$|`$\uparrow$`|
        |down|$\downarrow$|`$\downarrow$`|
        |up-down|$\updownarrow$|`$\updownarrow$`|
    
- ### Double Line Arrow：capitalizing the first letter
    |Symbol|LaTex|
    |:---:|:---:|
    |$\Rightarrow$|`\Rightarrow`|
    |$\Leftarrow$|`\Leftarrow`|
    |$\Uparrow$|`$\Uparrow$`|
    |$\Downarrow$|`$\Downarrow$`|
    |$\Leftrightarrow$|`\Leftrightarrow`|
    |$\Updownarrow$|`$\Updownarrow$`|
    |$\Longrightarrow$|`\Longrightarrow`、`\implies`|
    |$\Longleftarrow$|`\Longleftarrow`|
    |$\Longleftrightarrow$|`\Leftrightarrow`、`\iff`|

- ### Diagonal Arrow：`\intercardinal directions+arrow`
    |intercardinal directions|Symbol|LaTex|
    |:---:|:---:|:---:|
    |Northeast (NE)|$\nearrow$|`\nearrow`|
    |Southeast (SE)|$\searrow$|`\searrow`|
    |Northwest (NW)|$\nwarrow$|`\nwarrow`|
    |Southwest (SW)|$\swarrow$|`\swarrow`|

- ### Arrow with Text：`\x`+[Left/Rithgt Arrow](#leftright-arrow)/[Harpoon Arrow](#harpoon-arrow)+`{text}`
    |Symbol|LaTex|
    |:---:|:---:|
    |$\xrightarrow{text}$|`\xrightarrow{text}`|
    |$\xleftarrow{text}$|`\xleftarrow{text}`|
    |$\xleftrightarrow{text}$|`\xleftrightarrow{text}`|
    |$\xRightarrow{text}$|`\xRightarrow{text}`|
    |$\xLeftarrow{text}$|`\xLeftarrow{text}`|
    |$\xLeftrightarrow{text}$|`\xLeftrightarrow{text}`|
    |$\xrightharpoonup{text}$|`\xrightharpoonup{text}`|
    |$\xleftharpoonup{text}$|`\xleftharpoonup{text}`|
    |$\xrightharpoondown{text}$|`\xrightharpoondown{text}`|
    |$\xleftharpoondown{text}$|`\xleftharpoondown{text}`|
    |$\xrightleftharpoons{text}$|`\xrightleftharpoons{text}`|
    |$\xleftrightharpoons{text}$|`\xleftrightharpoons{text}`|
    
    - ### `\x`+[Left/Rithgt Arrow](#leftright-arrow)/[Harpoon Arrow](#harpoon-arrow)+`[below]{above}`
        |Symbol|LaTex|
        |:---:|:---:|
        |$\xrightarrow[below]{above}$|`\xrightarrow[below]{above}`|
        |$\xrightarrow[below]{}$|`\xrightarrow[below]{}`|

- ### Harpoon Arrow
    |Direction|Symbol|LaTex|
    |:---:|:---:|:---:|
    |right-harpoon-up|$\rightharpoonup$|`\rightharpoonup`|
    |left-harpoon-up|$\leftharpoonup$|`\leftharpoonup`|
    |right-harpoon-down|$\rightharpoondown$|`\rightharpoondown`|
    |left-harpoon-down|$\leftharpoondown$|`\leftharpoondown`|
    |right-left-harpoons|$\rightleftharpoons$|`\rightleftharpoons`|
    |left-right-harpoons|$\leftrightharpoons$|`\leftrightharpoons`|


