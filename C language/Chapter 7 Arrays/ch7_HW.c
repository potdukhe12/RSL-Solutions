#include<stdio.h>

int countNum(int arr[],int n,int value);
int maxNum(int arr[],int n);

int main()
{
    // Count a re-ocuring number in an array

    int arr[] = {3,8,3,4,5,6,3};
    int n = sizeof(arr)/sizeof(arr[0]);
    int value = 3;

    printf("\n'%d' occurs : %d times\n", countNum(arr,n,value));
    
    // print largest number in an array

    printf("\nLargest nummber : %d\n", maxNum(arr,n));


    printf("\nThank You!\n\n"); 

    return 0;
}

int countNum(int arr[], int n, int value)
{
    int cnt = 0;
    for(int i = 0; i<n; i++)
    {
        if(arr[i] == value)
        {
            cnt++;
        }   
    }
    return cnt;
}

int maxNum(int arr[],int n)
{
    int max = arr[0];
    for(int i=1; i<n; i++)
    {
        if(max < arr[i])
            max = arr[i];
    }
    return max;
}


