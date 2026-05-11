# Distributions related to the Gamma Function
- ### Gamma Function
- ### $\text{scale}\times\text{rate}=1$

# Gamma Distribution (scale)
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Gamma_s\left(α,~θ\right)`$|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {θ=\text{scale}}\end{cases}`$|
|[PDF](../distribution-function.md#probability-function)|$`\frac{1}{Γ\left(α\right)θ^α}\cdot x^{α-1} \cdot e^{-x/θ}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`αθ`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`αθ^2`$|

# Gamma Distribution (rate)
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Gamma_r\left(α,~β\right)`$|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{rate}}\end{cases}`$|
|[PDF](../distribution-function.md#probability-function)|$`\frac{β^α}{Γ\left(α\right)}\cdot x^{α-1} \cdot e^{-xβ}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`\frac{α}{β}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\frac{α}{β^2}`$|

# Exponential Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Exp\left(λ\right)`$|
|Situation|the waiting time until the next event occurs|
|Random Variable ($`X`$)|
|Parameters|$`λ=\text{rate}`$|
|[PDF](../distribution-function.md#probability-function)|$`λe^{-λx}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)|$`1-e^{-λx}`$|
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`\frac{1}{λ}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\frac{1}{λ^2}`$|
- ### $`X\sim Exp\left(λ\right)=X\sim Gamma_r\left(1,~λ\right)`$

# Erlang Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Erlang\left(k,~λ\right)`$|
|Situation||
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{k=\text{shape}\in\set{1,~2,~\cdots}}\\ {λ=\text{rate}}\end{cases}`$|
|[PDF](../distribution-function.md#probability-function)|$`\frac{λ^kx^{k-1}e^{-λx}}{Γ\left(k\right)}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`\frac{k}{λ}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\frac{k}{λ^2}`$|
- ### $`X\sim Erlang\left(k,~λ\right)=X\sim Gamma_r\left(k,~λ\right)`$

# Weibull Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Weibull\left(k,~λ\right)`$|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{k=\text{shape}}\\ {λ=\text{scale}}\end{cases}`$|
|[PDF](../distribution-function.md#probability-function)|$`\frac{k}{λ}\cdot\left(\frac{x}{λ}\right)^{k-1}\cdot \exp{\left(-\left(\frac{x}{λ}\right)^k\right)}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`λ\cdot Γ\left(1+\frac{1}{K}\right)`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`λ^2\cdot Γ\left(1+\frac{2}{k}\right)-μ^2`$|

# Beta Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim Beta\left(α,~β\right)`$|
|Situation|
|Random Variable ($`X`$)|$`X\in\left[0,~1\right]`$|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{shape}}\end{cases}`$|
|[PDF](../distribution-function.md#probability-function)|$`\frac{x^{α-1}(1-x)^{β-1}}{B\left(α,β\right)}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)||
|[Mean ($`E\left[X\right]`$)](../../expected-value.md)|$`\frac{α}{α+β}`$|
|[Variance ($`σ^2`$)](../../../statistics/variance.md#variance)|$`\frac{αβ}{\left(α+β\right)^2\left(α+β+1\right)}`$|
