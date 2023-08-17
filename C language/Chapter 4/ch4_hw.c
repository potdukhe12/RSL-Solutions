#include<stdio.h>
int main()
{
    int n;

    // a. print the pattern

    for(int i=0; i<4; i++)
    {
        for(int i=0; i<5; i++)
        {
            printf("*");
        }
        printf("\n");
    }    
        

    // prime number

    int num, cnt=0;
    printf("Enter a number(>2) : ");
    scanf("%d \n",&num);

    for (int i=2; i<num; i++)
    {
        if(num % i == 0)
        {
            cnt = 0;
            break;
        }
        else
        {
            cnt = 1;
        }
    }

    if(cnt == 0)
    {
        printf("Not a prime number"); 
    }
    else
    {
        printf("Prime number"); 
    }

    // prime number

    int num, cnt=0;
    printf("Prime numbers from 1 to 100 : ");
    
for(num = 2; num <= 100; num++)
{
    int cnt=0;
    for (int i=2; i<num; i++)
    {
        if(num % i == 0)
        {
            cnt = 0;
            break;
        }
        else
        {
            cnt = 1;
        }
    }

    if(cnt == 1)
    {
        printf("%d \n",num); 
    }
}



    printf("\nThank You!"); 


    return 0;
}