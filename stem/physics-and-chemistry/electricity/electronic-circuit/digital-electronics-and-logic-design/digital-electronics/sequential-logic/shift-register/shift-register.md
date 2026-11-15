# Shift Register
- ### Signals
    - $clk=\href{../sequential-logic.md#clk}{\text{Clock input}}$
    - $D=\text{Data input}$
    - $Q=\text{Data output}$
- ### Uses [D Flip-Flop](../memory-element/flip-flop.md#d-flip-flop-data)

# Serial-In Serial-Out (SISO)
- ### Logic Diagram (4-bit)
    <img src="./image/siso.png" width="70%">
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$Q_i$|
    |:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|$Q_i$|
    |Shift|$\uparrow$|$\begin{cases} D & i=1 \\ Q_{i-1} & i\ne 1\end{cases}$|

# Serial-In Parallel-Out (SIPO)
- ### Logic Diagram (4-bit)
    <img src="./image/sipo.png" width="60%">
- ### Additional Input：[Clear ($Clr$)](../sequential-logic.md#clear)
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$CLR$|$clk$|$Q_i$|
    |:---:|:---:|:---:|:---:|
    |Clear|$1$|X|$0$|
    |Hold|$0$|$0/1/\downarrow$|$Q_i$|
    |Shift|$0$|$\uparrow$|$\begin{cases} D & i=1 \\ Q_{i-1} & i\ne 1\end{cases}$|

# Parallel-In Serial-Out (PISO)
- ### Logic Diagram (4-bit)
    <img src="./image/piso.png" width="60%">
- ### Additional Input：$\text{Shift}/\overline{\text{Load}}$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$\text{Shift}/\overline{\text{Load}}$|$Q_i$|
    |:---:|:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|X|$Q_i$|
    |Load|$\uparrow$|$0$|$D_i$|
    |Shift|$\uparrow$|$1$|$\begin{cases} D_i & i=1 \\ Q_{i-1} & i\ne 1\end{cases}$|

# Parallel-In Parallel-Out (PIPO)
- ### Logic Diagram (4-bit)
    <img src="./image/pipo.png" width="60%">
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$clk$|$Q_i$|
    |:---:|:---:|:---:|
    |Hold|$0/1/\downarrow$|$Q_i$|
    |Load|$\uparrow$|$D_i$|

# Bidirectional Shift Register
- ### Logic Diagram (4-bit, SISO)
    <img src="./image/bidirectional-shift-register.png" width="60%">
- ### Additional Input：$\text{Right}/\overline{\text{Left}}$
- ### [Truth Table](../../../digital-electronics-and-logic-design.md#truth-table)
    |Action|$\text{Right}/\overline{\text{Left}}$|$clk$|$Q_i$|
    |:---:|:---:|:---:|:---:|
    |Hold|X|$0/1/\downarrow$|$Q_i$|
    |Shift Left|$0$|$\uparrow$|$\begin{cases} D & i=4 \\ Q_{i+1} & i\ne 4 \end{cases}$|
    |Shift Right|$1$|$\uparrow$|$\begin{cases} D & i=1 \\ Q_{i-1} & i\ne 1 \end{cases}$|

# Universal Shift Register

# Linear Feedback Shift Register (LFSR)
- ### Number of States ($n$-bit)：$2^n-1$

# [Circular Shift Register](../counter/circular-shift-register/circular-shift-register.md)
- ### [Ring Counter](../counter/circular-shift-register/circular-shift-register.md#ring-counter)
- ### [Johnson Counter](../counter/circular-shift-register/circular-shift-register.md#johnson-counter)
