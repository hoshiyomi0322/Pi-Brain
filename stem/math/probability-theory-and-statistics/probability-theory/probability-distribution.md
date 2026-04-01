# Continuous Probability Distribution
|Probability Distribution|Parameters|PDF|CDF|Mean|Variance|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Continuous Uniform Distribution|$`a\leq x\leq b`$|$`\frac{1}{b-a}`$|$`\frac{x-a}{b-a}`$|$`\frac{a+b}{2}`$|$`\frac{(b-a)^2}{12}`$|
|Normal Distribution<br>(Gaussian Distribution)|
|Exponential Distribution|
|Gamma Distribution|

# Discrete Probability Distribution
|Probability Distribution|Parameters|PMF|CDF|Mean|Variance|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Discrete Uniform Distribution|$`\begin{cases}{x\in\{a,a+1,\cdots ,b-1,b\}}\\ {n=b-a+1}\\ {a\leq b}\end{cases}`$|$`\frac{1}{n}`$|$`\frac{k-a+1}{n}`$|$`\frac{a+b}{2}`$|$`\frac{(b-a+1)^2-1}{12}`$|
|Multinomial Distribution|
|Hypergeometric Distribution|$`\begin{cases}N=\text{number of population size}\\ K=\text{number of success states in }N\\ n=\text{number of draws}\\ x=\text{number of success states in }n\end{cases}`$|$`\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}`$|$``$|$`n\frac{K}{N}`$|$`n\frac{K}{N}\frac{(N-K)}{N}\frac{(N-n)}{(N-1)}`$|
|Poisson Distribution|$`\begin{cases}λ=\text{Mean}=\text{Variance}\\ x=\text{number of occurrences}\end{cases}`$|$`\frac{λ^xe^{-λ}}{x!}`$||$`λ`$|$`λ`$|

- ### Bernoulli Trial
    |Probability Distribution|Parameters|PMF|CDF|Mean|Variance|
    |:---:|:---:|:---:|:---:|:---:|:---:|
    |Bernoulli Distribution|$`x=\text{number of successes}`$|$`p^x(1-p)^{1-x}=\begin{cases}{1-p}&{\text{for }x=0}\\ p&{\text{for }x=1}\end{cases}`$||$`p`$|$`p(1-p)`$|
    |Binomial Distribution|$`\begin{cases}{x=\text{number of successes}}\\ {n=\text{number of trials}}\end{cases}`$|$`C_x^np^x(1-p)^{n-x}`$||$`np`$|$`np(1-p)`$|
    |Geometric Distribution|$`x=`$the number of trials until the first success|$`p(1-p)^{x-1}`$|$`1-(1-p)^x`$|$`\frac{1}{p}`$|$`\frac{1-p}{p^2}`$|
    |Poisson Binomial Distribution|$`\begin{cases}{n=\text{number of trials}}\\ {p_1,~\cdots,~p_n=\text{Probabilities of Success}}\end{cases}`$|||$`\sum\limits_{i=1}^{n}{p_i}`$|$`\sum\limits_{i=1}^{n}{p_i(1-p_i)}`$|
    |Negative Binomial Distribution<br>(Pascal Distribution)|$`\begin{cases}{x=\text{number of failures}}\\ {r=\text{number of successes}}\end{cases}`$|$`H^r_x\cdot p^r(1-p)^x`$||$`r(\frac{1-p}{p})`$|$`r(\frac{1-p}{p^2})`$|
    - ### Bernoulli Trial
        - $`\text{Probability of Success}=p`$
        - $`\text{Probability of Failure}=1-p`$

# Joint Distribution
