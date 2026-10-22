# Elements of Recursion
- ### Base Case
- ### Recursive Step

# Fibonacci Sequence

# Exponentiation by Squaring (Fast Exponentiation)
- $a^n = \begin{cases} 1 & \text{if }n=0 \\ a^{n/2} \times a^{n/2} & \text{if }n\text{ is even} \\ a^{\left(n-1\right)/2} \times a^{\left(n-1\right)/2} \times a & \text{if }n\text{ is odd} \end{cases}$
    - ### Exponentiation by Squaring in C
        ```c
        long long fastpow(int a, int n){
            if(n == 0) return 1;
            long long half = fastpow(a, n/2);

            if(n%2 == 0) return half*half;
            else return half*half*a;
        }
        ```
- ### Matrix Fast Exponentiating by Squaring
- ### Fast [Modular](/stem/math/discrete-mathematics/number-theory/modular-arithmetic.md) Exponentiation
    - $a^n \bmod{m} = \begin{cases} 1\bmod{m} & \text{if }n=0 \\ \Bigl( \left(a^{n/2} \bmod{m}\right) \times \left(a^{n/2} \bmod{m}\right) \Bigr) \bmod{m} & \text{if }n\text{ is even} \\ \Bigl( \left(a^{\left(n-1\right)/2} \bmod{m}\right) \times \left(a^{\left(n-1\right)/2} \bmod{m}\right) \times \left(a \bmod{m}\right) \Bigr) \bmod{m} & \text{if }n\text{ is odd} \end{cases}$
    - #### Fast Modular Exponentiation in C
        ```c
        long long fastmod(int a, int n, int m) {
            if(n == 0) return 1%m;
            long long half = fastmod(a, n/2, m);
            long long halfmod = (half*half)%m;

            if(n%2 == 0) return halfmod;
            else return (halfmod*(a%m))%m;
        }
        ```

# Tower of Hanoi

