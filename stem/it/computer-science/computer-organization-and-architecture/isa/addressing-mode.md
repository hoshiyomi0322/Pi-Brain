# Notation
- ### $`X\left[ a \right]`$：the $`a`$-th bit in $`X`$
- ### $`X\left[ a:b \right]`$：bit from $`a`$ to $`b`$ in $`X`$
    - ### $a>b$
- ### $`\text{RAM}\left[ \text{address} \right]`$：the content of memory at address
- ### $`a \parallel b`$：bit concatenation of $`a`$ and $`b`$
    - ### eg：$`00 \parallel 10=0010`$

# Address
- ### Target Address：The Address of Code
- ### Effective Address：The Address of Data
    - $\text{Data}=\text{RAM}\left[ \text{Effective Address} \right]$


# Addressing mode for Code
- ### PC-Relative Addressing
    - $\text{Target Address}=\text{PC}+\text{offset}$
# Addressing mode for Data
- ### Immediate Addressing
    - $\text{Data}=\text{Constant}$
- ### Register Direct Addressing
    - $\text{Data}=\text{Register}$
# Addressing mode for Code or Data
- ### Direct Addressing
    - $\text{Target Address/Effective Address}=\text{Address}$
- ### Register Indirect Addressing
    - $\text{Target Address/Effective Address}=\text{Register}$
- ### Displacement Addressing (Base plus offset Addressing)
    - $\text{Target Address/Effective Address}=\text{base}+\text{offset}$
- ### Indexed Addressing
    - $\text{Target Address/Effective Address}=\text{base}+\text{Index Register}$
