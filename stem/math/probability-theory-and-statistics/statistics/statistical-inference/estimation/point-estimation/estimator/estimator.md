# Properties of Estimators
- ### [Properties of Estimators](properties-of-estimators.md)

# Estimator
- ### Sample [Mean](../../../../descriptive-statistics.md#arithmetic-mean-am)
    - ### $`\overline{x}=\frac{\sum\limits_{i=1}^{n}{x_i}}{n}=\frac{x_1+x_2+\cdots +x_n}{n}`$
- ### [Sample Variance](#sample-variance-1)
- ### Sample [Standard Deviation](../../../../descriptive-statistics.md#standard-deviation-sd)
    - ### $`S=\sqrt{\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n-1}}`$
- ### Standard Error (SE)
    - ### Exact value：$`SE = \sqrt{Var\left(\overline{X}\right)} = \frac{σ}{\sqrt{n}}`$
    - ### Estimate：$`\widehat{SE} = \frac{S}{\sqrt{n}}`$

# Sample Variance
- ### Biased Sample [Variance](../../../../variance.md)
    - ### $`\tilde{S}^2=\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n}`$
- ### Unbiased Sample [Variance](../../../../variance.md)
    - ### $`S^2=\frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)^2}{n-1}`$
- ### Sample [Covariance](../../../../variance.md#covariance)
    - ### $`q_{xy} = \frac{\sum\limits_{i=1}^{n}\left(x_i-\overline{x}\right)\left(y_i-\overline{y}\right)}{n-1}`$
- ### [Unbiased Estimation of Sample Variance](#unbiased-estimation-of-sample-variance-1)

# Unbiased Estimation of Sample Variance
- ### Bessel's Correction
    - ### $`\text{Unbiased Sample Variance}=\text{Biased Sample Variance}\times \text{Correction Factor}`$
- ### $`\text{Correction Factor}=\frac{\text{Sample Size}}{\text{Degree of Freedom}}=\frac{n}{n-1}`$
- ### Degree of Freedom：$`df=n-1`$
