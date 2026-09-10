# Mathematical Logic
- ### Propositional Logic
- ### Predicate Logic
    - #### First-Order Logic
    - #### High-Order Logic
- ### Proof Theory

# Logical Connective (Logical Operator)
|Name|Symbol|Definition|Venn Diagram|
|:---:|:---:|:---:|:---:|
|NOT (Negation)|$`\neg p ,~ \sim p ,~ \overline{p}`$||<img src="./image/not.png" width="70%">|
|AND (Conjunction)|$`p \land q ,~ p\cdot q`$||<img src="./image/and.png" width="70%">|
|OR (Disjunction)|$`p \lor q ,~ p+q`$||<img src="./image/or.png" width="70%">|
|Exclusive OR (XOR)|$`p \veebar q ,~ p\oplus q`$||<img src="./image/xor.png" width="70%">|
|NAND (Non-conjunction)|$`p\barwedge q ,~ p\uparrow q ,~ p \mid q ,~ \overline{p\cdot q}`$||<img src="./image/nand.png" width="70%">|
|NOR (Non-disjunction)|$`p \overline{\vee} q ,~ p\downarrow q ,~ \overline{p+q}`$||<img src="./image/nor.png" width="70%">|
|Exclusive NOR (XNOR)|$`p\odot q ,~ \overline{p\veebar q} ,~ \overline{p\oplus q}`$||<img src="./image/xnor.png" width="70%">|
|Equivalence (Biconditional, If and only if)|$`p\leftrightarrow q ,~ p\Leftrightarrow q ,~ p\iff q ,~ p\equiv q`$|$`\text{If and only if }p,~\text{then }q`$|<img src="./image/xnor.png" width="70%">|
|Nonequivalence|$`p\not\leftrightarrow q ,~ p\not\Leftrightarrow q ,~ p\not\iff q ,~ p \not\equiv q`$||<img src="./image/xor.png" width="70%">|
|Implication (Conditional, If)|$`p\to q,~p\Rightarrow q,~p\implies q`$|$`\text{If }p,~\text{then }q`$|<img src="./image/imply.png" width="70%">|
- ### Truth Table
    |$`p`$|$`q`$|$`\neg p`$<br>(NOT)|$`p \land q`$<br>(AND)|$`p \lor q`$<br>(OR)|$`p \veebar q`$<br>(XOR)|$`p\barwedge q`$<br>(NAND)|$`p \overline{\vee} q`$<br>(NOR)|$`\overline{p\veebar q}`$<br>(XNOR)|$`p\leftrightarrow q`$<br>(Equivalence)|$`p\not\leftrightarrow q`$<br>(Nonequivalence)|$`p\to q`$<br>(Implication)|
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    |T|T|F|T|T|F|F|F|T|T|F|T|
    |T|F|F|F|T|T|T|F|F|F|T|F|
    |F|T|T|F|T|T|T|F|F|F|T|T|
    |F|F|T|F|F|F|T|T|T|T|F|T|
- ### XNOR = Equivalence
    - #### XOR = Nonequivalence
- eg
    - $`x=2+y\iff y=2+x`$
    - $`x=2\implies x^2=4`$
