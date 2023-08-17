#include<stdio.h>
int main()
{
    int n;

    // break if the number is odd 

    do {
        printf("Enter a number : ");
        scanf("%d",&n);
        // printf("%d \n", n);

        if(n % 2 != 0) {
            printf("Odd");
            break;
        }

        printf("Even\n");
        
    } while(1);

    // continue (don't print 3)

    for (int i=1; i<=5; i++)
    {
        if(i == 3)
            continue;
        printf("%d \n",i); 
    }

    // all odd numbers from 5 to 50

    for (int i=5; i<=50; i++)
    {
        if (i %2 != 0)
            printf("%d \n",i); 
    } 

    // sum of all numbers from 5 to 50

    int sum = 0;
    for (int i=5; i<=50; i++)
    {
        sum += i;
    } 
    printf("%d \n",sum); 

    printf("\nThank You!"); 


    return 0;
}