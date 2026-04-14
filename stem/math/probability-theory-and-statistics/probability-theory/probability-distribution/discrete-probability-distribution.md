# Discrete Uniform Distribution
|Property|Description|
|:---:|:---:|
|Random Variable ($`X`$)||
|Parameters|$`\begin{cases}{x\in\{a,a+1,\cdots ,b-1,b\}}\\ {n=b-a+1}\\ {a\leq b}\end{cases}`$|
|[PMF](distribution-function.md#probability-function)|$`\frac{1}{n}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`\frac{k-a+1}{n}`$|
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{a+b}{2}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{(b-a+1)^2-1}{12}`$|

# Multinomial Distribution
|Property|Description|
|:---:|:---:|
|Situation||
|Random Variable ($`X`$)||
|Parameters|
|[PMF](distribution-function.md#probability-function)|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|

# Hypergeometric Distribution
|Property|Description|
|:---:|:---:|
|Situation|Draw $n$ items from a Population of Size $N$, where $K$ are Successes|
|Random Variable ($`X`$)|number of success states in $n$|
|Parameters|$`\begin{cases}N=\text{Population of Size}\\ K=\text{number of Success states in }N\\ n=\text{number of Draws}\\ x=\text{number of Success states in }n\end{cases}`$|
|[PMF](distribution-function.md#probability-function)|$`\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`n\cdot \frac{K}{N}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`n\cdot \frac{K}{N}\cdot \frac{(N-K)}{N}\cdot \frac{(N-n)}{(N-1)}`$|

# Poisson Distribution
|Property|Description|
|:---:|:---:|
|Random Variable ($`X`$)||
|Parameters|$`\begin{cases}λ=\text{Mean}=\text{Variance}\\ x=\text{number of occurrences}\end{cases}`$|
|[PMF](distribution-function.md#probability-function)|$`\frac{λ^xe^{-λ}}{x!}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`λ`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`λ`$|

# Distributions derived from Bernoulli Trials
- ### [Distributions derived from Bernoulli Trials](distributions-derived-from-bernoulli-trials.md)
