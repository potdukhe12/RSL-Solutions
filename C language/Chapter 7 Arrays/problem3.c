#include<stdio.h>

int countOdd(int arr[],int n);

int main()
{
    int arr[2][3] = {{1,2,3},{4,5,6}};
    // int length = sizeof(num)/4;  //since array length is equal to size of data type.

    for(int i = 0; i<2; i++)
    {
        printf("\n");
        for(int j = 0; j<3; j++)
        {
            printf("Number [%d][%d] : %d\n", i, j, arr[i][j]);
        }
    }

    // Count odd numbers in an array

    int arr2[] = {1,2,3,4,5,6};
    printf("\nodd numbers in the array : %d\n", countOdd(arr2,6));


    printf("\nThank You!\n\n"); 

    return 0;
}

int countOdd(int arr[], int n)
{
    int cnt = 0;
    for(int i = 0; i<n; i++)
    {
        if(arr[i] % 2 != 0)
        {
            cnt++;
        }   
    }
    return cnt;
}


