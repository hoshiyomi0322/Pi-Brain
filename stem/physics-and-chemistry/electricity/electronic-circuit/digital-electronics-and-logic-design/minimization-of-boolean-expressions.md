# Standard Forms
- ### Sum-of-Products (SOP)
- ### Product-of-Sums (POS)

# Canonical normal form
- ### Canonical [SOP](#sum-of-products-sop)
    - ### Minterm
- ### Canonical [POS](#product-of-sums-pos)
    - ### Maxterm

# Karnaugh map (K-map)
- ### Construction
- ### Grouping
    - #### Grouping 1s/0s 
        |Grouping|Rule|Output|
        |:---:|:---:|:---:|
        |Grouping 1s|Cover all cells containing 1s, ignoring 0s|[SOP](#sum-of-products-sop)|
        |Grouping 0s|Cover all cells containing 0s , ignoring 1s|[POS](#product-of-sums-pos)|
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
    |[SOP](#sum-of-products-sop) Form|$xy+\overline{x}z+yz=xy+\overline{x}z$|$yz$|
    |[POS](#product-of-sums-pos) Form|$\left(x+y\right) \left(\overline{x}+z\right) \left(y+z\right)=\left(x+y\right) \left(\overline{x}+z\right)$|$\left(y+z\right)$|
