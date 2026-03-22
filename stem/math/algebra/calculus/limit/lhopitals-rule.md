- ### L'Hopital's Rule：$`\lim\limits_{x\to c}{\frac{f(x)}{g(x)}}=\lim\limits_{x\to c}{\frac{f^{\prime(x)}}{g^{\prime(x)}}}`$
    - #### conditions：$\lim\limits_{x\to c}{f(x)}=\lim\limits_{x\to c}{g(x)}=0\text{ or }\pm\infty$
- ### [Indeterminate Form](#indeterminate-form-1)：$`\frac{0}{0},~\frac{\infty}{\infty},~(0\times\infty),~(\infty-\infty),~\infty^0,~0^0,~1^\infty`$
    - #### [Exponential Indeterminate Forms](#exponential-indeterminate-forms-1)：$`\infty^0,~0^0,~1^\infty`$

# Indeterminate Form
- ### $`\lim\limits_{x\to c}{f(x)g(x)}=\lim\limits_{x\to c}{(0\times\infty)}`$
    - ### $`\lim\limits_{x\to c}{(0\times\infty)}=\lim\limits_{x\to c}{(\frac{0}{1/\infty})},~\lim\limits_{x\to c}{(\frac{\infty}{1/0})}`$
    - ### $`\lim\limits_{x\to c}{f(x)g(x)} = \lim\limits_{x\to c}{\frac{f(x)}{1/g(x)}}=\lim\limits_{x\to c}{\frac{f^\prime(x)}{(1/g(x))^\prime}}`$
- ### $`\lim\limits_{x\to c}{(\frac{1}{f(x)}-\frac{1}{g(x)})} = \lim\limits_{x\to c}{(\infty-\infty)}`$
    - ### $`\lim\limits_{x\to c}{(\infty-\infty)}=\lim\limits_{x\to c}{(\frac{1}{0}-\frac{1}{0})}=\lim\limits_{x\to c}{(\frac{0-0}{0\times0})}`$
    - ### $`\lim\limits_{x\to c}{(\frac{1}{f(x)}-\frac{1}{g(x)})} = \lim\limits_{x\to c}{\frac{g(x)-f(x)}{f(x)g(x)}}=\lim\limits_{x\to c}{\frac{(g(x)-f(x))^\prime}{(f(x)g(x))^\prime}}`$
- ### Exponential Indeterminate Forms：$`\lim\limits_{x\to c}{f(x)^{g(x)}} = \lim\limits_{x\to c}{\infty^0},~\lim\limits_{x\to c}{0^0},~\lim\limits_{x\to c}{1^\infty}`$
    - ### $`\lim\limits_{x\to c}{\infty^0},~\lim\limits_{x\to c}{0^0},~\lim\limits_{x\to c}{1^\infty}\to\lim\limits_{x\to c}{(0\times\infty)}`$
        - ### $`\lim\limits_{x\to c}{\infty^0} = \lim\limits_{x\to c}{\exp{(\ln{\infty^{0}})}} = \lim\limits_{x\to c}{\exp{(0\ln{\infty})}} = \exp{(\lim\limits_{x\to c}{(0\ln{\infty})})} = \exp{(\lim\limits_{x\to c}{(0\times\infty)})}`$
        - ### $`\lim\limits_{x\to c}{0^0} = \lim\limits_{x\to c}{\exp{(\ln{0^{0}})}} = \lim\limits_{x\to c}{\exp{(0\ln{0})}} = \exp{(\lim\limits_{x\to c}{(0\ln{0})})} = \exp{(\lim\limits_{x\to c}{(0\times(-\infty))})}`$
        - ### $`\lim\limits_{x\to c}{1^\infty} = \lim\limits_{x\to c}{\exp{(\ln{1^{\infty}})}} = \lim\limits_{x\to c}{\exp{(\infty\ln{1})}} = \exp{(\lim\limits_{x\to c}{(\infty\ln{1})})} = \exp{(\lim\limits_{x\to c}{(\infty\times0)})}`$
    - ### $`\lim\limits_{x\to c}{f^g} = \lim\limits_{x\to c}{\exp{(\ln{f^{g}})}} = \lim\limits_{x\to c}{\exp{(g\ln{f})}} = \exp{(\lim\limits_{x\to c}{(g\ln{f})})} = \exp{(\lim\limits_{x\to c}{\frac{\ln{f}}{1/g}})} = \exp{(\lim\limits_{x\to c}{\frac{(\ln{f})^\prime}{(1/g)^\prime}})} = \exp{(\lim\limits_{x\to c}{\frac{g^\prime}{f}})}`$

## eg
- ### eg($`0\times\infty`$)：$`\lim\limits_{x\to 0^+}{x\ln{x}}=\lim\limits_{x\to 0^+}{\frac{\ln{x}}{1/x}}=\lim\limits_{x\to 0^+}{\frac{(\ln{x})^\prime}{(1/x)^\prime}}=0`$
- ### eg($`\infty-\infty`$)：$`\lim\limits_{x\to 0^+}{\frac{1}{x}-\frac{1}{\sin{x}}}=\lim\limits_{x\to 0^+}{\frac{\sin{x}-x}{x\sin{x}}}=\lim\limits_{x\to 0^+}{\frac{(\sin{x}-x)^\prime}{(x\sin{x})^\prime}}=0`$
- ### eg($`\infty^0`$)：$`\lim\limits_{x\to \infty}{x^{1/x}} = \exp{(\lim\limits_{x\to \infty}{(1/x)\ln{x}})} = \exp{(\lim\limits_{x\to \infty}{\frac{\ln{x}}{x}})} = \exp{(\lim\limits_{x\to \infty}{\frac{(\ln{x})^\prime}{x^\prime}})} = \exp0=1`$
- ### eg($`0^0`$)：$`\lim\limits_{x\to 0^+}{x^x} = \exp{(\lim\limits_{x\to 0^+}{x\ln{x}})} = \exp{(\lim\limits_{x\to 0^+}{\frac{\ln{x}}{1/x}})} = \exp{(\lim\limits_{x\to 0^+}{\frac{(\ln{x})^\prime}{(1/x)^\prime}})} = \exp0 = 1`$
- ### eg($`1^\infty`$)：$`\lim\limits_{x\to 0}{(\cos{x})^{1/x}} = \exp{(\lim\limits_{x\to 0}{(1/x)\ln{(\cos{x})}})} = \exp{(\lim\limits_{x\to 0}{\frac{\ln{(\cos{x})}}{x}})} = \exp{(\lim\limits_{x\to 0}{\frac{(\ln{(\cos{x})})^\prime}{x^\prime}})} = \exp0=1`$
