# Distribution Function
- ### <span id="probability-function">Probability Function：$`f_X\left(x\right)`$</span>
    |Random Variable|Probability Function|
    |:---:|:---:|
    |**$X$ is Continuous**|**Probability Density Function (PDF)**<br>$`f\left(x\right)=\frac{d}{dx}F\left(x\right)`$|
    |**$X$ is Discrete**|**Probability Mass Function (PMF)**<br>$`f\left(x\right)=P\left(X=x\right)`$|
- ### <span id="cumulative-distribution-function-cdf">Cumulative Distribution Function (CDF)</spn>
    - ### $`F\left(x\right)=P\left(X\le x\right)=\begin{cases}{\int_{-\infty}^{x}{f\left(t\right)\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{f\left(t\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Survival Function (Reliability Function)
    - ### $S\left(x\right)=P\left(X>x\right)=1-P\left(X\le x\right)=1-F\left(x\right)$
- ### Properties
    - #### $`f\left(x\right)\ge 0`$
    - #### $`F\left(-\infty\right)=0`$
    - #### $`F\left(\infty\right)=\begin{cases}{\int^\infty_{-\infty}{f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{f\left(x\right)}}&\text{if }X\text{ is Discrete}\end{cases}=1`$
    - #### $`\text{If }x_1<x_2,~\text{then }F\left(x_1\right)\le F\left(x_2\right)`$

# Probability of a [Random Variable](../probability-theory.md#random-variable)
- ### $`P\left(X=x\right)`$：the Probability of ($`\text{Random Variable }X=x`$)
    - $`P\left(X=x\right)=\begin{cases}{0}&\text{if }X\text{ is Continuous}\\{f\left(x\right)=P\left(X\le x\right)-P\left(X<x\right)=F\left(x\right)-F\left(x^-\right)}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Interval Probability
    - #### $`P\left(X\le x\right)`$：the Probability of ($`\text{Random Variable }X\le x`$)
        - #### $`P\left(X\le x\right)=F\left(x\right)`$
    - #### $`P\left(X>x\right)=S\left(x\right)=1-P\left(X\le x\right)=1-F\left(x\right) = \begin{cases}{\int_{x}^{\infty}{f\left(t\right)\,dt}} & \text{if }X\text{ is Continuous} \\ {\sum\limits_{x< t}{f\left(t\right)}} & \text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`P\left(X<x\right)=F\left(x^-\right)=\lim\limits_{t\to x^-}{F\left(t\right)}=\begin{cases}{F\left(x\right)}&\text{if }X\text{ is Continuous}\\{F\left(x-1\right)}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`P\left(X\ge x\right)=1-F\left(x^-\right) = \begin{cases}{\int_{x}^{\infty}{f\left(t\right)\,dt}} & \text{if }X\text{ is Continuous}\\{\sum\limits_{x\le t}{f\left(t\right)}} & \text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`P\left(a<X\le b\right)=P\left(X\le b\right)-P\left(X\le a\right)=F\left(b\right)-F\left(a\right) = \begin{cases}{\int_{a}^{b}{f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{a< x\le b}{f\left(x\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`P\left(a\le X\le b\right)=P\left(X\le b\right)-P\left(X<a\right)=F\left(b\right)-F\left(a^-\right) = \begin{cases}{\int_{a}^{b}{f\left(x\right)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{a\le x\le b}{f\left(x\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### $`\text{if }X\text{ is Continuous},~\text{then }P\left(a\le X\le b\right)=P\left(a< X\le b\right)=P\left(a\le X< b\right)=P\left(a< X< b\right)=\int_{a}^{b}{f\left(x\right)\,dx}`$

# Transformations of [Random Variables](../probability-theory.md#random-variable)
- ### $X$ is Continuous
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_X\left(x\right)=P\left(X\le x\right)`$
    - #### [PDF](#probability-function)：$`f_X\left(x\right)`$
- ### $Y=g\left(X\right)$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=P\left(Y\le y\right)=P\left(g\left(X\right)\le y\right) = \begin{cases} {P\left(X \le g^{-1}\left(y\right)\right)=F_X\left(g^{-1}\left(y\right)\right)} & \text{if } g\left(X\right) \text{ increasing} \\ {P\left(X \ge g^{-1}\left(y\right)\right)=1-F_X\left(g^{-1}\left(y\right)\right)} & \text{if } g\left(X\right) \text{ decreasing} \end{cases}`$
    - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right) = f_X\left(g^{-1}\left(y\right)\right)\cdot \left|\frac{d}{dy}g^{-1}\left(y\right)\right|`$
- ### Probability Integral Transform：$`Y=F_X\left(X\right)`$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=F_X\left(F_X^{-1}\left(y\right)\right)=y`$
    - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right)=1`$
    - #### [Continuous Uniform Distribution](continuous-probability-distribution/continuous-probability-distribution.md#continuous-uniform-distribution)：$`Y\sim U_c\left(0,1\right)`$

