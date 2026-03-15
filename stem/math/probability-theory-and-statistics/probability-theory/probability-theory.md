- ### Probability
    - #### $P(A)$ = the Probability of Event $A$
    - #### $P(X=x)$：the Probability of $\text{Random Variable}(X)=x$
    - ### [Conditional Probability](./conditional-probability/conditional-probability.md)
- ### Sample Space($S$)
    - $P(S)=1$

# Expected Value(Mean)：$E(x)$
- ### $E(x)=\sum\limits_{i=1}^{n}{x_ip_i}$
    - $p_i=\text{Probability of }x_i$
- ### Random Variable
    |Continuous|Discrete|
    |:---:|:---:|
    |$E(x)=\int_{-\infty}^{\infty}{xf_d(x)\,dx}$|$E(x)=\sum\limits_{i=1}^{n}{(x_i\cdot P(X=x_i))}=\sum\limits_{i=1}^{n}{(x_i\cdot f_m(x_i))}$|
- ### Properties
    - $E(c)=c$
    - $E(cX)=cE(X)$
    - $E(X+Y)=E(X)+E(Y)$

# Random Variable
- ### Random Variable($X$)
    |Continuous|Discrete|
    |:---:|:---:|
    |$x\in A,\,x\in[a,b]$|$X=x_1,x_2,\cdots ,x_n$|
- ### [Probability Distribution](probability-distribution.md)
- ### [Random Process(Stochastic Process)](#random-processstochastic-process-1)
- ### Random Experiment
- ### Probabilistic Model
- ### [Distribution Function](#distribution-function-1)
- ### [Moment](#moment-1)

# Distribution Function
- ### Probability Function
    |Continuous|Discrete|
    |:---:|:---:|
    |Probability Density Function(PDF)|Probability Mass Function(PMF)|
    |$f_d(x)=\frac{d}{dx}F(x)$|$f_m(x)=P(X=x)$|
    
- ### Cumulative Distribution Function(CDF)：$F(x)=P(X\leq x)$
    |Continuous|Discrete|
    |:---:|:---:|
    |$F(x)=\int_{-\infty}^{x}{f_d(t)\,dt}$|$F(x)=\sum\limits_{t\leq x}{f_m(t)}$
    - #### Properties
        - Boundedness
            - $\lim\limits _{x\to-\infty}{F(x)}=0$
            - $\lim\limits _{x\to+\infty}{F(x)}=1$
        - Monotonicity：$\text{If }x_1<x_2,~\text{then }F(x_1)\leq F(x_2)$

# Random Process(Stochastic Process)
- ### Bernoulli Process
    - ### Bernoulli Trial
        - $\text{Probability of Success}=p$
        - $\text{Probability of Failure}=1-p$
    - ### Probability Distribution
        |Probability Distribution|Probability|
        |:---:|:---:|
        |Bernoulli Distribution|Success in a Bernoulli Trial|
        |Binomial Distribution|Successes in $n$ independent Bernoulli Trials
        |Geometric Distribution|the first success in an infinite sequence of independent Bernoulli Trials
    
- ### Poisson Process
    - Poisson Distribution
- ### Markov Process
    - Markov Chain
- ### Brownian Motion

# Moment
- ### nth Moment：$μ_n=E((X-c)^n)$
    |Continuous|Discrete|
    |:---:|:---:|
    |$μ_n=\int_{-\infty}^{\infty}{(x-c)^nf_d(x)\,dx}$|$μ_n=\sum\limits_{i=1}^{\infty}{(x_i-c)^nP(x_i)}$|
- ### Type
    ||nth Raw Moment|nth Central Moment|nth Standardized Moment|
    |:---:|:---:|:---:|:---:|
    |Moment|$μ_n=E(X^n)$|$μ_n=E((X-μ)^n)$|$\frac{μ_n}{σ^n}=\frac{E((X-μ)^n)}{σ^n}$|
    |$c$|$c=0$|$c=μ=E(X)$|$c=μ=E(X)$|
- ### Moment-Generating Function(MGF)
- ### Statistical Moments
    |Measure|Moment|Definition|
    |:---:|:---:|:---:|
    |Mean|First Raw Moment|$E(x)=μ$|
    |Variance|Second Central Moment|$Var(x)=μ_2=E((X-μ)^2)$|
    |Skewness|Third Standardized Moment|$S(x)=\frac{μ_3}{σ^3}$|
    |Kurtosis|Fourth Standardized Moment|$K(x)=\frac{μ_4}{σ^4}$|

