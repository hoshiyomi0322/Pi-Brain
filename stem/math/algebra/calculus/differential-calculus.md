# Properties of Derivatives
- ### $`f^\prime\left(x\right)=\lim\limits_{x\to a}{\frac{f\left(x\right)-f\left(a\right)}{x-a}}=\lim\limits_{h\to 0}{\frac{f\left(x+h\right)-f\left(x\right)}{h}}`$
- ### $`\left(cf\right)^\prime=cf^\prime`$
- ### $`\left(f\pm g\right)^\prime=f^\prime\pm g^\prime`$
- ### $`\left(fg\right)^\prime=f^\prime g+fg^\prime`$
    - ### $`\left(fgh\right)^\prime=\left(fg\right)^\prime h+\left(fg\right)h^\prime=f^\prime gh+fg^\prime h+fgh^\prime`$
- ### $`\left(\frac{f}{g}\right)^\prime=\frac{f^\prime g-g^\prime f}{g^2}`$
    - ### $`\left(\frac{1}{f}\right)^\prime=\frac{-f^\prime}{f^2}`$

# Derivatives
- ### First Derivative
    - ### $`f^\prime\left(x\right)=\frac{d}{dx}f\left(x\right)=\frac{df\left(x\right)}{dx}=\frac{df}{dx}`$
- ### Second Derivative
    - ### $`f^{\prime\prime}\left(x\right)=\frac{d}{dx}\left(\frac{d}{dx}f\left(x\right)\right)=\frac{d^2}{dx^2}f\left(x\right)=\frac{d^2f\left(x\right)}{dx^2}`$
- ### n-th Derivative
    - ### $`f^n\left(x\right)=\frac{d^n}{dx^n}f\left(x\right)=\frac{d^nf\left(x\right)}{dx^n}=\frac{d^nf}{dx^n}`$

# Geometric Interpretation of Derivatives
- ### Slope of the Tangent Line
    - ### $`f^\prime\left(α\right)=\text{the Slope of the Tangent Line to }f\left(x\right)\text{ at }\left(x=α\right)`$
- ### [Equation of Tangent Line](../expression/equation/equation-of-the-line.md#point-slope-form) to $`f\left(x\right)`$ at $`\left(a,~f\left(a\right)\right)`$
    - ### $`y-f\left(a\right)=f^\prime\left(a\right)\left(x-a\right)`$
- ### Concavity
    - ### $`\text{Concavity of }f\left(x\right)\text{ at }\left(x=α\right)=\begin{cases}{\text{Concave Up}}&{\text{when }f^{\prime\prime}\left(α\right)>0}\\ {\text{Concave Down}}&{\text{when }f^{\prime\prime}\left(α\right)<0}\end{cases}`$
- ### Extremum
    - ### $`\begin{cases}{α=\text{Minimum}}&{\text{when }f^\prime\left(α\right)=0,~f^{\prime\prime}\left(α\right)>0}\\ {α=\text{Maximum}}&{\text{when }f^\prime\left(α\right)=0,~f^{\prime\prime}\left(α\right)<0}\end{cases}`$
- ### Inflection Point
    - ### $`α=\text{Inflection Point},~\text{when }f^{\prime\prime}\left(α\right)=0\text{ and the concavity changes}`$
    - ### Concavity Changes：$`f^{\prime\prime}\left(α+n\right)\times f^{\prime\prime}\left(α-n\right)<0`$

# Chain Rule
- ### Chain Rule
    - ### $`\left(f\left(g\left(x\right)\right)\right)^\prime=f^\prime\left(g\left(x\right)\right)\times g\prime\left(x\right)`$
    - ### $`\frac{df\left(g\left(x\right)\right)}{dx}=\frac{df\left(g\left(x\right)\right)}{dg\left(x\right)}\times\frac{dg\left(x\right)}{dx}`$
- ### Leibniz Integral Rule
    - ### $`\left(\int_{a\left(x\right)}^{b\left(x\right)}{f\left(t\right)\,dt}\right)^\prime = \left(F\left(b\left(x\right)\right)\right)^\prime-\left(F\left(a\left(x\right)\right)\right)^\prime = f\left(b\left(x\right)\right)\cdot b^\prime\left(x\right)-f\left(a\left(x\right)\right)\cdot a^\prime\left(x\right)`$
    - ### $`F\left(x\right)=\int{f\left(t\right)\,dx}`$

# Lists of Derivatives
- ### $`\left(x^n\right)^\prime=nx^{n-1}`$
- ### Derivatives of Exponential functions and Logarithmic functions
    - ### $`\left(e^x\right)^\prime=e^x`$
    - ### $`\left(\ln{x}\right)^\prime=\frac{1}{x}`$
    - ### $`\left(a^x\right)^\prime=a^x\ln{a}`$
    - ### $`\left(\log_a{x}\right)^\prime=\frac{1}{x\ln{a}}`$

# Derivative of Inverse Functions
- ### $`\left(f^{-1}\left(x\right)\right)^\prime=\frac{1}{f^\prime\left(f^{-1}\left(x\right)\right)}`$
    - ### $`\left(f\left(f^{-1}\left(x\right)\right)\right)^\prime=f\prime\left(f^{-1}\left(x\right)\right)\cdot\left(f^{-1}\left(x\right)\right)^\prime=1`$
        - Chain Rule：$`\left(f\left(f^{-1}\left(x\right)\right)\right)^\prime=f\prime\left(f^{-1}\left(x\right)\right)\cdot\left(f^{-1}\left(x\right)\right)^\prime`$
        - $`\left(f\left(f^{-1}\left(x\right)\right)\right)^\prime=x^\prime=1`$
- ### eg：$`\left(\arcsin{x}\right)^\prime`$
    - ### $`\left(\arcsin{x}\right)^\prime=\frac{1}{\sin^\prime{\left(\arcsin{x}\right)}}=\frac{1}{\cos{\left(\arcsin{x}\right)}}=\frac{1}{\cos{y}}=\frac{1}{\sqrt{1-\sin^2{y}}}=\frac{1}{\sqrt{1-x^2}}`$
      - $`\arcsin{x}=y,~\sin{y}=x`$
      - Pythagorean Identities：$`\sin^2{y}+\cos^2{y}=1`$

# Logarithmic Differentiation
- ### $`f^\prime\left(x\right)=f\left(x\right)\times\left(\ln{f\left(x\right)}\right)^\prime`$
    - ### $`\left(\ln{f\left(x\right)}\right)^\prime=\frac{f^\prime\left(x\right)}{f\left(x\right)}`$
- ### eg：$`f\left(x\right)=\frac{x^2\left(x-2\right)^3}{\left(x-1\right)\left(x+3\right)^2}`$
    - ### $`\ln{f\left(x\right)}=2\ln{x}+3\ln{\left(x-2\right)}-\ln{\left(x-1\right)}-2\ln{\left(x+3\right)}`$
        - ### $`\left(\ln{f\left(x\right)}\right)^\prime=\frac{2}{x}+\frac{3}{x-2}-\frac{1}{x-1}-\frac{2}{x+3}`$
    - ### $`f^\prime\left(x\right)=f\left(x\right)\times\left(\ln{f\left(x\right)}\right)^\prime=\frac{x^2\left(x-2\right)^3}{\left(x-1\right)\left(x+3\right)^2}\times\left(\frac{2}{x}+\frac{3}{x-2}-\frac{1}{x-1}-\frac{2}{x+3}\right)`$
