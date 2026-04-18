# Encoding
- ### Character Encoding
    - ### [ASCII](#ascii-1)
    - ### [Unicode](#unicode-1)
        - ### UTF-8 (8-bit Unicode Transformation Format)
        - ### UTF-16 (16-bit Unicode Transformation Format)
- ### Binary-to-text Encoding
    - ### [Base64](#base64-1)
- ### [Compression Encoding](#compression-encoding-1)
    - ### [Run-Length Encoding (RLE)](#run-length-encoding-rlecompress-repeated-data)
    - ### [Huffman Coding](#huffman-codingencode-each-symbol-based-on-frequency)
- ### encodeURI/decodeURI

# ASCII
- ### Character Set (Hex)
    |Hex|0|1|2|3|4|5|6|7|8|9|A|B|C|D|E|F|
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    |**0x**|`NUL`|`SOH`|`STX`|`ETX`|`EOT`|`ENQ`|`ACK`|`BEL`|`BS`|`HT`|`LF`|`VT`|`FF`|`CR`|`SO`|`SI`|
    |**1x**|`DLE`|`DC1`|`DC2`|`DC3`|`DC4`|`NAK`|`SYN`|`ETB`|`CAN`|`EM`|`SUB`|`ESC`|`FS`|`GS`|`RS`|`US`|
    |**2x**|`SP`|!|"|#|$|%|&|'|(|)|*|+|,|-|.|/|
    |**3x**|0|1|2|3|4|5|6|7|8|9|:|;|<|=|>|?|
    |**4x**|@|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|
    |**5x**|P|Q|R|S|T|U|V|W|X|Y|Z|[|\|]|^|_|
    |**6x**|`|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|
    |**7x**|p|q|r|s|t|u|v|w|x|y|z|{|\||}|~|`DEL`|

# Unicode
- ### Control Pictures

# Base64
- ### Base64 Encoding Process
    1. #### Convert the original data into binary
    2. #### Divide the binary data into groups of 6 bits
        - Base64：$\log_2{64}=6$ (bits)
    3. #### Map each group to a character in the [Base64 Alphabet](#base64-alphabet)
- ### Base64 Alphabet
    <img src="./image/base64.png" width="70%">
- ### eg：`Sui` → `U3Vp`
    <img src="./image/base64-eg.png" width="60%">

# Compression Encoding
- ### Run-Length Encoding (RLE)：compress repeated data
    - eg：abbccc→1a2b3c
- ### Huffman Coding：encode each symbol based on frequency
    - #### [Huffman Tree]

