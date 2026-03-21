# Substitution
- ### $`\int_{a}^{b}{f(x)\,dx}=\int_{a}^{b}{f(u)\frac{du}{dx}\,dx}=\int_{u(a)}^{u(b)}{f(u)\,du}`$
    - ### $`f(x)=f(u)\frac{du}{dx}`$
- ### Set $`u=u(x)`$
    - ### $`du=\frac{du}{dx}\,dx`$

- ### Interval：$`\int_a^b\to\int_{u(a)}^{u(b)}`$

# Trigonometric Substitution
- ### [Trigonometric Substitution](trigonometric-substitution.md)

## eg：$`\int_{1}^{2}{(x^3-5)^{10}x^2\,dx}`$
- ### Set $`u=u(x)=x^3-5`$
- ### $`du=3x^2\,dx`$
    - $`\frac{du}{dx}=(x^3-5)^\prime=3x^2`$
- ### Indefinite Integral：$`\int{(x^3-5)^{10}x^2\,dx}=\int{\frac{1}{3}u^{10}\,du}`$
- ### Definite Integral：$`\int_{1}^{2}{(x^3-5)^{10}x^2\,dx}=\int_{-4}^{3}{\frac{1}{3}u^{10}\,du}`$
    - ### Interval：$`\int_1^2\to\int_{u(1)}^{u(2)}=\int_{-4}^3`$
