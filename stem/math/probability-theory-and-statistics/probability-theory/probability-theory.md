# Probability
- ### Probability
    - #### $`P\left(A\right)`$ = the Probability of Event $A$
    - ### [Conditional Probability](./conditional-probability/conditional-probability.md)
- ### [Probability of a Random Variable](distribution-function.md#probability-of-a-random-variable)
- ### Sample Space($S$)
    - $P\left(S\right)=1$

# Random Variable
- ### Random Variable ($X$)
    |Continuous|Discrete|
    |:---:|:---:|
    |$`x\in A,~ x\in\left[a,b\right]`$|$`X=x_1,x_2,\cdots ,x_n`$|
- ### [Distribution Function](distribution-function.md)
- ### [Probability Distribution](./probability-distribution/probability-distribution.md)
    - ### [Continuous Probability Distribution](./probability-distribution/continuous-probability-distribution.md)
    - ### [Discrete Probability Distribution](./probability-distribution/discrete-probability-distribution.md)
    - ### [Joint Distribution](./probability-distribution/joint-distribution.md)
- ### [Random Process (Stochastic Process)](#random-process-stochastic-process-1)
- ### Random Experiment
- ### Probabilistic Model
- ### [Expected Value (Expectation, Mean)](expected-value.md)
- ### [Mode](../statistics/descriptive-statistics.md#mode) of Continuous = [Maximum](../../algebra/calculus/differential-calculus.md#extremum) of [PDF](distribution-function.md#probability-function)
    - $`α=\text{Mode}=\text{Maximum},~\text{when }f^\prime\left(α\right)=0,~f^{\prime\prime}\left(α\right)<0`$
- ### [Moment](#moment-1)

# Inequality
- ### Chebyshev's Inequality：$`P\left(\left|X-μ\right|\ge kσ\right)\le \frac{1}{k^2}`$
- ### Markov's Inequality

# Limit Theorems of Probability
- ### Law of Large Numbers
- ### Central Limit Theorem (CLT)
    <img src="./image/central-limit-theorem.png" width="60%">

# Random Process (Stochastic Process)
- ### Bernoulli Process
    - ### Bernoulli Trial
        - $`\text{Probability of Success}=p`$
        - $`\text{Probability of Failure}=1-p`$
    - ### [Distributions derived from Bernoulli Trials](./probability-distribution/distributions-derived-from-bernoulli-trials.md)
- ### Poisson Process
    - ### [Poisson Distribution](./probability-distribution/discrete-probability-distribution.md#poisson-distribution)
- ### Markov Process
    - Markov Chain
- ### Random Walk
- ### Brownian Motion

# Moment
- ### nth Moment：$`μ_n=E\left[\left(X-c\right)^{n}\right]=\begin{cases}{\int_{-\infty}^{\infty}{(x-c)^nf(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{((x-c)^n\cdot f(x))}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Type
    ||nth Raw Moment|nth Central Moment|nth Standardized Moment|
    |:---:|:---:|:---:|:---:|
    |Moment|$`μ_n=E\left[X^n\right]`$|$`μ_n=E\left[(X-μ)^n\right]`$|$`\frac{μ_n}{σ^n}=\frac{E\left[(X-μ)^n\right]}{σ^n}`$|
    |$c$|$c=0$|$c=μ=E\left[X\right]$|$c=μ=E\left[X\right]$|
- ### Statistical Moments
    |Measure|Moment|Definition|
    |:---:|:---:|:---:|
    |[Mean](../statistics/descriptive-statistics.md#arithmetic-mean-am)|First Raw Moment|$E\left[x\right]=μ$|
    |[Variance](../statistics/descriptive-statistics.md#variance)|Second Central Moment|$Var(x)=μ_2=E\left[(X-μ)^2\right]$|
    |Skewness|Third Standardized Moment|$S(x)=\frac{μ_3}{σ^3}$|
    |Kurtosis|Fourth Standardized Moment|$K(x)=\frac{μ_4}{σ^4}$|
- ### Moment-Generating Function (MGF)：$`M_X(t)=E\left[e^{tX}\right]=\begin{cases}{\int_{-\infty}^{\infty}{e^{tx}f(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{(e^{tx}\cdot f(x))}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### nth Raw Moment：$`μ_n=E\left[X^n\right]=M_X^{(n)}{(0)}=\left.\frac{d^nM_X(t)}{dt^n}\right|_{t=0}`$

