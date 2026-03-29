- ### Boolean Expression
- ### Logic Diagram
- ### Truth Table
    - ### [Karnaugh map(K-map)](#karnaugh-mapk-map-1)
- ### Hardware Description Language(HDL)
    - ### [VHDL](./hdl/vhdl.md)
    - ### Verilog

# Logic Gate
||Boolean Expression|Logic Diagram Symbol|Truth Table|
|:---:|:---:|:---:|:---:|
|Buffer|$`A`$||
|NOT|$`A^\prime,\overline{A}`$|
|AND|$`A\cdot B`$|
|OR|$`A+B`$|
|Exclusive OR (XOR)|$`A\oplus B`$|
|NAND|$`\overline{A\cdot B}`$|
|NOR|$`\overline{A+B}`$|
|Exclusive NOR (XNOR)|$`A\odot B,~\overline{A\oplus B}`$|

# Properties
- ### De Morgan's laws
    - NAND：$`\overline{A\cdot B}=\overline{A}+\overline{B}`$
    - NOR：$`\overline{A+B}=\overline{A}\cdot\overline{B}`$
- ### XOR：$`A\oplus B=\overline{A}\cdot B+A\cdot\overline{B}`$
    - XNOR：$`A\odot B=\overline{A\oplus B}=A\cdot B+\overline{A}\cdot\overline{B}`$

# Karnaugh map(K-map)

# Digital Electronics
- ### Combinational Logic
- ### [Sequential Logic](./digital-electronics/sequential-logic/sequential-logic.md)

# Hazard
- ### Static Hazard
- ### Static 1-Hazards
- ### Static 0-Hazards
- ### Dynamic Hazard

# Programmable Logic Device(PLD)
- ### Programmable Logic Array(PLA)
- ### Complex PLD(CPLD)
- ### Field-Programmable Gate Array(FPGA)
---
- ### General-Purpose Input/Output(GPIO)
- ### Seven-Segment Display
- ### DIP Switch
