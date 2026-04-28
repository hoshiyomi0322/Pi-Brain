# Properties of Integrals
- ### Indefinite Integral：$`\int{f\left(x\right)\,dx}=F\left(x\right)+C`$
    - $`F^\prime\left(x\right)=f\left(x\right)`$
- ### Definite Integral：$`\int_{a}^{b}{f\left(x\right)\,dx}=F\left(b\right)-F\left(a\right)=\lim\limits_{n\to\infty}{\sum\limits_{i=1}^{n}f\left(t_i\right)\left(x_i-x_{i-1}\right)}`$
    - ### $`\int_{a}^{b}{f\,dx}=\int_{a}^{c}{f\,dx}+\int_{c}^{b}{f\,dx}`$
    - ### $`\int_{a}^{b}{f\,dx}=-\int_{b}^{a}{f\,dx}`$
- ### $`\int{cf\,dx}=c\int{f\,dx}`$
- ### $`\int{f\left(cx\right)\,dx}=\frac{1}{c}F\left(cx\right)+C`$
- ### $`\int_{a}^{b}{\left(f\pm g\right)\,dx}=\int_{a}^{b}{f\,dx}\pm\int_{a}^{b}{g\,dx}`$

# Lists of Integrals
- ### $`\int{x^n\,dx}=\frac{1}{n+1}x^{n+1}+C,~n\neq-1`$
- ### $`\int{\frac{1}{x}\,dx}=\ln{|x|}+C`$
    - ### $`\int{\frac{f^\prime\left(x\right)}{f\left(x\right)}\,dx}=\ln{|f\left(x\right)|}+C`$
- ### Integrals of Exponential functions and Logarithmic functions
    - ### $`\int{e^x\,dx}=e^x+C`$
    - ### $`\int{\ln{x}\,dx}=x\ln{x}-x+C`$
    - ### $`\int{a^x\,dx}=\frac{1}{\ln{a}}a^x+C`$
    - ### $`\int{\log_a{x}\,dx}=\frac{1}{\ln{a}}\left(x\ln{x}-x\right)+C=x\log_a{x}-\frac{x}{\ln{a}}+C`$

# Improper Integral
- ### Improper Integral：$`\int_{a}^{b}{f\left(x\right)\,dx}=\int_{a}^{c}{f\left(x\right)\,dx}+\int_{c}^{b}{f\left(x\right)\,dx}`$
    |Limit of Integral|Convergent, Divergent|
    |:---:|:---:|
    |finite|Convergent|
    |infinite|Divergent|
- ### Limits of Integration \left($`a,~b`$\right) include Infinity
    |Limits of Integration|Limit of Integral|
    |:---:|:---:|
    |$`a=-\infty`$|$`\lim\limits_{t\to-\infty}{\int_{t}^{b}{f\left(x\right)\,dx}}`$|
    |$`b=\infty`$|$`\lim\limits_{s\to\infty}{\int_{a}^{s}{f\left(x\right)\,dx}}`$|
    |$`a=-\infty,~b=\infty`$|$`\lim\limits_{t\to-\infty}{\int_{t}^{c}{f\left(x\right)\,dx}}+\lim\limits_{s\to\infty}{\int_{c}^{s}{f\left(x\right)\,dx}}`$|
- ### $`f\left(x\right)`$ is Discontinuous on $`[a,b]`$
    |Point of Discontinuity|Limit of Integral|
    |:---:|:---:|
    |$`a=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to a^+}{\int_{t}^{b}{f\left(x\right)\,dx}}`$|
    |$`b=\text{Point of Discontinuity}`$|$`\lim\limits_{s\to b^-}{\int_{a}^{s}{f\left(x\right)\,dx}}`$|
    |$`a=\text{Point of Discontinuity},~b=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to a^+}{\int_{t}^{c}{f\left(x\right)\,dx}}+\lim\limits_{s\to b^-}{\int_{c}^{s}{f\left(x\right)\,dx}}`$|
    |$`c=\text{Point of Discontinuity}`$|$`\lim\limits_{t\to c^-}{\int_{a}^{t}{f\left(x\right)\,dx}}+\lim\limits_{s\to c^+}{\int_{s}^{b}{f\left(x\right)\,dx}}`$|
- ### [Convergence Tests](../limit/convergence-tests.md\right)

# Integration Techniques
- ### [Substitution](./integration-techniques/substitution.md)
    - ### [Trigonometric Substitution](./integration-techniques/trigonometric-substitution.md)
- ### [Integration by Parts](./integration-techniques/integration-by-parts.md)
- ### [Partial Fraction Decomposition](./integration-techniques/partial-fraction-decomposition.md)
- ### [Reduction Formula](../calculus-trigonometric-functions-and-hyperbolic-functions/reduction-formula.md)
