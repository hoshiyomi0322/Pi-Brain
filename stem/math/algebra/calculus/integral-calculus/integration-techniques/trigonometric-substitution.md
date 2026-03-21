# Trigonometric Substitution
- ### $`\int{\sqrt{a^2-x^2}\,dx} = a^2\int{\cos^2{θ}\,dθ}`$
    - #### Set $`x = a\sin{θ}`$
        - $`dx = (a\sin{θ})^\prime\,dθ = a\cos{θ}\,dθ`$
    - #### $`\sqrt{a^2-x^2} = \sqrt{a^2-(a\sin{θ})^2} = a\sqrt{1-\sin^2{θ}} = a\sqrt{\cos^2{θ}} = a\cos{θ}`$
        - Pythagorean Identities：$`\sin^2{θ}+\cos^2{θ} = 1`$
    - #### $`\int{\sqrt{a^2-x^2}\,dx} = \int{a\cos{θ}\,dx} = \int{a^2\cos^2{θ}\,dθ}`$
- ### $`\int{\sqrt{a^2+x^2}\,dx} = a^2\int{\sec^3{θ}\,dθ}`$
    - #### Set $`x = a\tan{θ}`$
        - $`dx = (a\tan{θ})^\prime\,dθ = a\sec^2{θ}\,dθ`$
    - #### $`\sqrt{a^2+x^2} = \sqrt{a^2+(a\tan{θ})^2} = a\sqrt{1+\tan^2{θ}} = a\sqrt{\sec^2{θ}} = a\sec{θ}`$
        - Pythagorean Identities：$`\tan^2{θ}+1 = \sec^2{θ}`$
    - #### $`\int{\sqrt{a^2+x^2}\,dx} = \int{a\sec{θ}\,dx} = \int{a^2\sec^3{θ}\,dθ}`$
- ### $`\int{\sqrt{x^2-a^2}\,dx} = a^2\int{\sec{θ}\tan^2{θ}\,dθ}`$
    - #### Set x = a\sec{θ}
        - $`dx = (a\sec{θ})^\prime\,dθ = a\sec{θ}\tan{θ}\,dθ`$
    - #### $`\sqrt{x^2-a^2} = \sqrt{(a\sec{θ})^2-a^2} = a\sqrt{\sec^2{θ}-1} = a\sqrt{\tan^2{θ}} = a\tan{θ}`$
        - Pythagorean Identities：$`\tan^2{θ}+1 = \sec^2{θ}`$
    - #### $`\int{\sqrt{x^2-a^2}\,dx} = \int{a\tan{θ}\,dx} = \int{a^2\sec{θ}\tan^2{θ}\,dθ}`$

# Trigonometric Substitution of Rational and Radical Function
- ### Trigonometric Substitution of Rational Function
	- ### $`\int{\frac{1}{a^2+x^2}\,dx} = \frac{1}{a}\arctan{(\frac{x}{a})}+C`$
    	- $`(\arctan{x})^\prime = \frac{1}{1+x^2},~|x|<1`$
	- ### $`\int{\frac{1}{a^2-x^2}\,dx} = \frac{1}{a}\,\text{artanh}\,({\frac{x}{a}})+C`$
    	- $`(\text{artanh}\,x)^\prime = \frac{1}{1-x^2},~|x|<1`$
- ### Trigonometric Substitution of Rational Function
    - ### $`\int{\frac{1}{\sqrt{a^2-x^2}}\,dx}=\arcsin{(\frac{x}{a})}+C`$
        - $`(\arcsin{x})^\prime=\frac{1}{\sqrt{1-x^2}},~|x|<1`$
    - ### $`\int{\frac{1}{\sqrt{a^2+x^2}}\,dx}=\text{arsinh}\,{(\frac{x}{a})}+C`$
        - $`(\text{arsinh}\,x)^\prime=\frac{1}{\sqrt{1+x^2}}`$
    - ### $`\int{\frac{1}{\sqrt{x^2-a^2}}\,dx}=\text{arcosh}\,{(\frac{x}{a})}+C`$
        - $`(\text{arcosh}\,x)^\prime=\frac{1}{\sqrt{x^2-1}},~x>1`$

## eg：$`\int{\sqrt{4-x^2}\,dx}`$
- ### Set $`x=2\sin{θ}`$
    - $`dx=(2\sin{θ})^\prime\,dθ=2\cos{θ}\,dθ`$
- ### $`\sqrt{2^2-x^2}=\sqrt{2^2-(2\sin{θ})^2}=2\sqrt{1-\sin^2{θ}}=2\sqrt{\cos^2{θ}}=2\cos{θ}`$
    - Pythagorean Identities：$`\sin^2{θ}+\cos^2{θ}=1`$
- ### $`\int{\sqrt{2^2-x^2}\,dx}=\int{2\cos{θ}\,dx}=\int{4\cos^2{θ}\,dθ}=\int{2(\cos{2θ}+1)\,dθ}=\sin{2θ}+2θ+C`$
    - $`\cos^2{θ}=\frac{1+\cos{2θ}}{2}`$


