# Finite State Machine
- ### Formal Definition
    - $Q$ = a set of states
    - $Σ$ = Input <a href="/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/automata-theory-and-formal-languages.md#alphabet">Alphabet</a>
    - $Γ$ = Output <a href="/stem/it/computer-science/theory-of-computation/automata-theory-and-formal-languages/automata-theory-and-formal-languages.md#alphabet">Alphabet</a>
    - $δ$ = <a href="#state-transition-function-">State Transition Function</a>
    - $λ$ = <a href="#output-function-">Output Function</a>
    - $q_0$ = Start State ($q_0\in Q$)
    - $F$ = a set of Accept States ($F\subseteq Q$)
    - $\times$ = <a href="/stem/math/discrete-mathematics/set-theory/set-theory.md#cartesian-product">Cartesian Product</a>
- ### State Transition Function ($δ$)
    - Example：$δ:Q \times Σ \to Q$
- ### Output Function ($λ$)
    - Example：$λ:Q \times Σ \to Γ$

# Types of Finite State Machine
- ### [Finite State Acceptor](./types-of-finite-state-machine/finite-state-acceptor.md)：without output
    - #### [Deterministic Finite Automata (DFA)](./types-of-finite-state-machine/finite-state-acceptor.md#deterministic-finite-automata-dfa)
    - #### [Nondeterministic Finite Automata (NFA)](./types-of-finite-state-machine/finite-state-acceptor.md#nondeterministic-finite-automata-nfa)
- ### [Finite-State Transducer (FST)](./types-of-finite-state-machine/finite-state-transducer.md)：with output
    - #### [Moore Machine](./types-of-finite-state-machine/finite-state-transducer.md#moore-machine)
    - #### [Mealy Machine](./types-of-finite-state-machine/finite-state-transducer.md#mealy-machine)

# [Representations of Finite State Machine](representations-of-finite-state-machine.md)
- ### [State Transition Table](representations-of-finite-state-machine.md#state-transition-table)
- ### [State Graph](representations-of-finite-state-machine.md#state-graph)

# Sequence Detector

# Serial Binary Adder

