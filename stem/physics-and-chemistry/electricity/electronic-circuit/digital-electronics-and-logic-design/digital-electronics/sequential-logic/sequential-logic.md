# Sequential Logic
- ### Memory Element
    - ### [Flip-Flop (FF)](./memory-element/flip-flop.md)
    - ### [Latch](./memory-element/latch.md)
- ### [Counter](./counter/counter.md)
    - ### [Binary Counter](./counter/binary-counter.md)
- ### [Shift Register](./shift-register/shift-register.md)

# [Finite State Machine (FSM)](./finite-state-machine/finite-state-machine.md)
- ### [Finite State Acceptor](./finite-state-machine/types-of-finite-state-machine/finite-state-acceptor.md)
- ### [Finite-State Transducer (FST)](./finite-state-machine/types-of-finite-state-machine/finite-state-transducer.md)
- ### [Representations of Finite State Machine](./finite-state-machine/representations-of-finite-state-machine.md)

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
    - Clear Negative：$ClrN=\overline{Clr}$
- ### Feedback：part of the output is feedback to the input

# Clock Gating
- ### Clock Gating：When a register is not in use, turn off its clock to reduce dynamic power.
    - Cons：potential timing issues and synchronization problems
- ### Input Signals
    - ### $clk=\text{Clock input}$
    - ### $en=\text{Enable}$
- ### Boolean Expression：$output=clk\cdot en$
- ### Truth Table
    |$en$|$output$|
    |:---:|:---:|
    |$0$|$0$|
    |$1$|$clk$|

