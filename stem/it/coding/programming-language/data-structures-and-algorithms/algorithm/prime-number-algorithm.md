# Generation of Prime
- ### Sieve of Eratosthenes
    - ### eratosthenes(n)：n以內的質數
    1. ### 篩掉0、1
    2. ### 從`i=2`開始篩到`i*i<=n`
        - ### 篩掉i的倍數
- ### Sieve of Euler
    - ### euler(n)：n以內的質數
    1. ### 篩掉0、1
    2. ### 從`i=2`開始篩到`i<=n`
        - ### p=目前篩出來的質數
        - ### 篩掉i*p
        - ### 讓p是i*p的最小質因數

# Primality test
- ### Miller–Rabin primality test
- ### AKS primality test
