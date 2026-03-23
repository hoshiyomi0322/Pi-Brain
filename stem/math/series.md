# Arithmetic Series
- ### Arithmetic Sequence：$`a_1,~a_1+d,~a_1+2d,~a_1+3d,~\cdots`$
    - $a_n=a_1+(n-1)d$
    - $`d=\text{common difference}`$
- ### Arithmetic Series：$`\sum\limits_{i=0}^{n-1}(a_1+id)=\frac{n(\ 2a_1+(n-1)d\ )}{2}=\frac{n(a_1+a_n)}{2}`$

# Geometric Series
- ### Geometric Sequence：$`a_1,~a_1r,~a_1r^2,~a_1r^3,~\cdots`$
    - $a_n=a_1\times r^{(n-1)}$
    - $`r=\text{common ratio}`$
- ### Geometric Series：$`\sum\limits_{i=0}^{n-1}(a_1\times r^i)=\frac{a_1(1-r^n)}{1-r},~r\neq1`$
- ### Infinite Geometric Series：$`\sum\limits_{i=0}^{\infty}(a_1\times r^i)=\begin{cases}{\frac{a_1}{1-r}}&{\text{when }|r|<1}\\ {\text{ diverges}}&{\text{when }|r|\geq 1}\end{cases}`$

# Harmonic Series
- ### Harmonic Series：$`\sum\limits_{n=1}^{\infty}{\frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\cdots`$
- ### Alternating Harmonic Series：$`\sum\limits_{n=1}^{\infty}{\frac{(-1)^{n+1}}{n}}=1-\frac{1}{2}+\frac{1}{3}+\cdots=\ln{2}`$
    - #### Madhava–Leibniz Series (Leibniz Formula for π)：$`\sum\limits_{n=1}^{\infty}{\frac{(-1)^{n}}{2n+1}}=1-\frac{1}{3}+\frac{1}{5}+\cdots=\arctan{1}=\frac{π}{4}`$
- ### P-Series：$`\sum\limits_{n=1}^{\infty}{\frac{1}{n^p}}=1+\frac{1}{2^p}+\frac{1}{3^p}+\cdots`$

# Power Series
- ### Power Series：$`f(x)=\sum\limits_{n=0}^{\infty}{a_n(x-c)^n} = a_0+a_1(x-c)^1+a_2(x-c)^2+\cdots`$
- ### Taylor Series：$`f(x)=\sum\limits_{n=0}^{\infty}{\frac{f^{(n)}(c)}{n!}(x-c)^n} = f(c)+\frac{f^\prime(c)}{1!}(x-c)+\frac{f^{\prime\prime}(c)}{2!}(x-c)^2+\cdots`$
    - $`a_n=\frac{f^{(n)}(c)}{n!}`$
- ### Maclaurin Series ($c=0$)：$`f(x)=\sum\limits_{n=0}^{\infty}{\frac{f^{(n)}(0)}{n!}(x-0)^n} = f(0)+\frac{f^\prime(0)}{1!}x+\frac{f^{\prime\prime}(0)}{2!}x^2+\cdots`$
- ### Taylor's Theorem
    - ### Remainder：$`R_n(x)=f(x)-\sum\limits_{n=0}^{\infty}{\frac{f^{(n)}(c)}{n!}(x-c)^n}`$
        - $`α=\text{a number between x and c}`$
    - ### Lagrange Form：$`R_n(x)=\frac{f^{n+1}(α)}{(n+1)!}(x-c)^{n+1}`$
        - Lagrange Error Bound
    - ### Cauchy Form：$`R_n(x)=\frac{f^{n+1}(α)}{n!}(x-α)^n(x-c)`$
- ### List of Maclaurin Series
    - $`\frac{1}{1-x}=\sum\limits_{n=0}^\infty{x^n}=1+x+x^2+x^3+\cdots`$
    - $`e^x=\sum\limits_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^2}{3!}+\cdots`$
    - $`\ln{(1-x)}=\sum\limits_{n=1}^{\infty}{-\frac{x^n}{n!}}=-x-\frac{x^2}{2!}-\frac{x^2}{3!}-\cdots`$
    - $`\ln{(1+x)}=\sum\limits_{n=1}^{\infty}{(-1)^{n+1}\frac{x^n}{n!}}=x-\frac{x^2}{2!}+\frac{x^2}{3!}+\cdots`$
    - $`\sin{x}=\sum\limits_{n=0}^{\infty}{(-1)^n\frac{x^{2n+1}}{(2n+1)!}}=x-\frac{x^3}{3!}+\frac{x^5}{5!}+\cdots`$
	- $`\cos{x}=\sum\limits_{n=0}^{\infty}{(-1)^n\frac{x^{2n}}{(2n)!}}=1-\frac{x^2}{2!}+\frac{x^4}{4!}+\cdots`$
	- $`\sinh{x}=\sum\limits_{n=0}^{\infty}\frac{x^{2n+1}}{(2n+1)!}=x+\frac{x^3}{3!}+\frac{x^5}{5!}+\cdots`$
	- $`\cosh{x}=\sum\limits_{n=0}^{\infty}\frac{x^{2n}}{(2n)!}=1+\frac{x^2}{2!}+\frac{x^4}{4!}+\cdots`$

# Other Series
- ### Alternating Series：$`\sum\limits_{n=1}^{\infty}{(-1)^{n+1}a_n},~a_n>0`$
- ### Telescoping Series：$`\sum\limits_{i=1}^{n}{(a_i-a_{i+1})}=(a_1-a_2)+(a_2-a_3)+\cdots+(a_n-a_{n+1})=a_1-a_{n+1}`$

# Convergence Tests
- ### [Convergence Tests](./algebra/calculus/limit/convergence-tests.md)

# Total Amount
- ### Total Amount($A$)
    - $P=\text{principal}$
    - $r=\text{annual interest rate}$
    - $t=\text{number of years}$
- ### Simple Interest：$`A=P(1+rt)`$
- ### Compound Interest：$`A=P(1+\frac{r}{n})^{nt}`$
    - $n=\text{Number of compounding periods per year}$
