# Substitution
- ### $`\int_{a}^{b}{f\left(x\right)\,dx}=\int_{a}^{b}{f\left(u\right)\frac{du}{dx}\,dx}=\int_{u\left(a\right)}^{u\left(b\right)}{f\left(u\right)\,du}`$
    - ### $`f\left(x\right)=f\left(u\right)\frac{du}{dx}`$
- ### Set $`u=u\left(x\right)`$
    - ### $`du=\frac{du}{dx}\,dx`$

- ### Interval：$`\int_a^b\to\int_{u\left(a\right)}^{u\left(b\right)}`$

# Trigonometric Substitution
- ### [Trigonometric Substitution](trigonometric-substitution.md)

## eg：$`\int_{1}^{2}{\left(x^3-5\right)^{10}x^2\,dx}`$
- ### Set $`u=u\left(x\right)=x^3-5`$
- ### $`du=3x^2\,dx`$
    - $`\frac{du}{dx}=\left(x^3-5\right)^\prime=3x^2`$
- ### Indefinite Integral：$`\int{\left(x^3-5\right)^{10}x^2\,dx}=\int{\frac{1}{3}u^{10}\,du}`$
- ### Definite Integral：$`\int_{1}^{2}{\left(x^3-5\right)^{10}x^2\,dx}=\int_{-4}^{3}{\frac{1}{3}u^{10}\,du}`$
    - ### Interval：$`\int_1^2\to\int_{u\left(1\right)}^{u\left(2\right)}=\int_{-4}^3`$
