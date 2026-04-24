# Distribution Function
- ### Probability Function：$`f(x)`$
    |Continuous|Discrete|
    |:---:|:---:|
    |**Probability Density Function (PDF)**<br>$`f(x)=\frac{d}{dx}F(x)`$|**Probability Mass Function (PMF)**<br>$`f(x)=P(X=x)`$|
- ### Cumulative Distribution Function (CDF)
    - ### $`F(x)=P(X\le x)=\begin{cases}{\int_{-\infty}^{x}{f(t)\,dt}}&\text{if }X\text{ is Continuous}\\{\sum\limits_{t\le x}{f(t)}}&\text{if }X\text{ is Discrete}\end{cases}`$
- ### Survival Function (Reliability Function)
    - ### $S(x)=P(X>x)=1-P(X\le x)=1-F(x)$
- ### Properties
    - #### $`f(x)\ge 0`$
    - #### $`\lim\limits_{x\to-\infty}{F(x)}=0,~\lim\limits_{x\to\infty}{F(x)}=1`$
        - #### $`\lim\limits_{x\to\infty}{F(x)}=\begin{cases}{\int^\infty_{-\infty}{f(x)\,dx}}&\text{if }X\text{ is Continuous}\\{\sum\limits_x{f(x)}}&\text{if }X\text{ is Discrete}\end{cases}=1`$
    - #### $`\text{If }x_1<x_2,~\text{then }F(x_1)\le F(x_2)`$

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
