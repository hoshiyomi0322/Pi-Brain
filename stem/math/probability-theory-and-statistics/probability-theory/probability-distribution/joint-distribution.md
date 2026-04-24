# Joint [Distribution Function](../distribution-function.md)
- ### Joint [Probability Function](../distribution-function.md#probability-function)：$`f(x,~y)`$
    |Continuous|Discrete|
    |:---:|:---:|
    |**Joint Probability Density Function**<br>$`f(x,~y)=\frac{\partial^2}{\partial x\partial y}F(x,~y)`$|**Joint Probability Mass Function**<br>$`f(x,~y)=P((X=x)\cap(Y=y))`$|

- ### Joint [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - ### $`F(x,~y)=P(X\le x,~Y\le y)=P((X\le x)\cap (Y \le y))`$
    ||Continuous|Discrete|
    |:---:|:---:|:---:|
    |**Joint CDF**|$`F(x,~y)=\int^x_{-\infty}{\int^y_{-\infty}{f(t,~s)\,ds}\,dt}`$|$`F(x,~y)=`$|
- ### Properties
    - #### $`f(x,~y)\ge 0`$
    - #### $`\lim\limits_{x\to\infty}{F(x)}=\begin{cases}{\int^\infty_{-\infty}{f(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{f(x)}}&\text{if }X\text{ is Discrete}\end{cases}=1`$
    - $`\int^\infty_{-\infty}{\int^\infty_{-\infty}{f(x)\,dx}\,dy}=1`$
    - $`\sum\limits_x{\sum\limits_y{f(x,~y)}}=1`$|

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)
    ||Continuous|Discrete|
    |:---:|:---:|:---:|
    |**Marginal Probability Function**|**Marginal PDF**<br>|**Marginal PMF**<br>$`\begin{cases}f(x)=\sum\limits_y{f(x,~y)} \\ f(y)=\sum\limits_x{f(x,~y)}\end{cases}`$|
  - eg(Marginal PMF)
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - $`F(x)=F(x,~\infty)`$
    - $`F(y)=F(\infty,~y)`$

# Probability of a Multiple Random Variable
- #### $`P(X=x,~Y=y)=P((X=x)\cap(Y=y))`$
    - [**Joint Probability**](../conditional-probability/conditional-probability.md#joint-probability)：$`P((X=x)\cap(Y=y))=P(X=x\mid Y=y)P(Y=y)=P(Y=y\mid X=x)P(X=x)`$
- #### $`P(X\le x,~Y\le y)=P((X\le x)\cap (Y \le y))`$

