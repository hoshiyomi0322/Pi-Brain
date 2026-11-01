# First Come, First Serve scheduling (FCFS)
- ### [FIFO (First-In, First-Out) Queue](/stem/it/coding/programming-language/data-structures-and-algorithms/data-structure/linear-data-structure/queue.md)
- ### Convoy Effect
    - short process behind long process

# Shortest Job First scheduling (SJF)
- ### Dynamic Prediction：predict the length of the next CPU burst through Exponential Averaging
    - #### Predicted value for the next CPU burst：$τ_{n+1}=αt_n+(1-α)τ_n$
        - $t_n$ = Actual length of $n^{th}$ CPU burst
        - $τ_n$ = The previously predicted value for the $n^{th}$ CPU burst
    - $α,~0\leα\le1$
        |$α$|Formula|Meaning|
        |:---:|:---:|:---:|
        |$α=0$|$τ_{n+1}=τ_n$|Recent history does not count|
        |$α=1$|$τ_{n+1}=t_n$|Only the actual last CPU burst counts|

# Round-Robin scheduling (RR)
- ### Time Slice (Time Quantum)

# Priority scheduling
- ### Problem：[Starvation](/stem/it/computer-science/concurrent-computing/concurrent-computing.md#starvation)

# Multilevel Queue scheduling

# Multilevel Feedback Queue scheduling

# Thread Scheduling
- ### Contention Scope
    - #### Process-Contention Scope (PCS)
    - #### System-Contention Scope (SCS)

# Multiple-Processor Scheduling

