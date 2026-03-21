# Reduction Formula
- ### Factor Out the Square
    - ### Pythagorean Identities
    - ### [Integration by Parts](../integral-calculus/integration-techniques/integration-by-parts.md)：$`\int{f^{n+2}(x)\,dx}=\int{f^n(x)f^2(x)\,dx}`$
- ### [Substitution](../integral-calculus/integration-techniques/substitution.md)

# $`\int{\sin^{2n+1}{x}\,dx},~\int{\cos^{2n+1}{x}\,dx}`$
- ### $`\text{Pythagorean Identities}\to\text{Substitution}`$
- ### Pythagorean Identities：$`\sin^2{x}+\cos^2{x}=1`$
    - ### $`\int{\sin^{2n+1}{x}\,dx} = \int{\sin^{2n}{x}\sin{x}\,dx} = \int{(1-\cos^2{x})^n\sin{x}\,dx}`$
    - ### $`\int{\cos^{2n+1}{x}\,dx} = \int{\cos^{2n}{x}\cos{x}\,dx} = \int{(1-\sin^2{x})^n\cos{x}\,dx}`$
- ### Substitution：$`u=\sin{x},\cos{x}`$
    - ### $`\int{(1-\cos^2{x})^n\sin{x}\,dx} = \int{(1-u^2)^n\,du}`$
        - $`u=\cos{x}`$
        - $`du=\sin{x}\,dx`$
    - ### $`\int{(1-\sin^2{x})^n\cos{x}\,dx} = \int{(1-u^2)^n\,du}`$
        - $`u=\sin{x}`$
        - $`du=\cos{x}\,dx`$

# $`\int{\sin^{2n}{x}\,dx},~\int{\cos^{2n}{x}\,dx}`$
- ### Power Reduction Formulas：$`\sin^2{x}=\frac{1-\cos{2x}}{2},~\cos^2{x}=\frac{1+\cos{2x}}{2}`$
    - ### $`\int{\sin^{2n}{x}\,dx} = \int{(\frac{1-\cos{2x}}{2})^n\,dx}`$
    - ### $`\int{\cos^{2n}{x}\,dx} = \int{(\frac{1+\cos{2x}}{2})^n\,dx}`$

# $`\int{\tan^{n+2}{x}\,dx},~\int{\sec^{n+2}{x}\,dx}`$


# Wallis Formula
- ### $`I_n=\int_{0}^{π/2}{\sin^n{x}\,dx}=\int_{0}^{π/2}{\cos^n{x}\,dx}={\begin{cases}{\frac{(n-1)!!}{n!!}}&{\text{for }n=2k+1}\\ {\frac{(n-1)!!}{n!!}\times\frac{π}{2}}&{\text{for }n=2k}\end{cases}}`$
- ### $`I_n={\begin{cases}{I_0=\frac{π}{2},~I_1=1}\\ {(\frac{n-1}{n})I_{n-2}}&{\text{for }n>2}\end{cases}}`$

## eg
- ### eg：$`\int{\cos^5{x}\,dx}`$
    - ### Pythagorean Identities：$`\int{\cos^5{x}\,dx} = \int{\cos^4{x}\cos{x}\,dx} = \int{(1-\sin^2{x})^2\cos{x}\,dx}`$
    - ### Substitution：$`\int{(1-\sin^2{x})^2\cos{x}\,dx} = \int{(1-u^2)^2\,du}`$
        - ### $`u=\sin{x}`$
        - ### $`du=\cos{x}\,dx`$
    - ### $`\int{(1-u^2)^2\,du} = \int{(u^4-2u^2+1)\,du} = \frac{1}{5}u^5-\frac{2}{3}u^3+u+C`$
    - ### $`\int{\cos^5{x}\,dx} = \frac{1}{5}u^5-\frac{2}{3}u^3+u+C = \frac{1}{5}\sin^5{x}-\frac{2}{3}\sin^3{x}+\sin{x}+C`$
- ### eg：$`\int{\cos^4{x}\,dx}`$
    - ### Power Reduction Formulas：$`\int{\cos^4{x}\,dx} = \int{(\frac{1+\cos{2x}}{2})^2\,dx}`$
    - ### $`\int{(\frac{1+\cos{2x}}{2})^2\,dx} = \int{\frac{1}{4}(1+\cos{2x})^2\,dx} = \int{\frac{1}{4}(\cos^2{2x}+2\cos{2x}+1)\,dx} = \frac{1}{4}(\int{\cos^2{2x}\,dx}+2\int{\cos{2x}\,dx}+\int{1\,dx})`$
    

