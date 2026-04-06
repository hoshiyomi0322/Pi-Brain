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
- ### Time Complexity＝T(n)忽略係數的最大項
    - $`T(n)`$＝執行次數
- #### eg
    - 執行次數＝$`T(n)=2n^2+n+1`$
    - 時間複雜度＝$`O(n^2)`$
- ### 常見的時間複雜度
|時間複雜度|$`O()`$|eg|
|:---:|:---:|:---:|
||$`O(1)`$|
||$`O(\log_a{n})`$|二分搜尋|
||$`O((\log_a{n})^b)`$|
||$`O(n)`$|線性搜尋
||$`O(n\log_a{n}),~(a,b>1)`$|合併排序
||$`O(n^2)`$|泡沫排序、插入排序、選擇排序|
||$`O(n^a)`$|矩陣相乘|
||$`O(a^n)`$|
||$`O(n!)`$|


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
