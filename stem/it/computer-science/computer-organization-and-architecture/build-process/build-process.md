# Language
- ### [High-Level Programming Language](../../../coding/programming-language/programming-language.md)
- ### Low-level Programing Language
    - ### [Assembly Language](../isa/isa.md#assembly-language)
    - ### [Machine Language](../isa/isa.md#machine-language)
- ### Intermediate Language
    - #### Register Transfer Language (RTL)

# Code
- ### Source code
    - #### [High-Level Programming Language](#high-level-programming-language)
    - #### [Assembly Language](#assembly-language)
- ### Object code
- ### Executable code
    - #### [Machine Language](#machine-language)

# Compilation
- ### Ahead-Of-Time Compilation (AOT Compilation)
    - #### [High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Preprocessor}}{\longrightarrow}`$ Preprocessed [Source code](#source-code) $`\overset{\text{Compiler}}{\longrightarrow}`$ [Assembly Language](#assembly-language) $`\overset{\text{Assembler}}{\longrightarrow}`$ [Object code](#object-code) $`\overset{\text{Linker}}{\longrightarrow}`$ [Executable code](#executable-code) $`\to`$ [Loader](loader.md)
- ### Just-In-Time Compilation (JIT Compilation)
    - #### [High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Compiler}}{\longrightarrow}`$ Bytecode $`\overset{\text{JIT Compiler}}{\longrightarrow}`$ [Executable code](#executable-code) (in memory) $`\to`$ execution

# Translator
- ### Assembler
    - #### [Assembly Language](#assembly-language) $`\overset{\text{Assembler}}{\longrightarrow}`$ [Object code](#object-code)
- ### Compiler
    - #### [High-Level Programming Language](#high-level-programming-language) $`\overset{\text{Compiler}}{\longrightarrow}`$ [Object code](#object-code)
- ### Interpreter
    - #### executes [Source code](#source-code) without compiling it to [Object code](#object-code)
    - #### eg：Python, JavaScript, Ruby

# Linker, Loader
- ### [Linker](linker.md)
- ### [Loader](loader.md)
