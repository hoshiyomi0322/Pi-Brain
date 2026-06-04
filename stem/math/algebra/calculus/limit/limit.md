# Properties of Limit
- ### $`\lim\limits_{x\to a}{cf\left(x\right)}=c\lim\limits_{x\to a}{f\left(x\right)}`$
- ### $`\lim\limits_{x\to a}{\left[f\left(x\right)\pm g\left(x\right)\right]}=\lim\limits_{x\to a}{f\left(x\right)}\pm\lim\limits_{x\to a}{g\left(x\right)}`$
- ### $`\lim\limits_{x\to a}{\left[f\left(x\right)\times g\left(x\right)\right]}=\lim\limits_{x\to a}{f\left(x\right)}\times\lim\limits_{x\to a}{g\left(x\right)}`$
- ### $`\lim\limits_{x\to a}{\frac{f\left(x\right)}{g\left(x\right)}}=\frac{\lim\limits_{x\to a}{f\left(x\right)}}{\lim\limits_{x\to a}{g\left(x\right)}}`$
- ### $`\lim\limits_{x\to a}{f\left(g\left(x\right)\right)}=f\left(\lim\limits_{x\to a}{g\left(x\right)}\right)`$
    - ### $`\lim\limits_{x\to a}{f\left(x\right)^n}=\left(\lim\limits_{x\to a}{f\left(x\right)}\right)^n`$

# One-sided Limit
- ### $`\lim\limits_{x\to a}{f\left(x\right)}`$
    |One-sided Limit|$`\lim\limits_{x\to a}{f\left(x\right)}`$|
    |:---:|:---:|
    |$`\lim\limits_{x\to a^-}{f\left(x\right)}=\lim\limits_{x\to a^+}{f\left(x\right)}=L`$|$`\lim\limits_{x\to a}{f\left(x\right)}=L`$|
    |$`\lim\limits_{x\to a^-}{f\left(x\right)}\neq\lim\limits_{x\to a^+}{f\left(x\right)}`$|$`\lim\limits_{x\to a}{f\left(x\right)}\text{ does not exist}`$|
- ### One-sided Limit
    - ### Left-sided Limit：$`\lim\limits_{x\to a^-}{f\left(x\right)}`$
    - ### Right-sided Limit：$`\lim\limits_{x\to a^+}{f\left(x\right)}`$
- ### eg：$`\lim\limits_{x\to 0}{\left(\frac{x}{|x|}+x\right)}`$
    - #### Left-sided Limit：$`\lim\limits_{x\to 0^-}{\left(\frac{x}{|x|}+x\right)}=\frac{x}{|x|}+x=\frac{x}{-x}+x=-1.\cdots`$
        - $`x=-0.0\cdots 1`$
    - #### Right-sided Limit：$`\lim\limits_{x\to 0^+}{\left(\frac{x}{|x|}+x\right)}=\frac{x}{|x|}+x=\frac{x}{x}+x=1.\cdots`$
        - $`x=0.0\cdots 1`$
    - #### $`\lim\limits_{x\to 0^-}{\left(\frac{x}{|x|}+x\right)}\neq\lim\limits_{x\to 0^+}{\left(\frac{x}{|x|}+x\right)} \implies \lim\limits_{x\to 0}{\left(\frac{x}{|x|}+x\right)}\text{ does not exist}`$
- ### eg：$`\lim\limits_{x\to 1}{\left(2+\left[x\right]+\left[1-x\right]\right)}`$
    - #### Left-sided Limit：$`\lim\limits_{x\to 1^-}{\left(2+\left[x\right]+\left[1-x\right]\right)}=2+\left[0.\cdots\right]+\left[1-0.9\cdots 9\right]=2+0+0=2`$
        - $x=0.9\cdots 9$
    - #### Right-sided Limit：$`\lim\limits_{x\to 1^+}{\left(2+\left[x\right]+\left[1-x\right]\right)}=2+\left[1.\cdots\right]+\left[1-1.0\cdots 1\right]=2+1-1=2`$
        - $x=1.0\cdots 1$
    - #### $`\lim\limits_{x\to 1^-}{\left(2+\left[x\right]+\left[1-x\right]\right)}=\lim\limits_{x\to 1^+}{\left(2+\left[x\right]+\left[1-x\right]\right)}=2 \implies \lim\limits_{x\to 1}{\left(2+\left[x\right]+\left[1-x\right]\right)}=2`$

# Squeeze Theorem (Sandwich Theorem)
<div align="center"><img src="./image/squeeze-theorem.png" width="35%"></div>

- ### $`g\left(x\right)\leq f\left(x\right)\leq h\left(x\right)`$
    - ### $`\text{If }\lim\limits_{x\to a}{g}=\lim\limits_{x\to a}{h}=L,~\text{then }\lim\limits_{x\to a}{f}=L`$
- ### eg

# ε-δ definition
<div align="center"><img src="./image/epsilon-delta-definition.png" width="35%"></div>

- ### $`\lim\limits_{x\to a}{f\left(x\right)}=L\iff\text{ε-δ definition}`$
- ### ε-δ definition \left($`\forallε>0,~\existsδ>0`$\right)
    - #### $`0<|x-a|<δ\implies|f\left(x\right)-L|<ε`$
- ### eg：$`\lim\limits_{x\to 3}{\left(4x+1\right)}=13`$
    1. $`\forallε>0,~\existsδ>0,~\text{Such that }0<|x-3|<δ\implies|\left(4x+1\right)-13|<ε`$
    2. $`|4x-12|<ε`$
    3. $`|x-3|<\frac{ε}{4}`$
    4. $`δ=\frac{ε}{4}\implies \lim\limits_{x\to 3}{\left(4x+1\right)}=13`$
- ### eg：$`\lim\limits_{x\to 3}{x^2}=9`$
    1. $`\forallε>0,~\existsδ>0,~\text{Such that }0<|x-3|<δ\implies|x^2-9|<ε`$
    2. $`|x|<\sqrt{ε+9}`$
    3. $`|x-3|<\sqrt{ε+9}-3`$
    4. $`δ=\sqrt{ε+9}-3\implies \lim\limits_{x\to 3}{x^2}=9`$

# L'Hopital's Rule
- ### [L'Hopital's Rule](lhopitals-rule.md)

# Asymptote
- ### [Asymptote](asymptote.md)


# Convergence Tests
- ### [Convergence Tests](convergence-tests.md)
