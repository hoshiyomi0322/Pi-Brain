# Properties of Limit
- ### $`\lim\limits_{x\to a}{cf(x)}=c\lim\limits_{x\to a}{f(x)}`$
- ### $`\lim\limits_{x\to a}{[f(x)\pm g(x)]}=\lim\limits_{x\to a}{f(x)}\pm\lim\limits_{x\to a}{g(x)}`$
- ### $`\lim\limits_{x\to a}{[f(x)\times g(x)]}=\lim\limits_{x\to a}{f(x)}\times\lim\limits_{x\to a}{g(x)}`$
- ### $`\lim\limits_{x\to a}{\frac{f(x)}{g(x)}}=\frac{\lim\limits_{x\to a}{f(x)}}{\lim\limits_{x\to a}{g(x)}}`$
- ### $`\lim\limits_{x\to a}{f(g(x))}=f(\lim\limits_{x\to a}{g(x)})`$
    - ### $`\lim\limits_{x\to a}{f(x)^n}=(\lim\limits_{x\to a}{f(x)})^n`$

# One-sided Limit
- ### $`\lim\limits_{x\to a}{f(x)}`$
    |One-sided Limit|$`\lim\limits_{x\to a}{f(x)}`$|
    |:---:|:---:|
    |$`\lim\limits_{x\to a^-}{f(x)}=\lim\limits_{x\to a^+}{f(x)}=L`$|$`\lim\limits_{x\to a}{f(x)}=L`$|
    |$`\lim\limits_{x\to a^-}{f(x)}\neq\lim\limits_{x\to a^+}{f(x)}`$|$`\lim\limits_{x\to a}{f(x)}\text{ not exist}`$|
- ### One-sided Limit
    - ### Left-sided Limit：$`\lim\limits_{x\to a^-}{f(x)}`$
    - ### Right-sided Limit：$`\lim\limits_{x\to a^+}{f(x)}`$
- ### eg：$`\lim\limits_{x\to 0}{(\frac{x}{|x|}+x)}`$
    - ### Left-sided Limit：$`\lim\limits_{x\to 0^-}{(\frac{x}{|x|}+x)}=\frac{x}{|x|}+x=\frac{x}{-x}+x=-1.\cdots`$
        - $`x=-0.\cdots`$
    - ### Right-sided Limit：$`\lim\limits_{x\to 0^+}{(\frac{x}{|x|}+x)}=\frac{x}{|x|}+x=\frac{x}{x}+x=1.\cdots`$
        - $`x=0.\cdots`$
    - ### $`\lim\limits_{x\to 0^-}{(\frac{x}{|x|}+x)}\neq\lim\limits_{x\to 0^+}{(\frac{x}{|x|}+x)}`$
        - ### $`\lim\limits_{x\to 0}{(\frac{x}{|x|}+x)}\text{ not exist}`$
- ### eg：$`\lim\limits_{x\to 1}{(2+[x]+[1-x])}`$
    - ### Left-sided Limit：$`\lim\limits_{x\to 1^-}{(2+[x]+[1-x])}=2+[0.\cdots]+[1-0.\cdots]=2+0+0=2`$
        - $x=0.\cdots$
    - ### Right-sided Limit：$`\lim\limits_{x\to 1^+}{(2+[x]+[1-x])}=2+[1.\cdots]+[1-1.\cdots]=2+1-1=2`$
        - $x=1.\cdots$
    - ### $`\lim\limits_{x\to 1^-}{(2+[x]+[1-x])}=\lim\limits_{x\to 1^+}{(2+[x]+[1-x])}=2`$
        - ### $`\lim\limits_{x\to 1}{(2+[x]+[1-x])}=2`$


# Squeeze Theorem(Sandwich Theorem)
- ### $`g(x)\leq f(x)\leq h(x)`$
    <img src="squeeze-theorem.png" width="30%">

    - ### $`\text{If }\lim\limits_{x\to a}{g}=\lim\limits_{x\to a}{h}=L,~\text{then }\lim\limits_{x\to a}{f}=L`$
- ### eg

# L'Hopital's Rule
- ### [L'Hopital's Rule](lhopitals-rule.md)

# Asymptote
- ### [Asymptote](asymptote.md)


# Convergence Tests
- ### [Convergence Tests](convergence-tests.md)
