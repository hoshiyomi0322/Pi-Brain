# Distributions related to the Gamma Function
- ### Gamma Function
- ### $\text{scale}\times\text{rate}=1$

# Gamma Distribution (scale)
|Property|Description|
|:---:|:---:|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {θ=\text{scale}}\end{cases}`$|
|[PDF](distribution-function.md#probability-function)|$`\frac{1}{Γ(α)θ^α}\cdot x^{α-1} \cdot e^{-x/θ}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`αθ`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`αθ^2`$|

# Gamma Distribution (rate)
|Property|Description|
|:---:|:---:|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{rate}}\end{cases}`$|
|[PDF](distribution-function.md#probability-function)|$`\frac{β^α}{Γ(α)}\cdot x^{α-1} \cdot e^{-xβ}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{α}{β}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{α}{β^2}`$|

# Exponential Distribution
|Property|Description|
|:---:|:---:|
|Situation|the waiting time until the next event occurs<br>= Gamma Distribution (rate), when ($α=1,~β=λ$)|
|Random Variable ($`X`$)|
|Parameters|$`λ=\text{rate}`$|
|[PDF](distribution-function.md#probability-function)|$`λe^{-λx}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)|$`1-e^{-λx}`$|
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{1}{λ}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{1}{λ^2}`$|

# Erlang Distribution
|Property|Description|
|:---:|:---:|
|Situation|= Gamma Distribution (rate), when ($α=k,~β=λ$)|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{k=\text{shape}\in\set{1,~2,~\cdots}}\\ {λ=\text{rate}}\end{cases}`$|
|[PDF](distribution-function.md#probability-function)|$`\frac{λ^kx^{k-1}e^{-λx}}{Γ(k)}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{k}{λ}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{k}{λ^2}`$|

# Weibull Distribution
|Property|Description|
|:---:|:---:|
|Situation|
|Random Variable ($`X`$)|
|Parameters|$`\begin{cases}{k=\text{shape}}\\ {λ=\text{scale}}\end{cases}`$|
|[PDF](distribution-function.md#probability-function)|$`\frac{k}{λ}\cdot(\frac{x}{λ})^{k-1}\cdot \exp{(-(\frac{x}{λ})^k)}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`λ\cdot Γ(1+\frac{1}{K})`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`λ^2\cdot Γ(1+\frac{2}{k})-μ^2`$|

# Beta Distribution
|Property|Description|
|:---:|:---:|
|Situation|
|Random Variable ($`X`$)|$`X\in[0,~1]`$|
|Parameters|$`\begin{cases}{α=\text{shape}}\\ {β=\text{shape}}\end{cases}`$|
|[PDF](distribution-function.md#probability-function)|$`\frac{x^{α-1}(1-x)^{β-1}}{B(α,β)}`$|
|[CDF](distribution-function.md#cumulative-distribution-functioncdf)||
|[Mean ($`μ`$)](../statistics/descriptive-statistics.md#mean)|$`\frac{α}{α+β}`$|
|[Variance ($`σ^2`$)](../statistics/descriptive-statistics.md#variance)|$`\frac{αβ}{(α+β)^2(α+β+1)}`$|
