# Joint [Distribution Function](../distribution-function.md)
- ### Joint [Probability Function](../distribution-function.md#probability-function)：$`f(x,~y)`$
    |Continuous|Discrete|
    |:---:|:---:|
    |**Joint Probability Density Function (Joint PDF)**<br>$`f(x,~y)=\frac{\partial^2}{\partial x\partial y}F(x,~y)`$|**Joint Probability Mass Function (Joint PMF)**<br>$`f(x,~y)=P(X=x,~Y=y)`$|
- ### Joint [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Joint [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F(x,~y)=P(X\le x,~Y\le y)=\begin{cases}{\int^x_{-\infty}{\int^y_{-\infty}{f(t,~s)\,ds}\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{\sum\limits_{s\le y}{f(t,~s)}}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Properties
    - #### $`f(x,~y)\ge 0`$
    - #### $`F(-\infty,~y)=F(x,~-\infty)=0`$
    - #### $`F(\infty,~\infty)=\begin{cases}{\int^\infty_{-\infty}{\int^\infty_{-\infty}{f(x)\,dy}\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{f(x,~y)}}}&\text{if }X\text{ is Discrete}\end{cases}=1`$

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)
    |Continuous|Discrete|
    |:---:|:---:|
    |**Marginal PDF**<br>$`\begin{cases}f(x)={\int^\infty_{-\infty}{f(x,~y)\,dy}} \\ f(y)={\int^\infty_{-\infty}{f(x,~y)\,dx}}\end{cases}`$|**Marginal PMF**<br>$`\begin{cases}f(x)=\sum\limits_y{f(x,~y)} \\ f(y)=\sum\limits_x{f(x,~y)}\end{cases}`$|
    - eg (Marginal PMF)
        |$f(x_i,~y_j)$|$x_1$|$x_2$|$x_3$|$x_4$|$f(y)$|
        |:---:|:---:|:---:|:---:|:---:|:---:|
        |$y_1$|$\frac{4}{32}$|$\frac{2}{32}$|$\frac{1}{32}$|$\frac{1}{32}$|$\frac{4+2+1+1}{32}$|
        |$y_2$|$\frac{3}{32}$|$\frac{6}{32}$|$\frac{3}{32}$|$\frac{3}{32}$|$\frac{3+6+3+3}{32}$|
        |$y_3$|$\frac{9}{32}$|$0$|$0$|$0$|$\frac{9}{32}$|
        |$f(x)$|$\frac{4+3+9}{32}$|$\frac{2+6}{32}$|$\frac{1+3}{32}$|$\frac{1+3}{32}$|$\frac{32}{32}$|
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - $`F(x)=F(x,~\infty)`$
    - $`F(y)=F(\infty,~y)`$

# Probability of a Multiple Random Variable
- ### $`\text{If }X\text{ and }Y\text{ are independent}`$
    - ### [Joint Probability Function](#joint-probability-function)：$`f(x,~y)=f(x)f(y)`$
    - ### [Joint CDF](#joint-cumulative-distribution-function-joint-cdf)：$`F(x,~y)=F(x)F(y)`$
- ### $`P(X=x,~Y=y)=P((X=x)\cap(Y=y))`$
    - #### [Joint Probability](../conditional-probability/conditional-probability.md#joint-probabilitypacap-b)：$`P((X=x)\cap(Y=y))=P(X=x\mid Y=y)P(Y=y)=P(Y=y\mid X=x)P(X=x)`$
- ### Interval Probability
    - #### $`P(X\le x,~Y\le y)=P((X\le x)\cap (Y \le y))=F(x,~y)`$
    - #### $`P(a<X\le b,~c<Y\le d)=F(b,~d)-F(a,~d)-F(b,~c)+F(a,~c)`$
    - #### $`P(a\le X\le b,~c\le Y\le d)`$
        - Continuous case：$`P(a\le X\le b,~c\le Y\le d)=\int_{a}^{b}{\int_{c}^{d}{f(x,~y)\,dy}\,dx}`$

