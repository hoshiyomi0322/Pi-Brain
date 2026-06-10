# Bayesian Inference
- ### [Bayes' Theorem](../../../probability-theory/conditional-probability/conditional-probability.md#bayes-theorem)
- ### Likelihood Function：$`P\left(Χ|θ\right)`$
- ### Prior Distribution：$`P\left(θ\right)`$
- ### Posterior Distribution：$`P\left(θ|X\right) = \frac{P\left(X|θ\right)P\left(θ\right)}{P\left(X\right)}`$
    - $`P\left(θ|X\right) \propto P\left(X|θ\right)P\left(θ\right)`$
- ### Marginal Likelihood Function：$`P\left(Χ\right) = \begin{cases} {\int_{-\infty}^\infty{ P\left(Χ|θ\right)P\left(θ\right) \, dθ}} & \text{if }θ\text{ is Continuous} \\ {\sum\limits_θ{ P\left(Χ|θ\right)P\left(θ\right) }} & \text{if }θ\text{ is Discrete}\end{cases}`$

# Bayes' [Estimator](point-estimation/estimator/estimator.md)
- ### Minimum [Mean Square Error](point-estimation/estimator/properties-of-estimators.md#mean-squared-error-mse) (M[MSE](point-estimation/estimator/properties-of-estimators.md#mean-squared-error-mse), Posterior Mean)
    - $`\hat{θ}=`$
- ### Posterior Median
- ### Maximum A Posteriori (MAP, Posterior Mode)
