# Time Complexity
- ### Notation
    |Big O Notation|Big Ω Notation|Big Θ Notation|
    |:---:|:---:|:---:|
    |$`O()`$|$`Ω()`$|$`Θ()`$|
    |Worst-case Time Complexity<br>(Upper Bound)|Best-case Time Complexity<br>(Lower Bound)|Average-case Time Complexity|
    - ### Strict Bounds
        |Little o Notation|Little ω Notation|
        |:---:|:---:|
        |$`o()`$|$`ω()`$|
        |Worst-case Time Complexity<br>(Strict Upper Bound)|Best-case Time Complexity<br>(Strict Lower Bound)|
- ### Time Complexity = the dominant term of $`T(n)`$ ignoring coefficients
    - $`T(n)`$ = number of operations
- #### eg
    - number of operations = $`T(n)=2n^2+n+1`$
    - Time Complexity = $`O(n^2)`$
- ### Common Time Complexities
    <img src="./image/time-complexity.png" width="60%">

    |Time Complexity|$`O()`$|eg|
    |:---:|:---:|:---:|
    ||$`O(1)`$||
    ||$`O(\log_a{n})`$|[Binary search]()|
    ||$`O((\log_a{n})^b)`$|||
    ||$`O(n)`$|[Linear search]()|
    ||$`O(n\log_a{n}),~(a,b>1)`$|[Merge sort]()|
    ||$`O(n^2)`$|[Bubble sort](), [Insertion sort](), [Selection sort]()|
    ||$`O(n^a)`$|[Matrix multiplication]()|
    ||$`O(a^n)`$||
    ||$`O(n!)`$||

# Space Complexity

# Computational Complexity Theory

- ### Nondeterministic Polynomial Time (NP)
- ### Polynomial Time (P)
    - $`\text{P} \subseteq \text{NP}`$
- ### NP-Hard
- ### NP-Complete
    - $`\text{NP-Complete}=\text{NP}\cap \text{NP-Hard}`$

# Master Theorem
- ### Master Theorem：$`T(n)=aT(\frac{n}{b})+f(n)`$

# Amortized Analysis
