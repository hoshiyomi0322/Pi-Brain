# Continuous Probability Distribution
|Probability Distribution|Parameters|[PDF](distribution-function.md#probability-function)|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|[Mean($`μ`$)](../statistics/descriptive-statistics.md#mean)|[Variance($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Continuous Uniform Distribution|$`a\leq x\leq b`$|$`\frac{1}{b-a}`$|$`\frac{x-a}{b-a}`$|$`\frac{a+b}{2}`$|$`\frac{(b-a)^2}{12}`$|
|Normal Distribution<br>(Gaussian Distribution)|$`\begin{cases}{μ=\text{Mean}}\\{σ^2=\text{Variance}}\\{x=\text{Random Variable}}\end{cases}`$|$`\frac{1}{σ\sqrt{2π}}\cdot \exp{(-\frac{(x-μ)^2}{2σ^2})}`$||$μ$|$σ^2$|
|Log-Normal Distribution||$`\frac{1}{σ\sqrt{2π}}\cdot \exp{(-\frac{{(x-μ)}^2}{2σ^2})}`$||$`\exp{(μ+\frac{σ^2}{2})}`$|$`(\exp{(σ^2)}-1)\exp{(2μ+σ^2)}`$|
|Beta Distribution|
|Erlang Distribution|
- ### [Gamma Distribution](#gamma-distribution-1)

# Discrete Probability Distribution
|Probability Distribution|Parameters|[PMF](distribution-function.md#probability-function)|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|[Mean($`μ`$)](../statistics/descriptive-statistics.md#mean)|[Variance($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Discrete Uniform Distribution|$`\begin{cases}{x\in\{a,a+1,\cdots ,b-1,b\}}\\ {n=b-a+1}\\ {a\leq b}\end{cases}`$|$`\frac{1}{n}`$|$`\frac{k-a+1}{n}`$|$`\frac{a+b}{2}`$|$`\frac{(b-a+1)^2-1}{12}`$|
|Multinomial Distribution|
|Hypergeometric Distribution|$`\begin{cases}N=\text{Population of Size}\\ K=\text{number of Success states in }N\\ n=\text{number of Draws}\\ x=\text{number of Success states in }n\end{cases}`$|$`\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}`$||$`n\cdot \frac{K}{N}`$|$`n\cdot \frac{K}{N}\cdot \frac{(N-K)}{N}\cdot \frac{(N-n)}{(N-1)}`$|
|Poisson Distribution|$`\begin{cases}λ=\text{Mean}=\text{Variance}\\ x=\text{number of occurrences}\end{cases}`$|$`\frac{λ^xe^{-λ}}{x!}`$||$`λ`$|$`λ`$|
- ### Situation and Random Variable
    |Probability Distribution|Situation|Random Variable|
    |:---:|:---:|:---:|
    |Multinomial Distributio||
    |Hypergeometric Distribution|Draw $n$ items from a Population of Size $N$, where $K$ are Successes|number of success states in $n$|

- ### [Probability Distribution of Bernoulli Trial](#probability-distribution-of-bernoulli-trial-1)

# Probability Distribution of [Bernoulli Trial](probability-theory.md#bernoulli-trial)
|Probability Distribution|Parameters|[PMF](distribution-function.md#probability-function)|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|[Mean($`μ`$)](../statistics/descriptive-statistics.md#mean)|[Variance($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Bernoulli Distribution|$`x=\text{number of successes}`$|$`p^x(1-p)^{1-x}=\begin{cases}{1-p}&{\text{for }x=0}\\ p&{\text{for }x=1}\end{cases}`$||$`p`$|$`p(1-p)`$|
|Binomial Distribution|$`\begin{cases}{x=\text{number of successes}}\\ {n=\text{number of trials}}\end{cases}`$|$`C_x^np^x(1-p)^{n-x}`$||$`np`$|$`np(1-p)`$|
|Poisson Binomial Distribution|$`\begin{cases}{x=\text{number of successes}}\\ {n=\text{number of trials}}\\ {p_1,~\cdots,~p_n=\text{Probabilities of Success}}\end{cases}`$|||$`\sum\limits_{i=1}^{n}{p_i}`$|$`\sum\limits_{i=1}^{n}{p_i(1-p_i)}`$|
|Geometric Distribution|$`x=\text{number of trials}`$|$`p(1-p)^{x-1}`$|$`1-(1-p)^x`$|$`\frac{1}{p}`$|$`\frac{1-p}{p^2}`$|
|Negative Binomial Distribution<br>(Pascal Distribution)|$`\begin{cases}{x=\text{number of failures}}\\ {r=\text{number of successes}}\end{cases}`$|$`H^r_x\cdot p^r(1-p)^x`$||$`r(\frac{1-p}{p})`$|$`r(\frac{1-p}{p^2})`$|
- ### Situation and Random Variable
    |Probability Distribution|Situation|Random Variable|
    |:---:|:---:|:---:|
    |Bernoulli Distribution|Success in a [Bernoulli Trial](probability-theory.md#bernoulli-trial)|number of successes|
    |Binomial Distribution|Successes in $n$ independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|number of successes|
    |Poisson Binomial Distribution|Successes in $n$ independent [Bernoulli Trials](probability-theory.md#bernoulli-trial) with different probabilities|number of successes|
    |Geometric Distribution|the first success in an infinite sequence of independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|number of trials|
    |Negative Binomial Distribution|the $r$-th success in an infinite sequence of independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|number of failures|
- ### [Bernoulli Trial](probability-theory.md#bernoulli-trial)
    - $`\text{Probability of Success}=p`$
    - $`\text{Probability of Failure}=1-p`$

# Gamma Distribution
|Probability Distribution|Parameters|[PDF](distribution-function.md#probability-function)|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|[Mean($`μ`$)](../statistics/descriptive-statistics.md#mean)|[Variance($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|
|:---:|:---:|:---:|:---:|:---:|:---:|
|Gamma Distribution (scale)|$`\begin{cases}{α=\text{shape}}\\ {θ=\text{scale}}\end{cases}`$|$`{(Γ(α)θ^α)}^{-1}\cdot x^{α-1} \cdot e^{-x/θ}`$||$`αθ`$|$`αθ^2`$|
|Gamma Distribution (rate)|$`\begin{cases}{α=\text{shape}}\\ {β=\text{rate}}\end{cases}`$|$`\frac{β^α}{Γ(α)}\cdot x^{α-1} \cdot e^{-xβ}`$||$`\frac{α}{β}`$|$`\frac{α}{β^2}`$|
|Exponential Distribution|$`λ=\text{rate}`$|$`λe^{-λx}`$|$`1-e^{-λx}`$|$`λ^{-1}`$|$`λ^{-2}`$|
|Weibull Distribution|$`\begin{cases}{k=\text{shape}}\\ {λ=\text{scale}}\end{cases}`$|$`\frac{k}{λ}\cdot(\frac{x}{λ})^{k-1}\cdot \exp{(-(\frac{x}{λ})^k)}`$||$`λ\cdot Γ(1+\frac{1}{K})`$|$`λ^2\cdot Γ(1+\frac{2}{k})-μ^2`$|
- ### $\text{scale}\times\text{rate}=1$
- ### Situation and Random Variable
    |Probability Distribution|Situation|Random Variable|
    |:---:|:---:|:---:|
    |Gamma Distribution|
    |Exponential Distribution|the waiting time until the next event occurs<br>= Gamma Distribution (rate), when ($α=1,~β=λ$)|
- ### [Γ Function]

# Joint Distribution
