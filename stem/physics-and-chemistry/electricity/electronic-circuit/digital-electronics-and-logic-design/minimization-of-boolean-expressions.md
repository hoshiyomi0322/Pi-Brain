# Standard Form
- ### Sum-of-Products (SOP)：an expression formed by adding (ORing) two or more product terms {#sop}
    - #### Product Term：made of literals multiplied (ANDing) together {#product-term}
- ### Product-of-Sums (POS)：an expression formed by multiplying (ANDing) two or more sum terms {#pos}
    - #### Sum Term：made of literals added (ORing) together {#sum-term}
- ### Example (3 variables)
    - #### Example (SOP)
        - SOP：$F=A'B + BC + AC$
        - Product Term：$A'B,~BC,~AC$
    - #### Example (POS)
        - POS：$F=\left(A'+B\right) \cdot \left(B+C\right) \cdot \left(A+C\right)$
        - Sum Term：$\left(A'+B\right),~\left(B+C\right),~\left(A+C\right)$

# Canonical Normal Form
- ### Variables in the Boolean Function：$x_1 ,~\cdots,~ x_n$
    - #### Number of Variables = $n$
    - #### Number of Minterms/Maxterms = $2^n$
- ### Canonical [SOP](#sop)：a [SOP](#sop) in which every [product term](#product-term) is a [minterm](#minterm)
    - #### Minterm：a [product term](#product-term) that contains all the [variables in the Boolean function](#variables-in-the-boolean-function) exactly once, either complemented or uncomplemented {#minterm}
- ### Canonical [POS](#pos)：a [POS](#pos) in which every [sum term](#sum-term) is a [maxterm](#maxterm)
    - #### Maxterm：a [sum term](#sum-term) that contains all the [variables in the Boolean function](#variables-in-the-boolean-function) exactly once, either complemented or uncomplemented {#maxterm}
- ### Indexing
    |Term|Designated Output|
    |:---:|:---:|
    |Minterm ($m_i$)|$1$|
    |Maxterm ($M_i$)|$0$|
    - #### $\text{value}\left(x_j\right)$
        |Literals|$\text{value}_m\left(x_j\right)$|$\text{value}_M\left(x_j\right)$|
        |:---:|:---:|:---:|
        |$x_j$|$1$|$0$|
        |${x_j}'$|$0$|$1$|
    - #### Indexing Minterm：$m_i ,~ i=\sum\limits_{j=1}^n{2^{n-j}\text{value}_m\left(x_j\right)}$
    - #### Indexing Maxterm：$M_i ,~ i=\sum\limits_{j=1}^n{2^{n-j}\text{value}_M\left(x_j\right)}$
    - #### Indexing Boolean Function
        - Canonical SOP：$F=\sum{m\left(i_1,~\cdots,~i_k\right)} = m_{i_1} + \cdots + m_{i_k}$
        - Canonical POS：$F=\prod{M\left(i_1,~\cdots,~i_k\right)} = M_{i_1} \cdots M_{i_k}$
- ### Example (3 variables)
    - #### Example (Canonical SOP)
        - Canonical SOP：$F=\sum{m\left(3,~5,~7\right)} = m_3+m_5+m_7 = A'BC + AB'C + ABC$
        - Minterm：$m_5=5_{10}=101_2=AB'C$
    - #### Example (Canonical POS)
        - Canonical POS：$F=\prod{M\left(3,~5,~7\right)} = M_3 \cdot M_5 \cdot M_7 = \left(A+B'+C'\right) \cdot \left(A'+B+C'\right) \cdot \left(A'+B'+C'\right)$
        - Maxterm：$M_5=5_{10}=101_2 = \left(A'+B+C'\right)$

# Karnaugh map (K-map)
- ### Construction
- ### Grouping
    - #### Grouping 1s/0s 
        |Grouping|Rule|Output|
        |:---:|:---:|:---:|
        |Grouping 1s|Cover all cells containing 1s, ignoring 0s|[SOP](#sop)|
        |Grouping 0s|Cover all cells containing 0s , ignoring 1s|[POS](#pos)|
    - #### Group Size
        - The total cell count per group must be $2^n$
        - Make groups as large as possible to minimize the expression
    - #### Minimal Coverage
        - Use the minimum number of groups needed to minimize the expression
        - Eliminate redundant groups
    - #### Overlapping Groups
        - Cells can be reused across multiple groups
    - #### Wrap-around Adjacency
        - The leftmost and rightmost columns are adjacent to each other
        - The top and bottom rows are adjacent to each other
        - Groups can wrap around the edges of the K-map
    - #### Don't Care Conditions (X)
        - Can be treated as either 0 or 1 to form larger groups, or ignored if they do not help

# Quine-McCluskey Method
- ### Prime Implicant
- ### Prime Implicant Chart

# Consensus Theorem
- ### Consensus Term
- ### Form
    |Form|Boolean Expression|Consensus Term|
    |:---:|:---:|:---:|
    |[SOP](#sop) Form|$xy+\overline{x}z+yz=xy+\overline{x}z$|$yz$|
    |[POS](#pos) Form|$\left(x+y\right) \left(\overline{x}+z\right) \left(y+z\right)=\left(x+y\right) \left(\overline{x}+z\right)$|$\left(y+z\right)$|
