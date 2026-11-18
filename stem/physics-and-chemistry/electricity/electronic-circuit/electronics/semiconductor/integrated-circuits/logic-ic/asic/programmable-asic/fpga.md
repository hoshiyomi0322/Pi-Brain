# Field-Programmable Gate Array (FPGA)

# FPGA Architecture
<div align="center"><img src="./image/fpga-architecture.png" width="50%"></div>

- ### [Configurable Logic Block (CLB)](#configurable-logic-block-clb-1)
- ### Switch Block
- ### Programmable Interconnect
- ### I/O Block

# Configurable Logic Block (CLB)
<div align="center"><img src="./image/clb.png" width="50%"></div>

- ### Look-Up Table (LUT)
    - Signal
        ||Number of lines|Lines|
        |:---:|:---:|:---:|
        |**SRAM Bits**|$2^n$|$I_0,~I_1,~\cdots,~I_{2^n-1}$|
        |**LUT Inputs (Selects)**|$n$|$S_0,~S_1,~\cdots,~S_{n-1}$|
        |**LUT Outputs**|$1$|$Y$|
    - [Logic Diagram](/stem/physics-and-chemistry/electricity/electronic-circuit/digital-electronics-and-logic-design/digital-electronics-and-logic-design.md#logic-diagram) (4-bit)
        
        <img src="./image/lut.png" width="50%">
    - Uses [Multiplexer (MUX)](/stem/physics-and-chemistry/electricity/electronic-circuit/digital-electronics-and-logic-design/digital-electronics/combinational-logic/mux-and-demux/multiplexer.md)
- ### [D Flip-Flop](/stem/physics-and-chemistry/electricity/electronic-circuit/digital-electronics-and-logic-design/digital-electronics/sequential-logic/memory-element/flip-flop.md#d-flip-flop-data)
- ### [Multiplexer (MUX)](/stem/physics-and-chemistry/electricity/electronic-circuit/digital-electronics-and-logic-design/digital-electronics/combinational-logic/mux-and-demux/multiplexer.md)
