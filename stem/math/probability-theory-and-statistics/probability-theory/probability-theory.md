- ### Probability
    - #### $P(A)$ = the Probability of Event $A$
    - #### $P(X=x)$：the Probability of $Random~Variable(X)=x$
    - ### [Conditional Probability](./conditional-probability/conditional-probability.md)
- ### Sample Space($S$)
    - $P(S)=1$

# Expected Value(Mean)：$E(x)$
- ### $E(x)=\sum\limits_{i=1}^{n}{x_ip_i}$
    - $p_i$ = Probability of $x_i$
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
- ### Moment
    - ### Moment-Generating Function(MGF)

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
        - Monotonicity：if $x_1<x_2$, then $F(x_1)\leq F(x_2)$

# Random Process(Stochastic Process)
- ### Bernoulli Process
    - Bernoulli Distribution
- ### Poisson Process
    - Poisson Distribution
- ### Markov Process
    - Markov Chain
- ### Brownian Motion

