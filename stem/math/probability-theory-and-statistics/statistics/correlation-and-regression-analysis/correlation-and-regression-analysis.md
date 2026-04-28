- ### Data：$`\begin{cases}{x_1,x_2,\cdots ,x_n}\\{y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### Number of Data：$`n`$
- ### Random Variable：$`\begin{cases}{X=x_1,x_2,\cdots ,x_n}\\{Y=y_1,y_2,\cdots ,y_n}\end{cases}`$
    - #### Expected Value(Mean)：$`E(X,~Y)`$
---
# Correlation
- ### Covariance：$`Cov(x,~y)=σ_{xy}=\frac{D_{xy}}{n}=\frac{\sum\limits_{i=1}^{n}(x_i-μ_x)(y_i-μ_y)}{n}`$
    - #### $`Cov(X,~Y)=E((X-μ_X)(Y-μ_Y))=E((X-E(X))(Y-E(Y)))=E(XY)-E(X)E(Y)`$
    - #### Sum of Products of Deviations from the Mean：$`D_{xy}=\sum\limits_{i=1}^{n}(x_i-μ_x)(y_i-μ_y)=\sum\limits_{i=1}^{n}{x_iy_i}-nμ_xμ_y`$
    - ### $x,y$ are independent：$`Cov(x,~y)=σ_{xy}=0`$
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

