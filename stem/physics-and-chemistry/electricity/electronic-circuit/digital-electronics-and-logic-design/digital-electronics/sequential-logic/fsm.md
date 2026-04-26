# State Transition
- ### State Transition Table
- ### State Graph
    - Element：State, Input, Next State, Ouput
    - Outgoing Transitions：$`\text{State}\overset{Input}{\longrightarrow}\text{Next State, Ouput}`$

# Completely Specified [State Graph](#state-graph)
- ### Completely Specified State Graph：Each State specifies the Next State and Output for all Inputs
- ### Conditions
    - #### All Inputs are defined for Each State：$`\sum{C_i}=1`$
    - #### No Input Condition satisfies more than one Outgoing Transition：$`C_i\cdot C_j=0`$
- ### Each State has $2^n$ Input condition for $n$ inputs
    - #### Inputs：$`X_1,~X_2,~\cdots ,~X_n`$
    - #### Input condition on $`i`$-th Outgoing Transitions：$`C_i=X_1X_2\cdots X_n`$

# Types of Finite State Machine
||Moore Machine|Mealy Machine|
|:---:|:---:|:---:|
|Output|State|State+Input|
- ### Moore Machine
- ### Mealy Machine


# Sequence Detector

# Serial Binary Adder

# [Counter](./counter/counter.md)
- ### [Binary Counter](./counter/binary-counter.md)