# Conditional Probability：$`P(A\mid B)`$
- ### $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$
    - #### $P(A\mid B)$ ＝ the probability of $A$ under the condition $B$
- ### Bayes' Theorem：$`P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(B\mid A)P(A)}{P(B)}`$

# Joint Probability：$`P(A\cap B)`$
- ### $P(A\cap B)=P(A\mid B)P(B)=P(B\mid A)P(A)$
- ### Independent events, Mutually Exclusive events
    |Independent events|Mutually Exclusive events|
    |:---:|:---:|
    |<img src="independent.png" width="60%">|<img src="mutually-exclusive.png" width="60%">|
    |$P(A\cap B)=P(A)P(B)$|$P(A\cap B)=0=\varnothing$|
    |$`P(A\mid B)=P(A),~P(B\mid A)=P(B)`$|$P(A\mid B)=P(B\mid A)=0$|

# Union Probability：$`P(A\cup B)`$
- ### $P(A\cup B)=(P(A)+P(B))-P(A\cap B)$
    - #### [Inclusion–Exclusion Principle](../../../discrete-mathematics/set-theory/set-theory.md#inclusionexclusion-principle)
- ### Mutually Exclusive events, Collectively Exhaustive events
    - #### [Mutually Exclusive events](#independent-events-mutually-exclusive-events)：$`P(A\cup B)=P(A)+P(B)`$
    - #### Collectively Exhaustive events：$`P(A\cup B)=S`$
    - #### Mutually Exclusive and Collectively Exhaustive events：$`P(A\cup B)=P(A)+P(B)=S`$

# Law of Total Probability
<div align="center">
    <img src="law-of-total-probability.png" width="40%">
</div>

- ### $\{A_1\cdots A_n\}$ is Mutually Exclusive and Collectively Exhaustive events
- ### $P(B)=\sum\limits_{k=1}^{n}{P(A_k\cap B)}=\sum\limits_{k=1}^{n}{(P(B\mid A_k)P(A_k))}$
- ### [Bayes' Theorem](#bayes-theorem)：$`P(A_i\mid B)=\frac{P(A_i\cap B)}{P(B)}=\frac{P(B\mid A_i)P(A_i)}{P(B)}=\frac{P(B\mid A_i)P(A_i)}{\sum\limits_{k=1}^{n}{(P(B\mid A_k)P(A_k))}}`$

