# Substitution method

# Recursion-Tree method

# Master theorem
- $T\left(n\right) = aT\left(\frac{n}{b}\right)+f\left(n\right)$
    - $n$ = the size of the problem
    - $a$ = the number of subproblems ($a≥1$)
    - $\frac{n}{b}$ = the size of each subproblem ($b>1$)
    - $f\left(n\right)$ = the cost of work done outside the recursive calls (dividing the problem and combining results)
- ### Case
    |Case|Condition|Time Complexity|
    |:---:|:---:|:---:|
    |$f\left(n\right) < n^{\log_b{a}}$|$\frac{f\left(n\right)}{n^{\log_b{a}}}=O\left(n^{-ϵ}\right),~ϵ>0$|$T\left(n\right) = Θ\left( n^{\log_b{a}} \right)$|
    |$f\left(n\right) = n^{\log_b{a}}$|$\frac{f\left(n\right)}{n^{\log_b{a}}}=Θ\left(\log^{ϵ}{n}\right),~ϵ\ge0$|$T\left(n\right) = Θ\left( n^{\log_b{a}}\log^{ϵ+1}{n} \right)$|
    |$f\left(n\right) > n^{\log_b{a}}$|$\frac{f\left(n\right)}{n^{\log_b{a}}}=Ω\left(n^ϵ\right),~ϵ>0$ and satisfies the [Regularity condition](#regularity-condition)|$T\left(n\right) = Θ\left( f\left(n\right) \right)$|
    - #### Regularity condition：$af\left(\frac{n}{b}\right) \le cf\left(n\right),~0<c<1$
