# Expected Value (Expectation, Mean)
- ### $`E\left[X\right]=\sum\limits_{i=1}^{n}{x_ip_i}=\begin{cases}{\int_{-\infty}^{\infty}{x\cdot f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(x\cdot f\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`X`$ = [Random Variable](probability-theory.md#random-variable)
    - $`p_i=\text{Probability of }x_i`$
    - $`f\left(x\right)`$ = [Probability Function](probability-distribution/distribution-function.md#distribution-function)
- ### $`E\left[g\left(X\right)\right]=\begin{cases}{\int_{-\infty}^{\infty}{g\left(x\right)f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(g\left(x\right)f\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Properties
    - #### $`E\left[c\right]=c`$
    - #### $`E\left[aX+b\right]=aE\left[X\right]+b`$

# Expected Value of [Joint Distribution](./probability-distribution/joint-distribution/joint-distribution-function.md)
- ### $`E\left[X\right]=\begin{cases}{\int_{-\infty}^{\infty}{x\cdot f_X\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(x\cdot f_X\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`f_X\left(x\right)`$ = [Marginal Probability Function](probability-distribution/joint-distribution/joint-distribution-function.md#marginal-distribution)
- ### $`E\left[g\left(X,~Y\right)\right]=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{g\left(x,~y\right)\cdot f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{\left(g\left(x,~y\right)\cdot f\left(x,~y\right)\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{g\left(x,~y\right)\cdot f\left(x,~y\right)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - $`X,~Y`$ = [Random Variable](probability-theory.md#random-variable)
    - $`f\left(x,~y\right)`$ = [Joint Probability Function](./probability-distribution/joint-distribution/joint-distribution-function.md#joint-distribution-function)
- ### $`E\left[aX+bY\right]=aE\left[X\right]+bE\left[Y\right]`$
- ### $`E\left[XY\right]=E\left[X\right]E\left[Y\right]+Cov\left(X,~Y\right)=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{xy\cdot f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{\left(xy\cdot f\left(x,~y\right)\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{xy\cdot f\left(x,~y\right)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events), $`\text{then }E\left[XY\right]=E\left[X\right]E\left[Y\right]`$
    - $`Cov\left(X,~Y\right)`$ = [Covariance](../statistics/variance.md#covariance)

# Expected Value of [Multivariate Distribution](./probability-distribution/joint-distribution/multivariate-distribution-function.md)
- ### $`E\left[X_i\right]=\begin{cases}{\int_{-\infty}^{\infty}{x_i\cdot f_{X_i}\left(x_i\right)\,dx_i}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{x_i}{\left(x_i\cdot f_{X_i}\left(x_i\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`f_X\left(x\right)`$ = [Marginal Probability Function](probability-distribution/joint-distribution/multivariate-distribution-function.md#marginal-distribution)
- ### $`E\left[g\left(X_1 ,~ \cdots ,~ X_n\right)\right] = \begin{cases}{ \int^\infty_{-\infty}{\cdots\int^\infty_{-\infty}{g\left(x_1 ,~ \cdots ,~ x_n\right)\cdot f\left(x_1,~\cdots,~x_n\right)\,dx_1\cdots dx_n}} }&\text{if }\left(X_1 ,~ \cdots ,~ X_n\right)\text{ is Continuous} \\ { \sum\limits_{x_1}{\cdots\sum\limits_{x_n}{\left(g\left(x_1 ,~ \cdots ,~ x_n\right)\cdot f\left(x_1,~\cdots,~x_n\right)\right)}} }&\text{if }\left(X_1 ,~ \cdots ,~ X_n\right)\text{ is Discrete}\end{cases}`$
    - $`X_1 ,~ \cdots ,~ X_n`$ = [Random Variable](probability-theory.md#random-variable)
    - $`f\left(x,~y\right)`$ = [Multivariate Probability Function](./probability-distribution/joint-distribution/multivariate-distribution-function.md#multivariate-distribution-function)
- ### Mean Vector
    - ### $`\left( E\left[X_1\right],~\cdots,~E\left[X_n\right] \right)^T`$

# [Conditional](./probability-distribution/joint-distribution/joint-distribution-function.md#conditional-distribution) Expectation
- ### $`E\left[X|Y=y\right]=\begin{cases}{\int_{-\infty}^{\infty}{x\cdot f_{X|Y}\left(x|y\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(x\cdot f_{X|Y}\left(x|y\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`f_{X|Y}\left(x|y\right)`$ = [Conditional Probability Function](./probability-distribution/joint-distribution/joint-distribution-function.md#conditional-distribution)
- ### $`E\left[g\left(X\right)|Y=y\right]=\begin{cases}{\int_{-\infty}^{\infty}{g\left(x\right)\cdot f_{X|Y}\left(x|y\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(g\left(x\right)\cdot f_{X|Y}\left(x|y\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Law of Total Expectation (Law of Iterated Expectations)
    - ### $`E\left[ X\right]=E\left[ E\left[ X|Y\right]\right]`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events), $`\text{then }E\left[X|Y\right]=E\left[X\right]`$

