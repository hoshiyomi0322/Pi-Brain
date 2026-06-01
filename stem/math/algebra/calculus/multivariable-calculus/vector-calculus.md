- ### Scalar Field, Vector Field
    ||Scalar Field|Vector Field|
    |:---:|:---:|:---:|
    |**Function**|$`f\left( x_1 ,~ \cdots ,~ x_n \right)`$|$`\vec{f}\left( x_1 ,~ \cdots ,~ x_n \right)`$|
    |**Function Value**|Scalar|Vector|
    - #### Vector Field：$`\vec{f}\left( x_1 ,~ \cdots ,~ x_n \right) = \left( f_1\left( x_1,~\cdots,~x_n \right),~\cdots,~f_m\left( x_1,~\cdots,~x_n \right) \right)`$
- ### $`\nabla=\left( \frac{\partial}{\partial x_1} ,~ \cdots ,~ \frac{\partial}{\partial x_n} \right)`$
- ### Vector Operator
    |Vector Operator|Transform|
    |:---:|:---:|
    |[**Gradient**](#gradient)|$`f~(\text{Scalar Field}) \to \nabla f~(\text{Vector Field})`$|
    |[**Divergence**](#divergence)|$`\vec{f}~(\text{Vector Field}) \to \nabla\cdot\vec{f}~(\text{Scalar Field})`$|
    |[**Curl**](#curl)|$`\vec{f}~(\text{Vector Field}) \to \nabla\times\vec{f}~(\text{Vector Field})`$|
    |[**Laplacian Operator (Laplacian)**](#laplacian-operator-laplacian)|$`f~(\text{Scalar Field}) \to \nabla\cdot\nabla f~(\text{Scalar Field})`$|

# Gradient
- ### $`\nabla f=\left( \frac{\partial f}{\partial x_1} ,~ \cdots ,~ \frac{\partial f}{\partial x_n} \right)`$
- ### $`\nabla f\left(α_1,~\cdots,~α_n\right)`$

# Divergence
- ### $`\nabla\cdot\vec{f} = \frac{\partial f_1}{\partial x_1}+\cdots+\frac{\partial f_n}{\partial x_n}`$

# Curl
- ### $`\nabla\times\vec{f}=\left| \begin{matrix} i&j&k \\ \frac{\partial}{\partial x}&\frac{\partial}{\partial y}&\frac{\partial}{\partial z} \\ f_x&f_y&f_z \end{matrix} \right|=\left(\frac{\partial f_z}{\partial y}-\frac{\partial f_y}{\partial z},~\frac{\partial f_x}{\partial z}-\frac{\partial f_z}{\partial x},~\frac{\partial f_y}{\partial x}-\frac{\partial f_x}{\partial y}\right)`$

# Laplacian Operator (Laplacian)
- ### $`\nabla^2f = \nabla\cdot\nabla f = ∆f = \frac{\partial^2 f}{\partial {x_1}^2}+\cdots+\frac{\partial^2 f}{\partial {x_n}^2}`$
- ### Harmonic Function：$`\nabla^2f=0`$

# Jacobian Matrix and Determinant
- ### Jacobian Matrix
    - ### $`J = \begin{bmatrix} {\frac{\partial \vec{f}}{\partial x_1}}&{\cdots}&{\frac{\partial \vec{f}}{\partial x_n}} \end{bmatrix} = \begin{bmatrix} {\nabla f_1} \\ \vdots \\ {\nabla f_m} \end{bmatrix} = \begin{bmatrix} {\frac{\partial f_1}{\partial x_1}}&{\cdots}&{\frac{\partial f_1}{\partial x_n}} \\ {\vdots}&{\ddots}&{\vdots} \\ {\frac{\partial f_m}{\partial x_1}}&{\cdots}&{\frac{\partial f_m}{\partial x_n}} \end{bmatrix}`$
- ### <span id="jacobian-determinant">Jacobian Determinant (When $m=n$)</span>
    - ### $`det\left(J\right)=\left|J\right| = \begin{vmatrix} {\frac{\partial \vec{f}}{\partial x_1}}&{\cdots}&{\frac{\partial \vec{f}}{\partial x_n}} \end{vmatrix} = \begin{vmatrix} {\nabla f_1} \\ \vdots \\ {\nabla f_n} \end{vmatrix} = \begin{vmatrix} {\frac{\partial f_1}{\partial x_1}}&{\cdots}&{\frac{\partial f_1}{\partial x_n}} \\ {\vdots}&{\ddots}&{\vdots} \\ {\frac{\partial f_n}{\partial x_1}}&{\cdots}&{\frac{\partial f_n}{\partial x_n}} \end{vmatrix}`$

# Line Integral

# Surface Integral

# Complex Line Integral

