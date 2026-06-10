# Maximum Likelihood Estimation (MLE)
- ### Likelihood Function：$`L\left(θ|X\right) = \prod\limits_{i=1}^n{P\left(X=x_i|θ\right)}`$
    - #### Log-Likelihood Function：$`\ln{L\left(θ|X\right)} = \sum\limits_{i=1}^n{\ln{P\left(x_i|θ\right)}}`$
- ### [Estimator](./estimator/estimator.md)：$`\hat{θ} = \mathop{\text{argmax}}\limits_θ{~L\left(θ|X\right)} ,~\hat{θ} = \mathop{\text{argmax}}\limits_θ{\ln{~L\left(θ|X\right)}}`$
    - ### $`\big( θ=\hat{θ} ,~ L\left(θ|X\right)= `$[Maximum](../../../../../algebra/calculus/differential-calculus.md#extremum)$` \big) ,~\text{when } \big( \frac{d}{dθ}\ln{L\left(θ|X\right)} = 0 ,~ \frac{d^2}{dθ^2}\ln{L\left(θ|X\right)} < 0 \big)`$

# Method of [Moments](../../../../probability-theory/probability-theory.md#moment-1)
- ### nth Sample [Moments](../../../../probability-theory/probability-theory.md#moment-1)：$`\hat{μ}_n = \overline{X^n} = \frac{\sum\limits_{i=1}^n{\left( {x_i}^n \right)}}{n}`$

# [Least Square Method](../../../correlation-and-regression-analysis/linear-regression.md#least-square-method)
