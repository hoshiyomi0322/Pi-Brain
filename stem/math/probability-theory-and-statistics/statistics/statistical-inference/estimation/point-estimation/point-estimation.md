# Point Estimation
- ### Population
    - ### [Population Parameter ($`θ`$)](../../../descriptive-statistics.md)
    - ### Fisher Information：$`I\left(θ\right)`$
- ### Sample：$`X=\left( x_1,x_2,\cdots,x_n \right)`$
    - ### Sample Size：$`n`$
    - ### Sample Statistic ($`T`$)
        - ### [Estimator ($`\hat{θ}`$)](estimator/estimator.md)
    - ### Estimate：the Value of Estimator
        - ### $`\text{Sample} \overset{\text{Estimator}}{\longrightarrow} \text{Estimate}`$

# Properties of Sample Statistics
- ### Sufficiency
    -  #### $`T\text{ is Sufficient Statistic} \iff f\left(X|θ\right) = g\left( T,~θ \right) h\left(X\right)`$
    - $`f\left(X|θ\right)`$ = [Conditional Probability Function](../../../../probability-theory/probability-distribution/joint-distribution/joint-distribution-function.md#conditional-probability-function)
- ### Completeness
    - #### $`T\text{ is Complete Statistic} \iff \forall g\Big( \text{If }\big( E_θ\left[ g\left(T\right) \right]=0 ,~\forall θ \big) ,~\text{then } \big( P_θ\left( g\left(T\right)=0 \right)=1 ,~\forall θ \big) \Big)`$
- ### [Properties of Estimators](estimator/properties-of-estimators.md)

# Methods of Point Estimation
- ### Maximum Likelihood Estimation (MLE)
- ### Minimum [Mean Square Error](estimator/properties-of-estimators.md#mean-squared-error-mse) (M[MSE](estimator/properties-of-estimators.md#mean-squared-error-mse))
- ### Method of [Moments](../../../../probability-theory/probability-theory.md#moment-1)
- ### [Least Square Method](../../../correlation-and-regression-analysis/linear-regression.md#least-square-method)
