# Probability Distribution
- ### $`X\sim D\left(θ_1,\cdots,~θ_k\right)`$：the Probability Distribution $`D`$ of a [Random Variable](../probability-theory.md#random-variable) $`X`$
    - [Random Variable](../probability-theory.md#random-variable)：$`X`$
    - $`θ_1,\cdots,~θ_k=\text{Parameters}`$
- ### [Distribution Function](distribution-function.md)
- ### Types of Probability Distribution
    - ### [Continuous Probability Distribution](continuous-probability-distribution/continuous-probability-distribution.md)
    - ### [Discrete Probability Distribution](discrete-probability-distribution/discrete-probability-distribution.md)

# [Joint Distribution](joint-distribution/joint-distribution.md)
- ### $`X_1,~\cdots,~X_n \sim D\left(θ_1,\cdots,~θ_k\right)`$：the Multivariate Distribution $`D`$ of [Random Vector](../probability-theory.md#random-vector-multivariate-random-variable) $`X`$
    - [Random Vector](../probability-theory.md#random-vector-multivariate-random-variable)：$`X=\left( X_1,~\cdots,~X_n \right)^T`$
    - $`θ_1,\cdots,~θ_k=\text{Parameters}`$
- ### [Joint Distribution Function](joint-distribution/joint-distribution-function.md)
    - ### [Multivariate Distribution Function](joint-distribution/multivariate-distribution-function.md)
- ### Types of Multivariate Distribution
    - ### [Continuous Multivariate Distribution](./joint-distribution/continuous-multivariate-distribution.md)
    - ### [Discrete Multivariate Distribution](./joint-distribution/discrete-multivariate-distribution.md)

# Independent and Identically Distributed (IID)
- ### $`X_1,~\cdots,~X_n$ has the same [Probability Distribution](#probability-distribution) and are [Independent](../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events)
    - ### $`X_1,~\cdots,~X_n \overset{i.i.d.}{\sim} D\left(θ_1,\cdots,~θ_k\right)`$
    - ### [Random Vector](../probability-theory.md#random-vector-multivariate-random-variable)：$`X=\left( X_1,~\cdots,~X_n \right)^T`$
- ### [Multivariate Probability Function](./joint-distribution/multivariate-distribution-function.md#multivariate-probability-function)
    - ### $`f_X\left(x_1,~\cdots,~x_n\right) = f\left(x_1\right) \times\cdots\times f\left(x_n\right)`$
    - ### $`f\left(x\right) = f_{X_1}\left(x\right) =\cdots= f_{X_n}\left(x\right)`$
- ### [Multivariate Cumulative Distribution Function](./joint-distribution/multivariate-distribution-function.md#multivariate-cdf)
    - ### $`F_X\left(x_1,~\cdots,~x_n\right) = F\left(x_1\right) \times\cdots\times F\left(x_n\right)`$
    - ### $`F\left(x\right) = F_{X_1}\left(x\right) =\cdots= F_{X_n}\left(x\right)`$

# Memoryless Property
- ### $`\text{If }P\left(X>a+b|X>a\right)=P\left(X>b\right),~\text{then }X\text{ is Memoryless}`$
    - ### [Survival Function](distribution-function.md#survival-function-reliability-function)：$`S\left(a+b\right)=S\left(a\right)S\left(b\right)`$
- ### [Probability Distribution](#probability-distribution) with Memoryless Property
    - #### Continuous case：[Exponential Distribution](continuous-probability-distribution/distributions-related-to-the-gamma-function.md#exponential-distribution)
    - #### Discrete case：[Geometric Distribution](discrete-probability-distribution/distributions-derived-from-bernoulli-trials.md#geometric-distribution)
