# Infinite Series, Improper Integral
- ### Infinite Series：$`\sum\limits_{n=1}^{\infty}{a_n},~\sum\limits_{n=1}^{\infty}{b_n}`$
- ### Improper Integral：$`\int_{a}^{b}{f(x)\, dx},~\int_{a}^{b}{g(x)\, dx}`$
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
    - $`\text{If }β\text{ converges},~\text{then }α\text{ converges}`$
    - $`\text{If }α\text{ diverges},~\text{then }β\text{ diverges}`$
- ### Limit Comparison Test：$`\lim\limits_{n\to\infty}{\frac{α}{β}}=L`$
    |$`L`$|Convergent, Divergent|
    |:---:|:---:|
    |$`0<L<\infty`$|$`α\text{ and }β\text{ either both converge or both diverge}`$|
    |$`L=0`$|$`\text{If }β\text{ converges},~\text{then }α\text{ converges}`$|
    |$`L=\infty`$|$`\text{If }β\text{ diverges},~\text{then }α\text{ diverges}`$|

# Ratio test, Root test
- ### Ratio test：$`\lim\limits_{n\to\infty}{|\frac{a_{n+1}}{a_n}|}=r`$
- ### Root test：$`\lim\limits_{n\to\infty}\sqrt[n]{|a_n|}=r`$
- ### $`r`$
    |$`r`$|Convergent, Divergent|
    |:---:|:---:|
    |$`r<1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ converges absolutely}`$|
    |$`r=1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ either converge or diverge}`$|
    |$`r>1`$|$`\sum\limits_{n=1}^{\infty}{a_n}\text{ diverges}`$|
- ### Power Series：$`f(x)=\sum\limits_{n=0}^{\infty}{a_n(x-c)^n}`$
    - #### Radius of Convergence：$`R`$
        - $`\frac{1}{R}=\lim\limits_{n\to\infty}|\frac{a_{n+1}}{a_{n}}|=\lim\limits_{n\to\infty}\sqrt[n]{|a_n|}`$
    - #### Interval of Convergence：$`(c-R,~c+R)`$
        - $`|x-c|<R`$


