- ### Data：$`\begin{cases}{x_1,x_2,\cdots ,x_n}\\{y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### Number of Data：$`n`$
    - ### Arithmetic Mean：$`μ_x,~μ_y`$
- ### Random Variable：$`\begin{cases}{X=x_1,x_2,\cdots ,x_n}\\{Y=y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### [Expected Value (Mean)](../probability-theory/expected-value.md)：$`E\left[X\right],~E\left[Y\right]`$

# Correlation
- ### Co[variance](../descriptive-statistics.md#variance)：$`Cov(x,~y)=σ_{xy}=\frac{D_{xy}}{n}=\frac{\sum\limits_{i=1}^{n}(x_i-μ_x)(y_i-μ_y)}{n}`$
    - #### $`Cov(X,~Y)=E\left[\left(X-μ_X\right)\left(Y-μ_Y\right)\right]=E\left[\left(X-E\left[X\right]\right)\left(Y-E\left[Y\right]\right)\right]=E\left[XY\right]-E\left[X\right]E\left[Y\right]`$
    - #### Sum of Products of Deviations from the Mean：$`D_{xy}=\sum\limits_{i=1}^{n}(x_i-μ_x)(y_i-μ_y)=\sum\limits_{i=1}^{n}{x_iy_i}-nμ_xμ_y`$
    - ### $`\text{If }x\text{ and }y\text{ are }`$[Independent](../../probability-theory/conditional-probability/conditional-probability.md#independent-events-mutually-exclusive-events), $`\text{then }Cov(x,~y)=σ_{xy}=0`$
- ### Pearson Correlation Coefficient：$`r=\frac{σ_{xy}}{σ_xσ_y}=\frac{D_{xy}}{nσ_xσ_y}=\frac{\sum\limits_{i=1}^{n}(x_i-μ_x)(y_i-μ_y)}{\sqrt{\sum\limits_{i=1}^{n}(x_i-μ_x)^2}\sqrt{\sum\limits_{i=1}^{n}(y_i-μ_y)^2}}=\frac{\sum\limits_{i=1}^{n}{x_iy_i}-nμ_xμ_y}{\sqrt{\sum\limits_{i=1}^{n}{x_i}^2-n{μ_x}^2}\sqrt{\sum\limits_{i=1}^{n}{y_i}^2-n{μ_y}^2}}`$
    |Positive Correlation|Zero Correlation|Negative Correlation|
    |:---:|:---:|:---:|
    |$1\geq r>0$|$r=0$|$0>r\geq-1$|
- ### Partial Correlation Coefficient：$`r_{xy,~z}=\frac{r_{xy}-(r_{xz})(r_{yz})}{\sqrt{1-(r_{xz})^2}\times\sqrt{1-(r_{yz})^2}}`$

# Regression Analysis
- ### [Linear Regression](linear-regression.md)
    - ### Polynomial Regression
- ### Nonlinear Regression
    - ### Logistic Regression 

