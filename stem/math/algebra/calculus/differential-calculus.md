# Properties of Derivatives
- ### $`f^\prime(x)=\lim\limits_{x\to a}{\frac{f(x)-f(a)}{x-a}}=\lim\limits_{h\to 0}{\frac{f(x+h)-f(x)}{h}}`$
- ### $`(cf)^\prime=cf^\prime`$
- ### $`(f\pm g)^\prime=f^\prime\pm g^\prime`$
- ### $`(fg)^\prime=f^\prime g+fg^\prime`$
    - ### $`(fgh)^\prime=(fg)^\prime h+(fg)h^\prime=f^\prime gh+fg^\prime h+fgh^\prime`$
- ### $`(\frac{f}{g})^\prime=\frac{f^\prime g-g^\prime f}{g^2}`$
    - ### $`(\frac{1}{f})^\prime=\frac{-f^\prime}{f^2}`$

# Chain Rule
- ### Chain Rule：$`(f(g(x)))^\prime=f^\prime(g(x))\times g\prime(x)`$
    - ### $`\frac{df(g(x))}{dx}=\frac{df(g(x))}{dg(x)}\times\frac{dg(x)}{dx}`$
- ### Leibniz Integral Rule：$`(\int_{a(x)}^{b(x)}{f(t)\,dt})^\prime=f(b(x))\cdot b^\prime(x)-f(a(x))\cdot a^\prime(x)`$
    - ### $`(\int_{a(x)}^{b(x)}{f(t)\,dt})^\prime=(F(b(x)))^\prime-(F(a(x)))^\prime`$
    - ### $`F(x)=\int{f(t)\,dx}`$

# Derivatives
- ### First Derivative：$`f^\prime(x)=\frac{d}{dx}f(x)=\frac{df(x)}{dx}=\frac{df}{dx}`$
- ### Second Derivative：$`f^{\prime\prime}(x)=\frac{d}{dx}(\frac{d}{dx}f(x))=\frac{d^2}{dx^2}f(x)=\frac{d^2f(x)}{dx^2}`$
- ### n-th Derivative：$`f^n(x)=\frac{d^n}{dx^n}f(x)=\frac{d^nf(x)}{dx^n}=\frac{d^nf}{dx^n}`$

# Curve Sketching
- ### Slope of the Tangent Line
    - ### $`f^\prime(α)=\text{the Slope of the Tangent Line to }f(x)\text{ at }(x=α)`$
- ### Concavity
    - ### $`\text{Concavity of }f(x)\text{ at }(x=α)=\begin{cases}{\text{Concave Up}}&{\text{when }f^{\prime\prime}(α)>0}\\ {\text{Concave Down}}&{\text{when }f^{\prime\prime}(α)<0}\end{cases}`$
- ### Extremum
    - ### Extremum：$`\begin{cases}{α=\text{Minimum}}&{\text{when }f^\prime(α)=0,~f^{\prime\prime}(α)>0}\\ {α=\text{Maximum}}&{\text{when }f^\prime(α)=0,~f^{\prime\prime}(α)<0}\end{cases}`$
- ### Inflection Point
    - ### $`α=\text{Inflection Point},~\text{when }f^{\prime\prime}(α)=0\text{ and the concavity changes}`$
    - ### Concavity Changes：$`f^{\prime\prime}(α+n)\times f^{\prime\prime}(α-n)<0`$

# Lists of Derivatives
- ### $`(x^n)^\prime=nx^{n-1}`$
- ### Derivatives of Exponential functions and Logarithmic functions
    - ### $`(e^x)^\prime=e^x`$
    - ### $`(\ln{x})^\prime=\frac{1}{x}`$
    - ### $`(a^x)^\prime=a^x\ln{a}`$
    - ### $`(\log_a{x})^\prime=\frac{1}{x\ln{a}}`$

# Derivative of Inverse Functions
- ### $`(f^{-1}(x))^\prime=\frac{1}{f^\prime(f^{-1}(x))}`$
    - ### $`(f(f^{-1}(x)))^\prime=f\prime(f^{-1}(x))\cdot(f^{-1}(x))^\prime=1`$
        - Chain Rule：$`(f(f^{-1}(x)))^\prime=f\prime(f^{-1}(x))\cdot(f^{-1}(x))^\prime`$
        - $`(f(f^{-1}(x)))^\prime=x^\prime=1`$
- ### eg：$`(\arcsin{x})^\prime`$
    - ### $`(\arcsin{x})^\prime=\frac{1}{\sin^\prime{(\arcsin{x})}}=\frac{1}{\cos{(\arcsin{x})}}=\frac{1}{\cos{y}}=\frac{1}{\sqrt{1-\sin^2{y}}}=\frac{1}{\sqrt{1-x^2}}`$
      - $`\arcsin{x}=y,~\sin{y}=x`$
      - Pythagorean Identities：$`\sin^2{y}+\cos^2{y}=1`$


# Logarithmic Differentiation
- ### $`f^\prime(x)=f(x)\times(\ln{f(x)})^\prime`$
    - ### $`(\ln{f(x)})^\prime=\frac{{f(x)}^\prime}{f(x)}`$
- ### eg：$`f(x)=\frac{x^2(x-2)^3}{(x-1)(x+3)^2}`$
    - ### $`\ln{f(x)}=2\ln{x}+3\ln{(x-2)}-\ln{(x-1)}-2\ln{(x+3)}`$
        - ### $`(\ln{f(x)})^\prime=\frac{2}{x}+\frac{3}{x-2}-\frac{1}{x-1}-\frac{2}{x+3}`$
    - ### $`f^\prime(x)=f(x)\times(\ln{f(x)})^\prime=\frac{x^2(x-2)^3}{(x-1)(x+3)^2}\times(\frac{2}{x}+\frac{3}{x-2}-\frac{1}{x-1}-\frac{2}{x+3})`$
