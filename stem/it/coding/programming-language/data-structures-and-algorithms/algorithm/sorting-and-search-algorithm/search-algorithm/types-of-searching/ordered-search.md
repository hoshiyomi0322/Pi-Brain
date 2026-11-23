# Binary Search
- ### Binary Search in C
    ```c
    int binary_srch(int a[], int n, int value){
        int low = 0, high = n-1, mid; 
        while(low <= high){
            mid = (low+high)/2;
            if (a[mid] > value) high=mid-1;
            else if(a[mid] < value) low=mid+1;
            else return mid;
        }
        return -1;
    }
    ```

# Ternary Search


# Exponential Search


# Interpolation Search


# Fibonacci Search

