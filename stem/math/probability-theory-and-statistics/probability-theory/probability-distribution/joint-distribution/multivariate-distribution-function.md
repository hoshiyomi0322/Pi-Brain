# Multivariate [Distribution Function](../distribution-function.md)
- ### Multivariate [Probability Function](../distribution-function.md#probability-function)
    |Random Variable|Joint Probability Function|
    |:---:|:---:|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Continuous**|**Joint Probability Density Function (Joint PDF)**<br>$`f\left(x_1,~\cdots,~x_n\right)=\frac{\partial^n}{\partial x_1\cdots\partial x_n}F\left(x_1,~\cdots,~x_n\right)`$|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Discrete**|**Joint Probability Mass Function (Joint PMF)**<br>$`f\left(x_1,~\cdots,~x_n\right)=P\left(X_1=x_1,~\cdots,~X_n=x_n\right)=P\left(\left(X_1=x_1\right)\cap\cdots\cap\left(X_n=x_n\right)\right)`$|
- ### Multivariate [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)
    - ### $`F\left(x_1,~\cdots,~x_n\right)=P\left(X_1\le x_1,~\cdots,~X_n\le x_n\right) = \begin{cases}{\int^{x_1}_{-\infty}{\cdots\int^{x_n}_{-\infty}{f\left(t_1,~\cdots,~t_n\right)\,dt_n\cdots dt_1}}}&\text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Continuous}\\{\sum\limits_{t_1\le x_1}{\cdots\sum\limits_{t_n\le x_n}{f\left(t_1,~\cdots,~t_n\right)}}}&\text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Discrete}\end{cases}`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f\left(x_1,~\cdots,~x_n\right)=f_{X_1}\left(x_1\right)\cdots f_{X_n}\left(x_n\right)`$
    - ### $`F\left(x_1,~\cdots,~x_n\right)=F_{X_1}\left(x_1\right)\cdots F_{X_n}\left(x_n\right)`$
- ### Properties
    - #### $`f\left(x_1,~\cdots,~x_n\right)\ge 0`$
    - #### $`F\left(x_1,~\cdots,~ -\infty ,~\cdots,~x_n\right)=0`$
    - #### $`F\left(\infty,~\cdots,~\infty\right) = F_{X_i}\left(\infty\right) = 1`$
- ### [Expected Value of Multivariate Distribution](../../expected-value.md#expected-value-of-multivariate-distribution)
- ### [Covariance Matrix](../../../statistics/variance.md#covariance-matrix)

# Marginal Distribution
- ### Marginal [Probability Function](../distribution-function.md#probability-function)
    |Random Variable|Marginal Probability Function|
    |:---:|:---:|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Continuous**|**Marginal PDF**<br>$`f_{X_i}\left(x_i\right)=\int^\infty_{-\infty}{\cdots\int^\infty_{-\infty}{f\left(x_1,~\cdots,~x_n\right)\,dx_1\cdots dx_{i-1} dx_{i+1}\cdots dx_n}}`$|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Discrete**|**Marginal PMF**<br>$`f_{X_i}\left(x_i\right)=\sum\limits_{x_1}{\cdots\sum\limits_{x_{i-1}}\sum\limits_{x_{i+1}}\cdots\sum\limits_{x_n}{f\left(x_1,~\cdots,~x_n\right)}}`$|
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Marginal [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F_{X_i}\left(x_i\right)=F\left(\infty,~\cdots,~\infty,~x_i,~\infty,~\cdots,~\infty\right)=\begin{cases} {\int^{x_i}_{-\infty}{f_{X_i}\left(t_i\right)\,dt_i}} & \text{if }X_i\text{ is Continuous} \\ {\sum\limits_{t_i\le x_i}{f_{X_i}\left(t_i\right)}} & \text{if }X_i\text{ is Discrete}\end{cases}`$

# [Conditional](../../conditional-probability/conditional-probability.md) Distribution
- ### [Conditional](../../conditional-probability/conditional-probability.md) [Probability Function](../distribution-function.md#probability-function)
    - ### $`f_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right) = \frac{f_{X_i \cdots X_jX_v \cdots X_w}\left(x_i,~ \cdots,~ x_j,~x_v,~ \cdots,~ x_w\right)}{f_{X_v \cdots X_w}\left(x_v,~ \cdots,~ x_w\right)}`$
- ### [Conditional](../../conditional-probability/conditional-probability.md) [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Conditional [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F_{X_i \cdots X_j| X_v \cdots X_w}\left( x_i \cdots x_j| x_v \cdots x_w \right) = P\left(X_i \le x_i ,~\cdots,~ X_j \le x_j | X_v=x_v ,~\cdots,~ X_w=x_w \right) = \begin{cases}{\int^{x_i}_{-\infty}{\cdots\int^{x_j}_{-\infty}{f_{X_i \cdots X_j| X_v \cdots X_w}\left( t_i \cdots t_j| x_v \cdots x_w \right)\,dt_j\cdots dt_i}}}&\text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Continuous} \\ {\sum\limits_{t_i\le x_i}{\cdots\sum\limits_{t_j\le x_j}{f_{X_i \cdots X_j| X_v \cdots X_w}\left( t_i \cdots t_j| x_v \cdots x_w \right)}}}&\text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Discrete}\end{cases}`$
- ### $`\text{If }\left( X_i \cdots X_j \right)\text{ and }\left( X_v \cdots X_w \right)\text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right)=f_{X_i \cdots X_j}\left(x_i,~ \cdots,~ x_j\right)`$
    - ### $`F_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right)=F_{X_i \cdots X_j}\left(x_i,~ \cdots,~ x_j\right)`$
- ### eg
    - ### $`f_{X_iX_j | X_vX_w}\left( x_ix_j | x_vx_w \right) = \frac{f_{X_iX_jX_vX_w}\left(x_i,~ x_j,~x_v,~ x_w\right)}{f_{X_vX_w}\left(x_v,~x_w\right)}`$
    - ### $`f_{X_iX_j | X_k}\left( x_ix_j | x_k \right) = \frac{f_{X_iX_jX_k}\left( x_i,~x_j,~x_k \right)}{f_{X_k}\left(x_k\right)}`$
    - ### $`f_{X_i | X_jX_k}\left( x_i | x_jx_k \right) = \frac{f_{X_iX_jX_k}\left( x_i,~x_j,~x_k \right)}{f_{X_jX_k}\left(x_j,~x_k\right)}`$
- ### [Conditional Expectation of Multivariate](../../expected-value.md)
- ### [Conditional Variance of Multivariate](../../../statistics/variance.md)

# Probability of a Multiple Random Variable
- ### Interval Probability
    - ### $`P\left( \left( X_1,~\cdots,~X_n \right) \in D \right)`$
    - #### $`P\left(X\le x,~Y\le y\right)=P\left(\left(X\le x\right)\cap \left(Y \le y\right)\right)=F\left(x,~y\right)`$
    - #### $`P\left(a<X\le b,~c<Y\le d\right)=F\left(b,~d\right)-F\left(a,~d\right)-F\left(b,~c\right)+F\left(a,~c\right)`$
    - #### $`P\left(a\le X\le b,~c\le Y\le d\right)=\begin{cases}{\int_{a}^{b}{\int_{c}^{d}{f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_{a\le x\le b}{\sum\limits_{c\le y\le d}{f\left(x,~y\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete}\\{\sum\limits_{c\le y\le d}{\int_{a}^{b}{f\left(x,~y\right)\,dx}}}&\text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - #### $`\text{if }\left(X,~Y\right)\text{ is Continuous},~\text{then }P\left(a\le X\le b,~c\le Y\le d\right)=P\left(a< X\le b,~c< Y\le d\right)=P\left(a\le X< b,~c\le Y< d\right)=P\left(a< X< b,~c< Y< d\right)=\int_{a}^{b}{\int_{c}^{d}{f\left(x,~y\right)\,dy}\,dx}`$
