# Types of Sorting
- ### [Comparison Sort](./types-of-sorting/comparison-sort.md)
- ### [Linear Sort](./types-of-sorting/linear-sort.md)

# Properties of Sorting
- ### Stability
    |Stability|Definition|Example|
    |:---:|:---:|:---:|
    |Stable sorting|sort equal elements while maintaining their original relative order|<img src="./image/stable.png" width="60%">|
    |Unstable sorting (Not stable sorting)|sort equal elements but may change their original relative order|<img src="./image/unstable.png" width="60%">|
- ### Space used
    |Space used|Definition|Space Complexity|Example|
    |:---:|:---:|:---:|:---:|
    |In-place sorting|Sorts the data on the original data structure using little or no additional memory|Low<br>(typically $O\left(1\right)$ or $O\left(\log{n}\right)$)|[Bubble Sort](./types-of-sorting/comparison-sort.md#bubble-sort), [Insertion Sort](./types-of-sorting/comparison-sort.md#insertion-sort), [Quick Sort](./types-of-sorting/comparison-sort.md#quick-sort)|
    |Not-in-place sorting (Out-of-place sorting)|Requires additional memory to store the data during the sorting process|High<br>(typically $O\left(n\right)$ or more)|[Merge Sort](./types-of-sorting/comparison-sort.md#quick-sort), [Counting Sort](./types-of-sorting/linear-sort.md#counting-sort), [Radix Sort](./types-of-sorting/linear-sort.md#radix-sort)|
