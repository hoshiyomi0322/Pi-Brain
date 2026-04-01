# Synchronous Counter and Asynchronous Counter

# Binary Counter
- ### [Binary Counter](binary-counter.md)

# Circular Shift Register
||Ring Counter|Johnson Counter|
|:---:|:---:|:---:|
|Feedback|Feedback|Inverted Feedback|
|Number of States ($n$-bit)|$n$|$2n$|
|Encoding|One-Hot||
- ### Ring Counter
    - #### Truth Table ($3$-bit)
        |State|Data Ouput($Q$)|
        |:---:|:---:|
        |$S_0$|100|
        |$S_1$|010|
        |$S_2$|001|
- ### Johnson Counter
    - #### Truth Table ($3$-bit)
        |State|Data Ouput($Q$)|
        |:---:|:---:|
        |$S_0$|000|
        |$S_1$|100|
        |$S_2$|110|
        |$S_3$|111|
        |$S_4$|011|
        |$S_5$|001|

