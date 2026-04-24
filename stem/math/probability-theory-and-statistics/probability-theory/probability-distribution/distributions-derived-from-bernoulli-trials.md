# Distributions derived from [Bernoulli Trial](../probability-theory.md#bernoulli-trial)
- ### [Bernoulli Trial](../probability-theory.md#bernoulli-trial)

# Bernoulli Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Bernoulli(p)`$|
|Situation|Success in a [Bernoulli Trial](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`p=\text{probability of success}`$|
|[PMF](../distribution-function.md#probability-function)|$`p^x(1-p)^{1-x}=\begin{cases}{1-p}&{\text{for }x=0}\\ p&{\text{for }x=1}\end{cases}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`μ`$)](../../statistics/descriptive-statistics.md#mean)|$`p`$|
|[Variance ($`σ^2`$)](../../statistics/descriptive-statistics.md#variance)|$`p(1-p)`$||

# Binomial Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim B(n,~p)`$|
|Situation|Successes in $n$ independent [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`\begin{cases}{p=\text{probability of success}}\\{n=\text{number of trials}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`C_x^np^x(1-p)^{n-x}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`μ`$)](../../statistics/descriptive-statistics.md#mean)|$`np`$|
|[Variance ($`σ^2`$)](../../statistics/descriptive-statistics.md#variance)|$`np(1-p)`$|

# Poisson Binomial Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim PB(n,~p_1,~\cdots,~p_n)`$|
|Situation|Successes in $n$ independent [Bernoulli Trials](../probability-theory.md#bernoulli-trial) with different probabilities|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`\begin{cases}{n=\text{number of trials}}\\ {p_1,~\cdots,~p_n=\text{Probabilities of Success}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)||
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`μ`$)](../../statistics/descriptive-statistics.md#mean)|$`\sum\limits_{i=1}^{n}{p_i}`$|
|[Variance ($`σ^2`$)](../../statistics/descriptive-statistics.md#variance)|$`\sum\limits_{i=1}^{n}{p_i(1-p_i)}`$|

# Geometric Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Geom(p)`$|
|Situation|the first success in an infinite sequence of independent [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of trials|
|Parameters|$`p=\text{probability of success}`$|
|[PMF](../distribution-function.md#probability-function)|$`p(1-p)^{x-1}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)|$`1-(1-p)^x`$|
|[Mean ($`μ`$)](../../statistics/descriptive-statistics.md#mean)|$`\frac{1}{p}`$|
|[Variance ($`σ^2`$)](../../statistics/descriptive-statistics.md#variance)|$`\frac{1-p}{p^2}`$|

# Negative Binomial Distribution (Pascal Distribution)
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim NB(r,~p)`$|
|Situation|the $r$-th success in an infinite sequence of independent [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of failures|
|Parameters|$`\begin{cases}{p=\text{probability of success}}\\{r=\text{number of successes}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`H^r_x\cdot p^r(1-p)^x`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`μ`$)](../../statistics/descriptive-statistics.md#mean)|$`r(\frac{1-p}{p})`$|
|[Variance ($`σ^2`$)](../../statistics/descriptive-statistics.md#variance)|$`r(\frac{1-p}{p^2})`$|

