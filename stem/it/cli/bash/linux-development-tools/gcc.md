# Bash
- ### [Bash](bash.md)

# GNU Compiler Collection (GCC)
- ### [Ahead-Of-Time Compilation (AOT Compilation)](/stem/it/computer-science/computer-organization-and-architecture/build-process/build-process.md#ahead-of-time-compilation-aot-compilation)
    - #### Source code $`\overset{\text{Preprocessor}}{\longrightarrow}`$ Preprocessed Source code $`\overset{\text{Compiler}}{\longrightarrow}`$ [Assembly Language](/stem/it/computer-science/computer-organization-and-architecture/isa/isa.md#assembly-language) $`\overset{\text{Assembler}}{\longrightarrow}`$ [Object code](/stem/it/computer-science/computer-organization-and-architecture/build-process/build-process.md#object-code) $`\overset{\text{Linker}}{\longrightarrow}`$ [Executable code](/stem/it/computer-science/computer-organization-and-architecture/build-process/build-process.md#executable-code) $`\overset{\text{Execute}}{\longrightarrow}`$ [Loader](/stem/it/computer-science/computer-organization-and-architecture/build-process/loader.md)
- ### Preprocessor + Compiler + Assembler + [Linker](/stem/it/computer-science/computer-organization-and-architecture/build-process/linker.md)
    - #### [GNU C Compiler (gcc)](#gnu-c-compiler-gcc-1)
    - #### [GNU C++ Compiler (g++)](#gnu-c-compiler-g-1)
    - ### [make](#make-1)
- ### Execute：`<path>`
    ```bash
    ./main # Path of Executable code
    ```

# Options
|Options|Description|
|:---:|:---:|
|`-o <filename>`|Specifies the name of the output file<br>default filename is `a`|
|`-Wall`|Enables all common compiler warning messages|
- ### Compilation
    |Options|Description|
    |:---:|:---:|
    |`-E`|Preprocessing only<br>no output file|
    |`-S`|Preprocessing, Compilation only<br>output file is [Assembly Language](/stem/it/computer-science/computer-organization-and-architecture/isa/isa.md#assembly-language)(`.s`)|
    |`-c`|Preprocessing, Compilation, Assembly only<br>output file is [Object code](/stem/it/computer-science/computer-organization-and-architecture/build-process/build-process.md#object-code)(`.o`)|

# GNU C Compiler (gcc)
- ### Command：`gcc [source code...] [options...]`
- ### [Options](#options)
- ### example
    ```bash
    gcc main.c # include Preprocessor, Compiler, Assembler, Linker
    gcc main.c sub.c # Compiles two source files
    gcc main.c -o main # output filename is `main`
    ```

# GNU C++ Compiler (g++)
- ### Command：`g++ [source code...] [options...]`
- ### [Options](#options)
- ### example
    ```bash
    g++ main.cpp # include Preprocessor, Compiler, Assembler, Linker
    g++ main.cpp sub.cpp # Compiles two source files
    g++ main.cpp -o main # output filename is `main`
    ```

# make
- ### makefile
    ```makefile
    target: main.c
    # comment
    ```

