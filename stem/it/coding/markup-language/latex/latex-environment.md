# Aligned
- ### Command
    $\begin{aligned}
        ab & cdf\\
        \vdots \\
        efg & hi
    \end{aligned}$
    ```latex
    \begin{aligned}
        ab & cdf\\
        \vdots \\
        efg & hi
    \end{aligned}
    ```
- ### Example
    - $\begin{aligned}
            ab & c \\
            & edf
        \end{aligned}$
        ```latex
        \begin{aligned}
            ab & c \\
            & edf
        \end{aligned}
        ```
    - $\begin{aligned}
            (a+b)^2 & = a^2 + 2ab + b^2 \\
            & = a^2 + b^2 + 2ab \\
            & = 2ab + a^2 + b^2
        \end{aligned}$
        ```latex
        \begin{aligned}
            (a+b)^2 & = a^2 + 2ab + b^2 \\
            & = a^2 + b^2 + 2ab \\
            & = 2ab + a^2 + b^2
        \end{aligned}
        ```

# Center
- ### Command
    ```latex
    \begin{center}
        
    \end{center}
    ```

# Matrix
- ### Command
    $\begin{matrix}
        a& \cdots &b \\
        \vdots & \ddots & \vdots \\
        c& \cdots &d
    \end{matrix}$
    ```latex
    \begin{matrix}
        a & \cdots & b \\
        \vdots & \ddots & \vdots \\
        c & \cdots & d
    \end{matrix}
    ```
- ### Types of Matrix
    |Matrix|Output|LaTex|
    |:---:|:---:|:---:|
    |Matrix|$\begin{matrix} 1&2 \\ 3&4 \end{matrix}$|`\begin{matrix} 1&2 \\ 3&4 \end{matrix}`|
    |parentheses Matrix|$\begin{pmatrix} 1&2 \\ 3&4 \end{pmatrix}$|`\begin{pmatrix} 1&2 \\ 3&4 \end{pmatrix}`|
    |brackets Matrix|$\begin{bmatrix} 1&2 \\ 3&4 \end{bmatrix}$|`\begin{bmatrix} 1&2 \\ 3&4 \end{bmatrix}`|
    |braces Matrix|$\begin{Bmatrix} 1&2 \\ 3&4 \end{Bmatrix}$|`\begin{Bmatrix} 1&2 \\ 3&4 \end{Bmatrix}`|
    |vertical bars Matrix|$\begin{vmatrix} 1&2 \\ 3&4 \end{vmatrix}$|`\begin{vmatrix} 1&2 \\ 3&4 \end{vmatrix}`|
    |double Vertical bars Matrix|$\begin{Vmatrix} 1&2 \\ 3&4 \end{Vmatrix}$|`\begin{Vmatrix} 1&2 \\ 3&4 \end{Vmatrix}`|
- ### Example
    - $\begin{matrix} 1 \\ &2&3 \\ 4&&6 \end{matrix}$
        ```latex
        \begin{matrix}
            1 \\
              & 2 & 3 \\ 
            4 &   & 6
        \end{matrix}
        ```
    - $\left\langle
        \begin{matrix}
            1 & 2 \\
            3 & 4 \\ 
        \end{matrix}
        \right\rangle$
        ```latex
        \left\langle
        \begin{matrix}
            1 & 2 \\
            3 & 4 \\ 
        \end{matrix}
        \right\rangle
        ```

# Array
- ### Command
    $\begin{array}{ccc}
        a & \cdots & b \\
        \vdots & \ddots & \vdots \\
        c & \cdots & d
    \end{array}$
    ```latex
    \begin{array}{ccc}
        a & \cdots & b \\
        \vdots & \ddots & \vdots \\
        c & \cdots & d
    \end{array}
    ```
- ### Column Alignment：`\begin{array}{column_alignment}`
    |Alignment|Output|Command|
    |:---:|:---:|:---:|
    |Center|$\begin{array}{c} a+b+c \\ d \end{array}$|`\begin{array}{c} a+b+c \\ d \end{array}`|
    |Left|$\begin{array}{l} a+b+c \\ d \end{array}$|`\begin{array}{l} a+b+c \\ d \end{array}`|
    |Right|$\begin{array}{r} a+b+c \\ d \end{array}$|`\begin{array}{r} a+b+c \\ d \end{array}`|
    - #### Multi-column
        $\begin{array}{clr}
            Center & Left & Right \\
            a+b+c & d+e+f & g+h+i \\
            j+k & l+m & n+o \\
            p & q & r
        \end{array}$
        ```latex
        \begin{array}{clr}
            Center & Left & Right \\
            a+b+c & d+e+f & g+h+i \\
            j+k & l+m & n+o \\
            p & q & r
        \end{array}
        ```
- ### Example
    - $\begin{array}{ccc} 1 \\ &2&3 \\ 4&&6 \end{array}$
        ```latex
        \begin{array}{ccc}
            1 \\
              & 2 & 3 \\ 
            4 &   & 6
        \end{array}
        ```
    - $\begin{array}{lcr}
            a & b & c \\
            123 & 456 & 789 \\ 
            & 10 \\
            5 & & 6
        \end{array}$
        ```latex
        \begin{array}{lcr}
            a & b & c \\
            123 & 456 & 789 \\ 
            & 10 \\
            5 & & 6
        \end{array}
        ```

# Tabular
- ### Command
    ```latex
    \begin{tabular}{}
        a & \cdots & b \\
        \vdots & \ddots & \vdots \\
        c & \cdots & d
    \end{tabular}
    ```

# Cases
- ### Command
    $\begin{cases}
        a & b \\
        \vdots & \vdots \\
        c & d
    \end{cases}$
    
    ```latex
    \begin{cases}
        a & b \\
        \vdots & \vdots \\
        c & d
    \end{cases}
    ```
- ### Example
    - $\begin{cases} a=35 \\ b=69 \\ c=77 \end{cases}$
        ```latex
        \begin{cases}
            a=35 \\
            b=69 \\
            c=77
        \end{cases}
        ```
    - $x=\begin{cases}
            35 & \text{if }a=0 \\
            69 & \text{if }a>0 \\
            77 & \text{else}
        \end{cases}$
        ```latex
        x=\begin{cases}
            35 & \text{if }a=0 \\
            69 & \text{if }a>0 \\
            77 & \text{else}
        \end{cases}
        ```

# Horizontal Line (hline)
- ### Command
    - `\hline`
- ### Example
    - $\begin{array}{l}a \\ \hline b \end{array}$
        ```latex
        \begin{array}{l}
            a \\
            \hline
            b
        \end{array}
        ```
    - $\begin{array}{l}p \to q \\ p \\ \hline \therefore q \end{array}$
        ```latex
        \begin{array}{l}
            p \to q \\
            p \\
            \hline
            \therefore q
        \end{array}
        ```
