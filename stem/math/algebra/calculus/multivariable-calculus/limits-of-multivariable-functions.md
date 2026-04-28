- ### Limits of Multivariable Functions：$`\lim\limits_{\left(x_1,~\cdots,~x_n\right)\to \left(a_1,~\cdots,~a_n\right)}{f\left(x_1,~\cdots,~x_n\right)}`$

# Path Limit
- ### Limits of Multivariable Functions
    |Path Limit|Limits of Multivariable Functions|
    |:---:|:---:|
    |All Path Limits = $L$|$`\lim{f\left(x_1,~\cdots,~x_n\right)}=L`$|
    |Path Limits are Different|$`\lim{f\left(x_1,~\cdots,~x_n\right)}\text{ does not exist}`$|

- ### Path Limit：the limit along the path
    - ### Path Limit：$`\lim{f\left(P_i\left(x_1,~\cdots,~x_n\right)\right)}`$
    - ### Path：$`P_1\left(x_1,~\cdots,~x_n\right),~\cdots,~P_m\left(x_1,~\cdots,~x_n\right)`$
- ### Parametric Equations
    - ### Path Limit：$`\lim\limits_{t_i\to b_i}{f\left(x_1\left(t_i\right),~\cdots,~x_n\left(t_i\right)\right)}`$
    - ### Path：$`t_1,~\cdots,~t_n`$
        - #### $\lim\limits_{t_i\to b_i}{x_i\left(t_i\right)}=a_i$
- ### Polar Coordinates
    - ### Path Limit：$`\lim\limits_{\left(r,~θ\right)\to \left(b_1,~b_2\right)}{f\left(r,~θ\right)}`$
- ### eg：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^2y}{x^4+y^2}}`$
    - ### Path 1：$`y=0`$
        - Path Limits：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^2y}{x^4+y^2}}=\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{0}{x^4}}=0`$
    - ### Path 2：$`y=x^2`$
        - Path Limits：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^2y}{x^4+y^2}}=\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{2x^4}}=\frac{1}{2}`$
    - ### Path Limits are Different：$0\ne\frac{1}{2}$
        - $`\text{then }\lim{f\left(x_1,~\cdots,~x_n\right)}\text{ does not exist}`$
- ### eg (polar coordinates\right)：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\left(x^2+y^2\right)\cdot \ln{\left(x^2+y^2\right)}}`$
    - $`\lim\limits_{(x,~y)\to (0,~0)}{(\left(x^2+y^2\right)\cdot \ln{\left(x^2+y^2\right))}}=\lim\limits_{r\to 0}{\left(r^2\cdot \ln{r^2}\right)}`$

# [Squeeze Theorem (Sandwich Theorem)](../limit/limit.md#squeeze-theorem-sandwich-theorem) of Multivariable Functions
- ### $`g\left(x_1,~\cdots,~x_n\right)\leq f\left(x_1,~\cdots,~x_n\right)\leq h\left(x_1,~\cdots,~x_n\right)`$
    - ### $`\text{If }\lim\limits_{x\to a}{g}=\lim\limits_{x\to a}{h}=L,~\text{then }\lim\limits_{x\to a}{f}=L`$
- ### eg：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^2y^2}{x^2+y^2}}`$
    - $`x^2+y^2\ge y^2 \Rightarrow 0\le |\frac{x^2y^2}{x^2+y^2}| \le \frac{x^2y^2}{y^2} \Rightarrow 0\le \frac{x^2y^2}{x^2+y^2} \le x^2`$
    - $`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{0}=\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{x^2}=0 \Rightarrow \lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^2y^2}{x^2+y^2}}=0`$

# [ε-δ definition](../limit/limit.md#ε-δ-definition) of Multivariable Functions
- ### $`\lim\limits_{\left(x_1,~\cdots,~x_n\right)\to \left(a_1,~\cdots,~a_n\right)}{f\left(x_1,~\cdots,~x_n\right)}=L \iff \text{ε-δ definition}`$
- ### ε-δ definition \left($`\forallε>0,~\existsδ>0`$\right)
    - #### $`0<\sqrt{\left(x_1-a_1\right)^2+\cdots +\left(x_n-a_n\right)^2}<δ\Rightarrow|f\left(x_1,~\cdots,~x_n\right)-L|<ε`$
- ### eg：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{x^2+y^2}}=0`$
    1. $`\text{Let }\begin{cases} {x=r\cos{θ}}\\{y=r\sin{θ}} \end{cases}`$
    2. $`\forallε>0,~\existsδ>0,~\text{Such that }0<\sqrt{x^2+y^2}<δ\Rightarrow|\frac{x^4}{x^2+y^2}|<ε`$
    3. $`x^2\le x^2+y^2 \Rightarrow \frac{x^2}{x^2+y^2}\le 1 \Rightarrow |\frac{x^4}{x^2+y^2}|\le x^2<ε \Rightarrow x<\sqrt{ε}`$
    4. $`x^2\le x^2+y^2 \Rightarrow x\le \sqrt{x^2+y^2}<δ \Rightarrow x<δ`$
    5. $`δ=\sqrt{ε} \Rightarrow \lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{x^2+y^2}}=0`$
- ### eg：$`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{x^2+y^2}}=0`$
    1. $`\text{Let }\begin{cases} {x=r\cos{θ}}\\{y=r\sin{θ}} \end{cases}`$
    2. $`\lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{x^2+y^2}}=\lim\limits_{r\to 0}{\left(r^2\cos^4{θ}\right)}=0`$
    3. $`\forallε>0,~\existsδ>0,~\text{Such that }0<r<δ\Rightarrow|r^2\cos^4{θ}|<ε`$
    4. $`\cos{θ}\le 1 \Rightarrow |r^2\cos^4{θ}|\le r^2<ε \Rightarrow r<\sqrt{ε}`$
    5. $`δ=\sqrt{ε} \Rightarrow \lim\limits_{\left(x,~y\right)\to \left(0,~0\right)}{\frac{x^4}{x^2+y^2}}=0`$
