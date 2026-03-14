- ### Probability：$P(x)$
- ### Expected Value(Mean)：$E(x)$
- ### Sample Space($S$)
    - $P(S)=1$

# Conditional Probability
- ### Conditional Probability：$P(A\mid B)=\frac{P(A\cap B)}{P(B)}$
    - $P(A\mid B)$＝the probability of $A$ under the condition $B$
  - ### Bayes' Theorem：$P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(B\mid A)P(A)}{P(B)}$
- ### Joint Probability：$P(A\cap B)=P(A\mid B)P(B)=P(B\mid A)P(A)$
    |Independent events|Mutually Exclusive events|
    |:---:|:---:|
    |<img src="independent.png" width="60%">|<img src="mutually-exclusive.png" width="60%">|
    |$P(A\cap B)=P(A)P(B)$|$P(A\cap B)=0=\varnothing$|
    |$P(A\mid B)=P(A)$、$P(B\mid A)=P(B)$|$P(A\mid B)=P(B\mid A)=0$|
- ### Union Probability：$P(A\cup B)=(P(A)+P(B))-P(A\cap B)$
    |Mutually Exclusive events|Collectively Exhaustive events|Mutually Exclusive and Collectively Exhaustive events|
    |:---:|:---:|:---:|
    |$P(A\cup B)=P(A)+P(B)$|$P(A\cup B)=S$|$P(A\cup B)=P(A)+P(B)=S$|
    - #### Inclusion–Exclusion Principle
- ### Law of Total Probability
    <img src="law-of-total-probability.png" width="40%">

    - $\{A_1\cdots A_n\}$ is Mutually Exclusive and Collectively Exhaustive events
    - ### $P(B)=\sum\limits_{k=1}^{n}{P(A_k\cap B)}=\sum\limits_{i=1}^{n}{(P(B\mid A_k)P(A_k))}$
    - ### Bayes' Theorem：$P(A_i\mid B)=\frac{P(A_i\cap B)}{P(B)}=\frac{P(B\mid A_i)P(A_i)}{P(B)}=\frac{P(B\mid A_i)P(A_i)}{\sum\limits_{i=1}^{n}{(P(B\mid A_k)P(A_k))}}$
---
- ### Random Variable
    - ### [Probability Distribution](#probability-distribution-1)
    - ### [Random Process(Stochastic Process)](#random-processstochastic-process-1)
- ### Random Experiment
- ### Probabilistic Model
    - #### Cumulative Distribution Function(CDF)
        - Probability Density Function(PDF)
        - Probability Mass Function(PMF)
    - #### Probability Distribution Function
- ### Moment
    - ### Moment-Generating Function(MGF)

# Probability Distribution
- ### Continuous Probability Distribution
    |Probability Distribution|PMF|Random Process|
    |:---:|:---:|:---:|
    - ### Continuous Uniform Distribution
    - ### Normal Distribution(Gaussian Distribution)
    - ### Exponential Distribution
    - ### Gamma Distribution
- ### Discrete Probability Distribution
    - ### Multinomial Distribution
        - ### Binomial Distribution
    - ### Geometric Distribution
    - ### Bernoulli Distribution
    - ### Poisson Distribution
- ### Joint Distribution
# Random Process(Stochastic Process)
- ### Bernoulli Process
    - Bernoulli Distribution
- ### Poisson Process
    - Poisson Distribution
- ### Markov Process
    - Markov Chain
- ### Brownian Motion