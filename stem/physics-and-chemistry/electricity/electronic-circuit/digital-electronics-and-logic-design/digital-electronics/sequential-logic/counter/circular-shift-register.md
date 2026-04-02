# Circular Shift Register
||[Ring Counter](#ring-counter)|[Johnson Counter](#johnson-counter)|
|:---:|:---:|:---:|
|Feedback|Feedback|Inverted Feedback|
|Number of States ($n$-bit)|$n$|$2n$|

# Ring Counter
- ### Encoding：One-Hot
- ### Truth Table ($4$-bit)
    |State|Data Ouput($Q$)|
    |:---:|:---:|
    |$S_0$|1000|
    |$S_1$|0100|
    |$S_2$|0010|
    |$S_3$|0001|

# Johnson Counter
- ### Truth Table ($4$-bit)
    |State|Data Ouput($Q$)|
    |:---:|:---:|
    |$S_0$|0000|
    |$S_1$|1000|
    |$S_2$|1100|
    |$S_3$|1110|
    |$S_4$|1111|
    |$S_5$|0111|
    |$S_6$|0011|
    |$S_7$|0001|

- ### State ($n$-bit)：$`S_i=\begin{cases}{\underbrace{1\cdots 1}_{i}\,\underbrace{0\cdots 0}_{n-i}}&{\text{if }0\leq i\leq n}\\ {\underbrace{0\cdots 0}_{i-n}\,\underbrace{1\cdots 1}_{2n-i}}&{\text{if }n<i\leq 2n}\end{cases}`$

