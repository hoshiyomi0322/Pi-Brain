# Discrete Uniform Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim U_d\left(a,b\right)`$|
|[Random Variable](../../probability-theory.md#random-variable)|$`x\in\{a,a+1,\cdots ,b-1,b\}`$|
|Parameters|$`\begin{cases}{n=b-a+1}\\ {a\leq b}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`\frac{1}{n}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)|$`\frac{k-a+1}{n}`$|
|[Mean](../../expected-value.md)|$`\frac{a+b}{2}`$|
|[Variance](../../../statistics/variance.md#variance)|$`\frac{\left(b-a+1\right)^2-1}{12}`$|

# Hypergeometric Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim HyperGeom\left(N,~K,~n\right)`$|
|Situation|Draw $n$ items from a Population of Size $N$, where $K$ are Successes|
|[Random Variable](../../probability-theory.md#random-variable)|$X$ = number of success states in $n$|
|Parameters|$`\begin{cases}N=\text{Population of Size}\\ K=\text{number of Success states in }N\\ n=\text{number of Draws}\\ x=\text{number of Success states in }n\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`\frac{\binom{K}{x}\binom{N-K}{n-x}}{\binom{N}{n}}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean](../../expected-value.md)|$`n\cdot \frac{K}{N}`$|
|[Variance](../../../statistics/variance.md#variance)|$`n\cdot \frac{K}{N}\cdot \frac{\left(N-K\right)}{N}\cdot \frac{\left(N-n\right)}{\left(N-1\right)}`$|

# Poisson Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Pois\left(λ\right)`$|
|[Random Variable](../../probability-theory.md#random-variable)||
|Parameters|$`\begin{cases}λ=\text{Mean}=\text{Variance}\\ x=\text{number of occurrences}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`\frac{λ^xe^{-λ}}{x!}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean](../../expected-value.md)|$`λ`$|
|[Variance](../../../statistics/variance.md#variance)|$`λ`$|

# Distributions derived from Bernoulli Trials
- ### [Distributions derived from Bernoulli Trials](distributions-derived-from-bernoulli-trials.md)
