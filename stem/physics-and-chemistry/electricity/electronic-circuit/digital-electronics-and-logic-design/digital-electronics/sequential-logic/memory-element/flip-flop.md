# Signals
- ### $clk=\text{Clock input}$
    - $\uparrow$ = [Rising Edge](../sequential-logic.md#edge-triggering)
    - $\downarrow$ = [Falling Edge](../sequential-logic.md#edge-triggering)
- ### $Q=\text{Present state}$
- ### $Q_{next}=\text{Next state}$

# SR Flip-Flop (Set-Reset)
- ### Signals
    - Input：$clk,~S,~R,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=S+\overline{R}Q$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$S$|$R$|$Q_{next}$|
    |:---:|:---:|:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|X|X|$Q$|
    |Hold|$\uparrow$|0|0|$Q$|
    |Reset|$\uparrow$|0|1|0|
    |Set|$\uparrow$|1|0|1|
    |Not Allowed|$\uparrow$|1|1|Invalid|

# D Flip-Flop (Data)
- ### Signals
    - Input：$clk,~D,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=D$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$Q_{next}$|
    |:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|$Q$|
    |Data|$\uparrow$|$D$|

# T Flip-Flop (Toggle)
- ### Signals
    - Input：$clk,~T,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=Q\oplus T=\overline{T}Q+T\overline{Q}$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$T$|$Q_{next}$|
    |:---:|:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|X|$Q$|
    |Hold|$\uparrow$|0|$Q$|
    |Toggle|$\uparrow$|1|$\overline{Q}$|

# JK Flip-Flop
- ### Signals
    - Input：$clk,~J,~K,~Q$
    - Output：$Q_{next}$
- ### Boolean Expression：$Q_{next}=J\overline{Q}+\overline{K}Q$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$J$|$K$|$Q_{next}$|
    |:---:|:---:|:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|X|X|$Q$|
    |Hold|$\uparrow$|0|0|$Q$|
    |Reset|$\uparrow$|0|1|0|
    |Set|$\uparrow$|1|0|1|
    |Toggle|$\uparrow$|1|1|$\overline{Q}$|
