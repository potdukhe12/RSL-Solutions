#include<stdio.h>

void storeTable(int arr[][10],int n, int m, int number);
void printArray(int array[][10],int n,int m);

int main()
{   
    // 2D array to store table of 2 & 3

    int tables[2][10];

    storeTable(tables, 0, 10, 2);
    storeTable(tables, 1, 10, 3);
    printArray(tables,2,10);

    printf("\nThank You!\n\n");   

    return 0;
}

void printArray(int array[][10],int n,int m)
{
    printf("\n");
    for(int i=0; i<n; i++)
    {
        for(int j=0; j<m; j++)
        {
            printf("%d\t",array[i][j]);
        }
        printf("\n");
    }    
}

void storeTable(int arr[][10], int n, int m, int number)
{ 
    for(int i=0; i<m; i++)
    {
        arr[n][i] = number * (i+1);
        printf("%d\n",arr[n][i]);
    }
}


