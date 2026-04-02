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

# Squeeze Theorem(Sandwich Theorem)
- ### $`g(x_1,~\cdots,~x_n)\leq f(x_1,~\cdots,~x_n)\leq h(x_1,~\cdots,~x_n)`$
    - ### $`\text{If }\lim\limits_{x\to a}{g}=\lim\limits_{x\to a}{h}=L,~\text{then }\lim\limits_{x\to a}{f}=L`$
- ### eg：$`\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y^2}{x^2+y^2}}`$
    - ### $`0\le \frac{x^2y^2}{x^2+y^2} \le x^2`$
        - $`0\le |\frac{x^2y^2}{x^2+y^2}| \le \frac{x^2y^2}{y^2}`$
    - ### $`\lim\limits_{(x,~y)\to (0,~0)}{0}=\lim\limits_{(x,~y)\to (0,~0)}{x^2}=0`$
        - ### $`\text{then }\lim\limits_{(x,~y)\to (0,~0)}{\frac{x^2y^2}{x^2+y^2}}=0`$

