# Joint [Probability Function](../distribution-function.md#probability-function)：$`f(x,~y)`$
||Continuous|Discrete|
|:---:|:---:|:---:|
|**Joint Probability Function**|**Joint Probability Density Function**<br>$`f_d(x,~y)=\frac{\partial^2}{\partial x\partial y}F(x,~y)`$|**Joint Probability Mass Function**<br>$`f_m(x,~y)=P((X=x)\cap(Y=y))`$|
|**Properties**|$`f_d(x,~y)\ge 0,~\int^\infty_{-\infty}{\int^\infty_{-\infty}{f_d(x)\,dx}\,dy}=1`$|$`f_m(x,~y)\ge 0,~\sum\limits_x{\sum\limits_y{f_m(x,~y)}}=1`$|

# Joint [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)：$`F(x,~y)`$
- ### $`F(x,~y)=P(X\le x,~Y\le y)=P((X\le x)\cap (Y \le y))`$
    ||Continuous|Discrete|
    |:---:|:---:|:---:|
    |**Joint CDF**|$`F(x,~y)=\int^x_{-\infty}{\int^y_{-\infty}{f_d(t,~s)\,ds}\,dt}`$|$`F(x,~y)=`$|

# Probability of a Multiple Random Variable
- ### $`P((X=x)\cap(Y=y))=P(Y=y\mid X=x)P(X=x)=P(X=x\mid Y=y)P(Y=y)`$

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)
    ||Continuous|Discrete|
    |:---:|:---:|:---:|
    |**Marginal Distribution**||
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - $`F(x)=F(x,~\infty)`$
    - $`F(y)=F(\infty,~y)`$

