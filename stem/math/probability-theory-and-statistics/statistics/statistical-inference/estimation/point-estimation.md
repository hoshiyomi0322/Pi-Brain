- ### Sample：$`X=\left( x_1,x_2,\cdots,x_n \right)`$
    - ### Sample Size：$`n`$
- ### Sample Statistic ($`T`$)
    - ### Sufficient Statistic
    - ### Complete Statistic
        - #### $`T\text{ is Complete Statistic} \iff \forall g\Big( \big( \forall θ,~E_θ\left[ g\left(T\right) \right]=0 \big) \implies \big( \forall θ,~P_θ\left( g\left(T\right)=0 \right)=1 \big) \Big)`$
    - ### [Estimator ($`\hat{θ}`$)](#estimator)

# Parameter and Estimator
- ### Population Parameter ($`θ`$)
- ### [Estimator ($`\hat{θ}`$)](#estimator)
- ### Estimate：the Value of Estimator
    - ### $`\text{Sample} \overset{\text{Estimator}}{\longrightarrow} \text{Estimate}`$

# Properties of Estimators
<div align="center"><img src="./image/properties-of-estimators.png" width="50%"></div>

- ### Unbiasedness
    - ### $`\hat{θ} = \begin{cases} \text{Unbiased Estimator} & {\text{If } Bias\left( \hat{θ} \right)=0} \\ \text{Biased Estimator} & {\text{If } Bias\left( \hat{θ} \right)\ne 0} \end{cases}`$
- ### Consistency
    - ### $`\hat{θ} = \begin{cases} \text{Consistent Estimator} & {\text{If } \lim\limits_{n\to\infty}{MSE\left( \hat{θ} \right)}=0} \\ \text{Inconsistent Estimator} & {\text{If } \lim\limits_{n\to\infty}{MSE\left( \hat{θ} \right)}\ne 0} \end{cases}`$
- ### Bias
    - ### $`Bias\left( \hat{θ} \right) = E\left[ \hat{θ} \right]-θ = E\left[ \hat{θ}-θ \right]`$
- ### Mean Squared Error (MSE)
    - ### $`MSE\left( \hat{θ} \right) = E\left[ \left(\hat{θ}-θ\right)^2 \right] = Var\left( \hat{θ} \right) + Bias\left( \hat{θ} \right)^2`$
    - ### Root Mean Square Error (RMSE)：$`RMSE\left( \hat{θ} \right) = \sqrt{MSE\left( \hat{θ} \right)}`$
- ### [Uniformly Minimum Variance Unbiased Estimator (UMVUE)](#uniformly-minimum-variance-unbiased-estimator-umvue-1)

# Uniformly Minimum Variance Unbiased Estimator (UMVUE)
- ### Minimum Variance
    - #### $`\hat{θ}=\text{UMVUE},~\text{If }Var\left( \hat{θ} \right) \le Var\left( \tilde{θ} \right),~\forall θ`$
    - $`\hat{θ} = \text{Unbiased Estimator}`$
    - $`\tilde{θ} = \text{any other unbiased estimator}`$
- ### Rao–Blackwell Theorem
- ### Lehmann–Scheffé Theorem
- ### Cramer-Rao Lower Bound (CRLB)

# Estimator
- ### Sample [Mean](../../descriptive-statistics.md#arithmetic-mean-am)
    - ### $`\overline{x}=\frac{\sum\limits_{i=1}^{n}{x_i}}{n}=\frac{x_1+x_2+\cdots +x_n}{n}`$
- ### [Sample Variance](#sample-variance-1)
- ### Sample [Standard Deviation](../../descriptive-statistics.md#standard-deviation-sd)
    - ### $`S=\sqrt{\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n-1}}`$
- ### Standard Error (SE)
    - ### Exact value：$`SE = \sqrt{Var\left(\overline{X}\right)} = \frac{σ}{\sqrt{n}}`$
    - ### Estimate：$`\widehat{SE} = \frac{S}{\sqrt{n}}`$

# Sample Variance
- ### Biased Sample [Variance](../../variance.md)
    - ### $`\tilde{S}^2=\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n}`$
- ### Unbiased Sample [Variance](../../variance.md)
    - ### $`S^2=\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n-1}`$
- ### Sample [Covariance](../../variance.md#covariance)
    - ### $`q_{xy} = \frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)\left(y_i-\overline{y}\right)}{n-1}`$

# Unbiased Estimation
- ### Bessel's Correction
    - ### $`\text{Unbiased Sample Variance}=\text{Biased Sample Variance}\times \text{Correction Factor}`$
- ### $`\text{Correction Factor}=\frac{\text{Sample Size}}{\text{Degree of Freedom}}=\frac{n}{n-1}`$
- ### Degree of Freedom：$`df=n-1`$

# Methods of Point Estimation
- ### Maximum Likelihood Estimation (MLE)
- ### Minimum [Mean Square Error](#mean-squared-error-mse) (M[MSE](#mean-squared-error-mse))
- ### Method of [Moments](../../../probability-theory/probability-theory.md#moment-1)
- ### [Least Square Method](../../correlation-and-regression-analysis/linear-regression.md#least-square-method)
