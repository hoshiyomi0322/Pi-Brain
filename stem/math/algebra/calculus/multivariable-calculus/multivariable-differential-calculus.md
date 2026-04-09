# Partial Derivative
- ### $`\frac{\partial}{\partial x_i}f(x_1,\cdots,x_n)=\lim\limits_{h\to 0}{\frac{f(x_1,\cdots,x_i+h,\cdots,x_n)-f(x_1,\cdots,x_n)}{h}}`$
  - $`\frac{\partial}{\partial x_i}f(x_1,\cdots,x_n)=\frac{\partial f\left(x_1,\cdots,x_n\right)}{\partial x_i}=\frac{\partial f}{\partial x_i}`$
- ### Total Derivative：$`df=\frac{\partial f}{\partial x_1}dx_1+\cdots+\frac{\partial f}{\partial x_m}dx_m`$
- ### eg

# Multivariable Chain Rule
- ### $`f(g_1(x),\cdots,g_n(x))`$
    - $`\frac{df}{dx} = (f(g_1(x),\cdots,g_n(x)))^\prime = \frac{\partial f}{\partial g_1}\times {g_1}^\prime(x)+\cdots+\frac{\partial f}{\partial g_n}\times {g_n}^\prime(x)=\frac{\partial f}{\partial g_1}\frac{dg_1}{dx}+\cdots+\frac{\partial f}{\partial g_n}\frac{dg_n}{dx}`$
    - $`df=\frac{\partial f}{\partial g_1}dg_1+\cdots+\frac{\partial f}{\partial g_n}dg_n`$
    - $`{g_i}^\prime(x)=\frac{dg_i}{dx}`$
- ### $`f(g_1(x_1,\cdots,x_m),\cdots,g_n(x_1,\cdots,x_m))`$
	- $`\frac{\partial f}{\partial x_k} = \frac{\partial f}{\partial g_1}\frac{\partial g_1}{\partial x_k}+\cdots+\frac{\partial f}{\partial g_n}\frac{\partial g_n}{\partial x_k}`$
	- $`df=\frac{\partial f}{\partial g_1}dg_1+\cdots+\frac{\partial f}{\partial g_n}dg_n=\frac{\partial f}{\partial x_1}dx_1+\cdots+\frac{\partial f}{\partial x_m}dx_m`$
	- $`dg_i=\frac{\partial g_i}{\partial x_1}dx_1+\cdots+\frac{\partial g_i}{\partial x_m}dx_m`$
- ### eg

# Implicit Function
- ### Implicit Partial Differentiation


# Lagrange Multiplier

