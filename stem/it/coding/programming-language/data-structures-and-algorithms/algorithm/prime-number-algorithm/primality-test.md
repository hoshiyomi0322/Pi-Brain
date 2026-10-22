# Miller–Rabin primality test

# AKS primality test

# Fermat Primality test
- ### Step
    1. Pick a random integer $a$ in the range $2 \le a \le n-2$
    2. $\text{If }\gcd{\left(a,~n\right)}\ne 1,~\text{then }n\text{ is composite}$
    3. Compute $\left(a^{n-1} \bmod{m}\right)$ using [Fast Modular Exponentiation](../algorithm-design-techniques/recursion.md#fast-modular-exponentiation)
    4. $\text{If }\left(a^{n-1} \bmod{m}\right)\ne 1,~\text{then }n\text{ is composite}$
       - $\text{If }\left(a^{n-1} \bmod{m}\right)= 1,~\text{then }n\text{ is probably prime}$
    5. Repeat this test $k$ times with different random values of $a$ to increase confidence
    6. repeat this test k times with different random values of $a$ to increase confidence
- ### [Fermat's Little Theorem](/stem/math/discrete-mathematics/number-theory/prime-number.md#fermats-little-theorem)：$a^{n-1} \equiv 1\pmod{n}$

# Lucas-Lehmer Primality Test
- ### Primality test for [Mersenne numbers](/stem/math/discrete-mathematics/number-theory/prime-number.md#mersenne-numbers)

