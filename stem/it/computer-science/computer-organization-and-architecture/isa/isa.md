# Instruction Set Architecture (ISA)
- ### [Types of ISA](#types-of-isa-1)
- ### [Data Type](#data-type-1)
- ### Literal
    - ### Literal Pool
- ### Instruction Format
    - ### Instruction Length
- ### [Assembler Directives](#assembler-directives-1)
- ### [Register](#register-1)
- ### [Addressing mode](addressing-mode.md)
- ### [Two Pass Assembler](#two-pass-assembler-1)

# Types of ISA
- ### RISC, CISC
    ||[RISC](#reduced-instruction-set-computer-risc)|[CISC](#complex-instruction-set-computer-cisc)|
    |:---:|:---:|:---:|
    |**Instruction Complexity**|Simple|Complex|
    |**Instruction Format**|Fixed|Variable|
    |**Word Size**|Instruction Length|2 bytes|
    |**Execution Cycles**|Single clock cycle|Multiple clock cycles|
    |**Number of Registers**|Many|Few|
    |**Power Consumption**|Low|High|
    |**Memory Access**|Load/Store only|Can Access Memory Directly|
    |**Pipeline**|Easy|Difficult|
    |**Emphasis**|Software|Hardware|
    - ### Reduced Instruction Set Computer (RISC)
        - #### Advanced RISC Machine (ARM)
        - #### RISC-V
        - #### [Microprocessor without Interlocked Pipeline Stages (MIPS)](./mips/mips.md)
    - ### Complex Instruction Set Computer (CISC)
        - #### x86
        - #### Virtual Address eXtension (VAX)
- ### Very Long Instruction Word (VLIW)

# Data Type
- ### Byte
- ### Halfword
- ### Word

# Assembler Directives (Pseudo-op)
- ### Assembler Directives：commands in Assembly Language that instruct the assembler how to translate the code
- ### Types of Assembler Directives
    - ### Data Directives：allocate memory and assigns initial values to variables or constants
    - ### Segment Directives：instruct the assembler regarding the specific memory segment where code or data should be allocated
    - ### Macro Directives：define a block of code (macro) that can be reused multiple times

# Register
- ### General-Purpose Register (GPR)
- ### Special-Purpose Register (SPR)
    - ### Program Counter (PC)：holds the address of the next instruction that would be executed

# Low-level Programing Language
- ### Assembly Language
    - ### Mnemonic
        - eg：ADD, MOV
    - ### Operand
- ### Machine Language
    - ### Operation Code (Opcode)
        - #### Opcode table
    - ### Operand (binary)
- ### Mnemonic $`\overset{\text{Assembler}}{\longrightarrow}`$ Opcode

# Two Pass Assembler
- ### used to resolve Forward Reference
- ### Location Counter：holds the address of the instruction that is being assembled
- ### Symbol Table：stores Symbols and their corresponding Addresses
- ### eg
    ```mips
    main:
        j target # Forward Reference to an undefined label
    target: # Target label address is defined here
        addi $t2,$zero,3
    ```
    - Symbol Table
        |Symbol (Label)|Address|
        |:---:|:---:|
        |main|0x0000|
        |target|0x0004|


