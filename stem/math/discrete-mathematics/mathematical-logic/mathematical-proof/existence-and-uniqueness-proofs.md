# [Existence](../predicate-logic.md#quantifier) Proof
- ### Constructive Proof
- ### Non-constructive Proof
    - #### Methods of Proof
        - [Proof by Contradiction](mathematical-proof.md#proof-by-contradiction-reductio-ad-absurdum)
        - [Pigeonhole Principle](../../combinatorics/combinatorics.md#pigeonhole-principle)
        - [Intermediate Value Theorem](/stem/math/algebra/calculus/fundamental-theorem-of-calculus.md#intermediate-value-theorem-ivt)
- ### Example (Non-constructive Proof)：Show that there exist irrational numbers $x$ and $y$ such that $x^y$ is rational
    - $\sqrt{2}$ is irrational
    - Consider the number ${\sqrt{2}}^{\sqrt{2}}$
    - If ${\sqrt{2}}^{\sqrt{2}}$ is rational：$x=\sqrt{2},~y=\sqrt{2},~x^y={\sqrt{2}}^{\sqrt{2}}=\text{rational}$
    - If ${\sqrt{2}}^{\sqrt{2}}$ is irrational：$x={\sqrt{2}}^{\sqrt{2}},~y=\sqrt{2},~x^y={\left({\sqrt{2}}^{\sqrt{2}}\right)}^{\sqrt{2}}=2=\text{rational}$

# [Uniqueness](../predicate-logic.md#quantifier) Proof
- ### Existence and Uniqueness：$\exists x \Bigl( P\left(x\right) \land \forall y \bigl( P\left(y\right) \to x=y \bigr) \Bigr)$
    - #### Existence：$\exists x P\left( x \right)$
    - #### Uniqueness：$\forall y \forall z \bigl( P\left(y\right) \land P\left(z\right) \to y = z \bigr)$
- ### Example：Prove that the equation $2x + 3 = 7$ has a unique solution in the set of real numbers
    - #### Existence
        - $2x+3=7 \implies 2x=4 \implies x=2$
        - Let $x=2$
        - $2(2)+3=7$
        - Since the equation holds true, a solution exists
    - #### Uniqueness
        - Assume that $y$ and $z$ are both real solutions to the equation
        - $\begin{cases} 2y+3=7 \\ 2z+3=7 \end{cases}$
        - $2y+3=2z+3 \implies 2y=2z \implies y=z$
        - Since any two arbitrary solutions must be identical, the solution is unique
