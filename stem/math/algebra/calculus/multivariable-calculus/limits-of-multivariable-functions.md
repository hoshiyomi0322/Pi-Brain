- ### Limits of Multivariable Functions：$`\lim\limits_{(x_1,~\cdots,~x_n)\to (a_1,~\cdots,~a_n)}{f(x_1,~\cdots,~x_n)}`$

# Path Limit
- ### Limits of Multivariable Functions
    |Path Limit|Limits of Multivariable Functions|
    |:---:|:---:|
    |All Path Limits = $L$|$`\lim{f(x_1,~\cdots,~x_n)}=L`$|
    |Path Limits are Different|$`\lim{f(x_1,~\cdots,~x_n)}\text{ does not exist}`$|

- ### Path Limit：the limit along the path
    - ### Path Limit：$`\lim{f(P_i(x_1,~\cdots,~x_n))}`$
    - ### Path：$`P_1(x_1,~\cdots,~x_n),~\cdots,~P_m(x_1,~\cdots,~x_n)`$
- ### Parametric Equations
    - ### Path Limit：$`\lim\limits_{t_i\to b_i}{f(x_1(t_i),~\cdots,~x_n(t_i))}`$
    - ### Path：$`t_1,~\cdots,~t_n`$
        - #### $\lim\limits_{t_i\to b_i}{x_i(t_i)}=a_i$
- ### Polar Coordinates
    - ### Path Limit：$`\lim\limits_{(r,~θ)\to (b_1,~b_2)}{f(r,~θ)}`$
- ### eg：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y}{x^4+y^2}}`$
    - ### Path 1：$`y=0`$
        - Path Limits：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y}{x^4+y^2}}=\lim\limits_{(x,~y)\to (0,~0)}{\frac{0}{x^4}}=0`$
    - ### Path 2：$`y=x^2`$
        - Path Limits：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y}{x^4+y^2}}=\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{2x^4}}=\frac{1}{2}`$
    - ### Path Limits are Different：$0\ne\frac{1}{2}$
        - $`\text{then }\lim{f(x_1,~\cdots,~x_n)}\text{ does not exist}`$
- ### eg (polar coordinates)：$`\lim\limits_{(x,~y)\to (0,~0)}{(x^2+y^2)\cdot \ln{(x^2+y^2)}}`$
    - $`\lim\limits_{(x,~y)\to (0,~0)}{((x^2+y^2)\cdot \ln{(x^2+y^2))}}=\lim\limits_{r\to 0}{(r^2\cdot \ln{r^2})}`$

# [Squeeze Theorem (Sandwich Theorem)](../limit/limit.md#squeeze-theorem-sandwich-theorem) of Multivariable Functions
- ### $`g(x_1,~\cdots,~x_n)\leq f(x_1,~\cdots,~x_n)\leq h(x_1,~\cdots,~x_n)`$
    - ### $`\text{If }\lim\limits_{x\to a}{g}=\lim\limits_{x\to a}{h}=L,~\text{then }\lim\limits_{x\to a}{f}=L`$
- ### eg：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y^2}{x^2+y^2}}`$
    - $`x^2+y^2\ge y^2 \Rightarrow 0\le |\frac{x^2y^2}{x^2+y^2}| \le \frac{x^2y^2}{y^2} \Rightarrow 0\le \frac{x^2y^2}{x^2+y^2} \le x^2`$
    - $`\lim\limits_{(x,~y)\to (0,~0)}{0}=\lim\limits_{(x,~y)\to (0,~0)}{x^2}=0 \Rightarrow \lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y^2}{x^2+y^2}}=0`$

# [ε-δ definition](../limit/limit.md#ε-δ-definition) of Multivariable Functions
- ### $`\lim\limits_{(x_1,~\cdots,~x_n)\to (a_1,~\cdots,~a_n)}{f(x_1,~\cdots,~x_n)}=L \iff \text{ε-δ definition}`$
- ### ε-δ definition ($`\forallε>0,~\existsδ>0`$)
    - #### $`0<\sqrt{(x_1-a_1)^2+\cdots +(x_n-a_n)^2}<δ\Rightarrow|f(x_1,~\cdots,~x_n)-L|<ε`$
- ### eg：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{x^2+y^2}}=0`$
    1. $`\text{Let }\begin{cases} {x=r\cos{θ}}\\{y=r\sin{θ}} \end{cases}`$
    2. $`\forallε>0,~\existsδ>0,~\text{Such that }0<\sqrt{x^2+y^2}<δ\Rightarrow|\frac{x^4}{x^2+y^2}|<ε`$
    3. $`x^2\le x^2+y^2 \Rightarrow \frac{x^2}{x^2+y^2}\le 1 \Rightarrow |\frac{x^4}{x^2+y^2}|\le x^2<ε \Rightarrow x<\sqrt{ε}`$
    4. $`x^2\le x^2+y^2 \Rightarrow x\le \sqrt{x^2+y^2}<δ \Rightarrow x<δ`$
    5. $`δ=\sqrt{ε} \Rightarrow \lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{x^2+y^2}}=0`$
- ### eg：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{x^2+y^2}}=0`$
    1. $`\text{Let }\begin{cases} {x=r\cos{θ}}\\{y=r\sin{θ}} \end{cases}`$
    2. $`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{x^2+y^2}}=\lim\limits_{r\to 0}{(r^2\cos^4{θ})}=0`$
    3. $`\forallε>0,~\existsδ>0,~\text{Such that }0<r<δ\Rightarrow|r^2\cos^4{θ}|<ε`$
    4. $`\cos{θ}\le 1 \Rightarrow |r^2\cos^4{θ}|\le r^2<ε \Rightarrow r<\sqrt{ε}`$
    5. $`δ=\sqrt{ε} \Rightarrow \lim\limits_{(x,~y)\to (0,~0)}{\frac{x^4}{x^2+y^2}}=0`$
