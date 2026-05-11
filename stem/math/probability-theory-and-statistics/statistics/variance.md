- ### Data：$`\begin{cases}{x_1,x_2,\cdots ,x_n}\\{y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### Number of Data：$`n`$
    - #### [Arithmetic Mean](descriptive-statistics.md#arithmetic-mean-am)：$`μ_x,~μ_y`$
- ### [Random Variable](../probability-theory/probability-theory.md#random-variable)：$`\begin{cases}{X=x_1,x_2,\cdots ,x_n}\\{Y=y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### [Expected Value (Mean)](../probability-theory/expected-value.md)：$`E\left[X\right],~E\left[Y\right]`$

# Variance
- ### $`Var(x)=σ^2=\frac{\sum\limits_{i=1}^{n}\left(D_i\right)^2}{n}=\frac{\sum\limits_{i=1}^{n}\left(x_i-μ\right)^2}{n}=\frac{\sum\limits_{i=1}^{n}{x_i}^2-nμ^2}{n}=\frac{\sum\limits_{i=1}^{n}{x_i}^2}{n}-μ^2`$
    - $`D_i`$ = [Deviation from the Mean](descriptive-statistics.md#deviation-from-the-mean)
- ### $`Var\left(X\right)=E\left[\left(X-μ\right)^2\right]=E\left[\left(X-E\left[X\right]\right)^2\right]=E\left[X^2\right]-E\left[X\right]^2`$
- ### Properties
    - #### $`Var\left(c\right)=0`$
    - #### $`Var\left(aX+b\right)=a^2Var\left(X\right)`$
    - #### $`Var\left(aX+bY\right)=a^2Var\left(X\right)+b^2Var\left(Y\right)+2ab\cdot Cov\left(X,Y\right)`$

# Covariance
- ### $`Cov\left(x,~y\right)=σ_{xy}=\frac{D_{xy}}{n}=\frac{\sum\limits_{i=1}^{n}\left(x_i-μ_x\right)\left(y_i-μ_y\right)}{n}`$
    - $`D_{xy}`$ = [Sum of Products of Deviations from the Mean](./correlation-and-regression-analysis/correlation-and-regression-analysis.md#sum-of-products-of-deviations-from-the-mean)
- ### $`Cov\left(X,~Y\right)=E\left[\left(X-μ_X\right)\left(Y-μ_Y\right)\right]=E\left[\left(X-E\left[X\right]\right)\left(Y-E\left[Y\right]\right)\right]=E\left[XY\right]-E\left[X\right]E\left[Y\right]`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](../probability-theory/conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }Cov\left(X,~Y\right)=0`$

# Covariance Matrix
- ### Covariance Matrix
    - ### $`Σ_X = \begin{bmatrix} Var\left(X_1\right) & Cov\left(X_1,~X_2\right) & \cdots & Cov\left(X_1,~X_n\right) \\ Cov\left(X_2,~X_1\right) & Var\left(X_2\right) & \cdots & Cov\left(X_2,~X_n\right) \\ \vdots & \vdots & \ddots & \vdots \\ Cov\left(X_n,~X_1\right) & Cov\left(X_n,~X_2\right) & \cdots & Var\left(X_n\right)\end{bmatrix}`$
    - ### [Random Vector](../probability-theory/probability-theory.md#random-vector-multivariate-random-variable)：$`X=\left( X_1,~\cdots,~X_n \right)^T`$
    - ### Mahalanobis Distance：$`D\left( x \right)=\sqrt{-\frac{1}{2}\left(x-μ\right)^TΣ^{-1}\left(x-μ\right)}`$
- ### Cross-Covariance Matrix
    - ### $`K_{XY} = \begin{bmatrix} Cov\left(X_1,~Y_1\right) & Cov\left(X_1,~Y_2\right) & \cdots & Cov\left(X_1,~Y_n\right) \\ Cov\left(X_2,~Y_1\right) & Cov\left(X_2,~Y_2\right) & \cdots & Cov\left(X_2,~Y_n\right) \\ \vdots & \vdots & \ddots & \vdots \\ Cov\left(X_m,~Y_1\right) & Cov\left(X_m,~Y_2\right) & \cdots & Cov\left(X_m,~Y_n\right)\end{bmatrix}`$
    - ### [Random Vectors](../probability-theory/probability-theory.md#random-vector-multivariate-random-variable)：$`\begin{cases} {X=\left( X_1,~\cdots,~X_n \right)^T} \\ {Y=\left( Y_1,~\cdots,~Y_n \right)^T} \end{cases}`$

# [Conditional](../probability-theory/probability-distribution/joint-distribution/joint-distribution-function.md#conditional-distribution) Variance
- ### $`Var\left( X|Y \right)=E\left[ \left( X-E\left[X|Y\right] \right)^2|Y \right]=E\left[ X^2|Y\right]-E\left[X|Y\right]^2`$
    - $`E\left[X|Y\right]`$ = [Conditional Expectation](../probability-theory/expected-value.md#conditional-expectation)
- ### Law of Total Variance
    - ### $`Var\left( X \right)=E\left[ Var\left(X|Y \right) \right]+Var\left( E\left[ X|Y \right] \right)`$
- ### $`\text{If }X\text{ and }Y\text{ are }`$[Independent](../probability-theory/conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }Var\left( X|Y \right)=Var\left( X \right)`$
