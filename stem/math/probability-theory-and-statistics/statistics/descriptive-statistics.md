- ### Data：$x_1,x_2,\cdots,x_n$
    - #### Number of Data：$n$
- ### Random Variable：$X=x_1,x_2,\cdots ,x_n$
    - #### Expected Value(Mean)：$E(X)$
---
- ### Extremum
    - ### Maximum
    - ### Minimum
- ### Outlier

# Measure of Central Tendency
- ### Mean
    - ### Arithmetic Mean(AM)：$μ=\frac{\sum_{i=1}^{n}{x_i}}{n}=\frac{x_1+x_2+~\cdots~+x_n}{n}$
        - #### $μ=E(X)$
        - #### Weighted Arithmetic Mean
    - ### Geometric Mean(GM)：$G=(\prod_{i=1}^{n}{x_i})^{\frac{1}{n}}=\sqrt[n]{x_1x_2\cdots x_n}$
    - ### Harmonic Mean：$H=\frac{n}{\sum_{i=1}^{n}{(\frac{1}{x_i})}}=\frac{n}{\frac{1}{x_1}+\frac{1}{x_2}+\cdots+\frac{1}{x_n}}$
    - ### Trimmed Mean
    - ### AM–GM Inequality：$\frac{x_1+x_2+\cdots+x_n}{n}\geq \sqrt[n]{x_1x_2\cdots x_n}$
        - $\text{If }x_1=x_2=\cdots =x_n,~\text{then }\frac{x_1+x_2+\cdots +x_n}{n}=\sqrt[n]{x_1x_2\cdots x_n}$
- ### Median
    |Number of Data ($n$)|Median|
    |:---:|:---:|
    |odd|$x_{((n+1)/2)}$|
    |even|$\frac{x_{(n/2)}+x_{((n/2)+1)}}{2}$|
- ### Mode

# Measure of Dispersion(Measure of Variability)
- ### Range：$R=x_{max}-x_{min}$
- ### Interquartile Range：$IQR=Q_{3}-Q_{1}=P_{75}-P_{25}$
- ### Mean Absolute Deviation (MAD)：$M_D=\frac{\sum_{i=1}^{n}|D_i|}{n}=\frac{\sum_{i=1}^{n}|x_i-μ|}{n}$
    - #### Deviation from the Mean：$D_i=x_i-μ$
- ### Variance：$Var(x)=σ^2=\frac{\sum_{i=1}^{n}(D_i)^2}{n}=\frac{\sum_{i=1}^{n}(x_i-μ)^2}{n}=\frac{\sum_{i=1}^{n}{x_i}^2-nμ^2}{n}=\frac{\sum_{i=1}^{n}{x_i}^2}{n}-μ^2$
    - #### $Var(X)=E((X-μ)^2)=E((X-E(X))^2)=E(X^2)-E(X)^2$
    - #### Properties
        - $Var(c)=0$
        - $Var(cX)=c^2Var(X)$
        - $Var(X+c)=Var(X)$
        - $Var(aX+bY)=a^2Var(X)+b^2Var(Y)+2ab\cdot Cov(X,Y)$
- ### Standard Deviation(SD)：$\sqrt{Var(x)}=σ=\sqrt{σ^2}=\sqrt{\frac{\sum_{i=1}^{n}(x_i-μ)^2}{n}}=\sqrt{\frac{\sum_{i=1}^{n}{x_i}^2}{n}-μ^2}$
    - #### $\sqrt{Var(X)}=\sqrt{E((X-μ)^2)}=\sqrt{E((X-E(X))^2)}=\sqrt{E(X^2)-E(X)^2}$
- ### Coefficient of Variation (CV)：$c_v=\frac{σ}{μ}$
- ### Chebyshev's Inequality


# Measure of Position
- ### Quartile
    - #### The first quartile：$Q_{1}=P_{25}$
    - #### The second quartile：$Q_{2}=P_{50}=Median$
    - #### The third quartile：$Q_{3}=P_{75}$
- ### Percentile
    - #### The k-th percentile ($P_{k}$)
    - #### Percentile Rank($PR$)
- ### Standard Score (Z-score)：$z=\frac{x-μ}{σ}$
    - #### Standardization：$\text{Raw Score}(x)\xrightarrow{Standardization}\text{Standard Score}(z)$
    - #### Arithmetic Mean of $z$：$μ_z=0$
    - #### Standard Deviation of $z$：$σ_z=1$

# Rate of Return(RoR)
- ### Rate of Return(RoR)：$r_n=\frac{x_n-x_{n-1}}{x_{n-1}}$
- ### Geometric Average Rate of Return：$\overline{r}=\sqrt[n]{(1+r_1)(1+r_2)\cdots (1+r_n)}-1$

# Chart
- ### Bar Chart
- ### Line Chart
- ### Scatter Plot
- ### Box Plot
