# Modulo
- $a \bmod{m} = r$
    - $a=m\times q+r,~q\in \mathbb{Z},~0\le r < m$
- ### Example
    - $5 \bmod{3} = 2,~5=3\times1+2$
    - $-5 \bmod{3} = 1,~-5=3\times\left(-2\right)+1$
- ### Properties of Modulo
    - $a \bmod{m} = (a + m) \bmod{m}$
    - $\left(a+b\right) \bmod{m} = \left(a\bmod{m} + b\bmod{m}\right) \bmod{m}$
        - $\left(a+m\right) \bmod{m} = a\bmod{m}$
    - $\left(a-b\right) \bmod{m} = \left(a\bmod{m} - b\bmod{m}\right) \bmod{m}$
    - $\left(ab\right) \bmod{m} = \left(a\bmod{m} \times b\bmod{m}\right) \bmod{m}$
        - $a^b \bmod{m} = \left(a \bmod{m}\right)^b\bmod{m}$

# Congruence Modulo
- $a\equiv b \pmod{m}$
    - $a \bmod{m}=b \bmod{m}$
    - $a=b+km$
- ### Properties of Congruence Modulo
    - #### Reflexivity：$a\equiv a \pmod{m}$
    - #### Symmetry：$\text{If }a\equiv b \pmod{m},~\text{then }b\equiv a \pmod{m}$
    - #### Transitivity：$\text{If }a\equiv b \pmod{m},~\text{and }b\equiv c \pmod{m},~\text{then }a\equiv c \pmod{m}$
    - #### $\text{For }a\equiv b \pmod{m},~c\in C$
        - $a+c\equiv b+c \pmod{m}$
        - $a-c\equiv b-c \pmod{m}$
        - $ac\equiv bc \pmod{m}$
        - $a^c\equiv b^c \pmod{m},~c\ge0$
        - $P\left(a\right)\equiv P\left(b\right) \pmod{m},~\text{for any polynomial }P(x)\text{ with integer coefficients}$
    - #### $\text{For }a_1\equiv b_1 \pmod{m},~a_2\equiv b_2 \pmod{m}$
        - $a_1+a_2\equiv b_1+b_2 \pmod{m}$
        - $a_1-a_2\equiv b_1-b_2 \pmod{m}$
        - $a_1a_2\equiv b_1b_2 \pmod{m}$

# Modular Multiplicative Inverse
- $a^{-1}\equiv b \pmod{m}$
    - $ab\equiv 1 \pmod{m}$
- ### Find the modular multiplicative inverse
    - [Extended Euclidean Algorithm](/stem/it/coding/programming-language/data-structures-and-algorithms/algorithm/euclidean-algorithm.md#extended-euclidean-algorithm)
    - [Euler's Theorem](#eulers-theorem)

# Euler's Theorem
- ### [Fermat's little theorem](prime-number.md#fermats-little-theorem)
