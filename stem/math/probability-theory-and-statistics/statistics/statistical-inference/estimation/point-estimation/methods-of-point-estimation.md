# Maximum Likelihood Estimation (MLE)
- ### Likelihood Function：$`L\left(θ|X\right) = \prod\limits_{i=1}^n{P\left(X=x_i|θ\right)}`$
    - #### Log-Likelihood Function：$`\ln{L\left(θ|X\right)} = \sum\limits_{i=1}^n{\ln{P\left(x_i|θ\right)}}`$
- ### [Estimator](./estimator/estimator.md)：$`\hat{θ} = \mathop{\argmax\limits_θ{~L\left(θ|X\right)},~\hat{θ} = \argmax\limits_θ{\ln{~L\left(θ|X\right)}}}`$
    - ### $`\big( θ=\hat{θ} ,~ L\left(θ|X\right)= `$[Maximum](../../../../../algebra/calculus/differential-calculus.md#extremum)$` \big) ,~\text{when } \big( \frac{d}{dθ}\ln{L\left(θ|X\right)} = 0 ,~ \frac{d^2}{dθ^2}\ln{L\left(θ|X\right)} < 0 \big)`$


# Method of [Moments](../../../../probability-theory/probability-theory.md#moment-1)
- ### nth Sample [Moments](../../../../probability-theory/probability-theory.md#moment-1)：$`\hat{μ}_n = \overline{X^n} = \frac{\sum\limits_{i=1}^n{\left( {x_i}^n \right)}}{n}`$

# [Least Square Method](../../../correlation-and-regression-analysis/linear-regression.md#least-square-method)

# [Bayesian](../../../../probability-theory/conditional-probability/conditional-probability.md#bayes-theorem) Parameter Estimation
- ### Likelihood Function：$`P\left(Χ|θ\right)`$
- ### Prior Distribution：$`P\left(θ\right)`$
- ### Posterior Distribution：$`P\left(θ|X\right) = \frac{P\left(X|θ\right)P\left(θ\right)}{P\left(X\right)}`$
    - $`P\left(θ|X\right) \propto P\left(X|θ\right)P\left(θ\right)`$
- ### Marginal Likelihood Function：$`P\left(Χ\right) = \begin{cases} {\int_{-\infty}^\infty{ P\left(Χ|θ\right)P\left(θ\right) \, dθ}} & \text{if }θ\text{ is Continuous} \\ {\sum\limits_θ{ P\left(Χ|θ\right)P\left(θ\right) }} & \text{if }θ\text{ is Discrete}\end{cases}`$
- ### [Estimator](./estimator/estimator.md)：$`\hat{θ}`$
    - ### Minimum [Mean Square Error](estimator/properties-of-estimators.md#mean-squared-error-mse) (M[MSE](estimator/properties-of-estimators.md#mean-squared-error-mse), Posterior Mean)
    - ### Posterior Median
    - ### Maximum A Posteriori (MAP, Posterior Mode)
