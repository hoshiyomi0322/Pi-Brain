# Properties of Integrals
- ### Indefinite Integral：$`\int{f(x)\,dx}=F(x)+C`$
    - $`F^\prime(x)=f(x)`$
- ### Definite Integral：$`\int_{a}^{b}{f(x)\,dx}=F(b)-F(a)=\lim\limits_{n\to\infty}{\sum\limits_{i=1}^{n}f(t_i)(x_i-x_{i-1})}`$
    - ### $`\int_{a}^{b}{f\,dx}=\int_{a}^{c}{f\,dx}+\int_{c}^{b}{f\,dx}`$
    - ### $`\int_{a}^{b}{f\,dx}=-\int_{b}^{a}{f\,dx}`$
- ### $`\int{cf\,dx}=c\int{f\,dx}`$
- ### $`\int{f(cx)\,dx}=\frac{1}{c}F(cx)+C`$
- ### $`\int_{a}^{b}{(f\pm g)\,dx}=\int_{a}^{b}{f\,dx}\pm\int_{a}^{b}{g\,dx}`$

# Lists of Integrals
- ### $`\int{x^n\,dx}=\frac{1}{n+1}x^{n+1}+C,~n\neq-1`$
- ### $`\int{\frac{1}{x}\,dx}=\ln{|x|}+C`$
    - ### $`\int{\frac{f^\prime(x)}{f(x)}\,dx}=\ln{|f(x)|}+C`$
- ### Integrals of Exponential functions and Logarithmic functions
    - ### $`\int{e^x\,dx}=e^x+C`$
    - ### $`\int{\ln{x}\,dx}=x\ln{x}-x+C`$
    - ### $`\int{a^x\,dx}=\frac{1}{\ln{a}}a^x+C`$
    - ### $`\int{\log_a{x}\,dx}=\frac{1}{\ln{a}}(x\ln{x}-x)+C=x\log_a{x}-\frac{x}{\ln{a}}+C`$

# Improper Integral
- ### Improper Integral：$`\int_{a}^{b}{f(x)\,dx}=\int_{a}^{c}{f(x)\,dx}+\int_{c}^{b}{f(x)\,dx}`$
    |Limit of Integral|Convergent, Divergent|
    |:---:|:---:|
    |finite|Convergent|
    |infinite|Divergent|
- ### Limits of Integration ($`a,~b`$) include Infinity
    |Limits of Integration|Limit of Integral|
    |:---:|:---:|
    |$`a=-\infty`$|$`\lim\limits_{t\to-\infty}{\int_{t}^{b}{f(x)\,dx}}`$|
    |$`b=\infty`$|$`\lim\limits_{s\to\infty}{\int_{a}^{s}{f(x)\,dx}}`$|
    |$`a=-\infty,~b=\infty`$|$`\lim\limits_{t\to-\infty}{\int_{t}^{c}{f(x)\,dx}}+\lim\limits_{s\to\infty}{\int_{c}^{s}{f(x)\,dx}}`$|
- ### $`f(x)`$ is Discontinuous on $`[a,b]`$
    |Point of Discontinuity|Limit of Integral|
    |:---:|:---:|
    |$`a=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to a^+}{\int_{t}^{b}{f(x)\,dx}}`$|
    |$`b=\text{Point of Discontinuity}`$|$`\lim\limits_{s\to b^-}{\int_{a}^{s}{f(x)\,dx}}`$|
    |$`a=\text{Point of Discontinuity},~b=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to a^+}{\int_{t}^{c}{f(x)\,dx}}+\lim\limits_{s\to b^-}{\int_{c}^{s}{f(x)\,dx}}`$|
    |$`c=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to c^-}{\int_{a}^{t}{f(x)\,dx}}+\lim\limits_{s\to c^+}{\int_{s}^{b}{f(x)\,dx}}`$|
- ### [Convergence Tests](../limit/convergence-tests.md)

# Integration Techniques
- ### [Substitution](./integration-techniques/substitution.md)
    - ### [Trigonometric Substitution](./integration-techniques/trigonometric-substitution.md)
- ### [Integration by Parts](./integration-techniques/integration-by-parts.md)
- ### [Partial Fraction Decomposition](./integration-techniques/partial-fraction-decomposition.md)
- ### [Reduction Formula](../calculus-trigonometric-functions-and-hyperbolic-functions/reduction-formula.md)
