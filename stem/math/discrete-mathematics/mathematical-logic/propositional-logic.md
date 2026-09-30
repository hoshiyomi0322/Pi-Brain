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
    |$`T`$|$`T`$|$`F`$|$`F`$|$`T`$|$`T`$|$`T`$|$`T`$|
    |$`T`$|$`F`$|$`F`$|$`T`$|$`F`$|$`T`$|$`T`$|$`F`$|
    |$`F`$|$`T`$|$`T`$|$`F`$|$`T`$|$`F`$|$`F`$|$`T`$|
    |$`F`$|$`F`$|$`T`$|$`T`$|$`T`$|$`T`$|$`T`$|$`T`$|
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

# Rules of Inference
- ### Format
    |Rules of Inference|Corresponding Tautology|
    |:---:|:---:|
    |$`\begin{array}{l} \text{Premise}\\ \hline \therefore\text{Conclusion} \end{array}`$|$`\text{Premise} \to \text{Conclusion}`$|
    |$`\begin{array}{l} \text{Premise}_1 \\ \vdots \\ \text{Premise}_n \\ \hline \therefore\text{Conclusion}_1 \\ \vdots \\ \text{Conclusion}_m \end{array}`$|$`\left(\text{Premise}_1 \land \cdots \land \text{Premise}_n\right)\to \left(\text{Conclusion}_1 \land \cdots \land \text{Conclusion}_m\right)`$|
    |$`\begin{array}{l} \text{Premise}_1 ,~ \cdots ,~ \text{Premise}_n \\ \hline \therefore\text{Conclusion}_1 ,~ \cdots ,~ \text{Conclusion}_m \end{array}`$|$`\left(\text{Premise}_1 \land \cdots \land \text{Premise}_n\right)\to \left(\text{Conclusion}_1 \land \cdots \land \text{Conclusion}_m\right)`$|
- ### Rules of Implication
    |Name|Rules of Inference|Tautology|
    |:---:|:---:|:---:|
    |Modus Ponens<br>(MP, Law of Detachment)|$`\begin{array}{l} p \to q \\ p \\ \hline \therefore q \end{array}`$|$`\left(\left(p \to q\right) \land p\right) \to q`$|
    |Modus Tollens<br>(MT, Law of Contrapositive)|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Hypothetical Syllogism|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Disjunctive Syllogism|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Constructive Dilemma|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Addition|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Simplification|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Conjunction|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Absorption|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
    |Resolution|$`\begin{array}{l} \\ \hline \therefore \end{array}`$|$` \to `$|
- ### Rules of Replacement
    |Name|Rules of Inference|Tautology|
    |:---:|:---:|:---:|


