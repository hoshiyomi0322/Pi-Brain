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
- ### $`\int{\frac{1}{x}\ dx}=\ln{|x|}+C`$
    - ### $`\int{\frac{{f^\prime(x)}}{f(x)}\ dx}=\ln{|f(x)|}+C`$
- ### Integrals of Exponential functions and Logarithmic functions
    - ### $`\int{e^x\,dx}=e^x+C`$
    - ### $`\int{\ln{x}\,dx}=x\ln{x}-x+C`$
    - ### $`\int{a^x\,dx}=\frac{1}{\ln{a}}a^x+C`$
    - ### $`\int{\log_a{x}\,dx}=\frac{1}{\ln{a}}(x\ln{x}-x)+C=x\log_a{x}-\frac{x}{\ln{a}}+C`$

# Improper Integral
- ### [Convergence Tests](../limit/convergence-tests.md)

# Integration Techniques
- ### [Substitution](./integration-techniques/substitution.md)
    - ### [Trigonometric Substitution](./integration-techniques/trigonometric-substitution.md)
- ### [Integration by Parts](./integration-techniques/integration-by-parts.md)
- ### [Partial Fraction Decomposition](./integration-techniques/partial-fraction-decomposition.md)
- ### [Reduction Formula](../calculus-trigonometric-functions-and-hyperbolic-functions/reduction-formula.md)
