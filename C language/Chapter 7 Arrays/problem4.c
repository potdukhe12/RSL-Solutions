#include<stdio.h>

void reverse(int arr[],int n);
void printArray(int arr[],int n);

int main()
{   
    // Call array using pointer

    int arr[] = {1,2,3,4,5};
    printArray(arr,5);

    printf("\n*(arr+2) : %d\n", *(arr+2));  // 3
    printf("\n*(arr+5) : %d\n", *(arr+5));  // 0 --> no valid value available at this index

    // print array in reverse

    int arr2[] = {1,2,3,4,5,6};
    int n = sizeof(arr2)/sizeof(arr2[0]);

    reverse(arr2,n);
    printArray(arr2,n);


    // fibonacci number using array

    int n2;
    printf("\n\nEnter length of fibonacci (>2) : ");
    scanf("%d", &n2);
    
    int fib[n2];
    fib[0] = 0;
    fib[1] = 1;

    // printf("%d\t%d\t", fib[0], fib[1]);

    for(int i=2; i<n2; i++)
    {
        fib[i] = fib[i-1] + fib[i-2];
        // printf("%d \t", fib[i]);
    }

    printArray(fib,n2);

    printf("\nThank You!\n\n"); 

    return 0;
}

void printArray(int arr[],int n)
{
    printf("\n");
    for(int i=0; i<n; i++)
    {
        printf("%d\t",arr[i]);
    }    
}

void reverse(int arr[],int n)
{ 
    for(int i=0; i<n/2; i++)
    {
        int temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
}


