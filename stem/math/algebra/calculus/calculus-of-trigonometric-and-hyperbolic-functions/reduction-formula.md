# Reduction Formula
- ### Factor Out the Square
    - ### [Pythagorean Identities](/stem/math/trigonometric-and-hyperbolic-functions/trigonometric-functions.md#pythagorean-identities)
    - ### [Integration by Parts](../integral-calculus/integration-techniques/integration-by-parts.md)：$`\int{f^{n+2}\left(x\right)\,dx}=\int{f^n\left(x\right)f^2\left(x\right)\,dx}`$
- ### [Substitution](../integral-calculus/integration-techniques/substitution.md)

# $`\int{\sin^{2n+1}{x}\,dx},~\int{\cos^{2n+1}{x}\,dx}`$
- ### $`\text{Pythagorean Identities}\to\text{Substitution}`$
- ### [Pythagorean Identities](/stem/math/trigonometric-and-hyperbolic-functions/trigonometric-functions.md#pythagorean-identities)：$`\sin^2{x}+\cos^2{x}=1`$
    - ### $`\int{\sin^{2n+1}{x}\,dx} = \int{\sin^{2n}{x}\sin{x}\,dx} = \int{\left(1-\cos^2{x}\right)^n\sin{x}\,dx}`$
    - ### $`\int{\cos^{2n+1}{x}\,dx} = \int{\cos^{2n}{x}\cos{x}\,dx} = \int{\left(1-\sin^2{x}\right)^n\cos{x}\,dx}`$
- ### Substitution：$`u=\sin{x},\cos{x}`$
    - ### $`\int{\left(1-\cos^2{x}\right)^n\sin{x}\,dx} = \int{\left(1-u^2\right)^n\,du}`$
        - $`u=\cos{x}`$
        - $`du=\sin{x}\,dx`$
    - ### $`\int{\left(1-\sin^2{x}\right)^n\cos{x}\,dx} = \int{\left(1-u^2\right)^n\,du}`$
        - $`u=\sin{x}`$
        - $`du=\cos{x}\,dx`$

# $`\int{\sin^{2n}{x}\,dx},~\int{\cos^{2n}{x}\,dx}`$
- ### [Power Reduction Formulas](/stem/math/trigonometric-and-hyperbolic-functions/trigonometric-functions.md#power-reduction-formulas)：$`\sin^2{x}=\frac{1-\cos{2x}}{2},~\cos^2{x}=\frac{1+\cos{2x}}{2}`$
    - ### $`\int{\sin^{2n}{x}\,dx} = \int{\left(\frac{1-\cos{2x}}{2}\right)^n\,dx}`$
    - ### $`\int{\cos^{2n}{x}\,dx} = \int{\left(\frac{1+\cos{2x}}{2}\right)^n\,dx}`$

# $`\int{\tan^{n+2}{x}\,dx},~\int{\sec^{n+2}{x}\,dx}`$


# Wallis Formula
- ### $`I_n=\int_{0}^{π/2}{\sin^n{x}\,dx}=\int_{0}^{π/2}{\cos^n{x}\,dx}={\begin{cases}{\frac{\left(n-1\right)!!}{n!!}}&{\text{if }n=2k+1}\\ {\frac{\left(n-1\right)!!}{n!!}\times\frac{π}{2}}&{\text{if }n=2k}\end{cases}}`$
- ### $`I_n={\begin{cases}{I_0=\frac{π}{2},~I_1=1}\\ {\left(\frac{n-1}{n}\right)I_{n-2}}&{\text{if }n>2}\end{cases}}`$

## eg
- ### eg：$`\int{\cos^5{x}\,dx}`$
    - ### [Pythagorean Identities](/stem/math/trigonometric-and-hyperbolic-functions/trigonometric-functions.md#pythagorean-identities)：$`\int{\cos^5{x}\,dx} = \int{\cos^4{x}\cos{x}\,dx} = \int{\left(1-\sin^2{x}\right)^2\cos{x}\,dx}`$
    - ### Substitution：$`\int{\left(1-\sin^2{x}\right)^2\cos{x}\,dx} = \int{\left(1-u^2\right)^2\,du}`$
        - ### $`u=\sin{x}`$
        - ### $`du=\cos{x}\,dx`$
    - ### $`\int{\left(1-u^2\right)^2\,du} = \int{\left(u^4-2u^2+1\right)\,du} = \frac{1}{5}u^5-\frac{2}{3}u^3+u+C`$
    - ### $`\int{\cos^5{x}\,dx} = \frac{1}{5}u^5-\frac{2}{3}u^3+u+C = \frac{1}{5}\sin^5{x}-\frac{2}{3}\sin^3{x}+\sin{x}+C`$
- ### eg：$`\int{\cos^4{x}\,dx}`$
    - ### [Power Reduction Formulas](/stem/math/trigonometric-and-hyperbolic-functions/trigonometric-functions.md#power-reduction-formulas)：$`\int{\cos^4{x}\,dx} = \int{\left(\frac{1+\cos{2x}}{2}\right)^2\,dx}`$
    - ### $`\int{\left(\frac{1+\cos{2x}}{2}\right)^2\,dx} = \int{\frac{1}{4}\left(1+\cos{2x}\right)^2\,dx} = \int{\frac{1}{4}\left(\cos^2{2x}+2\cos{2x}+1\right)\,dx} = \frac{1}{4}\left(\int{\cos^2{2x}\,dx}+2\int{\cos{2x}\,dx}+\int{1\,dx}\right)`$
    

