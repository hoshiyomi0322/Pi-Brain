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

# Reduction of [State Transition Table](#state-transition-table)
- ### Equivalent State
    - Same Output
    - Same Next State
- ### Implication Table
    1. #### Construct a Stepped Table
       - Horizontal axis：$`S_1,~\cdots~S_{n-1}`$
       - Vertical axis：$`S_2,~\cdots~S_n`$
    2. #### Eliminate State combinations that have different outputs
    3. #### For State Combinations with the same Outputs, fill in their Conditions (Next State Combinations)
    4. #### Eliminate State Combinations whose Conditions have already been eliminated
    5. #### Repeat the above step until no more eliminations are possible
- ### eg
    - ### State Transition Table
        |Present State|Next State<br>(x=0)|Next State<br>(x=1)|Output<br>(x=0)|Output<br>(x=1)|
        |:---:|:---:|:---:|:---:|:---:|
        |A|C|A|0|0|
        |B|A|B|0|0|
        |C|C|B|1|1|


