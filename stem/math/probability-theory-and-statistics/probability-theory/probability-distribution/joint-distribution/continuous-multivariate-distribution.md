# Multivariate [Continuous Uniform Distribution](../continuous-probability-distribution/continuous-probability-distribution.md#continuous-uniform-distribution)
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim U_c\left(a,b\right)`$|
|[Random Variable](../../probability-theory.md#random-variable)|$`X=\left( X_1,~\cdots,~X_n \right) \\ X_i \in \left[a_i,~b_i\right],~\forall i`$|
|Parameters|$`a=\left( a_1,~\cdots,~a_n \right) \\ b=\left( b_1,~\cdots,~b_n \right) \\ a_i\le b_i,~\forall i`$|
|[PDF](../distribution-function.md#probability-function)|$`\begin{cases} {\prod\limits_{i=1}^n{\frac{1}{b_i-a_i}}} & {\text{for all }x_i \in \left[a_i,~b_i\right]} \\ 0&\text{otherwise} \end{cases}`$|
|[CDF](../distribution-function.md#cumulative-distribution-function-cdf)|$`F_X\left(x_1,~\cdots,~x_n\right)=\prod\limits_{i=1}^n{g_i\left(x_i\right)} \\ g_i\left(x_i\right)=\begin{cases} 0&{\text{for }x_i<a_i} \\ {\frac{x_i-a_i}{b_i-a_i}} & {\text{for }x_i \in \left[a_i,~b_i\right]} \\ 1&{\text{for }x_i>b_i} \end{cases}`$|
|[Mean](../../expected-value.md)|$`E\left[X_i\right]=\frac{a_i+b_i}{2}`$|
|[Variance](../../../statistics/variance.md#variance)|$`Var\left( X_i \right)=\frac{\left(b_i-a_i\right)^2}{12}`$|

# Multivariate [Normal Distribution](../continuous-probability-distribution/continuous-probability-distribution.md#normal-distribution-gaussian-distribution) (Multivariate [Gaussian Distribution](../continuous-probability-distribution/continuous-probability-distribution.md#normal-distribution-gaussian-distribution))
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim N\left( μ,~Σ \right)`$|
|[Random Vector](../../probability-theory.md#random-vector-multivariate-random-variable)|$`X=\left( X_1,~\cdots,~X_n \right)`$|
|Parameters|$`\begin{cases}{μ=\text{Mean}}\\{Σ=\text{Covariance Matrix}}\end{cases}`$||
|[Multivariate PDF](./multivariate-distribution-function.md#multivariate-probability-function)|$`\frac{1}{\sqrt{\left(2π\right)^n det\left(Σ\right)}}\cdot \exp{\left(-\frac{1}{2}\left(x-μ\right)^TΣ^{-1}\left(x-μ\right)\right)}`$|
|[Mean](../../expected-value.md#expected-value-of-multivariate-distribution)|$μ$|
|[Variance](../../../statistics/variance.md#variance)|$Σ$|

