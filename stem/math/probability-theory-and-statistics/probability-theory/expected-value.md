# Expected Value (Expectation, Mean)
- ### $`E\left[X\right]=\sum\limits_{i=1}^{n}{x_ip_i}=\begin{cases}{\int_{-\infty}^{\infty}{xf\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(xf\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`X`$ = [Random Variable](probability-theory.md#random-variable)
    - $`p_i=\text{Probability of }x_i`$
    - $`f\left(x\right)`$ = [Probability Function](distribution-function.md#distribution-function)
- ### Properties
    - #### $`E\left[c\right]=c`$
    - #### $`E\left[aX+b\right]=aE\left[X\right]+b`$
    - #### $`E\left[g\left(X\right)\right]=\begin{cases}{\int_{-\infty}^{\infty}{g\left(x\right)f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(g\left(x\right)f\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$

# Expected Value of [Joint Distribution](./probability-distribution/joint-distribution.md)
- ### $`E\left[g\left(X,~Y\right)\right]=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{g\left(x,~y\right)\cdot f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{\left(g\left(x,~y\right)\cdot f\left(x,~y\right)\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{g\left(x,~y\right)\cdot f\left(x,~y\right)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - $`X,~Y`$ = [Random Variable](probability-theory.md#random-variable)
    - $`f\left(x,~y\right)`$ = [Joint Probability Function](./probability-distribution/joint-distribution.md#joint-distribution-function)
- ### $`E\left[aX+bY\right]=aE\left[X\right]+bE\left[Y\right]`$
- ### $`E\left[XY\right]=E\left[X\right]E\left[Y\right]+Cov\left(X,~Y\right)=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{xy\cdot f\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{\left(xy\cdot f\left(x,~y\right)\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{xy\cdot f\left(x,~y\right)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }E\left[XY\right]=E\left[X\right]E\left[Y\right]`$
    - $`Cov\left(X,~Y\right)`$ = [Covariance](../statistics/variance.md#covariance)

# [Conditional](./probability-distribution/joint-distribution.md#conditional-distribution) Expectation
- ### $`E\left[X|Y=y\right]=\begin{cases}{\int_{-\infty}^{\infty}{x\cdot f_{X|Y}\left(x|y\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(x\cdot f_{X|Y}\left(x|y\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`f_{X|Y}\left(x|y\right)`$ = [Conditional Probability Function](./probability-distribution/joint-distribution.md#conditional-distribution)
- ### $`E\left[g\left(X\right)|Y=y\right]=\begin{cases}{\int_{-\infty}^{\infty}{g\left(x\right)\cdot f_{X|Y}\left(x|y\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(g\left(x\right)\cdot f_{X|Y}\left(x|y\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Law of Total Expectation (Law of Iterated Expectations)
    - ### $`E\left[ X\right]=E\left[ E\left[ X|Y\right]\right]`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }E\left[X|Y\right]=E\left[X\right]`$

