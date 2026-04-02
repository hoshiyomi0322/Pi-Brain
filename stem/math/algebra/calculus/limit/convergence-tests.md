# Infinite Series, Improper Integral
- ### Infinite [Series](../../../series.md)：$`\sum\limits_{n=1}^{\infty}{a_n},~\sum\limits_{n=1}^{\infty}{b_n}`$
- ### [Improper Integral](../integral-calculus/integral-calculus.md#improper-integral)：$`\int_{a}^{b}{f(x)\, dx},~\int_{a}^{b}{g(x)\, dx}`$
- ### Objects
    - $`A=\sum\limits_{n=1}^{\infty}{a_n},~\int_{a}^{b}{f(x)\, dx}`$
    - $`B=\sum\limits_{n=1}^{\infty}{b_n},~\int_{a}^{b}{g(x)\, dx}`$

# Convergent, Divergent
- ### $`Convergent+Divergent＝Divergent`$

# Absolute Convergence, Conditional Convergence
- ### Absolute Value
    ||$`A`$ converges|$`B`$ diverges|
    |:---:|:---:|:---:|
    |$`\|A\|`$ converges|Absolute Convergence|Not Allowed|
    |$`\|A\|`$ diverges|Conditional Convergence|Divergent|
    - $`|A|=\sum\limits_{n=1}^{\infty}|a_n|,~\int_{a}^{b}{|f(x)|\, dx}`$

- ### Absolute Convergence
    - $`\text{If }\sum\limits_{n=1}^{\infty}|a_n|\text{ converges},~\text{then }\sum\limits_{n=1}^{\infty}{a_n}\text{ converges absolutely}`$
    - $`\text{If }\int_{a}^{b}{|f(x)|\, dx}\text{ converges},~\text{then }\int_{a}^{b}{f(x)\, dx}\text{ converges absolutely}`$
- ### Conditional Convergence
    - $`\text{If }\sum\limits_{n=1}^{\infty}{a_n}\text{ converges},~\text{but }\sum\limits_{n=1}^{\infty}|a_n|\text{ diverges}`$
    - $`\text{If }\int_{a}^{b}{f(x)\, dx}\text{ converges},~\text{but }\int_{a}^{b}{|f(x)|\, dx}\text{ diverges}`$

# Comparison test
- ### Objects ($`α,β\geq 0`$)
    - $`α=a_n,~f(x)`$
    - $`β=b_n,~g(x)`$
- ### Direct Comparison Test：$`0\leq α\leq β`$
    - $`\text{If }B\text{ converges},~\text{then }A\text{ converges}`$
    - $`\text{If }A\text{ diverges},~\text{then }B\text{ diverges}`$
- ### Limit Comparison Test：$`\lim\limits_{n\to\infty}{\frac{α}{β}}=L`$
    |$`L`$|Convergent, Divergent|
    |:---:|:---:|
    |$`0<L<\infty`$|$`A\text{ and }B\text{ either both converge or both diverge}`$|
    |$`L=0`$|$`\text{If }B\text{ converges},~\text{then }A\text{ converges}`$|
    |$`L=\infty`$|$`\text{If }B\text{ diverges},~\text{then }A\text{ diverges}`$|

# Ratio test, Root test
- ### Ratio test：$`\lim\limits_{n\to\infty}{|\frac{a_{n+1}}{a_n}|}=r`$
- ### Root test：$`\lim\limits_{n\to\infty}\sqrt[n]{|a_n|}=r`$
- ### States
    |$`r`$|Convergent, Divergent|
    |:---:|:---:|
    |$`r<1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ converges absolutely}`$|
    |$`r=1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ either converge or diverge}`$|
    |$`r>1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ diverges}`$|
- ### [Power Series](../../../series.md#power-series)：$`f(x)=\sum\limits_{n=0}^{\infty}{a_n(x-c)^n}`$
    - #### Radius of Convergence：$`R`$
        - $`\frac{1}{R}=\lim\limits_{n\to\infty}|\frac{a_{n+1}}{a_{n}}|=\lim\limits_{n\to\infty}\sqrt[n]{|a_n|}`$
    - #### Interval of Convergence：$`(c-R,~c+R)`$
        |Interval|Convergent, Divergent|
        |:---:|:---:|
        |$`\|x-c\|<R`$|$`\sum\limits_{n=0}^{\infty}{a_n(x-c)^n}\text{ converges}`$|
        |$`\|x-c\|=R`$|$`\sum\limits_{n=0}^{\infty}{a_n(x-c)^n}\text{ either converge or diverge}`$|
        |$`\|x-c\|>R`$|$`\sum\limits_{n=0}^{\infty}{a_n(x-c)^n}\text{ diverges}`$|

# Infinite Series
- ### [Ratio test, Root test](#ratio-test-root-test)
- ### Integral test：$`\sum\limits_{n=1}^{\infty}a_n=\sum\limits_{x=1}^{\infty}f(x)`$
    - $`\text{If }\int_{1}^{\infty}{f(x)\,dx}\text{ converges},~\text{then }\sum\limits_{n=1}^{\infty}a_n\text{ converges}`$
    - $`\text{If }\int_{1}^{\infty}{f(x)\,dx}\text{ diverges},~\text{then }\sum\limits_{n=1}^{\infty}a_n\text{ diverges}`$
- ### [Alternating Series](../../../series.md#alternating-series) test：$`\sum\limits_{n=1}^{\infty}{(-1)^{n+1}a_n},~a_n>0`$
    |Conditions|Convergent, Divergent|
    |:---:|:---:|
    |meets both conditions|$`\sum\limits_{n=1}^{\infty}{(-1)^{n+1}a_n}\text{ converges}`$|
    |does not meet both conditions|$`\sum\limits_{n=1}^{\infty}{(-1)^{n+1}a_n}\text{ diverges}`$|
    - #### Conditions
        - Monotonically decreasing：$`a_n\geq a_{n+1}`$
        - The sequence converges to 0：$`\lim\limits_{n\to\infty}{a_n}=0`$
- ### [P-Series](../../../series.md#p-series) test：$`\sum\limits_{n=1}^{\infty}{\frac{1}{n^p}}`$
    |$`p`$|Convergent, Divergent|
    |:---:|:---:|
    |$`p>1`$|$`\sum\limits_{n=1}^{\infty}{\frac{1}{n^p}}\text{ converges}`$|
    |$`0<p\leq 1`$|$`\sum\limits_{n=1}^{\infty}{\frac{1}{n^p}}\text{ diverges}`$<br>(sequence decreases too slowly)|
