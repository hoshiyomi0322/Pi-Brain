# Format
|Rules of Inference|Corresponding Tautology|
|:---:|:---:|
|$\begin{array}{l} \text{Premise}\\ \hline \therefore\text{Conclusion} \end{array}$|$\text{Premise} \to \text{Conclusion}$|
|$\begin{array}{l} \text{Premise}_1 \\ \vdots \\ \text{Premise}_n \\ \hline \therefore\text{Conclusion}_1 \\ \vdots \\ \text{Conclusion}_m \end{array}$|$\left(\text{Premise}_1 \land \cdots \land \text{Premise}_n\right)\to \left(\text{Conclusion}_1 \land \cdots \land \text{Conclusion}_m\right)$|
|$\begin{array}{l} \text{Premise}_1 ,~ \cdots ,~ \text{Premise}_n \\ \hline \therefore\text{Conclusion}_1 ,~ \cdots ,~ \text{Conclusion}_m \end{array}$|$\left(\text{Premise}_1 \land \cdots \land \text{Premise}_n\right)\to \left(\text{Conclusion}_1 \land \cdots \land \text{Conclusion}_m\right)$|

# Rules of Implication
|Name|Rules of Inference|Tautology|
|:---:|:---:|:---:|
|Modus Ponens<br>(MP, Law of Detachment)|$\begin{array}{l} p \to q \\ p \\ \hline \therefore q \end{array}$|$\biggl(\left(p \to q\right) \land p\biggr) \to q$|
|Modus Tollens<br>(MT, Law of Contrapositive)|$\begin{array}{l} p \to q \\ \neg q \\ \hline \therefore \neg p \end{array}$|$\biggl(\left(p \to q\right) \land \neg q\biggr) \to \neg p$|
|Hypothetical Syllogism|$\begin{array}{l} p \to q \\ q \to r \\ \hline \therefore p \to r \end{array}$|$\biggl( \left(p \to q\right) \land \left(q \to r\right) \biggr) \to \left(p \to r\right)$|
|Disjunctive Syllogism|$\begin{array}{l} p \lor q \\ \neg p \\ \hline \therefore q \end{array}$|$\biggl(\left(p \lor q\right) \land \neg p\biggr) \to q$|
|Constructive Dilemma|$\begin{array}{l} p \to q \\ r \to s \\ p \lor r \\ \hline \therefore q \lor s \end{array}$|$\biggl( \left(p \to q\right) \land \left(r \to s\right) \land \left(p \lor r \right) \biggr) \to \left(q \lor s \right)$|
|Addition|$\begin{array}{l} p \\ \hline \therefore p \lor q \end{array}$|$p \to \left(p \lor q\right)$|
|Simplification|$\begin{array}{l} p \land q \\ \hline \therefore p \end{array}$|$\left(p \land q\right) \to p$|
|Conjunction|$\begin{array}{l} p \\ q \\ \hline \therefore p \land q \end{array}$|$\left(p \land q\right) \to \left(p \land q\right)$|
|Absorption|$\begin{array}{l} p \to q \\ \hline \therefore p \to \left(p \land q\right) \end{array}$|$\left(p \to q\right) \to \biggl( p \to \left(p \land q\right) \biggr)$|
|Resolution|$\begin{array}{l} p \lor q \\ \neg p \lor r \\ \hline \therefore q \lor r \end{array}$|$\biggl( \left(p \lor q\right) \land \left(\neg p \lor r\right) \biggr) \to \left(q \lor r\right)$|

# Rules of Replacement
|Name|Rules of Inference|Tautology|
|:---:|:---:|:---:|

# Rules of Inference for Quantified Statements
|Name|Rules of Inference|Tautology|
|:---:|:---:|:---:|
|Universal Instantiation (UI)|$\begin{array}{l} \forall x P\left(x\right) \\ \hline \therefore P\left(c\right) \end{array}$|$\forall x P\left(x\right) \to P\left(c\right)$|
|Universal Generalization (UG)|$\begin{array}{l} P\left(c\right)\text{ for an arbitrary }c \\ \hline \therefore \forall x P\left(x\right) \end{array}$|$P\left(c\right)\text{ for an arbitrary }c \to \forall x P\left(x\right)$|
|Existential Instantiation (EI)|$\begin{array}{l} \exists x P\left(x\right) \\ \hline \therefore P\left(c\right)\text{ for some element }c \end{array}$|$\exists x P\left(x\right) \to P\left(c\right)\text{ for some element }c$|
|Existential Generalization (EG)|$\begin{array}{l} P\left(c\right)\text{ for some element }c \\ \hline \therefore \exists x P\left(x\right) \end{array}$|$P\left(c\right)\text{ for some element }c \to \exists x P\left(x\right)$|

# Mathematical Proof
- ### [Mathematical Proof](mathematical-proof.md)

