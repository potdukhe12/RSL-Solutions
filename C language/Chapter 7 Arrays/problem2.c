#include<stdio.h>

void printNum1(int arr[], int n);
void printNum2(int *arr, int n);

int main()
{
    int num[5] = {100, 200, 300, 400, 500};
    int length = sizeof(num)/4;  //since array length is equal to size of data type.

    printf("\nType 1\n");
    for(int i = 0; i<length; i++)
    {
        printf("Number %d : %d\n", i+1, num[i]);
    }


    printf("\nType 2\n");
    printNum1(num, length);

    printf("\nType 3\n");
    printNum2(num, length);

    printf("\nThank You!\n\n"); 

    return 0;
}

// function by array name
void printNum1(int arr[], int n)
{
    for(int i = 0; i<n; i++)
    {
        printf("Number %d : %d\n", i+1, arr[i]);
    }
}

// function by pointer
void printNum2(int *arr, int n)
{
    for(int i = 0; i<n; i++)
    {
        printf("Number %d : %d\n", i+1, arr[i]);
    }
}

