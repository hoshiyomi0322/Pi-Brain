- ### Sample：$`x_1,x_2,\cdots,x_n`$
    - #### Sample Size：$`n`$

# Parameter, Estimator
- ### Parameter
    - ### $`θ`$
- ### Estimator
    - ### $`\hat{θ}`$
- ### Estimate

# Sample Statistics
- ### Sample [Mean](../../descriptive-statistics.md#arithmetic-mean-am)
    - ### $`\overline{x}=\frac{\sum\limits_{i=1}^{n}{x_i}}{n}=\frac{x_1+x_2+\cdots +x_n}{n}`$
- ### [Sample Variance](#sample-variance-1)
- ### Sample [Standard Deviation](../../descriptive-statistics.md#standard-deviation-sd)
    - ### $`S=\sqrt{\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n-1}}`$
- ### Standard Error (SE)
    - ### $`SE=\frac{S}{\sqrt{n}}`$
- ### Mean Squared Error (MSE)
    - ### $`MSE = E\left[ \left(θ-\hat{θ}\right)^2 \right] = Var\left( \hat{θ} \right) + Bias\left( \hat{θ} \right)^2`$
- ### Bias
    - ### $`Bias\left( \hat{θ} \right) = E\left[ \hat{θ} \right]-θ = E\left[ \hat{θ}-θ \right]`$

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
- ### Minimum Mean Square Error (MMSE)
- ### Method of [Moments](../../../probability-theory/probability-theory.md#moment-1)
- ### [Least Square Method](../../correlation-and-regression-analysis/linear-regression.md#least-square-method)
