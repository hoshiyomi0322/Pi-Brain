# Binary Tree
- ### Complete Binary Tree
    - ### [Binary Heap](#binary-heap-1)
        - ### Max Heap
        - ### Min Heap
- ### [Binary Search Tree(BST)](#binary-search-treebst-1)
    - ### Splay Tree
- ### [Binary Expression Tree](#binary-expression-tree-1)
- ### Balanced Tree
    - ### [AVL Tree](#avl-tree-1)
    - ### Red-Black Tree
- ### Huffman Tree
    - ### Huffman Coding
- ### Fibonacci Tree
- ### Threaded Binary Tree

# Binary Tree Traversal

# Binary Search Tree(BST)
- ### $`\text{Left Subtree}<\text{Root Node}<\text{Right Subtree}`$

# Binary Expression Tree
- ### Expression
    - ### Parent Node：Operand
    - ### Child Node：Operator
- ### Binary Expression Tree Traversal
    - ### Prefix Expression(Preorder)：+AB
    - ### Infix Expression(Inorder)：A+B
    - ### Postfix Expression(Postorder)：AB+

# Binary Heap
- ### Max Heap
    - ### $`\text{Root Node}>\text{Left Subtree and Right Subtree}`$
- ### Min Heap
    - ### $`\text{Root Node}<\text{Left Subtree and Right Subtree}`$
- ### Heapify
- ### insert：插入last node的下一個
- ### delete：用last node取代

# AVL Tree
- ### Balance Factor(BF)＝左子樹高度-右子樹高度
	|Balance Factor|Balance|
    |:---:|:---:|
    |$`\|BF\|<2`$|balanced|
	|$`\|BF\|\geq2`$|unbalanced|
- ### Rotation(rebalancing)：將不平衡旋轉成平衡
	|Direction|Rotation|
    |:---:|:---:|
    |Left Left (LL)|右旋|
	|Right Right (RR)|左旋|
	|Left Right (LR)|左旋→右旋|
	|Right Left (RL)|右旋→左旋|
- ### delete
- ### searching
