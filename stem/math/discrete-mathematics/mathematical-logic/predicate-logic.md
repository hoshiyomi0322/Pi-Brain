# Quantifier
|Name|Symbol|Definition|Example|
|:---:|:---:|:---:|:---:|
|Universal Quantifier|$`\forall x`$|$`\text{For All }x`$|$`\forall x \in R:x^2 \ge 0`$|
|Existential Quantifier|$`\exists x`$|$`\text{There Exists at least one }x`$|$`\exists x \in R:x^2=4`$|
|Uniqueness Quantifier|$`\exists! x`$|$`\text{There Exists a Unique }x`$|$`\exists !x \in R:x+3=5`$|
- ### Counting Quantifier
    |Symbol|Definition|Example|
    |:---:|:---:|:---:|
    |$`\exists_{=k} x`$|$\text{There Exists exactly }k\text{ elements }x$|
    |$`\exists_{\ge k} x`$|$\text{There Exists at least }k\text{ elements }x$|

# Propositional Function
- ### Propositional Function：$`P\left(x_1,~\cdots,~x_n\right)`$
    - #### Variables：$`x_1,~\cdots,~x_n`$
- ### Propositional Function with Quantifier
    |Symbol|Definition|
    |:---:|:---:|
    |$`\forall x P\left(x\right)`$|$`\text{For all }x, P(x)\text{ holds}`$|
    |$`\exists x P\left(x\right)`$|$`\text{There Exists at least one }x, P(x)\text{ holds}`$|
    |$`\exists! x P\left(x\right)`$|$`\text{There Exists a Unique }x, P(x)\text{ holds}`$|
    |$`\forall x \in X P\left(x\right)`$|$`\text{For all elements }x\text{ in the set }X, P(x)\text{ holds}`$|
    |$`\exists x \in X P\left(x\right)`$|$`\text{There Exists at least one element }x\text{ in the set }X, P(x)\text{ holds}`$|
    |$`\neg\forall x P\left(x\right)`$|$`\text{Not all }x \text{ satisfy } P(x)`$|
    |$`\neg\exists x P\left(x\right)`$|$`\text{There does not Exist any }x \text{ satisfying } P(x)`$|
    |$`\forall x \neg P\left(x\right)`$|$`\text{For all }x, P(x)\text{ does not hold}`$|
    |$`\exists x \neg P\left(x\right)`$|$`\text{There Exists at least one }x, P(x)\text{ does not hold}`$|


- ### eg：$`P\left(x\right):x>2 ,~ Q\left(x,~y\right):x^2+y=35`$
    - $`\forall x P\left(x\right) = \forall x:x>2`$
    - $`\exists x \neg P\left(x\right) = \exists x:x\le 2`$
    - $`\exists x \forall y Q\left(x,~y\right) = \exists x \forall y: x^2+y=35`$

# Quantifier Equivalences
- ### $`\text{If }x={x_1,~\cdots,~x_n}`$
    - $`\forall x P\left(x\right) \equiv P\left(x_1\right) \land \cdots \land P\left(x_n\right)`$
    - $`\exists x P\left(x\right) \equiv P\left(x_1\right) \lor \cdots \lor P\left(x_n\right)`$
- ### Commutative Laws for Quantifiers
    - $`\forall x \forall y P\left(x,~y\right) \equiv \forall y \forall x P\left(x,~y\right)`$
    - $`\exists x \exists y P\left(x,~y\right) \equiv \exists y \exists x P\left(x,~y\right)`$
- ### Distributive Laws for Quantifiers
    - $`\forall x \left( P\left(x\right) \land Q\left(x\right) \right) \equiv \left(\forall x P\left(x\right) \right) \land \left(\forall x Q\left(x\right) \right)`$
    - $`\exists x \left( P\left(x\right) \lor Q\left(x\right) \right) \equiv \left(\exists x P\left(x\right) \right) \lor \left(\exists x Q\left(x\right) \right)`$
- ### De Morgan's Laws for Quantifiers
    - $`\neg\forall xP\left(x\right) \equiv \exists x \neg P\left(x\right)`$
    - $`\neg\exists xP\left(x\right) \equiv \forall x \neg P\left(x\right)`$
- ### Conditional Equivalences for Quantifiers
    - $`\neg\forall x \bigl( P\left(x\right) \to Q\left(x\right) \bigr) \equiv \exists x \bigl( P\left(x\right) \land \neg Q\left(x\right) \bigr)`$
    - $`\neg\exists x \bigl( P\left(x\right) \land Q\left(x\right) \bigr) \equiv \forall x \bigl( P\left(x\right) \to \neg Q\left(x\right) \bigr)`$
- ### Equivalences Involving Quantifiers and AND/OR
    - $`\forall x \left(P\left(x\right) \land Q \right) \equiv \bigl(\forall x P\left(x\right) \bigr) \land Q`$
    - $`\forall x \left(P\left(x\right) \lor Q \right) \equiv \bigl(\forall x P\left(x\right) \bigr) \lor Q`$
    - $`\exists x \left(P\left(x\right) \land Q \right) \equiv \bigl(\exists x P\left(x\right) \bigr) \land Q`$
    - $`\exists x \left(P\left(x\right) \lor Q \right) \equiv \bigl(\exists x P\left(x\right) \bigr) \lor Q`$
- ### Equivalences Involving Quantifiers and Conditionals
    - $`\forall x \left(P\left(x\right) \to Q \right) \equiv \bigl(\exists x P\left(x\right) \bigr) \to Q`$
    - $`\forall x \left(P \to Q\left(x\right) \right) \equiv P \to \bigl(\forall x Q\left(x\right) \bigr)`$
    - $`\exists x \left(P\left(x\right) \to Q \right) \equiv \bigl(\forall x P\left(x\right) \bigr) \to Q`$
    - $`\exists x \left(P \to Q\left(x\right) \right) \equiv P \to \bigl(\exists x Q\left(x\right) \bigr)`$
