# Sequential Logic
- ### Memory Element
    - ### [Flip-Flop(FF)](./memory-element/flip-flop.md)
    - ### [Latch](./memory-element/latch.md)
- ### [Finite State Machine(FSM)](fsm.md)
    - ### [Counter](./counter/counter.md)
- ### [Shift Register](./shift-register/shift-register.md)

# Triggering Methods
- ### Level-triggered
    - ### High Level-triggered
    - ### Low Level-triggered
- ### Edge-triggered
    - ### Rising Edge-triggered
    - ### Falling Edge-triggered

# Input Signals
- ### Clock input ($clk$)
    - Clock Domain Crossing (CDC)
- ### Clear ($Clr$)：Clear the State
    |$Clr$|Action|
    |:---:|:---:|
    |$0$|Hold|
    |$1$|Reset|
    - Clear Negative：$`ClrN=\overline{Clr}`$
- ### Feedback：part of the output is feedback to the input

# Clock Gating
- ### Clock Gating：When a register is not in use, turn off its clock to reduce dynamic power.
    - Cons：potential timing issues and synchronization problems
- ### Input Signals
    - ### $`clk=\text{Clock input}`$
    - ### $`en=\text{Enable}`$
- ### Boolean Expression：$`output=clk\cdot en`$
- ### Truth Table
    |$en$|$output$|
    |:---:|:---:|
    |$0$|$0$|
    |$1$|$clk$|

