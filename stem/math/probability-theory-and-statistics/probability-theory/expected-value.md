# Expected Value (Expectation, Mean)
- ### $`E\left[X\right]=\sum\limits_{i=1}^{n}{x_ip_i}=\begin{cases}{\int_{-\infty}^{\infty}{xf\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{\left(xf\left(x\right)\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`p_i=\text{Probability of }x_i`$
    - $`f\left(x\right)`$ = [Probability Function](distribution-function.md#probability-function)
- ### Properties
    - #### $E\left[c\right]=c$
    - #### $E\left[aX+b\right]=aE\left[X\right]+b$
# Expected Value of [Joint Distribution](./probability-distribution/joint-distribution.md)
- ### $`E\left[aX+bY\right]=aE\left[X\right]+bE\left[Y\right]`$
- ### $`E\left[XY\right]=E\left[X\right]E\left[Y\right]+Cov\left(X,~Y\right)=\begin{cases}{\int_{-\infty}^{\infty}{\int_{-\infty}^{\infty}{xyf\left(x,~y\right)\,dy}\,dx}}&\text{if }\left(X,~Y\right)\text{ is Continuous}\\{\sum\limits_x{\sum\limits_y{\left(xyf\left(x,~y\right)\right)}}}&\text{if }\left(X,~Y\right)\text{ is Discrete} \\ {\sum\limits_y{\int^\infty_{-\infty}{xyf\left(x,~y\right)\,dx}}} & \text{if }X\text{ is Continuous},~Y\text{ is Discrete}\end{cases}`$
    - ### $`\text{If }x\text{ and }y\text{ are }`$[Independent](conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }E\left[XY\right]=E\left[X\right]E\left[Y\right]`$
    - $`Cov\left(X,~Y\right)`$ = [Covariance](../statistics/correlation-and-regression-analysis/correlation-and-regression-analysis.md#covariance)

# Conditional Expectation
- ### $`E\left[X|Y\right]`$
