- ### Data：$`\begin{cases}{x_1,x_2,\cdots ,x_n}\\{y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### Number of Data：$`n`$
    - ### Arithmetic Mean：$`μ_x,~μ_y`$
- ### [Random Variable](../probability-theory/probability-theory.md#random-variable)：$`\begin{cases}{X=x_1,x_2,\cdots ,x_n}\\{Y=y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### [Expected Value (Mean)](../probability-theory/expected-value.md)：$`E\left[X\right],~E\left[Y\right]`$

# Conditional Variance
- ### $`Var\left( X|Y \right)=E\left[ \left( X-E\left[X|Y\right] \right)^2|Y \right]=E\left[ X^2|Y\right]-E\left[X|Y\right]^2`$
- ### Law of Total Variance：$`Var\left( X \right)=E\left[ Var\left(X|Y \right) \right]+Var\left( E\left[ X|Y \right] \right)`$

# Correlation
- ### Sum of Products of Deviations from the Mean：$`D_{xy}=\sum\limits_{i=1}^{n}\left(x_i-μ_x\right)\left(y_i-μ_y\right)=\sum\limits_{i=1}^{n}{x_iy_i}-nμ_xμ_y`$
- ### Co[variance](../descriptive-statistics.md#variance)
    - ### $`Cov\left(x,~y\right)=σ_{xy}=\frac{D_{xy}}{n}=\frac{\sum\limits_{i=1}^{n}\left(x_i-μ_x\right)\left(y_i-μ_y\right)}{n}`$
    - ### $`Cov\left(X,~Y\right)=E\left[\left(X-μ_X\right)\left(Y-μ_Y\right)\right]=E\left[\left(X-E\left[X\right]\right)\left(Y-E\left[Y\right]\right)\right]=E\left[XY\right]-E\left[X\right]E\left[Y\right]`$
    - ### $`\text{If }x\text{ and }y\text{ are }`$[Independent](../../probability-theory/conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events\right), $`\text{then }Cov\left(x,~y\right)=0`$
- ### Pearson Correlation Coefficient
    |Negative Correlation|Zero Correlation|Positive Correlation|
    |:---:|:---:|:---:|
    |$-1\le r<0$|$r=0$|$0<r\le 1$|
    - ### $`r=\frac{σ_{xy}}{σ_xσ_y}=\frac{D_{xy}}{nσ_xσ_y}=\frac{\sum\limits_{i=1}^{n}\left(x_i-μ_x\right)\left(y_i-μ_y\right)}{\sqrt{\sum\limits_{i=1}^{n}\left(x_i-μ_x\right)^2}\sqrt{\sum\limits_{i=1}^{n}\left(y_i-μ_y\right)^2}}=\frac{\sum\limits_{i=1}^{n}{x_iy_i}-nμ_xμ_y}{\sqrt{\sum\limits_{i=1}^{n}{x_i}^2-n{μ_x}^2}\sqrt{\sum\limits_{i=1}^{n}{y_i}^2-n{μ_y}^2}}`$
- ### Partial Correlation Coefficient：$`r_{xy,~z}=\frac{r_{xy}-\left(r_{xz}\right)\left(r_{yz}\right)}{\sqrt{1-\left(r_{xz}\right)^2}\times\sqrt{1-\left(r_{yz}\right)^2}}`$

# Regression Analysis
- ### [Linear Regression](linear-regression.md)
    - ### Polynomial Regression
- ### Nonlinear Regression
    - ### Logistic Regression 

