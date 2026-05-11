# Multinomial Distribution
|Property|Description|
|:---:|:---:|
|Notation|$`X\sim M\left(n,~k,~p_1,~\cdots,~p_k\right)`$|
|Situation||
|[Random Vector](../../probability-theory.md#random-vector-multivariate-random-variable)|$X=\left( X_1,~\cdots,~X_k \right),~\sum\limits_{i=1}^k{x_i}=n$|
|Parameters|$`\begin{cases}{n=\text{number of trials}}\\ {k=\text{number of mutually exclusive events}}\\ {p_1+\cdots +p_k=1}\end{cases}`$|
|[PMF](../distribution-function.md#probability-function)|$`\frac{n!}{x_1!\cdots x_k!}\cdot\left(p_1^{x_1}\times\cdots\times p_k^{x_k}\right)`$|
|[Mean](../../expected-value.md)|$`E\left[X_i\right]=np_i`$|
|[Variance](../../../statistics/variance.md#variance)|$`Var\left( X_i \right)=np_i \left( 1-p_i \right)`$|
|[Covariance](../../../statistics/variance.md#covariance)|$`Cov\left( X_i,~X_j \right)=-np_ip_j`$|

