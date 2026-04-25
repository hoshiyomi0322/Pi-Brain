# Joint [Distribution Function](../distribution-function.md)
- ### Joint [Probability Function](../distribution-function.md#probability-function)：$`f(x,~y)`$
    |Random Variable|Joint Probability Function|
    |:---:|:---:|
    |**$(X,~Y)$ is Continuous**|**Joint Probability Density Function (Joint PDF)**<br>$`f(x,~y)=\frac{\partial^2}{\partial x\partial y}F(x,~y)`$|
    |**$(X,~Y)$ is Discrete**|**Joint Probability Mass Function (Joint PMF)**<br>$`f(x,~y)=P(X=x,~Y=y)`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`\begin{aligned}&f(x,~y)=f(x\mid y)P(Y=y)=P(Y=y\mid X=x)f(x)\\&f(x,~y)=\frac{\partial}{\partial x}P(X\le x,~Y=y)\end{aligned}`$|

- ### Joint [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Joint [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F(x,~y)=P(X\le x,~Y\le y)=\begin{cases}{\int^x_{-\infty}{\int^y_{-\infty}{f(t,~s)\,ds}\,dt}}&\text{if }(X,~Y)\text{ is Continuous}\\{\sum\limits_{t\le x}{\sum\limits_{s\le y}{f(t,~s)}}}&\text{if }(X,~Y)\text{ is Discrete}\\{\sum\limits_{s\le y}{\int_{-\infty}^{x}{f(t,~s)\,dt}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
- ### $`\text{If }X\text{ and }Y\text{ are Independent}`$
    - ### [Joint Probability Function](#joint-probability-function)：$`f(x,~y)=f(x)f(y)`$
    - ### [Joint CDF](#joint-cumulative-distribution-function-joint-cdf)：$`F(x,~y)=F(x)F(y)`$
- ### Properties
    - #### $`f(x,~y)\ge 0`$
    - #### $`F(-\infty,~y)=F(x,~-\infty)=0`$
    - #### $`F(\infty,~\infty)=\begin{cases}{\int^\infty_{-\infty}{\int^\infty_{-\infty}{f(x,~y)\,dy}\,dx}}&\text{if }(X,~Y)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{f(x,~y)}}}&\text{if }(X,~Y)\text{ is Discrete}\\{\sum\limits_y{\int^\infty_{-\infty}{f(x,~y)\,dx}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}=1`$

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)：$f(x),~f(y)$
    |Random Variable|Marginal Probability Function|
    |:---:|:---:|
    |**$(X,~Y)$ is Continuous**|**Marginal PDF**<br>$`\begin{cases}f(x)=\int^\infty_{-\infty}{f(x,~y)\,dy}\\ f(y)=\int^\infty_{-\infty}{f(x,~y)\,dx}\end{cases}`$|
    |**$(X,~Y)$ is Discrete**|**Marginal PMF**<br>$`\begin{cases}f(x)=\sum\limits_y{f(x,~y)}\\ f(y)=\sum\limits_x{f(x,~y)}\end{cases}`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`\begin{cases}f(x)=\sum\limits_y{f(x,~y)}\\ f(y)=\int^\infty_{-\infty}{f(x,~y)\,dx}\end{cases}`$|
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - $`F(x)=F(x,~\infty)`$
    - $`F(y)=F(\infty,~y)`$
- #### eg：$(X,~Y)$ is Discrete
    |$f(x_i,~y_j)$|$x_1$|$x_2$|$x_3$|$x_4$|$f(y_j)$|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |$y_1$|$\frac{4}{32}$|$\frac{2}{32}$|$\frac{1}{32}$|$\frac{1}{32}$|$\frac{4+2+1+1}{32}$|
    |$y_2$|$\frac{3}{32}$|$\frac{6}{32}$|$\frac{3}{32}$|$\frac{3}{32}$|$\frac{3+6+3+3}{32}$|
    |$y_3$|$\frac{9}{32}$|$0$|$0$|$0$|$\frac{9}{32}$|
    |$f(x_i)$|$\frac{4+3+9}{32}$|$\frac{2+6}{32}$|$\frac{1+3}{32}$|$\frac{1+3}{32}$|$\frac{32}{32}$|
    - $f(x_2)=f(x_2,~y_1)+f(x_2,~y_2)+f(x_2,~y_3)=\frac{8}{32}$
    - $F(x_2)=F(x_2,~\infty)=\sum\limits_{x\le x_2}{\sum\limits_{y}{f(x,~y)}}=f(x_1)+f(x_2)=\frac{24}{32}$

# Conditional Distribution
- ### Conditional [Probability Function](../distribution-function.md#probability-function)：$`f(x|y)`$
    |Random Variable|Conditional Probability Function|
    |:---:|:---:|
    |**$(X,~Y)$ is Continuous**|**Conditional PDF**<br>$`f(x\mid y)=\frac{f(x,~y)}{f(y)}`$|
    |**$(X,~Y)$ is Discrete**|**Conditional PMF**<br>$`f(x\mid y)=P(X=x\mid ~Y=y)`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`f(x\mid y)=\frac{f(x,~y)}{P(Y=y)}=\frac{P(Y=y\mid X=x)f(x)}{P(Y=y)}`$|

# Probability of a Multiple Random Variable
- ### [Joint Probability](../conditional-probability/conditional-probability.md#joint-probabilitypacap-b)
    - #### $`P((X=x)\cap(Y=y))=P(X=x\mid Y=y)P(Y=y)=P(Y=y\mid X=x)P(X=x)`$
    - #### $`P((X\le x)\cap(Y\le y))=P(X\le x\mid Y\le y)P(Y\le y)=P(Y\le y\mid X\le x)P(X\le x)`$
- ### $`P(X=x,~Y=y)=P((X=x)\cap(Y=y))`$
- ### Interval Probability
    - #### $`P(X\le x,~Y\le y)=P((X\le x)\cap (Y \le y))=F(x,~y)`$
    - #### $`P(a<X\le b,~c<Y\le d)=F(b,~d)-F(a,~d)-F(b,~c)+F(a,~c)`$
    - #### $`P(a\le X\le b,~c\le Y\le d)=\begin{cases}{\int_{a}^{b}{\int_{c}^{d}{f(x,~y)\,dy}\,dx}}&\text{if }(X,~Y)\text{ is Continuous}\\{\sum\limits_{a\le x\le b}{\sum\limits_{c\le y\le d}{f(x,~y)}}}&\text{if }(X,~Y)\text{ is Discrete}\\{\sum\limits_{c\le y\le d}{\int_{a}^{b}{f(x,~y)\,dx}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$

