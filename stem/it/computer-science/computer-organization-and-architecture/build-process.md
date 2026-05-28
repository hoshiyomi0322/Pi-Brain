# Language
- ### High-Level Programming Language
- ### Assembly Language
- ### Intermediate Language
    - #### Register Transfer Language (RTL)
- ### [Machine Language](./isa/isa.md#machine-language)

# Code
- ### Source code
    - #### [High-Level Programming Language](#high-level-programming-language)
    - #### [Assembly Language](#assembly-language)
- ### Object code
- ### Executable code
    - #### [Machine Language](#machine-language)

# Library
- ### Static Library
- ### Dynamic-Link Library (DLL)
- ### Shared Library

# Translator
- ### Assembler：[Assembly Language](#assembly-language) $`\overset{\text{Assembler}}{\longrightarrow}`$ [Object code](#object-code)
- ### Compiler：[High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Compiler}}{\longrightarrow}`$ [Object code](#object-code)
    - ### Ahead-Of-Time Compilation (AOT Compilation)
        - #### [High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Preprocessor}}{\longrightarrow}`$ Preprocessed [Source code](#source-code) $`\overset{\text{Compiler}}{\longrightarrow}`$ [Assembly Language](#assembly-language) $`\overset{\text{Assembler}}{\longrightarrow}`$ [Object code](#object-code) $`\to`$ [Linker](#linker)
    - ### Just-In-Time Compilation (JIT Compilation)
        - #### [High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Compiler}}{\longrightarrow}`$ Bytecode $`\overset{\text{JIT Compiler}}{\longrightarrow}`$ [Executable code](#executable-code) (in memory) $`\to`$ execution
- ### Interpreter：executes [Source code](#source-code) without compiling it to [Object code](#object-code)
    - ### eg：Python, JavaScript, Ruby

# Linker, Loader
- ### <span id="linker"> Linker：[Object code](#object-code) + [Library Files](#library) $`\overset{\text{Linker}}{\longrightarrow}`$ [Executable code](#executable-code) </span>
- ### Loader：loads [Executable code](#executable-code) into memory, prepares them for execution
