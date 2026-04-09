# Environment
- ### Being, End
    ```latex
    \begin{}
    \end{}
    ```
- ### Aligned：&
    $`\begin{aligned}
    ab&c\\ &edf
    \end{aligned}`$
    ```latex
    \begin{aligned}
    ab&c\\ &edf
    \end{aligned}
    ```
- ### Matrix：`\begin{matrix}`+`{text}&···&{text}`+`\\`+$`\cdots`$+`\\`+`{text}&···&{text}`+`\end{matrix}`
    |Matrix|Output|LaTex|
    |:---:|:---:|:---:|
    |Matrix|$`\begin{matrix} {1} \\ {2}&{3}  \\ {4}&{5}&{6} \end{matrix}`$|`\begin{matrix} {1} \\ {2}&{3}  \\ {4}&{5}&{6} \end{matrix}`|
    |parentheses Matrix|$`\begin{pmatrix} {1}&{2} \\ {3}&{4} \end{pmatrix}`$|`\begin{pmatrix} {1}&{2} \\ {3}&{4} \end{pmatrix}`|
    |brackets Matrix|$`\begin{bmatrix} {1}&{2} \\ {3}&{4} \end{bmatrix}`$|`\begin{bmatrix} {1}&{2} \\ {3}&{4} \end{bmatrix}`|
    |braces Matrix|$`\begin{Bmatrix} {1}&{2} \\ {3}&{4} \end{Bmatrix}`$|`\begin{Bmatrix} {1}&{2} \\ {3}&{4} \end{Bmatrix}`|
    |vertical bars Matrix|$`\begin{vmatrix} {1}&{2} \\ {3}&{4} \end{vmatrix}`$|`\begin{vmatrix} {1}&{2} \\ {3}&{4} \end{vmatrix}`|
    |double Vertical bars Matrix|$`\begin{Vmatrix} {1}&{2} \\ {3}&{4} \end{Vmatrix}`$|`\begin{Vmatrix} {1}&{2} \\ {3}&{4} \end{Vmatrix}`|

- ### Displaystyle
    $`\displaystyle{text}`$
    ```latex
    \displaystyle{text}
    ```
- ### Comment
    ```latex
    %comment
    ```
- ### Text：`\text{}`
    |Output|LaTex|
    |:---:|:---:|
    |$\text{text}$|`\text{text}`|
    |$\text{a b}$|`\text{a b}`|

# Brackets
|Output|LaTex|
|:---:|:---:|
|$`(a+b)`$|`(a+b)`|
|$`[a+b]`$|`[a+b]`|
|$`\{a+b\}`$|`\{a+b\}`|
|$`\set{S}`$|`\set{S}`|
|$`\langle{a+b}\rangle`$|`\langle{a+b}\rangle`|
|$`\|a+b\|`$|`\|a+b\|`|
|$`\\|a+b\\|`$|`\\|a+b\\|`|
- ### Case：`\begin{case}`+`{text}&{text}`+`\\`+$`\cdots`$+`\\`+`{text}&{text}`+`\end{case}`
    $`\begin{cases}{35}&{\text{if }a=0}\\ {69}&{\text{if }a>0}\\ {77}&{\text{else}}\end{cases}`$
    ```latex
    $`\begin{cases} {35}&{\text{if }a=0} \\ {69}&{\text{if }a>0} \\ {77}&{\text{else}} \end{cases}`$
    ```

# Text Formatting
|Format|Output|LaTex|
|:---:|:---:|:---:|
|Boldface|$\mathbf{text}$|`\mathbf{text}`|
|Underline|$\underline{text}$|`\underline{text}`|
|Overline|$\overline{text}$|`\overline{text}`|
|Underbrace|$`\underbrace{text}`$、$`\underbrace{text}_{n}`$|`\underbrace{text}`、`\underbrace{text}_{n}`|
|Overbrace|$`\overbrace{text}`$、$`\overbrace{text}^{n}`$|`\overbrace{text}`、`\overbrace{text}^{n}`|
|Bar|$\bar{a}$|`\bar{a}`|
|Vector|$\vec{ab}$|`\vec{ab}`|
|Tilde|$\tilde{a}$|`\tilde{a}`|
|Dot|$\dot{a}$|`\dot{a}`|
|Double Dot|$\ddot{a}$|`\ddot{a}`|
|Hat|$\hat{a}$|`\hat{a}`|
|Check|$\check{a}$|`\check{a}`|
|Acute|$\acute{a}$|`\acute{a}`|
|Grave|$\grave{a}$|`\grave{a}`|
|Breve|$\breve{a}$|`\breve{a}`|

# Space
|Space|Output|LaTex|
|:---:|:---:|:---:|
|Negative Space|$`a\!b`$|`a\!b`|
|Thin Space|$`a\,b`$|`a\,b`|
|Space|$`a~b`$|`a~b`|

- ### Space：`~`*n
    |Output|LaTex|
    |:---:|:---:|
    |$`a~b`$|`a~b`|
    |$`a~~~b`$|`a~~~b`|
    |$`a~~~~~~~b`$|`a~~~~~~~b`|

- ### Horizon Space：`\hspace{length}`
    |Output|LaTex|
    |:---:|:---:|
    |$`a\hspace{5mm} b`$|`a\hspace{5mm} b`|
    |$`a\hspace{1cm} b`$|`a\hspace{1cm} b`|
    |$`a\hspace{-1mm} b`$|`a\hspace{-1mm} b`|
    |$`a\hspace{-5mm} b`$|`a\hspace{-5mm} b`|

- ### Line Break：`\\[line spacing]`
    |Output|LaTex|
    |:---:|:---:|
    |$`abc\\ edf`$|`abc\\ edf`|
    |$`abc\\[5mm] edf`$|`abc\\[5mm] edf`|
    |$`abc\\[0.2cm] edf`$|`abc\\[0.2cm] edf`|

# Overset and Underset
|Format|Output|LaTex|
|:---:|:---:|:---:|
|Overset|$`\overset{above}{mid}`$|`\overset{above}{mid}`|
|Underset|$`\underset{below}{mid}`$|`\underset{below}{mid}`|

# Superscript and Subscript
|Format|Output|LaTex|
|:---:|:---:|:---:|
|Superscript|$a^{b}$|`{a}^{b}`|
|Subscript|$a_{b}$|`{a}_{b}`|
|Superscript and Subscript|$a_{b}^{c}$|`{a}_{b}^{c}`、`{a}^{c}_{b}`|
|Superscript and Subscript|$a_{b+1}^{c+2}$|`{a}_{b+1}^{c+2}`、`{a}^{c+2}_{b+1}`|
|Combinatorics|$C_{k}^{n}$|`{C}_{k}^{n}`、`{C}^{n}_{k}`|

# Fraction
|Output|LaTex|
|:---:|:---:|
|$\frac{a}{b}$|`\frac{a}{b}`|

# Root
|Format|Output|LaTex|
|:---:|:---:|:---:|
|Sqrt|$\sqrt{a}$|`\sqrt{a}`|
|Sqrt|$\sqrt{a+b}$|`\sqrt{a+b}`|
|nth root|$\sqrt[n]{a}$|`\sqrt[n]{a}`|

# Symbol
|Name|Symbol|LaTex|
|:---:|:---:|:---:|
|infinity|$\infty$|`\infty`|
|circle|$`\circ`$、$`180^{\circ}`$|`\circ`、`180^{\circ}`|
|Prime|$`\prime`$、$`x^{\prime}`$、$`x^{\prime\prime}`$|`\prime`、`x^{\prime}`、`x^{\prime\prime}`|
|Partial Derivative|$`\partial`$|`\partial`|
|Angle|$\angle$|`\angle`|
|Triangle|$\triangle$|`\triangle`|
|Square|$\square$|`\square`|
- ### Dot
    |Name|Symbol|LaTex|
    |:---:|:---:|:---:|
    |Centered Dot|$\cdot$|`\cdot`|
    |Centered Dots|$\cdots$|`\cdots`|
    |Lower Dots|$\ldots$|`\ldots`|
    |Diagonal Dots|$\ddots$|`\ddots`|
    |Vertical Dots|$\vdots$|`\vdots`|    
- ### Logic Symbol
    |Name|Symbol|LaTex|
    |:---:|:---:|:---:|
    |Because|$\because$|`\because`|
    |Therefore|$\therefore$|`\therefore`|
    |For All|$\forall$|`\forall`|
    |Exist|$`\exists`$|`\exists`|

# Arrow
- ### Basic Arrow：`\direction`+`arrow`
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
        |up|$\uparrow$|`\uparrow`|
        |down|$\downarrow$|`\downarrow`|
        |up-down|$\updownarrow$|`\updownarrow`|
    
- ### Double Line Arrow：capitalizing the first letter
    |Symbol|LaTex|
    |:---:|:---:|
    |$\Rightarrow$|`\Rightarrow`|
    |$\Leftarrow$|`\Leftarrow`|
    |$\Uparrow$|`\Uparrow`|
    |$\Downarrow$|`\Downarrow`|
    |$\Leftrightarrow$|`\Leftrightarrow`|
    |$\Updownarrow$|`\Updownarrow`|
    |$\Longrightarrow$|`\Longrightarrow`、`\implies`|
    |$\Longleftarrow$|`\Longleftarrow`、`\impliedby`|
    |$\Longleftrightarrow$|`\Leftrightarrow`、`\iff`|

- ### Diagonal Arrow：`\intercardinal directions`+`arrow`
    |intercardinal directions|Symbol|LaTex|
    |:---:|:---:|:---:|
    |Northeast (NE)|$\nearrow$|`\nearrow`|
    |Southeast (SE)|$\searrow$|`\searrow`|
    |Northwest (NW)|$\nwarrow$|`\nwarrow`|
    |Southwest (SW)|$\swarrow$|`\swarrow`|

- ### Arrow with Text：`\x`+[Left/Rithgt Arrow](#leftright-arrow)/[Harpoon Arrow](#harpoon-arrow)+`{text}`
    |Symbol|LaTex|
    |:---:|:---:|
    |$\xrightarrow{a}$|`\xrightarrow{a}`|
    |$\xleftarrow{a}$|`\xleftarrow{a}`|
    |$\xleftrightarrow{a}$|`\xleftrightarrow{a}`|
    |$\xRightarrow{a}$|`\xRightarrow{a}`|
    |$\xLeftarrow{a}$|`\xLeftarrow{a}`|
    |$\xLeftrightarrow{a}$|`\xLeftrightarrow{a}`|
    |$\xrightharpoonup{a}$|`\xrightharpoonup{a}`|
    |$\xleftharpoonup{a}$|`\xleftharpoonup{a}`|
    |$\xrightharpoondown{a}$|`\xrightharpoondown{a}`|
    |$\xleftharpoondown{a}$|`\xleftharpoondown{a}`|
    |$\xrightleftharpoons{a}$|`\xrightleftharpoons{a}`|
    |$\xleftrightharpoons{a}$|`\xleftrightharpoons{a}`|
    
    - ### `\x`+[Left/Rithgt Arrow](#leftright-arrow)/[Harpoon Arrow](#harpoon-arrow)+`[below]{above}`
        |Symbol|LaTex|
        |:---:|:---:|
        |$\xrightarrow{a}$|`\xrightarrow{a}`|
        |$\xrightarrow[b]{a}$|`\xrightarrow[b]{a}`|
        |$\xrightarrow[b]{}$|`\xrightarrow[b]{}`|
        |$\xrightharpoonup{a}$|`\xrightharpoonup{a}`|

- ### Harpoon Arrow
    |Direction|Symbol|LaTex|
    |:---:|:---:|:---:|
    |right-harpoon-up|$\rightharpoonup$|`\rightharpoonup`|
    |left-harpoon-up|$\leftharpoonup$|`\leftharpoonup`|
    |right-harpoon-down|$\rightharpoondown$|`\rightharpoondown`|
    |left-harpoon-down|$\leftharpoondown$|`\leftharpoondown`|
    |right-left-harpoons|$\rightleftharpoons$|`\rightleftharpoons`|
    |left-right-harpoons|$\leftrightharpoons$|`\leftrightharpoons`|

# Operator
- ### Not：`\not`+operator
    |Operator|LaTex|
    |:---:|:---:|
    |$\not>$|`\not>`|
    |$\not\le$|`\not\le`|
- ### Arithmetic Operator
    |Operation|Operator|LaTex|
    |:---:|:---:|:---:|
    |Times|$\times$|`\times`|
    |Divide|$\div$|`\div`|
    |Plus-Minus|$\pm$|`\pm`|
    |Minus-Plus|$\mp$|`\mp`|
    |Asterisk|$\ast$|`\ast`|
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
        |Intersection|$\cap$|`\cap`|
        |Union|$\cup$|`\cup`|
        |Empty Set|$\varnothing$|`\varnothing`|

# Large Operator
|Operation|Large Operator|LaTex|
|:---:|:---:|:---:|
|Limit|$\lim{x}$|`\lim{x}`|
|Limit Superior|$\limsup{x}$|`\limsup{x}`|
|Limit Inferior|$\liminf{x}$|`\liminf{x}`|
|Supremum|$\sup{x}$|`\sup{x}`|
|Infimum|$\inf{x}$|`\inf{x}`|
|Maximum|$\max{x}$|`\max{x}`|
|Minimum|$\min{x}$|`\min{x}`|
|Logarithm|$\log{x}$|`\log{x}`|
|Sum|$\sum{x}$|`\sum{x}`|
|Product|$\prod{x}$|`\prod{x}`|
|Big Intersection|$\bigcap{x}$|`\bigcap{x}`|
|Big Union|$\bigcup{x}$|`\bigcup{x}`|
- ### Integral
    |Large Operator|LaTex|
    |:---:|:---:|
    |$`\int{x}`$|`\int{x}`|
    |$`\iint{x}`$|`\iint{x}`|
    |$`\iiint{x}`$|`\iiint{x}`|
    |$`\oint{x}`$|`\oint{x}`|
    |$`\oiint{x}`$|`\oiint{x}`|
    |$`\oiiint{x}`$|`\oiiint{x}`|
- ### Interval：[Large Operator](#large-operator)+[Superscript and Subscript](#superscript-and-subscript)
    |Large Operator|LaTex|
    |:---:|:---:|
    |$\int_{a}^{b}{x}$|`\int{x}_{a}^{b}{x}`|
    |$\int_{a}{x}$|`\int{x}_{a}{x}`|
    |$\int^{b}{x}$|`\int{x}^{b}{x}`|
    |$`\int^{b}_{a}{3x\, dx}`$|`\int^{b}_{a}{3x\, dx}`|
    |$\log_{a}{x}$|`\log_{a}{x}`|
    - #### Limits：[Large Operator](#large-operator)+`\limits`+[Superscript and Subscript](#superscript-and-subscript)
        |Large Operator|LaTex|
        |:---:|:---:|
        |$\lim\limits_{a}{x}$|`\lim\limits_{a}{x}`|
        |$\lim\limits_{a=0}{x}$|`\lim\limits_{a=0}{x}`|
        |$\lim\limits_{a\to 0}{x}$|`\lim\limits_{a\to 0}{x}`|
        |$\sum\limits_{a}^{b}{x}$|`\sum\limits_{a}^{b}{x}`|
    - #### Substack：`\substack{text1\\ text2}`
        |Large Operator|LaTex|
        |:---:|:---:|
        |$\lim\limits_{\substack{a\\ b}}{x}$|`\lim\limits_{\substack{a\\ b}}{x}`|
        |$\lim\limits_{\substack{a=0\\ b=0\\ c=0}}{x}$|`\lim\limits_{\substack{a=0\\ b=0\\ c=0}}{x}`|
        |$\sum\limits_{\substack{a\\ b}}^{c}{x}$|`\sum\limits_{\substack{a\\ b}}^{c}{x}`|

# Function
|Function|Output|LaTex|
|:---:|:---:|:---:|
|Exponential function|$\exp{x}$|`\exp{x}`|
|Natural Logarithm|$\ln{x}$|`\ln{x}`|
|Degree|$\deg{x}$|`\deg{x}`|
|Argument|$\arg{x}$|`\arg{x}`|
|Greatest Common Divisor|$\gcd{x}$|`\gcd{x}`|
|Binomial coefficient|$\binom{n}{k}$|`\binom{n}{k}`|
- ### Trigonometric Functions
    |Output|LaTex|
    |:---:|:---:|
    |$`\sin{x}`$|`\sin{x}`|
    |$`\cos{x}`$|`\cos{x}`|
    |$`\tan{x}`$|`\tan{x}`|
    |$`\cot{x}`$|`\cot{x}`|
    |$`\sec{x}`$|`\sec{x}`|
    |$`\csc{x}`$|`\csc{x}`|
    - #### Inverse Trigonometric Function
        |Output|LaTex|
        |:---:|:---:|
        |$`\arcsin{x}`$|`\arcsin{x}`|
        |$`\arccos{x}`$|`\arccos{x}`|
        |$`\arctan{x}`$|`\arctan{x}`|
- ### Hyperbolic Functions
    |Output|LaTex|
    |:---:|:---:|
    |$`\sinh{x}`$|`\sinh{x}`|
    |$`\cosh{x}`$|`\cosh{x}`|
    |$`\tanh{x}`$|`\tanh{x}`|
    |$`\coth{x}`$|`\coth{x}`|
- ### Superscript and Subscript
    |Output|LaTex|
    |:---:|:---:|
    |$`\sin^{-1}{x}`$|`\sin^{-1}{x}`|
    |$`\sin^{3}{x}`$|`\sin^{3}{x}`|
