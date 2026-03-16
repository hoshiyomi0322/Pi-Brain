# Probability Function：$f(x)$
|Continuous|Discrete|
|:---:|:---:|
|Probability Density Function(PDF)|Probability Mass Function(PMF)|
|$f_d(x)=\frac{d}{dx}F(x)$|$f_m(x)=P(X=x)$|
    
# Cumulative Distribution Function(CDF)：$F(x)$
- $F(x)=P(X\leq x)$
    |Continuous|Discrete|
    |:---:|:---:|
    |$F(x)=\int_{-\infty}^{x}{f_d(t)\,dt}$|$F(x)=\sum\limits_{t\leq x}{f_m(t)}$
- ### Properties
    - #### Boundedness
        - $\lim\limits _{x\to-\infty}{F(x)}=0$
        - $\lim\limits _{x\to+\infty}{F(x)}=1$
    - #### Monotonicity：$\text{If }x_1<x_2,~\text{then }F(x_1)\leq F(x_2)$

# Probability
|Continuous|Discrete|
|:---:|:---:|
|$P(X=x)=0$|$P(X=x)=f_m(x)=P(X\leq x)-P(X<x)=F(x)-F(x^-)$|
|$P(X<x)=F(x^-)=F(x)$|$P(X<x)=F(x^-)=F(x-1)$|
- ### Interval Probability
    - $P(X\leq x)=F(x)$
    - $P(X<x)=F(x^-)=\lim\limits_{t\to x^-}{F(t)}$
    - $P(X\geq x)=F(x^+)=\lim\limits_{t\to x^+}{F(t)}=F(x)$
    - $P(X>x)=1-P(X\leq x)=1-F(x)$
    - $P(a<X\leq b)=P(X\leq b)-P(X\leq a)=F(b)-F(a)$
    - $P(a\leq X\leq b)=P(X\leq b)-P(X<a)=F(b)-F(a^-)$
