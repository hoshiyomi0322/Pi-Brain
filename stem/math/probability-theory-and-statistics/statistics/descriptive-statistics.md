- ### Data：$`x_1,x_2,\cdots,x_n`$
    - #### Number of Data：$`n`$
- ### [Random Variable](../probability-theory/probability-theory.md#random-variable)：$`X=x_1,x_2,\cdots ,x_n`$
    - #### [Expected Value (Mean)](../probability-theory/expected-value.md)：$`E\left[X\right]`$
---
- ### Extremum
    - ### Maximum
    - ### Minimum
- ### Outlier

# Measure of Central Tendency
- ### Mean
    - ### Arithmetic Mean (AM)
        - ### $`μ=\bar{x}=\frac{\sum\limits_{i=1}^{n}{x_i}}{n}=\frac{x_1+x_2+\cdots +x_n}{n}`$
        - ### $μ=E\left[X\right]$
    - ### Geometric Mean (GM)
        - ### $`G=\left(\prod_{i=1}^{n}{x_i}\right)^{\frac{1}{n}}=\sqrt[n]{x_1x_2\cdots x_n}`$
    - ### Harmonic Mean
        - ### $`H=\frac{n}{\sum\limits_{i=1}^{n}{\left(\frac{1}{x_i}\right)}}=\frac{n}{\frac{1}{x_1}+\frac{1}{x_2}+\cdots+\frac{1}{x_n}}`$
    - ### Weighted Arithmetic Mean
    - ### Trimmed Mean
    - ### AM–GM Inequality
        - ### $`\frac{x_1+x_2+\cdots+x_n}{n}\geq \sqrt[n]{x_1x_2\cdots x_n}`$
        - ### $`\text{If }x_1=x_2=\cdots =x_n,~\text{then }\frac{x_1+x_2+\cdots +x_n}{n}=\sqrt[n]{x_1x_2\cdots x_n}`$
- ### Median
    - ### $`Q_2=\begin{cases}{x_{\left(\frac{n+1}{2}\right)}}&\text{if }n\text{ is odd number}\\{\left(x_{\frac{n}{2}}+x_{\left(\frac{n}{2}+1\right)}\right)\times \frac{1}{2}}&\text{if }n\text{ is even number}\end{cases}`$
- ### Mode
    - ### [Mode of Continuous Random Variable](../probability-theory/probability-theory.md#mode-of-continuous--maximum-of-pdf)

# Measure of Dispersion (Measure of Variability)
- ### Range
    - ### $`R=x_{max}-x_{min}`$
- ### Interquartile Range
    - ### $`IQR=Q_{3}-Q_{1}=P_{75}-P_{25}`$
- ### Deviation from the Mean
    - ### $`D_i=x_i-μ`$
- ### Mean Absolute Deviation (MAD)
    - ### $`M_D=\frac{\sum\limits_{i=1}^{n}|D_i|}{n}=\frac{\sum\limits_{i=1}^{n}|x_i-μ|}{n}`$
- ### [Variance](variance.md#variance)
- ### Standard Deviation (SD)
    - ### $`\sqrt{Var\left(x\right)}=σ=\sqrt{σ^2}=\sqrt{\frac{\sum\limits_{i=1}^{n}\left(x_i-μ\right)^2}{n}}=\sqrt{\frac{\sum\limits_{i=1}^{n}{x_i}^2}{n}-μ^2}`$
    - ### $`\sqrt{Var\left(X\right)}=\sqrt{E\left[\left(X-μ\right)^2\right]}=\sqrt{E\left[\left(X-E\left[X\right]\right)^2\right]}=\sqrt{E\left[X^2\right]-E\left[X\right]^2}`$
- ### Coefficient of Variation (CV)：$`c_v=\frac{σ}{μ}`$

# Measure of Position
- ### Quartile
    - #### The first quartile：$`Q_{1}=P_{25}`$
    - #### The second quartile：$`Q_{2}=P_{50}=Median`$
    - #### The third quartile：$`Q_{3}=P_{75}`$
- ### Percentile
    - #### The k-th percentile ($P_{k}$)
    - #### Percentile Rank ($PR$)
- ### Standard Score (Z-score)：$`z=\frac{x-μ}{σ}`$
    - #### Standardization：$`\text{Raw Score}\left(x\right)\overset{Standardize}{\longrightarrow}\text{Standard Score}\left(z\right)`$
    - #### Arithmetic Mean of $z$： $μ_z=0$
    - #### Standard Deviation of $z$： $σ_z=1$

# Rate of Return (RoR)
- ### Rate of Return (RoR)：$`r_n=\frac{x_n-x_{n-1}}{x_{n-1}}`$
- ### Geometric Average Rate of Return：$`\overline{r}=\sqrt[n]{\left(1+r_1\right)\left(1+r_2\right)\cdots \left(1+r_n\right)}-1`$

# Chart
- ### Bar Chart
- ### Line Chart
- ### Scatter Plot
- ### Box Plot
