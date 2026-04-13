- ### Probability
    - #### $`P(A)`$ = the Probability of Event $A$
    - #### $`P(X=x)`$：the Probability of $`\text{Random Variable}(X)=x`$
    - ### [Conditional Probability](./conditional-probability/conditional-probability.md)
- ### Sample Space($S$)
    - $P(S)=1$

# Expected Value (Mean)：$`E(x)`$
- ### $`E(x)=\sum\limits_{i=1}^{n}{x_ip_i}`$
    - $`p_i=\text{Probability of }x_i`$
- ### Random Variable
    |Continuous|Discrete|
    |:---:|:---:|
    |$`E(x)=\int_{-\infty}^{\infty}{xf_d(x)\,dx}`$|$`E(x)=\sum\limits_{i=1}^{n}{(x_i\cdot P(X=x_i))}=\sum\limits_{i=1}^{n}{(x_i\cdot f_m(x_i))}`$|
- ### Properties
    - $E(c)=c$
    - $E(aX+b)=aE(X)+b$
    - $E(X+Y)=E(X)+E(Y)$

# Random Variable
- ### Random Variable($X$)
    |Continuous|Discrete|
    |:---:|:---:|
    |$`x\in A,~ x\in[a,b]`$|$`X=x_1,x_2,\cdots ,x_n`$|
- ### [Distribution Function](distribution-function.md)
- ### [Probability Distribution](probability-distribution.md)
- ### [Random Process(Stochastic Process)](#random-processstochastic-process-1)
- ### Random Experiment
- ### Probabilistic Model
- ### [Moment](#moment-1)

# Random Process (Stochastic Process)
- ### Bernoulli Process
    - ### Bernoulli Trial
        - $`\text{Probability of Success}=p`$
        - $`\text{Probability of Failure}=1-p`$
    - ### [Probability Distribution of Bernoulli Trial](probability-distribution.md#probability-distribution-of-bernoulli-trial)
- ### Poisson Process
    - Poisson Distribution
- ### Markov Process
    - Markov Chain
- ### Brownian Motion

# Moment
- ### nth Moment：$`μ_n=E((X-c)^n)`$
    |Continuous|Discrete|
    |:---:|:---:|
    |$`μ_n=\int_{-\infty}^{\infty}{(x-c)^nf_d(x)\,dx}`$|$`μ_n=\sum\limits_{i=1}^{\infty}{(x_i-c)^nP(x_i)}`$|
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
- ### Moment-Generating Function (MGF)：$`M_X(t)=E(e^{tX})`$
    |Continuous|Discrete|
    |:---:|:---:|
    |$`M_X(t)=\int_{-\infty}^\infty{e^{tx}f_d(x)\,dx}`$|$`M_X(t)=\sum\limits_{x}{e^{tx}f_m(x)}`$|
    - #### nth Raw Moment：$`μ_n=E(X^n)=M_X^{(n)}{(0)}=\left.\frac{d^nM_X(t)}{dt^n}\right|_{t=0}`$

