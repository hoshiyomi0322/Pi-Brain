# Multivariate [Distribution Function](../distribution-function.md)
- ### <span id="multivariate-probability-function">Multivariate [Probability Function](../distribution-function.md#probability-function)：$`f_{X_1,~\cdots,~X_n}\left(x_1,~\cdots,~x_n\right)`$</span>
    |Random Variable|Multivariate Probability Function|
    |:---:|:---:|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Continuous**|**Multivariate Probability Density Function (Multivariate PDF)**<br>$`f\left(x_1,~\cdots,~x_n\right)=\frac{\partial^n}{\partial x_1\cdots\partial x_n}F\left(x_1,~\cdots,~x_n\right)`$|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Discrete**|**Multivariate Probability Mass Function (Multivariate PMF)**<br>$`f\left(x_1,~\cdots,~x_n\right)=P\left(X_1=x_1,~\cdots,~X_n=x_n\right)=P\left(\left(X_1=x_1\right)\cap\cdots\cap\left(X_n=x_n\right)\right)`$|
- ### <span id="multivariate-cdf">Multivariate [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf)：$`F_{X_1,~\cdots,~X_n}\left(x_1,~\cdots,~x_n\right)`$</span>
    - ### $`\begin{aligned} F\left(x_1,~\cdots,~x_n\right) &= P\left(X_1\le x_1,~\cdots,~X_n\le x_n\right) \\ &= \begin{cases}{\int^{x_1}_{-\infty}{\cdots\int^{x_n}_{-\infty}{f\left(t_1,~\cdots,~t_n\right)\,dt_n\cdots dt_1}}}&\text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Continuous}\\{\sum\limits_{t_1\le x_1}{\cdots\sum\limits_{t_n\le x_n}{f\left(t_1,~\cdots,~t_n\right)}}}&\text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Discrete}\end{cases} \end{aligned}`$
- ### $`\text{If } X_1,~\cdots,~X_n \text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f\left(x_1,~\cdots,~x_n\right)=f_{X_1}\left(x_1\right)\cdots f_{X_n}\left(x_n\right)`$
    - ### $`F\left(x_1,~\cdots,~x_n\right)=F_{X_1}\left(x_1\right)\cdots F_{X_n}\left(x_n\right)`$
- ### Properties
    - #### $`f\left(x_1,~\cdots,~x_n\right)\ge 0`$
    - #### $`F\left(x_1,~\cdots,~ -\infty ,~\cdots,~x_n\right)=0`$
    - #### $`F\left(\infty,~\cdots,~\infty\right) = F_{X_i}\left(\infty\right) = 1`$
- ### [Expected Value of Multivariate Distribution](../../expected-value.md#expected-value-of-multivariate-distribution)
- ### [Covariance Matrix](../../../statistics/variance.md#covariance-matrix)

# Marginal Distribution
- ### <span id="marginal-probability-function"> Marginal [Probability Function](../distribution-function.md#probability-function)：$`f_{X_i}\left(x_i\right)`$ </span>
    |Random Variable|Marginal Probability Function|
    |:---:|:---:|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Continuous**|**Marginal PDF**<br>$`f_{X_i}\left(x_i\right)=\int^\infty_{-\infty}{\cdots\int^\infty_{-\infty}{f\left(x_1,~\cdots,~x_n\right)\,dx_1\cdots dx_{i-1} dx_{i+1}\cdots dx_n}}`$|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Discrete**|**Marginal PMF**<br>$`f_{X_i}\left(x_i\right)=\sum\limits_{x_1}{\cdots\sum\limits_{x_{i-1}}\sum\limits_{x_{i+1}}\cdots\sum\limits_{x_n}{f\left(x_1,~\cdots,~x_n\right)}}`$|
- ### Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Marginal [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`F_{X_i}\left(x_i\right) = F\left(\infty,~\cdots,~\infty,~x_i,~\infty,~\cdots,~\infty\right)=\begin{cases} {\int^{x_i}_{-\infty}{f_{X_i}\left(t_i\right)\,dt_i}} & \text{if }X_i\text{ is Continuous} \\ {\sum\limits_{t_i\le x_i}{f_{X_i}\left(t_i\right)}} & \text{if }X_i\text{ is Discrete}\end{cases}`$

# Joint Marginal Distribution
- ### Joint Marginal [Probability Function](../distribution-function.md#probability-function)：$`f_{X_i,~\cdots,~X_j}\left(x_i,~\cdots,~x_j\right)`$
    |Random Variable|Marginal Probability Function|
    |:---:|:---:|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Continuous**|**Joint Marginal PDF**<br>$`f_{X_i,~\cdots,~X_j}\left(x_i,~\cdots,~x_j\right) = \int^\infty_{-\infty}{\cdots\int^\infty_{-\infty}{f\left(x_1,~\cdots,~x_n\right)\,dx_q\cdots dx_r}}`$|
    |**$\left(X_1,~\cdots,~X_n\right)$ is Discrete**|**Joint Marginal PMF**<br>$`f_{X_i,~\cdots,~X_j}\left(x_i,~\cdots,~x_j\right) = \sum\limits_{x_q}{\cdots\sum\limits_{x_r}{f\left(x_1,~\cdots,~x_n\right)}}`$|
    - $`\left(X_q,~\cdots,~X_r\right)=\left(X_1,~\cdots,~X_n\right)-\left(X_i,~\cdots,~X_j\right)`$
- ### Joint Marginal [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Joint Marginal [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`\begin{aligned} F_{X_i,~\cdots,~X_j}\left(x_i,~\cdots,~x_j\right) &= F\left(\infty,~\cdots,~\infty,~x_i,~\cdots,~x_j,~\infty,~\cdots,~\infty\right) \\ &= \begin{cases} {\int^{x_i}_{-\infty}{\cdots\int^{x_j}_{-\infty}{f_{X_i,~\cdots,~X_j}\left(t_i,~\cdots,~t_j\right)\,dt_j\cdots dt_i}}} & \text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Continuous} \\ {\sum\limits_{t_i \le x_i}{\cdots\sum\limits_{t_j \le x_j}{f_{X_i,~\cdots,~X_j}\left(t_i,~\cdots,~t_j\right)}}} & \text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Discrete}\end{cases} \end{aligned}`$
- ### eg
    - ### $`f_{X_1,~X_3}\left(x_1,~x_3\right)=\begin{cases} {\int^\infty_{-\infty}{\cdots\int^\infty_{-\infty}{f\left(x_1,~\cdots,~x_n\right)\,dx_2dx_4\cdots dx_n}}} & \text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Continuous} \\ {\sum\limits_{x_2}{\sum\limits_{x_4}\cdots\sum\limits_{x_n}{f\left(x_1,~\cdots,~x_n\right)}}} & \text{if }\left(X_1,~\cdots,~X_n\right)\text{ is Discrete}\end{cases}`$
    - ### $`F_{X_1,~X_3}\left(x_1,~x_3\right)=F\left( x_1,~\infty,~x_3,~\infty,~\cdots,~\infty \right)`$

# [Conditional](../../conditional-probability/conditional-probability.md) Distribution
- ### Conditional [Probability Function](../distribution-function.md#probability-function)
    - ### $`f_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right) = \frac{f_{X_i \cdots X_jX_v \cdots X_w}\left(x_i,~ \cdots,~ x_j,~x_v,~ \cdots,~ x_w\right)}{f_{X_v \cdots X_w}\left(x_v,~ \cdots,~ x_w\right)}`$
- ### Conditional [Cumulative Distribution Function](../distribution-function.md#cumulative-distribution-function-cdf) (Conditional [CDF](../distribution-function.md#cumulative-distribution-function-cdf))
    - ### $`\begin{aligned} F_{X_i \cdots X_j| X_v \cdots X_w}\left( x_i \cdots x_j| x_v \cdots x_w \right) &= P\left(X_i \le x_i ,~\cdots,~ X_j \le x_j | X_v=x_v ,~\cdots,~ X_w=x_w \right) \\ &= \begin{cases}{\int^{x_i}_{-\infty}{\cdots\int^{x_j}_{-\infty}{f_{X_i \cdots X_j| X_v \cdots X_w}\left( t_i \cdots t_j| x_v \cdots x_w \right)\,dt_j\cdots dt_i}}}&\text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Continuous} \\ {\sum\limits_{t_i\le x_i}{\cdots\sum\limits_{t_j\le x_j}{f_{X_i \cdots X_j| X_v \cdots X_w}\left( t_i \cdots t_j| x_v \cdots x_w \right)}}}&\text{if }\left(X_i,~\cdots,~X_j\right)\text{ is Discrete}\end{cases}\end{aligned}`$
- ### $`\text{If }\left( X_i \cdots X_j \right)\text{ and }\left( X_v \cdots X_w \right)\text{ are }`$[Independent](../../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`f_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right)=f_{X_i \cdots X_j}\left(x_i,~ \cdots,~ x_j\right)`$
    - ### $`F_{X_i \cdots X_j | X_v \cdots X_w}\left( x_i \cdots x_j | x_v \cdots x_w \right)=F_{X_i \cdots X_j}\left(x_i,~ \cdots,~ x_j\right)`$
- ### eg
    - ### $`f_{X_iX_j | X_vX_w}\left( x_ix_j | x_vx_w \right) = \frac{f_{X_iX_jX_vX_w}\left(x_i,~ x_j,~x_v,~ x_w\right)}{f_{X_vX_w}\left(x_v,~x_w\right)}`$
    - ### $`f_{X_iX_j | X_k}\left( x_ix_j | x_k \right) = \frac{f_{X_iX_jX_k}\left( x_i,~x_j,~x_k \right)}{f_{X_k}\left(x_k\right)}`$
    - ### $`f_{X_i | X_jX_k}\left( x_i | x_jx_k \right) = \frac{f_{X_iX_jX_k}\left( x_i,~x_j,~x_k \right)}{f_{X_jX_k}\left(x_j,~x_k\right)}`$
- ### [Conditional Expectation of Multivariate](../../expected-value.md)
- ### [Conditional Variance of Multivariate](../../../statistics/variance.md)

# Probability of a [Multivariate Random Variable](../../probability-theory.md#random-vector-multivariate-random-variable)
- ### $`P\left( \left( X_1,~\cdots,~X_n \right) \in D \right) = \begin{cases} {\int{\cdots\int_D{f\left(x_1,~\cdots,~x_n\right)\,dx_1\cdots dx_n}}} & \text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Continuous} \\ {\sum\limits_{\left( x_1,~\cdots,~x_n \right) \in D}{f\left(x_1,~\cdots,~x_n\right)}} & \text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Discrete} \end{cases}`$
- #### $`P\left(a_1\le X_1\le b_1,~\cdots ,~ a_n\le X_n\le b_n\right) = \begin{cases}{\int^{b_1}_{a_1}{\cdots\int^{b_n}_{a_n}{f\left(x_1,~\cdots,~x_n\right)\,dx_n\cdots dx_1}}}&\text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Continuous} \\ {\sum\limits_{a_1 \le x_1 \le b_1}{\cdots\sum\limits_{a_n \le x_n \le b_n}{f\left(x_1,~\cdots,~x_n\right)}}}&\text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Discrete}\end{cases}`$
- #### $`P\left(a_1< X_1< b_1,~\cdots ,~ a_n< X_n< b_n\right) = \begin{cases}{\int^{b_1}_{a_1}{\cdots\int^{b_n}_{a_n}{f\left(x_1,~\cdots,~x_n\right)\,dx_n\cdots dx_1}}}&\text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Continuous} \\ {\sum\limits_{a_1 < x_1 < b_1}{\cdots\sum\limits_{a_n < x_n < b_n}{f\left(x_1,~\cdots,~x_n\right)}}}&\text{if } \left(X_1,~\cdots,~X_n\right) \text{ is Discrete}\end{cases}`$

# Transformations of [Multivariate Random Variables](../../probability-theory.md#random-vector-multivariate-random-variable)
- ### $`X=\left( X_1,~\cdots,~X_n \right)^T`$
    - #### [PDF](#multivariate-probability-function)：$`f_X\left(x_1,~\cdots,~x_n\right)`$
    - #### [CDF](#multivariate-cdf)：$`F_X\left(x_1,~\cdots,~x_n\right) = P\left(X_1\le x_1,~\cdots,~X_n\le x_n\right)`$
- ### $`Y=\left( Y_1,~\cdots,~Y_n \right)^T ,~ g^{-1}\text{ exists}`$
    - ### $`Y_i=g_i\left(X_1,~\cdots,~X_n\right)`$
    - ### $`X_i=h_i\left(Y_1,~\cdots,~Y_n\right)={g_i}^{-1}\left(Y_1,~\cdots,~Y_n\right)`$
- ### [Probability Function](#multivariate-probability-function)
    - ### $\left(X_1,~\cdots,~X_n\right) \text{ is Continuous}$
        - ### [PDF](#multivariate-probability-function)：$`f_Y\left(y_1,~\cdots,~y_n\right) = \frac{\partial^n}{\partial y_1\cdots\partial y_n}F_Y\left(y_1,~\cdots,~y_n\right) = f_X\left( h_1\left(y\right) ,~\cdots,~ h_n\left(y\right) \right)\cdot \left| det\left(J\right) \right|`$
        - ### [Jacobian Determinant](../../../../algebra/calculus/multivariable-calculus/vector-calculus.md#jacobian-determinant)：$`det\left(J\right) = \begin{vmatrix} {\nabla h_1\left(y_1,~\cdots,~y_n\right)} \\ \vdots \\ {\nabla h_n\left(y_1,~\cdots,~y_n\right)} \end{vmatrix} = \begin{vmatrix} {\nabla x_1} \\ \vdots \\ {\nabla x_n} \end{vmatrix} = \begin{vmatrix} {\frac{\partial x_1}{\partial y_1}}&{\cdots}&{\frac{\partial x_1}{\partial y_n}} \\ {\vdots}&{\ddots}&{\vdots} \\ {\frac{\partial x_n}{\partial y_1}}&{\cdots}&{\frac{\partial x_n}{\partial y_n}} \end{vmatrix}`$
    - ### $\left(X_1,~\cdots,~X_n\right) \text{ is Discrete}$
        - ### [PMF](#multivariate-probability-function)：$`f_Y\left(y_1,~\cdots,~y_n\right) = P\left(Y_1=y_1,~\cdots,~Y_n=y_n\right) = P\left( g_1\left(X\right)=y_1 ,~\cdots,~ g_n\left(X\right)=y_n \right) = P\left( X_1=h_1\left(y\right) ,~\cdots,~ X_n=h_n\left(y\right) \right)=f_X\left( h_1\left(y\right) ,~\cdots,~ h_n\left(y\right) \right)`$
- ### [CDF](#multivariate-cdf)：$`F_Y\left(y_1,~\cdots,~y_n\right) = P\left(Y_1\le y_1,~\cdots,~Y_n\le y_n\right) = P\left( g_1\left(X\right)\le y_1 ,~\cdots,~ g_n\left(X\right)\le y_n \right) = P\left( \left( X_1 ,~\cdots,~ X_n \right) \in D \right)`$
    - $`D=\left\{ \left(x_1 ,~\cdots,~ x_n\right) \mid g_1\left(x\right)\le y_1 ,~\cdots,~ g_n\left(x\right)\le y_n \right\}`$
