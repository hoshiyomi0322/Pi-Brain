# Distribution Function
- ### Probability Function：$`f_X\left(x\right)`$
    |Random Variable|Probability Function|
    |:---:|:---:|
    |**$X$ is Continuous**|**Probability Density Function (PDF)**<br>$`f\left(x\right)=\frac{d}{dx}F\left(x\right)`$|
    |**$X$ is Discrete**|**Probability Mass Function (PMF)**<br>$`f\left(x\right)=P\left(X=x\right)`$|
- ### Cumulative Distribution Function (CDF)
    - ### $`F\left(x\right)=P\left(X\le x\right)=\begin{cases}{\int_{-\infty}^{x}{f\left(t\right)\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{f\left(t\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Survival Function (Reliability Function)
    - ### $S\left(x\right)=P\left(X>x\right)=1-P\left(X\le x\right)=1-F\left(x\right)$
- ### Properties
    - #### $`f\left(x\right)\ge 0`$
    - #### $`F\left(-\infty\right)=0`$
    - #### $`F\left(\infty\right)=\begin{cases}{\int^\infty_{-\infty}{f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{f\left(x\right)}}&\text{if }X\text{ is Discrete}\end{cases}=1`$
    - #### $`\text{If }x_1<x_2,~\text{then }F\left(x_1\right)\le F\left(x_2\right)`$

# Probability of a Random Variable
- ### $`P\left(X=x\right)`$：the Probability of ($`\text{Random Variable }X=x`$)
    - $`P\left(X=x\right)=\begin{cases}{0}&\text{if }X\text{ is Continuous}\\{f\left(x\right)=P\left(X\le x\right)-P\left(X<x\right)=F\left(x\right)-F\left(x^-\right)}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Interval Probability
    - #### $`P\left(X\le x\right)`$：the Probability of ($`\text{Random Variable }X\le x`$)
    - #### $P\left(X\le x\right)=F\left(x\right)$
    - #### $P\left(X>x\right)=S\left(x\right)=1-P\left(X\le x\right)=1-F\left(x\right)$
    - #### $`P\left(X<x\right)=F\left(x^-\right)=\lim\limits_{t\to x^-}{F\left(t\right)}=\begin{cases}{F\left(x\right)}&\text{if }X\text{ is Continuous}\\{F\left(x-1\right)}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`P\left(X\ge x\right)=F\left(x^+\right)=\lim\limits_{t\to x^+}{F\left(t\right)}=F\left(x\right)`$
    - #### $`P\left(a<X\le b\right)=P\left(X\le b\right)-P\left(X\le a\right)=F\left(b\right)-F\left(a\right)`$
    - #### $`P\left(a\le X\le b\right)=P\left(X\le b\right)-P\left(X<a\right)=F\left(b\right)-F\left(a^-\right)=\begin{cases}{\int_{a}^{b}{f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{a\le x\le b}{f\left(x\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$

# Transformations of Random Variables
- ### $X$ is Continuous
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_X\left(x\right)=P\left(X\le x\right)`$
    - #### [PDF](#probability-function)：$`f_X\left(x\right)`$
- ### $Y=h\left(X\right)$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=P\left(Y\le y\right)=P\left(h\left(X\right)\le y\right)=P\left(X\le h^{-1}\left(y\right)\right)=F_X\left(h^{-1}\left(y\right)\right)`$
    - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right)=\frac{d}{dy}F_X\left(h^{-1}\left(y\right)\right)=f_X\left(h^{-1}\left(y\right)\right)\cdot \frac{d}{dy}h^{-1}\left(y\right)`$
- ### Probability Integral Transform：$Y=F_X\left(X\right)$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=F_X\left(F_X^{-1}\left(y\right)\right)=y`$
    - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right)=1`$
    - #### [Continuous Uniform Distribution](./probability-distribution/continuous-probability-distribution.md#continuous-uniform-distribution)：$`Y\sim U_c\left(0,1\right)`$

