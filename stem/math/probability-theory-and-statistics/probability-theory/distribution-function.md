# Probability Function：$`f(x)`$
- ### Probability Function：$`f(x)`$
    - ### Probability Density Function (PDF)：$`f(x)=\frac{d}{dx}F(x),~\text{if }X\text{ is Continuous}`$
    - ### Probability Mass Function (PMF)：$`f(x)=P(X=x),~\text{if }X\text{ is Discrete}`$
|Random Variable|Continuous|Discrete|
|:---:|:---:|:---:|
|**Probability Function**|**Probability Density Function (PDF)**<br>$`f_d(x)=\frac{d}{dx}F(x)`$|**Probability Mass Function (PMF)**<br>$`f_m(x)=P(X=x)`$|
|**Properties**|$`f_d(x)\ge 0,~\int^\infty_{-\infty}{f_d(x)\,dx}=1`$|$`f_m(x)\ge 0,~\sum\limits_x{f_m(x)}=1`$|

# Cumulative Distribution Function (CDF)：$`F(x)`$
- ### Cumulative Distribution Function (CDF)：$`F(x)=P(X\le x)=\begin{cases}{\int_{-\infty}^{x}{f(t)\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{f(t)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Properties
    - #### Boundedness：$`\lim\limits_{x\to-\infty}{F(x)}=0,~\lim\limits_{x\to+\infty}{F(x)}=1`$
    - #### Monotonicity：$`\text{If }x_1<x_2,~\text{then }F(x_1)\le F(x_2)`$

# Survival Function (Reliability Function)：$`S(x)`$
- ### $S(x)=P(X>x)=1-P(X\le x)=1-F(x)$

# Probability of a Random Variable
- ### $`P(X=x)`$：the Probability of ($`\text{Random Variable }X=x`$)
    - $`P(X=x)=\begin{cases}{0}&\text{if }X\text{ is Continuous}\\{f(x)=P(X\le x)-P(X<x)=F(x)-F(x^-)}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Interval Probability
    - #### $`P(X\le x)`$：the Probability of ($`\text{Random Variable }X\le x`$)
    - #### $P(X\le x)=F(x)$
    - #### $P(X>x)=S(x)=1-P(X\le x)=1-F(x)$
    - #### $`P(X<x)=F(x^-)=\lim\limits_{t\to x^-}{F(t)}=\begin{cases}{F(x)}&\text{if }X\text{ is Continuous}\\{F(x-1)}&\text{if }X\text{ is Discrete}\end{cases}`$
    - #### $P(X\ge x)=F(x^+)=\lim\limits_{t\to x^+}{F(t)}=F(x)$
    - #### $P(a<X\le b)=P(X\le b)-P(X\le a)=F(b)-F(a)$
    - #### $P(a\le X\le b)=\int_{a}^{b}{f_d(t)\,dt}=P(X\le b)-P(X<a)=F(b)-F(a^-)$
