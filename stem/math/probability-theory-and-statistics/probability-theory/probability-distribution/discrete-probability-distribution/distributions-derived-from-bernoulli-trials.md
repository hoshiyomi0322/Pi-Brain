# Distributions derived from [Bernoulli Trial](../probability-theory.md#bernoulli-trial)
- ### [Bernoulli Trial](../probability-theory.md#bernoulli-trial)

# Bernoulli Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Bernoulli\left(p\right)`$|
|Situation|Success in a [Bernoulli Trial](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`p=\text{probability of success}`$|
|[PMF](../distribution-function.md#probability-function)|$`p^x\left(1-p\right)^{1-x}=\begin{cases}{1-p}&{\text{for }x=0}\\ p&{\text{for }x=1}\end{cases}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right])`$](../../expected-value.md)|$`p`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`p\left(1-p\right)`$||

# Binomial Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim B\left(n,~p\right)`$|
|Situation|Successes in $n$ [Independent](../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events) [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`\begin{cases}{p=\text{probability of success}}\\{n=\text{number of trials}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`C_x^np^x\left(1-p\right)^{n-x}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right])`$](../../expected-value.md)|$`np`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`np\left(1-p\right)`$|

# Poisson Binomial Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim PB\left(n,~p_1,~\cdots,~p_n\right)`$|
|Situation|Successes in $n$ [Independent](../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events) [Bernoulli Trials](../probability-theory.md#bernoulli-trial) with different probabilities|
|Random Variable ($`X`$)|number of successes|
|Parameters|$`\begin{cases}{n=\text{number of trials}}\\ {p_1,~\cdots,~p_n=\text{Probabilities of Success}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)||
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right])`$](../../expected-value.md)|$`\sum\limits_{i=1}^{n}{p_i}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\sum\limits_{i=1}^{n}{p_i\left(1-p_i\right)}`$|

# Geometric Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Geom\left(p\right)`$|
|Situation|the first success in an infinite sequence of [Independent](../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events) [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of trials|
|Parameters|$`p=\text{probability of success}`$|
|[PMF](../distribution-function.md#probability-function)|$`p\left(1-p\right)^{x-1}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)|$`1-\left(1-p\right)^x`$|
|[Mean ($`E\left[X\right])`$](../../expected-value.md)|$`\frac{1}{p}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\frac{1-p}{p^2}`$|

# Negative Binomial Distribution (Pascal Distribution)
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim NB\left(r,~p\right)`$|
|Situation|the $r$-th success in an infinite sequence of [Independent](../conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events) [Bernoulli Trials](../probability-theory.md#bernoulli-trial)|
|Random Variable ($`X`$)|number of failures|
|Parameters|$`\begin{cases}{p=\text{probability of success}}\\{r=\text{number of successes}}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`H^r_x\cdot p^r\left(1-p\right)^x`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right])`$](../../expected-value.md)|$`r\left(\frac{1-p}{p}\right)`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`r\left(\frac{1-p}{p^2}\right)`$|

