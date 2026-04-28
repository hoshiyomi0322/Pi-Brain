# Expected Value (Expectation, Mean)
- ### $`E\left[X\right]=\sum\limits_{i=1}^{n}{x_ip_i}=\begin{cases}{\int_{-\infty}^{\infty}{xf(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{(xf(x))}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`p_i=\text{Probability of }x_i`$
    - $`f(x)`$ = [Probability Function](distribution-function.md#probability-function)
- ### Properties
    - #### $E\left[c\right]=c$
    - #### $E\left[aX+b\right]=aE\left[X\right]+b$
# Expected Value of [Joint Distribution](./probability-distribution/joint-distribution.md)
- ### $`E\left[aX+bY\right]=aE\left[X\right]+bE\left[Y\right]`$
- ### $`E\left[XY\right]=E\left[X\right]E\left[Y\right]+Cov(X,~Y)=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{xyf(x,~y)\,dy}\,dx}}&\text{if }(X,~Y)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{(xyf(x,~y))}}}&\text{if }(X,~Y)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{xyf(x,~y)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - ### $`\text{If }x\text{ and }y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events), $`\text{then }E\left[XY\right]=E\left[X\right]E\left[Y\right]`$
    - $`Cov(X,~Y)`$ = [Covariance](../statistics/correlation-and-regression-analysis/correlation-and-regression-analysis.md#covariance)

# Conditional Expectation
- ### $`E\left[X|Y\right]`$
