# Conditional Sentence
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
- ### Equivalence
    - Implication $\equiv$ Contrapositive
    - Converse $\equiv$ Inverse