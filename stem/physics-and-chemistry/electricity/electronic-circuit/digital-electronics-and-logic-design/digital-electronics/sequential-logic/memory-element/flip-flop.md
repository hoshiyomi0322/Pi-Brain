# Signals
- ### $clk=\text{Clock input}$
- ### $Q=\text{Present state}$
- ### $Q_{next}=\text{Next state}$

# SR Flip-Flop (Set-Reset)
- ### Signals
    - Input：$clk,~S,~R,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=S+\overline{R}Q$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$S$|$R$|$Q_{next}$|
    |:---:|:---:|:---:|:---:|
    |Hold|0|0|$Q$|
    |Reset|0|1|0|
    |Set|1|0|1|
    |Not Allowed|1|1|✗|

# D Flip-Flop (Data)
- ### Signals
    - Input：$clk,~D,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=D$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$Q_{next}$|
    |:---:|:---:|:---:|
    |Hold|0|$Q$|
    |Data|1|$D$|

# T Flip-Flop (Toggle)
- ### Signals
    - Input：$clk,~T,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=Q\oplus T=\overline{T}Q+T\overline{Q}$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$T$|$Q_{next}$|
    |:---:|:---:|:---:|
    |Hold|0|$Q$|
    |Toggle|1|$\overline{Q}$|

# JK Flip-Flop
- ### Signals
    - Input：$clk,~J,~K,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=J\overline{Q}+\overline{K}Q$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$J$|$K$|$Q_{next}$|
    |:---:|:---:|:---:|:---:|
    |Hold|0|0|Q|
    |Reset|0|1|0|
    |Set|1|0|1|
    |Toggle|1|1|$\overline{Q}$|
