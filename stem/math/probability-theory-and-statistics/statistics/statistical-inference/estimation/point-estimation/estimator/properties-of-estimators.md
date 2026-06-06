# Properties of Estimators
<div align="center"><img src="./image/properties-of-estimators.png" width="50%"></div>

- ### Mean Squared Error (MSE)
    - ### $`MSE\left( \hat{θ} \right) = E\left[ \left(\hat{θ}-θ\right)^2 \right] = Var\left( \hat{θ} \right) + Bias\left( \hat{θ} \right)^2`$
- ### Root Mean Square Error (RMSE)
    - ### $`RMSE\left( \hat{θ} \right) = \sqrt{MSE\left( \hat{θ} \right)}`$
- ### [Variance](../../../../variance.md) of Estimator
    - ### $`Var\left(\hat{θ}\right) = E\left[\left(\hat{θ}-E\left[\hat{θ}\right]\right)^2\right] = E\left[\hat{θ}^2\right]-E\left[\hat{θ}\right]^2`$
- ### [Unbiasedness](#unbiasedness-1)
- ### [Consistency](#consistency-1)
- ### [Efficiency](#efficiency-1)
- ### [Uniformly Minimum Variance Unbiased Estimator (UMVUE)](#uniformly-minimum-variance-unbiased-estimator-umvue-1)

# Unbiasedness
- ### Bias
    - ### $`Bias\left( \hat{θ} \right) = E\left[ \hat{θ} \right]-θ = E\left[ \hat{θ}-θ \right]`$
- ### $`\hat{θ} = \begin{cases} \text{Unbiased Estimator} & {\text{If } Bias\left( \hat{θ} \right)=0} \\ \text{Biased Estimator} & {\text{If } Bias\left( \hat{θ} \right)\ne 0} \end{cases}`$

# Consistency
- ### $`\hat{θ} = \begin{cases} \text{Consistent Estimator} & {\text{If } \lim\limits_{n\to\infty}{MSE\left( \hat{θ} \right)}=0} \\ \text{Inconsistent Estimator} & {\text{If } \lim\limits_{n\to\infty}{MSE\left( \hat{θ} \right)}\ne 0} \end{cases}`$

# <span id="efficiency-1"> Efficiency ($`\hat{θ}`$ = [Unbiased Estimator](#unbiasedness)) </span>
- ### Efficiency of an [Unbiased Estimator](#unbiasedness)：$`e\left( \hat{θ} \right) = \frac{CRLB\left(θ\right)}{Var\left( \hat{θ} \right)} = \frac{1/I\left(θ\right)}{Var\left( \hat{θ} \right)}`$
    - ### $`\hat{θ} = \begin{cases} \text{Efficient Estimator} & {\text{If } e\left( \hat{θ} \right)=1} \\ \text{Inefficient Estimator} & {\text{If } e\left( \hat{θ} \right)< 1} \end{cases}`$
    - ### $`\text{If } e\left( \hat{θ} \right)=1 ,~\text{then } \hat{θ}=\text{UMVUE}`$
- ### Relative Efficiency：$`e\left( \hat{θ}_1,~\hat{θ}_2 \right) = \frac{MSE\left( \hat{θ}_2 \right)}{MSE\left( \hat{θ}_1 \right)} = \frac{Var\left( \hat{θ}_2 \right)}{Var\left( \hat{θ}_1 \right)}`$
    - ### $`\text{If } e\left( \hat{θ}_1,~\hat{θ}_2 \right)>1 ,~\text{then } \hat{θ}_1 \text{ is more efficient than } \hat{θ}_2`$
- ### Cramer-Rao Lower Bound (CRLB)：$`Var\left(\hat{θ}\right) \ge CRLB\left(θ\right) ,~ CRLB\left(θ\right) = \frac{1}{I\left(θ\right)}`$
    - $`I\left(θ\right)`$ = [Fisher Information](../point-estimation.md#fisher-information)

# Uniformly Minimum Variance Unbiased Estimator (UMVUE)
- ### Minimum Variance：$`\hat{θ}=\text{UMVUE},~\text{If }\Big( Var\left( \hat{θ} \right) \le Var\left( \tilde{θ} \right),~\forall θ \Big)`$
    - $`\hat{θ}`$ = [Unbiased Estimator](#unbiasedness)
    - $`\tilde{θ} = \text{any other unbiased estimator}`$
- ### Rao–Blackwell Theorem
- ### Lehmann–Scheffé Theorem
- ### [Efficiency](#efficiency-1)
