
# Set
- ### Set：$`S=\set{a_1,~\cdots ,~a_n}`$
- ### Universal Set：$`U`$
- ### Empty Set：$`\varnothing`$
- ### Venn Diagram
    <img src="venn-diagram.png" width="20%">

# Set Operations
- ### Intersection：$`A\cap B`$
    <img src="intersection.png" width="20%">
	
    - $`\bigcap\limits_{i=1}^{n}A_i=A_1\cap\cdots\cap A_n`$
- ### Union：$`A\cup B`$
    <img src="union.png" width="20%">
    
    - $`\bigcup\limits_{i=1}^{n}A_i=A_1\cup\cdots\cup A_n`$
- ### Complement：$`\overline{A},~A^\prime`$
    <img src="complement.png" width="20%">

# Set Relations
- ### Superset：$`A\supseteq B=A\text{ is a superset of }B=A\text{ contains }B`$
    - eg：$`\set{1,~2,~3}\supseteq \set{1,~2}`$
- ### Subset：$`A\subseteq B=A\text{ is a subset of }B=B\text{ contains }A`$
    - eg：$`\set{1,~2}\subseteq \set{1,~2,~3}`$
- ### Element of：$`A\in B=A\text{ is a element of }B`$
    - eg：$`1\in \set{1,~2,~3}`$

- ### Properties of Relations
    - ### Reflexive
    - ### Symmetric
        - ### Asymmetric
    - ### Transitive

# Properties of Sets
- ### Commutative Law
    - $`A\cap B=B\cap A`$
    - $`A\cup B=B\cup A`$
- ### Associative Law
    - $`(A\cap B)\cap C=A\cap(B\cap C)`$
    - $`(A\cup B)\cup C=A\cup(B\cup C)`$
- ### Distributive Law
    - $`(A\cap B)\cup C=(A\cup C)\cap(B\cup C)`$
    - $`(A\cup B)\cap C=(A\cap C)\cup(B\cap C)`$
- ### Idempotent Law
    - $`A\cup A=A\cap A=A`$
- ### Identity Law
    - $`A\cap U=A\cup\emptyset=A`$
- ### Complement Law
    - $`A\cap A^\prime=\emptyset`$
    - $`A\cup A^\prime=U`$
- ### De Morgan's Laws
    - $`(A\cap B)^\prime=A^\prime\cup B^\prime`$
        
        <img src="de-morgans-laws-1.png" width="20%">
    - $`(A\cup B)^\prime=A^\prime\cap B^\prime`$
        
        <img src="de-morgans-laws-2.png" width="20%">

# Inclusion–Exclusion Principle
- ### $n$ sets：$`\bigcup\limits_{i=1}^{n}A_i=\sum\limits_{k=1}^{n}((-1)^{k+1}(\sum\limits_{1\le i_1<\cdots<i_k\le n}(A_{i_1}\cap\cdots\cap A_{i_k})))=\sum\limits_{i=1}^{n}A_i-\sum\limits_{1\le i_1<i_2\le n}(A_{i_1}\cap A_{i_2})+\cdots+(-1)^{n+1}(A_1\cap\cdots\cap A_n)`$
- ### 2 sets：$`(A\cup B)=(A+B)-(A\cap B)`$
- ### 3 sets：$`(A\cup B\cup C)=(A+B+C)-((A\cap B)+(A\cap C)+(B\cap C))+(A\cap B\cap C)`$
    <img src="inclusion–exclusion-principle.png" width="25%">


