# Arithmetic Series
- ### Arithmetic Sequence：$`a_1,~a_1+d,~a_1+2d,~a_1+3d,~\cdots`$
    - $a_n=a_1+\left(n-1\right)d$
    - $`d=\text{common difference}`$
- ### Arithmetic Series：$`\sum\limits_{i=0}^{n-1}\left(a_1+id\right)=\frac{n\left(\ 2a_1+\left(n-1\right)d\ \right)}{2}=\frac{n\left(a_1+a_n\right)}{2}`$

# Geometric Series
- ### Geometric Sequence：$`a_1,~a_1r,~a_1r^2,~a_1r^3,~\cdots`$
    - $a_n=a_1\times r^{\left(n-1\right)}$
    - $`r=\text{common ratio}`$
- ### Geometric Series：$`\sum\limits_{i=0}^{n-1}\left(a_1\times r^i\right)=\frac{a_1\left(1-r^n\right)}{1-r},~r\neq1`$
- ### Infinite Geometric Series：$`\sum\limits_{i=0}^{\infty}\left(a_1\times r^i\right)=\begin{cases}{\frac{a_1}{1-r}}&{\text{if }|r|<1}\\ {\text{ diverges}}&{\text{if }|r|\geq 1}\end{cases}`$

# Harmonic Series
- ### Harmonic Series：$`\sum\limits_{n=1}^{\infty}{\frac{1}{n}}=1+\frac{1}{2}+\frac{1}{3}+\cdots`$
- ### Alternating Harmonic Series：$`\sum\limits_{n=1}^{\infty}{\frac{\left(-1\right)^{n+1}}{n}}=1-\frac{1}{2}+\frac{1}{3}+\cdots=\ln{2}`$
    - #### Madhava–Leibniz Series \left(Leibniz Formula for π\right)：$`\sum\limits_{n=1}^{\infty}{\frac{\left(-1\right)^{n}}{2n+1}}=1-\frac{1}{3}+\frac{1}{5}+\cdots=\arctan{1}=\frac{π}{4}`$
- ### P-Series：$`\sum\limits_{n=1}^{\infty}{\frac{1}{n^p}}=1+\frac{1}{2^p}+\frac{1}{3^p}+\cdots`$

# Power Series
- ### Power Series：$`f\left(x\right)=\sum\limits_{n=0}^{\infty}{a_n\left(x-c\right)^n} = a_0+a_1\left(x-c\right)^1+a_2\left(x-c\right)^2+\cdots`$
- ### Taylor Series：$`f\left(x\right)=\sum\limits_{n=0}^{\infty}{\frac{f^{\left(n\right)}\left(c\right)}{n!}\left(x-c\right)^n} = f\left(c\right)+\frac{f^\prime\left(c\right)}{1!}\left(x-c\right)+\frac{f^{\prime\prime}\left(c\right)}{2!}\left(x-c\right)^2+\cdots`$
    - $`a_n=\frac{f^{\left(n\right)}\left(c\right)}{n!}`$
- ### Maclaurin Series ($c=0$)：$`f\left(x\right)=\sum\limits_{n=0}^{\infty}{\frac{f^{\left(n\right)}\left(0\right)}{n!}\left(x-0\right)^n} = f\left(0\right)+\frac{f^\prime\left(0\right)}{1!}x+\frac{f^{\prime\prime}\left(0\right)}{2!}x^2+\cdots`$
- ### Taylor's Theorem
    - ### Remainder：$`R_n\left(x\right)=f\left(x\right)-\sum\limits_{n=0}^{\infty}{\frac{f^{\left(n\right)}\left(c\right)}{n!}\left(x-c\right)^n}`$
        - $`α=\text{a number between x and c}`$
    - ### Lagrange Form：$`R_n\left(x\right)=\frac{f^{n+1}\left(α\right)}{\left(n+1\right)!}\left(x-c\right)^{n+1}`$
        - Lagrange Error Bound
    - ### Cauchy Form：$`R_n\left(x\right)=\frac{f^{n+1}\left(α\right)}{n!}\left(x-α\right)^n\left(x-c\right)`$
- ### List of Maclaurin Series
    - $`\frac{1}{1-x}=\sum\limits_{n=0}^\infty{x^n}=1+x+x^2+x^3+\cdots`$
    - $`e^x=\sum\limits_{n=0}^{\infty}\frac{x^n}{n!}=1+x+\frac{x^2}{2!}+\frac{x^2}{3!}+\cdots`$
    - $`\ln{\left(1-x\right)}=\sum\limits_{n=1}^{\infty}{-\frac{x^n}{n!}}=-x-\frac{x^2}{2!}-\frac{x^2}{3!}-\cdots`$
    - $`\ln{\left(1+x\right)}=\sum\limits_{n=1}^{\infty}{\left(-1\right)^{n+1}\frac{x^n}{n!}}=x-\frac{x^2}{2!}+\frac{x^2}{3!}+\cdots`$
    - $`\sin{x}=\sum\limits_{n=0}^{\infty}{\left(-1\right)^n\frac{x^{2n+1}}{\left(2n+1\right)!}}=x-\frac{x^3}{3!}+\frac{x^5}{5!}+\cdots`$
	- $`\cos{x}=\sum\limits_{n=0}^{\infty}{\left(-1\right)^n\frac{x^{2n}}{\left(2n\right)!}}=1-\frac{x^2}{2!}+\frac{x^4}{4!}+\cdots`$
	- $`\sinh{x}=\sum\limits_{n=0}^{\infty}\frac{x^{2n+1}}{\left(2n+1\right)!}=x+\frac{x^3}{3!}+\frac{x^5}{5!}+\cdots`$
	- $`\cosh{x}=\sum\limits_{n=0}^{\infty}\frac{x^{2n}}{\left(2n\right)!}=1+\frac{x^2}{2!}+\frac{x^4}{4!}+\cdots`$

# Other Series
- ### Alternating Series：$`\sum\limits_{n=1}^{\infty}{\left(-1\right)^{n+1}a_n},~a_n>0`$
- ### Telescoping Series：$`\sum\limits_{i=1}^{n}{\left(a_i-a_{i+1}\right)}=\left(a_1-a_2\right)+\left(a_2-a_3\right)+\cdots+\left(a_n-a_{n+1}\right)=a_1-a_{n+1}`$

# Convergence Tests
- ### [Convergence Tests](./algebra/calculus/limit/convergence-tests.md)

# Total Amount
- ### Total Amount($A$)
    - $P=\text{principal}$
    - $r=\text{annual interest rate}$
    - $t=\text{number of years}$
- ### Simple Interest：$`A=P\left(1+rt\right)`$
- ### Compound Interest：$`A=P\left(1+\frac{r}{n}\right)^{nt}`$
    - $n=\text{Number of compounding periods per year}$
