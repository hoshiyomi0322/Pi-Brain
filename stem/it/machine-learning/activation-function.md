# Types of Activation Functions
- ### Liner Activation Function
- ### Non-Liner Activation Function
    - #### Saturated Activation Function
    - #### Non-Saturated Activation Function
    - #### Softmax

# Saturated Activation Function
- ### Sigmoid (Logistic)
    - Squashes input values into a range between 0 and 1, making it popular for output layers in binary classification
- ### Tanh (Hyperbolic Tangent)
    - Similar to the sigmoid function, but it maps values between -1 and 1 and centers the data around zero
- ### Vanishing Gradient Problem

# Non-Saturated Activation Function
- ### ReLU (Rectified Linear Unit)
    - Outputs the input directly if it is positive, and returns 0 if it is negative. It is the most common choice for hidden layers because it speeds up training
    - #### Dying ReLU Problem
- ### Leaky ReLU
    - A small variation of ReLU that allows a tiny, non-zero gradient for negative inputs to prevent "dead" neurons

# Softmax
- Converts raw output scores into probability distributions for multi-class classification problems

