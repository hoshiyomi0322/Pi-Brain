# Conditional Statements
|Name|Symbol|Definition|Venn Diagram|
|:---:|:---:|:---:|:---:|
|Implication (Conditional, If)|$`p\to q,~p\Rightarrow q,~p\implies q`$|$`\text{If }p,~\text{then }q`$|<img src="./image/imply.png" width="70%">|
|Converse|$`q \to p`$|$`\text{If }q,~\text{then }p`$|<img src="./image/converse.png" width="70%">|
|Inverse|$`\neg p \to \neg q`$|$`\text{If not }p,~\text{then not }q`$|<img src="./image/converse.png" width="70%">|
|Contrapositive|$`\neg q \to \neg p`$|$`\text{If not }q,~\text{then not }p`$|<img src="./image/imply.png" width="70%">|
- ### Truth Table
    |$`p`$|$`q`$|$`\neg p`$|$`\neg q`$|$`p\to q`$<br>(Implication)|$`q \to p`$<br>(Converse)|$`\neg p \to \neg q`$<br>(Inverse)|$`\neg q \to \neg p`$<br>(Contrapositive)|
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    |T|T|F|F|T|T|T|T|
    |T|F|F|T|F|T|T|F|
    |F|T|T|F|T|F|F|T|
    |F|F|T|T|T|T|T|T|
- ### Equivalences of Conditional Statements
    |Equivalences|Symbol|
    |:---:|:---:|
    |Implication $\equiv$ Contrapositive|$`p\to q \equiv \neg q \to \neg p`$|
    |Converse $\equiv$ Inverse|$`q \to p \equiv \neg p \to \neg q`$|

# Tautology, Contradiction, and Contingency
|Name|Definition|Example|
|:---:|:---:|:---:|
|Tautology|A statement that is always True|$`p \lor \neg p`$|
|Contradiction|A statement that is always False|$`p \land \neg p`$|
|Contingency|A statement that can be either True or False depending on its variables|$`p \lor q`$, $`\neg p`$|
