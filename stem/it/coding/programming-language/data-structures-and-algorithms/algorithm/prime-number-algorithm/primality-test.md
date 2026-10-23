# Miller–Rabin Primality test
- ### Step
    1. Given an odd number $n$ ($n>2$)
    2. $n-1 = 2^s \times q$, where $q$ is odd
    3. Pick a random integer $a$ in the range $2 \le a \le n-2$
    4. Calculate $\left(x = a^q \bmod n\right)$
    5. $\text{If }\Bigl(x \equiv 1\pmod{n}\Bigr)\text{ or }\Bigl(x \equiv n-1\pmod{n}\Bigr),~\text{then }n\text{ is probably prime}$
    6. $\text{If }\Bigl(x \not\equiv 1\pmod{n}\Bigr)\text{ and }\Bigl(x \not\equiv n-1\pmod{n}\Bigr),~\text{then }\text{set }x_0=x,~\text{repeat for }i\text{ from }1\text{ to }s-1$
       1. Calculate $\left(x_i=\left(x_{i-1}\right)^2 = a^{2^iq} \bmod n\right)$
       2. $\text{If }\Bigl(x_i \equiv n-1\pmod{n}\Bigr),~\text{then }n\text{ is probably prime}$
       3. $\text{If }\Bigl(x_i \equiv 1\pmod{n}\Bigr),~\text{then }n\text{ is composite}$
    7. $\text{If }\forall i\Bigl(x_i \not\equiv n-1\pmod{n}\Bigr),~\text{then }n\text{ is composite}$
    8. Repeat this test $k$ times with different random values of $a$ to increase confidence
- ### [Fermat's Little Theorem](/stem/math/discrete-mathematics/number-theory/prime-number.md#fermats-little-theorem)：$a^{n-1} \equiv 1\pmod{n}$
    - $a^{n-1} = a^{2^iq} = \left(a^q\right)^{2^s}$
    - $n-1 \equiv -1\pmod{n}$
    - $x = a^q \bmod n$
        - $a^{n-1} \bmod n = a^{2^iq} \bmod n = \left(a^q\right)^{2^s} \bmod n = x^{2^s} \bmod n$
        - $x \equiv 1\pmod{n} \implies \left(a^q\right)^{2^s} \equiv 1^{2^s}\pmod{n} \implies a^{n-1} \equiv 1\pmod{n} \implies n\text{ is probably prime}$
        - $x \equiv n-1\pmod{n} \implies x \equiv -1\pmod{n} \implies \left(a^q\right)^{2^s} \equiv \left(-1\right)^{2^s}\pmod{n} \implies a^{n-1} \equiv 1\pmod{n} \implies n\text{ is probably prime}$
    - $x_0=x,~i\in[1,~s-1]$
        - $x_i=\left(x_{i-1}\right)^2 = a^{2^iq} \bmod n$
        - $a^{n-1} \bmod n = a^{2^iq} \bmod n = \left(a^{\left(2^i \times q\right)}\right)^{2^{\left(s-i\right)}} \bmod n = \left(x_i\right)^{2^{\left(s-i\right)}} \bmod n$
        - $x_i \equiv n-1\pmod{n} \implies x_i \equiv -1\pmod{n} \implies a^{2^iq} \equiv \left(-1\right)^{2^{\left(s-i\right)}}\pmod{n} \implies a^{n-1} \equiv 1\pmod{n} \implies n\text{ is probably prime}$
        - $x_i \equiv 1\pmod{n} \implies \left(x_{i-1}\right)^2 \equiv 1\pmod{n} \implies \left(x_{i-1}\right)^2-1 \equiv 0\pmod{n} \implies \left(x_{i-1}+1\right)\left(x_{i-1}-1\right) \equiv 0\pmod{n} \implies \text{but }x_{i-1}\not\equiv\pm1\pmod{n} \implies n\text{ is composite}$

# AKS Primality test

# Fermat Primality test
- ### Step
    1. Given an odd number $n$ ($n>2$)
    2. Pick a random integer $a$ in the range $2 \le a \le n-2$
    3. $\text{If }\gcd{\left(a,~n\right)}\ne 1,~\text{then }n\text{ is composite}$
    4. Calculate $\left(a^{n-1} \bmod{m}\right)$ using [Fast Modular Exponentiation](../algorithm-design-techniques/recursion.md#fast-modular-exponentiation)
    5. $\text{If }\left(a^{n-1} \bmod{m}\right)\ne 1,~\text{then }n\text{ is composite}$
       - $\text{If }\left(a^{n-1} \bmod{m}\right)= 1,~\text{then }n\text{ is probably prime}$
    6. Repeat this test $k$ times with different random values of $a$ to increase confidence
- ### [Fermat's Little Theorem](/stem/math/discrete-mathematics/number-theory/prime-number.md#fermats-little-theorem)：$a^{n-1} \equiv 1\pmod{n}$

# Lucas-Lehmer Primality Test
- ### Primality test for [Mersenne numbers](/stem/math/discrete-mathematics/number-theory/prime-number.md#mersenne-numbers)

