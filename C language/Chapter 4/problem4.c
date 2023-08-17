#include<stdio.h>
int main()
{
    int n=4, sum=0;

    for(int i=1, j=n; i<=n && j>=1 ; i++,j--)
    {
        printf("%d \n", j);
        sum += i;
    }

    printf("\nSum is : %d",sum); 

    return 0;
}