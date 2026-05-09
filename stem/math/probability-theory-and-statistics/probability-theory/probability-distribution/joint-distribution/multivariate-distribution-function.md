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
