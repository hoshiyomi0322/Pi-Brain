# Probability
- ### Probability
    - #### $`P(A)`$ = the Probability of Event $A$
    - ### [Conditional Probability](./conditional-probability/conditional-probability.md)
- ### [Probability of a Random Variable](distribution-function.md#probability-of-a-random-variable)
- ### Sample Space($S$)
    - $P(S)=1$

# Random Variable
- ### Random Variable ($X$)
    |Continuous|Discrete|
    |:---:|:---:|
    |$`x\in A,~ x\in[a,b]`$|$`X=x_1,x_2,\cdots ,x_n`$|
- ### [Distribution Function](distribution-function.md)
- ### [Probability Distribution](./probability-distribution/probability-distribution.md)
    - ### [Continuous Probability Distribution](./probability-distribution/continuous-probability-distribution.md)
    - ### [Discrete Probability Distribution](./probability-distribution/discrete-probability-distribution.md)
    - ### [Joint Distribution](./probability-distribution/joint-distribution.md)
- ### [Random Process (Stochastic Process)](#random-process-stochastic-process-1)
- ### Random Experiment
- ### Probabilistic Model
- ### [Moment](#moment-1)

# Inequality
- ### Chebyshev's Inequality：$`P(|X-μ|\ge kσ)\le \frac{1}{k^2}`$
- ### Markov's Inequality

# Limit Theorems of Probability
- ### Law of Large Numbers
- ### Central Limit Theorem

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

# Expected Value (Mean)：$`E(x)`$
- ### $`E(X)=\sum\limits_{i=1}^{n}{x_ip_i}=\begin{cases}{\int_{-\infty}^{\infty}{xf(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{i=1}^{n}{(x_i\cdot f(x_i))}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - $`p_i=\text{Probability of }x_i`$
- ### Properties
    - $E(c)=c$
    - $E(aX+b)=aE(X)+b$
    - $E(X+Y)=E(X)+E(Y)$

# Moment
- ### nth Moment：$`μ_n=E((X-c)^n)=\begin{cases}{\int_{-\infty}^{\infty}{(x-c)^nf(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{i=1}^{\infty}{((x_i-c)^n\cdot f(x_i))}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Type
    ||nth Raw Moment|nth Central Moment|nth Standardized Moment|
    |:---:|:---:|:---:|:---:|
    |Moment|$`μ_n=E(X^n)`$|$`μ_n=E((X-μ)^n)`$|$`\frac{μ_n}{σ^n}=\frac{E((X-μ)^n)}{σ^n}`$|
    |$c$|$c=0$|$c=μ=E(X)$|$c=μ=E(X)$|
- ### Statistical Moments
    |Measure|Moment|Definition|
    |:---:|:---:|:---:|
    |[Mean](../statistics/descriptive-statistics.md#mean)|First Raw Moment|$E(x)=μ$|
    |[Variance](../statistics/descriptive-statistics.md#variance)|Second Central Moment|$Var(x)=μ_2=E((X-μ)^2)$|
    |Skewness|Third Standardized Moment|$S(x)=\frac{μ_3}{σ^3}$|
    |Kurtosis|Fourth Standardized Moment|$K(x)=\frac{μ_4}{σ^4}$|
- ### Moment-Generating Function (MGF)：$`M_X(t)=E(e^{tX})=\begin{cases}{\int_{-\infty}^{\infty}{e^{tx}f(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{i=1}^{\infty}{(e^{tx_i}\cdot f(x_i))}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### nth Raw Moment：$`μ_n=E(X^n)=M_X^{(n)}{(0)}=\left.\frac{d^nM_X(t)}{dt^n}\right|_{t=0}`$

