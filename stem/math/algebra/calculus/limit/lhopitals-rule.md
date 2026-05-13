- ### L'Hopital's Rule：$`\lim\limits_{x\to c}{\frac{f\left(x\right)}{g\left(x\right)}}=\lim\limits_{x\to c}{\frac{f^{\prime\left(x\right)}}{g^{\prime\left(x\right)}}}`$
    - #### conditions：$`\lim\limits_{x\to c}{f\left(x\right)}=\lim\limits_{x\to c}{g\left(x\right)}=0\text{ or }\pm\infty`$
- ### [Indeterminate Form](#indeterminate-form)：$`\frac{0}{0},~\frac{\infty}{\infty},~\left(0\times\infty\right),~\left(\infty-\infty\right),~\infty^0,~0^0,~1^\infty`$
    - #### [Exponential Indeterminate Forms](#exponential-indeterminate-forms)：$`\infty^0,~0^0,~1^\infty`$

# Indeterminate Form
- ### $`\lim\limits_{x\to c}{f\left(x\right)g\left(x\right)}=\lim\limits_{x\to c}{\left(0\times\infty\right)}`$
    - ### $`\lim\limits_{x\to c}{\left(0\times\infty\right)}=\lim\limits_{x\to c}{\left(\frac{0}{1/\infty}\right)},~\lim\limits_{x\to c}{\left(\frac{\infty}{1/0}\right)}`$
    - ### $`\lim\limits_{x\to c}{f\left(x\right)g\left(x\right)} = \lim\limits_{x\to c}{\frac{f\left(x\right)}{1/g\left(x\right)}}=\lim\limits_{x\to c}{\frac{f^\prime\left(x\right)}{\left(1/g\left(x\right)\right)^\prime}}`$
- ### $`\lim\limits_{x\to c}{\left(\frac{1}{f\left(x\right)}-\frac{1}{g\left(x\right)}\right)} = \lim\limits_{x\to c}{\left(\infty-\infty\right)}`$
    - ### $`\lim\limits_{x\to c}{\left(\infty-\infty\right)}=\lim\limits_{x\to c}{\left(\frac{1}{0}-\frac{1}{0}\right)}=\lim\limits_{x\to c}{\left(\frac{0-0}{0\times0}\right)}`$
    - ### $`\lim\limits_{x\to c}{\left(\frac{1}{f\left(x\right)}-\frac{1}{g\left(x\right)}\right)} = \lim\limits_{x\to c}{\frac{g\left(x\right)-f\left(x\right)}{f\left(x\right)g\left(x\right)}}=\lim\limits_{x\to c}{\frac{\left(g\left(x\right)-f\left(x\right)\right)^\prime}{\left(f\left(x\right)g\left(x\right)\right)^\prime}}`$
- ### <span id="exponential-indeterminate-forms"> Exponential Indeterminate Forms：$`\lim\limits_{x\to c}{f\left(x\right)^{g\left(x\right)}} = \lim\limits_{x\to c}{\infty^0},~\lim\limits_{x\to c}{0^0},~\lim\limits_{x\to c}{1^\infty}`$ </span>
    - ### $`\lim\limits_{x\to c}{\infty^0},~\lim\limits_{x\to c}{0^0},~\lim\limits_{x\to c}{1^\infty}\to\lim\limits_{x\to c}{\left(0\times\infty\right)}`$
        - ### $`\lim\limits_{x\to c}{\infty^0} = \lim\limits_{x\to c}{\exp{\left(\ln{\infty^{0}}\right)}} = \lim\limits_{x\to c}{\exp{\left(0\ln{\infty}\right)}} = \exp{\left(\lim\limits_{x\to c}{\left(0\ln{\infty}\right)}\right)} = \exp{\left(\lim\limits_{x\to c}{\left(0\times\infty\right)}\right)}`$
        - ### $`\lim\limits_{x\to c}{0^0} = \lim\limits_{x\to c}{\exp{\left(\ln{0^{0}}\right)}} = \lim\limits_{x\to c}{\exp{\left(0\ln{0}\right)}} = \exp{\left(\lim\limits_{x\to c}{\left(0\ln{0}\right)}\right)} = \exp{\left(\lim\limits_{x\to c}{\left(0\times\left(-\infty\right)\right)}\right)}`$
        - ### $`\lim\limits_{x\to c}{1^\infty} = \lim\limits_{x\to c}{\exp{\left(\ln{1^{\infty}}\right)}} = \lim\limits_{x\to c}{\exp{\left(\infty\ln{1}\right)}} = \exp{\left(\lim\limits_{x\to c}{\left(\infty\ln{1}\right)}\right)} = \exp{\left(\lim\limits_{x\to c}{\left(\infty\times0\right)}\right)}`$
    - ### $`\lim\limits_{x\to c}{f^g} = \lim\limits_{x\to c}{\exp{\left(\ln{f^{g}}\right)}} = \lim\limits_{x\to c}{\exp{\left(g\ln{f}\right)}} = \exp{\left(\lim\limits_{x\to c}{\left(g\ln{f}\right)}\right)} = \exp{\left(\lim\limits_{x\to c}{\frac{\ln{f}}{1/g}}\right)} = \exp{\left(\lim\limits_{x\to c}{\frac{\left(\ln{f}\right)^\prime}{\left(1/g\right)^\prime}}\right)} = \exp{\left(\lim\limits_{x\to c}{\frac{g^\prime}{f}}\right)}`$

## eg
- ### eg ($`0\times\infty`$)：$`\lim\limits_{x\to 0^+}{x\ln{x}}=\lim\limits_{x\to 0^+}{\frac{\ln{x}}{1/x}}=\lim\limits_{x\to 0^+}{\frac{\left(\ln{x}\right)^\prime}{\left(1/x\right)^\prime}}=0`$
- ### eg ($`\infty-\infty`$)：$`\lim\limits_{x\to 0^+}{\frac{1}{x}-\frac{1}{\sin{x}}}=\lim\limits_{x\to 0^+}{\frac{\sin{x}-x}{x\sin{x}}}=\lim\limits_{x\to 0^+}{\frac{\left(\sin{x}-x\right)^\prime}{\left(x\sin{x}\right)^\prime}}=0`$
- ### eg ($`\infty^0`$)：$`\lim\limits_{x\to \infty}{x^{1/x}} = \exp{\left(\lim\limits_{x\to \infty}{\left(1/x\right)\ln{x}}\right)} = \exp{\left(\lim\limits_{x\to \infty}{\frac{\ln{x}}{x}}\right)} = \exp{\left(\lim\limits_{x\to \infty}{\frac{\left(\ln{x}\right)^\prime}{x^\prime}}\right)} = \exp0=1`$
- ### eg ($`0^0`$)：$`\lim\limits_{x\to 0^+}{x^x} = \exp{\left(\lim\limits_{x\to 0^+}{x\ln{x}}\right)} = \exp{\left(\lim\limits_{x\to 0^+}{\frac{\ln{x}}{1/x}}\right)} = \exp{\left(\lim\limits_{x\to 0^+}{\frac{\left(\ln{x}\right)^\prime}{\left(1/x\right)^\prime}}\right)} = \exp0 = 1`$
- ### eg ($`1^\infty`$)：$`\lim\limits_{x\to 0}{\left(\cos{x}\right)^{1/x}} = \exp{\left(\lim\limits_{x\to 0}{\left(1/x\right)\ln{\left(\cos{x}\right)}}\right)} = \exp{\left(\lim\limits_{x\to 0}{\frac{\ln{\left(\cos{x}\right)}}{x}}\right)} = \exp{\left(\lim\limits_{x\to 0}{\frac{\left(\ln{\left(\cos{x}\right)}\right)^\prime}{x^\prime}}\right)} = \exp0=1`$
