# Time Complexity
- ### Number of operations：$T\left(n\right)$
    - $n = \text{Input size}$
    - $c = \text{Constant}$
- ### Asymptotic Notation
    <table border="1">
        <thead>
            <tr>
                <th align="center">Time Complexity</th>
                <th align="center">Asymptotic Notation</th>
                <th align="center">Definition<br>($\text{for }n\ge n_0$)</th>
                <th align="center">Limit</th>
            </tr>
        </thead>
        <tr>
            <th align="center">Worst-case<br>(Upper Bound)</th>
            <td align="center">Big O Notation<br>$T\left(n\right)=O\left(g\left(n\right)\right)$</td>
            <td align="center"><img src="./image/worst-case.png" width="30%"><br>$T\left(n\right) \le c\times g\left(n\right)$</td>
            <td align="center" rowspan="3"> $\lim\limits_{n\to\infty}{\frac{T\left(n\right)}{g\left(n\right)}}=c_L$ <br> $T\left(n\right) \approx c_L\times g\left(n\right)$ <br> $c_L=\text{the Leading Coefficient of }T\left(n\right)$ <br> $g\left(n\right) = \text{the Dominant Term of }T\left(n\right)\text{ ignoring coefficients} \left(c_L\right)$ </td>
        </tr>
        <tr>
            <th align="center">Best-case<br>(Lower Bound)</th>
            <td align="center">Big Ω Notation<br>$T\left(n\right)=Ω\left(g\left(n\right)\right)$</td>
            <td align="center"><img src="./image/best-case.png" width="30%"><br>$T\left(n\right) \ge c\times g\left(n\right)$</td>
        </tr>
        <tr>
            <th align="center">Average-case<br>(Tight Bound)</th>
            <td align="center">Big Θ Notation<br>$T\left(n\right)=Θ\left(g\left(n\right)\right)$</td>
            <td align="center"><img src="./image/average-case.png" width="30%"><br>$c_1\times g\left(n\right) \le T\left(n\right) \le c_2\times g\left(n\right)$</td>
        </tr>
    </table>

    - #### Strict Bounds
        |Time Complexity|Asymptotic Notation|Definition<br>($\text{for }n\ge n_0$)|Limit|
        |:---:|:---:|:---:|:---:|
        |**Worst-case<br>(Strict Upper Bound)**|Little o Notation<br>$T\left(n\right)=o\left(g\left(n\right)\right)$|$T\left(n\right) < c\times g\left(n\right)$|$\lim\limits_{n\to\infty}{\frac{T\left(n\right)}{g\left(n\right)}}=0$|
        |**Best-case<br>(Strict Lower Bound)**|Little ω Notation<br>$T\left(n\right)=ω\left(g\left(n\right)\right)$|$T\left(n\right) > c\times g\left(n\right)$|$\lim\limits_{n\to\infty}{\frac{T\left(n\right)}{g\left(n\right)}}=\infty$|
- #### Example
    - number of operations：$T\left(n\right)=2n^2+n+1$
    - Time Complexity
        <table border="1">
            <thead>
                <tr>
                    <th align="center">Time Complexity</th>
                    <th align="center">Limit</th>
                    <th align="center">$g\left(n\right)$</th>
                    <th align="center">$T\left(n\right)$</th>
                </tr>
            </thead>
            <tr>
                <th align="center">Upper Bound</th>
                <td align="center" rowspan="3"> $\lim\limits_{n\to\infty}{\frac{2n^2+n+1}{g\left(n\right)}}=2 \implies \lim\limits_{n\to\infty}{\frac{2n^2+n+1}{n^2}}=\lim\limits_{n\to\infty}{2}=2$ </td>
                <td align="center" rowspan="3">$g\left(n\right)=n^2$</td>
                <td align="center">$T\left(n\right)=O\left(n^2\right)$</td>
            </tr>
            <tr>
                <th align="center">Lower Bound</th>
                <td align="center">$T\left(n\right)=Ω\left(n^2\right)$</td>
            </tr>
            <tr>
                <th align="center">Tight Bound</th>
                <td align="center">$T\left(n\right)=Θ\left(n^2\right)$</td>
            </tr>
            <tr>
                <th align="center">Strict Upper Bound</th>
                <td align="center">$\lim\limits_{n\to\infty}{\frac{2n^2+n+1}{g\left(n\right)}}=0 \implies \lim\limits_{n\to\infty}{\frac{2n^2+n+1}{n^3}}=\lim\limits_{n\to\infty}{\frac{1}{n}}=0$</td>
                <td align="center">$g\left(n\right)=n^3$</td>
                <td align="center">$T\left(n\right)=o\left(n^3\right)$</td>
            </tr>
            <tr>
                <th align="center">Strict Lower Bound</th>
                <td align="center">$\lim\limits_{n\to\infty}{\frac{2n^2+n+1}{g\left(n\right)}}=\infty \implies \lim\limits_{n\to\infty}{\frac{2n^2+n+1}{n}}=\lim\limits_{n\to\infty}{n}=\infty$</td>
                <td align="center">$g\left(n\right)=n$</td>
                <td align="center">$T\left(n\right)=ω\left(n\right)$</td>
            </tr>
        </table>
- ### Common Time Complexities
    <img src="./image/time-complexity.png" width="40%">

    |Time Complexity|$O\left(g\left(n\right)\right)$<br>($a>1,~b>1$)|Name|Example|
    |:---:|:---:|:---:|:---:|
    |Faster|$O\left(1\right)$|Constant time||
    |$\downarrow$|$O\left(\log_a{n}\right)$|Logarithmic time|[Binary search](./sorting-and-search-algorithm/search-algorithm/types-of-searching/ordered-search.md#binary-search)|
    |$\downarrow$|$O\left(\left(\log_a{n}\right)^b\right)$|Polylogarithmic time|||
    |$\downarrow$|$O\left(n\right)$|Linear time|[Linear search](./sorting-and-search-algorithm/search-algorithm/types-of-searching/unordered-search.md#linear-search-sequential-search)|
    |$\downarrow$|$O\left(n\log_a{n}\right)$|Linearithmic time|[Merge sort](./sorting-and-search-algorithm/sorting-algorithm/types-of-sorting/comparison-sort.md#merge-sort)|
    |$\downarrow$|$O\left(n^2\right)$|Quadratic time|[Bubble sort](./sorting-and-search-algorithm/sorting-algorithm/types-of-sorting/comparison-sort.md#bubble-sort), [Insertion sort](./sorting-and-search-algorithm/sorting-algorithm/types-of-sorting/comparison-sort.md#insertion-sort), [Selection sort](./sorting-and-search-algorithm/sorting-algorithm/types-of-sorting/comparison-sort.md#selection-sort)|
    |$\downarrow$|$O\left(n^a\right)$|Polynomial time (P)|[Matrix multiplication](matrix-multiplication.md#matrix-multiplication)|
    |$\downarrow$|$O\left(a^n\right)$|Exponential time||
    |Slower|$O\left(n!\right)$|Factorial time||

# Space Complexity

# Computational Complexity Theory

- ### Nondeterministic Polynomial Time (NP)
- ### Polynomial Time (P)
    - $\text{P} \subseteq \text{NP}$
- ### NP-Hard
- ### NP-Complete
    - $\text{NP-Complete}=\text{NP}\cap \text{NP-Hard}$

# Master Theorem
- ### Master Theorem：$T\left(n\right)=aT\left(\frac{n}{b}\right)+f\left(n\right)$

# Amortized Analysis
