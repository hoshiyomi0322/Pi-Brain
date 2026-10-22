# Elements of Recursion
- ### Base Case
- ### Recursive Step

# Fibonacci Sequence

# Exponentiation by Squaring (Fast Exponentiation)
- $a^n = \begin{cases} 1 & \text{if }n=0 \\ a^{n/2} \times a^{n/2} & \text{if }n\text{ is even} \\ a^{\left(n-1\right)/2} \times a^{\left(n-1\right)/2} \times a & \text{if }n\text{ is odd} \end{cases}$
- ### Exponentiation by Squaring in C
    ```c
    int fastpow(int a, int n){
        if(n == 0) return 1;
        long long half = fastpow(a, n/2);
        if (n%2 == 0) return half*half;
        else return half*half*a;
    }
    ```
- ### Matrix Fast Exponentiating by Squaring
- ### Fast Modular Exponentiation
    
    - #### Fast Modular Exponentiation in C

# Tower of Hanoi

