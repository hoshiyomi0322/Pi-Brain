# Continuous Probability Distribution
- ### Continuous Uniform Distribution
    |Property|Description|
    |:---:|:---:|
    |Parameters|$`a\leq x\leq b`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{1}{b-a}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`\frac{x-a}{b-a}`$|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{a+b}{2}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{(b-a)^2}{12}`$|
- ### Normal Distribution (Gaussian Distribution)
    |Property|Description|
    |:---:|:---:|
    |Random Variable ($`X`$)||
    |Parameters|$`\begin{cases}{μ=\text{Mean}}\\{σ^2=\text{Variance}}\end{cases}`$||
    |[PDF](distribution-function.md#probability-function)|$`\frac{1}{σ\sqrt{2π}}\cdot \exp{(-\frac{(x-μ)^2}{2σ^2})}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$μ$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$σ^2$|
- ### Log-Normal Distribution
    |Property|Description|
    |:---:|:---:|
    |Random Variable ($`X`$)||
    |Parameters||
    |[PDF](distribution-function.md#probability-function)|$`\frac{1}{xσ\sqrt{2π}}\cdot \exp{(-\frac{(\ln{(x)}-μ)^2}{2σ^2})}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\exp{(μ+\frac{σ^2}{2})}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`(\exp{(σ^2)}-1)\cdot\exp{(2μ+σ^2)}`$|
- ### [Probability Distribution of Gamma Function](#probability-distribution-of-gamma-function-1)

# Discrete Probability Distribution
- ### Discrete Uniform Distribution
    |Property|Description|
    |:---:|:---:|
    |Random Variable ($`X`$)||
    |Parameters|$`\begin{cases}{x\in\{a,a+1,\cdots ,b-1,b\}}\\ {n=b-a+1}\\ {a\leq b}\end{cases}`$|
    |[PMF](distribution-function.md#probability-function)|$`\frac{1}{n}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`\frac{k-a+1}{n}`$|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{a+b}{2}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{(b-a+1)^2-1}{12}`$|
- ### Multinomial Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation||
    |Random Variable ($`X`$)||
    |Parameters|
    |[PMF](distribution-function.md#probability-function)|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|
- ### Hypergeometric Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|Draw $n$ items from a Population of Size $N$, where $K$ are Successes|
    |Random Variable ($`X`$)|number of success states in $n$|
    |Parameters|$`\begin{cases}N=\text{Population of Size}\\ K=\text{number of Success states in }N\\ n=\text{number of Draws}\\ x=\text{number of Success states in }n\end{cases}`$|
    |[PMF](distribution-function.md#probability-function)|$`\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`n\cdot \frac{K}{N}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`n\cdot \frac{K}{N}\cdot \frac{(N-K)}{N}\cdot \frac{(N-n)}{(N-1)}`$|
- ### Poisson Distribution
    |Property|Description|
    |:---:|:---:|
    |Random Variable ($`X`$)||
    |Parameters|$`\begin{cases}λ=\text{Mean}=\text{Variance}\\ x=\text{number of occurrences}\end{cases}`$|
    |[PMF](distribution-function.md#probability-function)|$`\frac{λ^xe^{-λ}}{x!}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`λ`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`λ`$|
- ### [Probability Distribution of Bernoulli Trial](#probability-distribution-of-bernoulli-trial-1)

# Probability Distribution of [Bernoulli Trial](probability-theory.md#bernoulli-trial)
- ### [Bernoulli Trial](probability-theory.md#bernoulli-trial)
    - $`p=\text{Probability of Success}`$
    - $`1-p=\text{Probability of Failure}`$
- ### Bernoulli Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|Success in a [Bernoulli Trial](probability-theory.md#bernoulli-trial)|
    |Random Variable ($`X`$)|number of successes|
    |Parameters||
    |[PMF](distribution-function.md#probability-function)|$`p^x(1-p)^{1-x}=\begin{cases}{1-p}&{\text{for }x=0}\\ p&{\text{for }x=1}\end{cases}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`p`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`p(1-p)`$||
- ### Binomial Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|Successes in $n$ independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|
    |Random Variable ($`X`$)|number of successes|
    |Parameters|$`n=\text{number of trials}`$|
    |[PMF](distribution-function.md#probability-function)|$`C_x^np^x(1-p)^{n-x}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`np`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`np(1-p)`$|
- ### Poisson Binomial Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|Successes in $n$ independent [Bernoulli Trials](probability-theory.md#bernoulli-trial) with different probabilities|
    |Random Variable ($`X`$)|number of successes|
    |Parameters|$`\begin{cases}{n=\text{number of trials}}\\ {p_1,~\cdots,~p_n=\text{Probabilities of Success}}\end{cases}`$|
    |[PMF](distribution-function.md#probability-function)||
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\sum\limits_{i=1}^{n}{p_i}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\sum\limits_{i=1}^{n}{p_i(1-p_i)}`$|
- ### Geometric Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|the first success in an infinite sequence of independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|
    |Random Variable ($`X`$)|number of trials|
    |Parameters||
    |[PMF](distribution-function.md#probability-function)|$`p(1-p)^{x-1}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`1-(1-p)^x`$|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{1}{p}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{1-p}{p^2}`$|
- ### Negative Binomial Distribution (Pascal Distribution)
    |Property|Description|
    |:---:|:---:|
    |Situation|the $r$-th success in an infinite sequence of independent [Bernoulli Trials](probability-theory.md#bernoulli-trial)|
    |Random Variable ($`X`$)|number of failures|
    |Parameters|$`r=\text{number of successes}`$|
    |[PMF](distribution-function.md#probability-function)|$`H^r_x\cdot p^r(1-p)^x`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`r(\frac{1-p}{p})`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`r(\frac{1-p}{p^2})`$|

# Probability Distribution of [Gamma Function]
- ### $\text{scale}\times\text{rate}=1$
- ### Gamma Distribution (scale)
    |Property|Description|
    |:---:|:---:|
    |Situation|
    |Random Variable ($`X`$)|
    |Parameters|$`\begin{cases}{α=\text{shape}}\\ {θ=\text{scale}}\end{cases}`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{1}{Γ(α)θ^α}\cdot x^{α-1} \cdot e^{-x/θ}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`αθ`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`αθ^2`$|
- ### Gamma Distribution (rate)
    |Property|Description|
    |:---:|:---:|
    |Situation|
    |Random Variable ($`X`$)|
    |Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{rate}}\end{cases}`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{β^α}{Γ(α)}\cdot x^{α-1} \cdot e^{-xβ}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{α}{β}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{α}{β^2}`$|
- ### Exponential Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|the waiting time until the next event occurs<br>= Gamma Distribution (rate), when ($α=1,~β=λ$)|
    |Random Variable ($`X`$)|
    |Parameters|$`λ=\text{rate}`$|
    |[PDF](distribution-function.md#probability-function)|$`λe^{-λx}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`1-e^{-λx}`$|
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{1}{λ}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{1}{λ^2}`$|
- ### Erlang Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|= Gamma Distribution (rate), when ($α=k,~β=λ$)|
    |Random Variable ($`X`$)|
    |Parameters|$`\begin{cases}{k=\text{shape}\in\set{1,~2,~\cdots}}\\ {λ=\text{rate}}\end{cases}`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{λ^kx^{k-1}e^{-λx}}{Γ(k)}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{k}{λ}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{k}{λ^2}`$|
- ### Weibull Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|
    |Random Variable ($`X`$)|
    |Parameters|$`\begin{cases}{k=\text{shape}}\\ {λ=\text{scale}}\end{cases}`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{k}{λ}\cdot(\frac{x}{λ})^{k-1}\cdot \exp{(-(\frac{x}{λ})^k)}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`λ\cdot Γ(1+\frac{1}{K})`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`λ^2\cdot Γ(1+\frac{2}{k})-μ^2`$|
- ### Beta Distribution
    |Property|Description|
    |:---:|:---:|
    |Situation|
    |Random Variable ($`X`$)|$`X\in[0,~1]`$|
    |Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{shape}}\end{cases}`$|
    |[PDF](distribution-function.md#probability-function)|$`\frac{x^{α-1}(1-x)^{β-1}}{B(α,β)}`$|
    |[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
    |[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{α}{α+β}`$|
    |[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{αβ}{(α+β)^2(α+β+1)}`$|

# Joint Distribution
