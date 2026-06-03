# Distribution Function
- ### <span id="probability-function">Probability Function：$`f_X\left(x\right)`$</span>
    |Random Variable|Probability Function|
    |:---:|:---:|
    |**$X$ is Continuous**|**Probability Density Function (PDF)**<br>$`f\left(x\right)=\frac{d}{dx}F\left(x\right)`$|
    |**$X$ is Discrete**|**Probability Mass Function (PMF)**<br>$`f\left(x\right)=P\left(X=x\right)`$|
- ### <span id="cumulative-distribution-function-cdf">Cumulative Distribution Function (CDF)</span>
    - ### $`F\left(x\right)=P\left(X\le x\right)=\begin{cases}{\int_{-\infty}^{x}{f\left(t\right)\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{f\left(t\right)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### <span id="survival-function-reliability-function"> Survival Function (Reliability Function) </span>
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
- ### Probability of an Absolute Value
    - #### $`P\left( \left| X \le a \right| \right)=P\left( -a \le X \le a \right)`$
    - #### $`P\left( \left| X \ge a \right| \right)=P\left( X \ge a \right)+P\left( X \le -a \right)`$
    - #### $`P\left( \left| X-b \right|\le a \right)=P\left( -a+b \le X \le a+b \right)`$
    - #### $`P\left( \left| X-b \right|\ge a \right)=P\left( X \ge a+b \right)+P\left( X \le -a+b \right)`$

# Transformations of [Random Variables](../probability-theory.md#random-variable)
- ### Random Variable $`X`$
    - #### [PDF](#probability-function)：$`f_X\left(x\right)`$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_X\left(x\right)=P\left(X\le x\right)`$
- ### $`Y=g\left(X\right) ,~ g\text{ is one-to-one}`$
    - ### $`X=h\left(Y\right)=g^{-1}\left(Y\right)`$
    - ### $X\text{ is Continuous}$
        - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right) = f_X\left(h\left(y\right)\right)\cdot \left|\frac{d}{dy}h\left(y\right)\right|`$
        - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=P\left(Y\le y\right)=P\left(g\left(X\right)\le y\right) = \begin{cases} {P\left(X \le h\left(y\right)\right)=F_X\left(h\left(y\right)\right)} & \text{if } g\left(X\right) \text{ increasing} \\ {P\left(X \ge h\left(y\right)\right)=1-F_X\left(h\left(y\right)\right)} & \text{if } g\left(X\right) \text{ decreasing} \end{cases}`$
    - ### $X\text{ is Discrete}$
        - #### [PMF](#probability-function)：$`f_Y\left(y\right)=P\left(Y=y\right)=P\left(g\left(X\right)=y\right)=P\left( X=h\left(y\right) \right)=f_X\left( h\left(y\right) \right)`$
        - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=P\left(Y\le y\right)=P\left(g\left(X\right)\le y\right) = \begin{cases} {P\left(X \le h\left(y\right)\right)=F_X\left(h\left(y\right)\right)} & \text{if } g\left(X\right) \text{ increasing} \\ {P\left(X \ge h\left(y\right)\right)=1-P\left(X < h\left(y\right)\right)} & \text{if } g\left(X\right) \text{ decreasing} \end{cases}`$
- ### $`Y=g\left(X\right) ,~ g\text{ is many-to-one}`$
    - ### [Probability Function](#probability-function)
        - ### $`H=\left\{ x \mid g\left(x\right)= y \right\}`$
        - ### $X\text{ is Continuous}$
            - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right) = \sum\limits_{x\in H}{\left( f_X\left(x\right)\cdot \left|\frac{dx}{dy}\right| \right)}`$
        - ### $X\text{ is Discrete}$
            - #### [PMF](#probability-function)：$`f_Y\left(y\right)=P\left(Y=y\right)=P\left(g\left(X\right)=y\right) = P\left( X \in H \right) = \sum\limits_{x\in H}{f_X\left( x \right)}`$
    - ### [CDF](#joint-cdf)
        - ### $`F_Y\left(y\right) = P\left(Y\le y\right) = P\left( g\left( X \right)\le y \right) = P\left( X \in D \right)`$
        - ### $`D=\left\{ x \mid g\left(x\right)\le y \right\}`$
- ### eg：$`Y = g\left(X\right) = \left(X-3\right)^2`$
    - ### $`f_X\left(x\right)=\begin{cases} {\frac{1}{4}} & {\text{for }x \in \left[0,~4\right]} \\ 0&\text{otherwise} \end{cases},~X\text{ is Continuous}`$
    - ### $x \in \left[0,~4\right] \to y \in \left[0,~1\right) \cup \left[1,~9\right]$
    - ### $`\text{for }y \in \left[0,~1\right) ,~ g\text{ is many-to-one}`$
        - $`X = \pm\sqrt{Y}+3`$
        - $`f_Y\left(y\right) = \sum{\left( f_X\left(x\right)\cdot \left|\frac{dx}{dy}\right| \right)} = f_X\left(\sqrt{Y}+3\right)\cdot\left|\frac{d}{dy}\left(\sqrt{Y}+3\right)\right| + f_X\left(-\sqrt{Y}+3\right)\cdot\left|\frac{d}{dy}\left(-\sqrt{Y}+3\right)\right| = \frac{1}{4}\cdot\frac{1}{2\sqrt{y}}+\frac{1}{4}\cdot\frac{1}{2\sqrt{y}} = \frac{1}{4\sqrt{y}}`$
        - $`F_Y\left(y\right) = P\left(-\sqrt{y}+3 < X < \sqrt{y}+3\right) = \int_{-\sqrt{y}+3}^{\sqrt{y}+3}{\frac{1}{4}\,dx} = \frac{\sqrt{y}}{2}`$
    - ### $`\text{for }y \in \left[1,~9\right] ,~ g\text{ is one-to-one}`$
        - $`X = h\left(Y\right) = -\sqrt{Y}+3`$
        - $`f_Y\left(y\right) = f_X\left(h\left(y\right)\right)\cdot \left|\frac{d}{dy}h\left(y\right)\right| = \frac{1}{4}\cdot\frac{1}{2\sqrt{y}} = \frac{1}{8\sqrt{y}}`$
        - $`F_Y\left(y\right) = P\left(-\sqrt{y}+3 < X < 4\right) = \int_{-\sqrt{y}+3}^{4}{\frac{1}{4}\,dx} = \frac{\sqrt{y}+1}{4}`$
    - ### $`f_Y\left(y\right) = \begin{cases} {\frac{1}{4\sqrt{y}}} & {\text{for }y \in \left[0,~1\right)} \\  {\frac{1}{8\sqrt{y}}} & {\text{for }y \in \left[1,~9\right]} \\ 0&\text{otherwise} \end{cases}`$
    - ### $`F_Y\left(y\right) = \begin{cases} 0&{\text{for }y\le 0} \\ {\frac{\sqrt{y}}{2}} & {\text{for }y \in \left[0,~1\right)} \\  {\frac{\sqrt{y}+1}{4}} & {\text{for }y \in \left[1,~9\right]} \\ 1&{\text{for }y> 9} \end{cases}`$

# Probability Integral Transform
- ### Random Variable $`X`$
    - #### [PDF](#probability-function)：$`f_X\left(x\right)`$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_X\left(x\right)=P\left(X\le x\right)`$
- ### $`Y=F_X\left(X\right),~X\text{ is Continuous}`$
    - #### [PDF](#probability-function)：$`f_Y\left(y\right)=\frac{d}{dy}F_Y\left(y\right)=1`$
    - #### [CDF](#cumulative-distribution-function-cdf)：$`F_Y\left(y\right)=F_X\left(F_X^{-1}\left(y\right)\right)=y`$
    - #### [Continuous Uniform Distribution](continuous-probability-distribution/continuous-probability-distribution.md#continuous-uniform-distribution)：$`Y\sim U_c\left(0,1\right)`$
