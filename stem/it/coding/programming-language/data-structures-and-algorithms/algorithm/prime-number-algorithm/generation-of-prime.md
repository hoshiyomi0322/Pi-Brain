# Sieve of Eratosthenes
```c
#include <stdbool.h>
#define MAX 100 //質數的數量上限，可調整

bool is_prime[MAX]; //判斷質數的陣列
int primes[MAX]; //存放質數的陣列
int count=0; //質數的數量

void eratosthenes(int n){ //n以內的質數
    for(int i=0;i<=n;i++) is_prime[i]=true; //預設所有的數字為質數
    is_prime[0]=is_prime[1]=false; //篩掉0, 1

    //從i=2開始篩到i*i<=n, 因為倍數是從j(i*i)開始篩
    for(int i=2;i*i<=n;i++){
        if(is_prime[i]){ //如果i是質數, 篩掉i的倍數
            //從i*i開始篩, 因為i倍之前都被前面篩過了
            for(int j=i*i;j<=n;j+=i){ //每次加一倍(+i)
                is_prime[j]=false; //i的倍數不適質數
            }
        }
    }

    //透過判斷質數的陣列, 將質數存入質數陣列
    for(int i=2;i<=n;i++){
        if(is_prime[i]){
            primes[count]=i;
            count++;
        }
    }
}
```

# Sieve of Euler
```c
#include <stdbool.h>
#define MAX 100 //質數的數量上限，可調整

bool is_prime[MAX]; //判斷質數的陣列
int primes[MAX]; //存放質數的陣列
int count=0; //質數的數量

void euler(int n){ //n以內的質數
    for(int i=0;i<=n;i++) is_prime[i]=true; //預設所有的數字為質數
    is_prime[0]=is_prime[1]=false; //篩掉0,1

    //從i=2開始篩到i<=n
    for(int i=2;i*i<=n;i++){
        if(is_prime[i]){ //如果i是質數
            primes[count]=i; //存入質數陣列
            count++;
        }
        //遍歷存放質數的陣列, 篩掉i*質數
        for(int j=0;j<count;j++){
            int p=primes[j]; //p=存放質數的陣列裡的質數
            if(i*p>n) break; //i*p超過範圍，跳出loop
            is_prime[i*p]=false; //篩掉i*p
            //let p=i*p的最小質因數
            if(i%p==0) break; //i=p的倍數, 跳出loop
        }
    }
}
```

- ### euler(n)：n以內的質數
1. ### 篩掉0、1
2. ### 從`i=2`開始篩到`i<=n`
    - ### p=目前篩出來的質數
    - ### 篩掉i*p
    - ### 讓p是i*p的最小質因數
