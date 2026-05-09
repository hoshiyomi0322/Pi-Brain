# [Joint](../../conditional-probability/conditional-probability.md#joint-probability) [Distribution Function](../distribution-function.md)
- ### [Joint](../../conditional-probability/conditional-probability.md#joint-probability) [Probability Function](../distribution-function.md#probability-function)：$`f_{XY}\left(x,~y\right)=f_{X|Y}\left(x|y\right)f_Y\left(y\right)=f_{Y|X}\left(y|x\right)f_X\left(x\right)`$
    |Random Variable|Joint Probability Function|
    |:---:|:---:|
    |**$\left(X,~Y\right)$ is Continuous**|**Joint Probability Density Function (Joint PDF)**<br>$`f\left(x,~y\right)=\frac{\partial^2}{\partial x\partial y}F\left(x,~y\right)`$|
    |**$\left(X,~Y\right)$ is Discrete**|**Joint Probability Mass Function (Joint PMF)**<br>$`f\left(x,~y\right)=P\left(X=x,~Y=y\right)=P\left(\left(X=x\right)\cap\left(Y=y\right)\right)`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`f\left(x,~y\right)=f_{X\|Y}\left(x\|y\right)P\left(Y=y\right)=P\left(Y=y\|X=x\right)f_X\left(x\right)`$<br>$`f\left(x,~y\right)=\frac{\partial}{\partial x}P\left(X\le x,~Y=y\right)`$|
- ### [Joint](../../conditional-probability/conditional-probability.md#joint-probability) [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Joint [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F\left(x,~y\right)=P\left(X\le x,~Y\le y\right)=\begin{cases}{\int^x_{-\infty}{\int^y_{-\infty}{f\left(t,~s\right)\,ds}\,dt}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_{t\le x}{\sum\limits_{s\le y}{f\left(t,~s\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete}\\{\sum\limits_{s\le y}{\int_{-\infty}^{x}{f\left(t,~s\right)\,dt}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f_{XY}\left(x,~y\right)=f_X\left(x\right)f_Y\left(y\right)`$
    - ### $`F_{XY}\left(x,~y\right)=F_X\left(x\right)F_Y\left(y\right)`$
- ### Properties
    - #### $`f_{XY}\left(x,~y\right)\ge 0`$
    - #### $`F_{XY}\left(-\infty,~y\right)=F_{XY}\left(x,~-\infty\right)=0`$
    - #### $`F_{XY}\left(\infty,~\infty\right) = F_X\left(\infty\right)=F_Y\left(\infty\right) = 1`$
- ### [Expected Value of Joint Distribution](../../expected-value.md#expected-value-of-joint-distribution)
- ### [Covariance](../../../statistics/variance.md#covariance)

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)：$`f_X\left(x\right),~f_Y\left(y\right)`$
    |Random Variable|Marginal Probability Function|
    |:---:|:---:|
    |**$\left(X,~Y\right)$ is Continuous**|**Marginal PDF**<br>$`\begin{cases}f_X\left(x\right)=\int^\infty_{-\infty}{f_{XY}\left(x,~y\right)\,dy}\\ f_Y\left(y\right)=\int^\infty_{-\infty}{f_{XY}\left(x,~y\right)\,dx}\end{cases}`$|
    |**$\left(X,~Y\right)$ is Discrete**|**Marginal PMF**<br>$`\begin{cases}f_X\left(x\right)=\sum\limits_y{f_{XY}\left(x,~y\right)}\\ f_Y\left(y\right)=\sum\limits_x{f_{XY}\left(x,~y\right)}\end{cases}`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`\begin{cases}f_X\left(x\right)=\sum\limits_y{f_{XY}\left(x,~y\right)}\\ f_Y\left(y\right)=\int^\infty_{-\infty}{f_{XY}\left(x,~y\right)\,dx}\end{cases}`$|
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Marginal [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F_X\left(x\right)=F_{XY}\left(x,~\infty\right) = \begin{cases} {\int^x_{-\infty}{f_X\left(t\right)\,dt}} & \text{if } X \text{ is Continuous} \\ {\sum\limits_{t\le x}{f_X\left(t\right)}} & \text{if } X \text{ is Discrete}\end{cases}`$
    - ### $`F_Y\left(y\right)=F_{XY}\left(\infty,~y\right) = \begin{cases} {\int^y_{-\infty}{f_Y\left(s\right)\,ds}} & \text{if } X \text{ is Continuous} \\ {\sum\limits_{s\le y}{f_Y\left(s\right)}} & \text{if } X \text{ is Discrete}\end{cases}`$
- #### eg：$`\left(X,~Y\right)`$ is Discrete
    |$f\left(x_i,~y_j\right)$|$x_1$|$x_2$|$x_3$|$x_4$|$f\left(y_j\right)$|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |$y_1$|$\frac{4}{32}$|$\frac{2}{32}$|$\frac{1}{32}$|$\frac{1}{32}$|$\frac{4+2+1+1}{32}$|
    |$y_2$|$\frac{3}{32}$|$\frac{6}{32}$|$\frac{3}{32}$|$\frac{3}{32}$|$\frac{3+6+3+3}{32}$|
    |$y_3$|$\frac{9}{32}$|$0$|$0$|$0$|$\frac{9}{32}$|
    |$f\left(x_i\right)$|$\frac{4+3+9}{32}$|$\frac{2+6}{32}$|$\frac{1+3}{32}$|$\frac{1+3}{32}$|$\frac{32}{32}$|
    - $f_X\left(x_2\right)=f\left(x_2,~y_1\right)+f\left(x_2,~y_2\right)+f\left(x_2,~y_3\right)=\frac{8}{32}$
    - $f_Y\left(y_1\right)=f\left(x_1,~y_1\right)+f\left(x_2,~y_1\right)+f\left(x_3,~y_1\right)+f\left(x_4,~y_1\right)=\frac{8}{32}$
    - $F_X\left(x_2\right)=F\left(x_2,~\infty\right)=\sum\limits_{x\le x_2}{\sum\limits_{y}{f\left(x,~y\right)}}=f\left(x_1\right)+f\left(x_2\right)=\frac{24}{32}$

# [Conditional](../../conditional-probability/conditional-probability.md) Distribution
- ### [Conditional](../../conditional-probability/conditional-probability.md) [Probability Function](../distribution-function.md#probability-function)：$`f_{X|Y}\left(x|y\right)=\frac{f_{XY}\left(x,~y\right)}{f_Y\left(y\right)}`$
    |Random Variable|Conditional Probability Function|
    |:---:|:---:|
    |**$\left(X,~Y\right)$ is Continuous**|**Conditional PDF**<br>$`f_{X\|Y}\left(x\|y\right)=\frac{d}{dx}F_{X\|Y}\left(x\|y\right)`$|
    |**$\left(X,~Y\right)$ is Discrete**|**Conditional PMF**<br>$`f_{X\|Y}\left(x\|y\right)=P\left(X=x\|~Y=y\right)=\frac{P\left(X=x,~Y=y\right)}{P\left(Y=y\right)}`$|
    |**$X$ is Continuous, $Y$ is Discrete**|$`f_{X\|Y}\left(x\|y\right)=\frac{f_{XY}\left(x,~y\right)}{P\left(Y=y\right)}=\frac{P\left(Y=y\|X=x\right)f_X\left(x\right)}{P\left(Y=y\right)}`$|
- ### [Conditional](../../conditional-probability/conditional-probability.md) [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Conditional [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F_{X|Y}\left(x|y\right) = P\left(X\le x|Y=y\right) = \begin{cases} {\int^x_{-\infty}{f_{X|Y}\left(t|y\right)\,dt}} &\text{if }X\text{ is Continuous} \\ {\sum\limits_{t\le x}{f_{X|Y}\left(t|y\right)}} &\text{if }X\text{ is Discrete} \end{cases}`$
- ### $`P\left(a\le X\le b|Y=y\right) = \begin{cases} {\int^b_{a}{f_{X|Y}\left(x|y\right)\,dx}} &\text{if }X\text{ is Continuous} \\ {\sum\limits_{a\le x \le b}{f_{X|Y}\left(x|y\right)}} &\text{if }X\text{ is Discrete} \end{cases}`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f_{X|Y}\left(x|y\right)=f_X\left(x\right),~f_{Y|X}\left(y|x\right)=f_Y\left(y\right)`$
    - ### $`F_{X|Y}\left(x|y\right)=F_X\left(x\right),~F_{Y|X}\left(y|x\right)=F_Y\left(y\right)`$
- ### [Conditional Expectation](../../expected-value.md#conditional-expectation)
- ### [Conditional Variance](../../../statistics/variance.md#conditional-variance)

# Probability of a Multiple Random Variable
- ### [Joint Probability](../../conditional-probability/conditional-probability.md#joint-probability)
    - #### $`P\left(X=x,~Y=y\right)=P\left(\left(X=x\right)\cap\left(Y=y\right)\right)=P\left(X=x|Y=y\right)P\left(Y=y\right)=P\left(Y=y|X=x\right)P\left(X=x\right)`$
    - #### $`P\left(X\le x,~Y\le y\right)=P\left(\left(X\le x\right)\cap\left(Y\le y\right)\right)=P\left(X\le x|Y\le y\right)P\left(Y\le y\right)=P\left(Y\le y|X\le x\right)P\left(X\le x\right)`$
- ### Interval Probability
    - #### $`P\left(X\le x,~Y\le y\right)=P\left(\left(X\le x\right)\cap \left(Y \le y\right)\right)=F\left(x,~y\right)`$
    - #### $`P\left(a<X\le b,~c<Y\le d\right)=F\left(b,~d\right)-F\left(a,~d\right)-F\left(b,~c\right)+F\left(a,~c\right)`$
    - #### $`P\left(a\le X\le b,~c\le Y\le d\right)=\begin{cases}{\int_{a}^{b}{\int_{c}^{d}{f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_{a\le x\le b}{\sum\limits_{c\le y\le d}{f\left(x,~y\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete}\\{\sum\limits_{c\le y\le d}{\int_{a}^{b}{f\left(x,~y\right)\,dx}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - #### $`\text{if }\left(X,~Y\right)\text{ is Continuous},~\text{then }P\left(a\le X\le b,~c\le Y\le d\right)=P\left(a< X\le b,~c< Y\le d\right)=P\left(a\le X< b,~c\le Y< d\right)=P\left(a< X< b,~c< Y< d\right)=\int_{a}^{b}{\int_{c}^{d}{f\left(x,~y\right)\,dy}\,dx}`$

