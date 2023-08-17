#include<stdio.h>
int main()
{
    for(int i=1; i<50 ; i++)
    {
        printf("%d \t", i);
    }

    printf("\n\n");

    for(int i=10; i>0 ; i--)
    {
        printf("%d \n", i);
    }

    for(float i=1.0; i<5.0 ; i++)
    {
        printf("%f \n", i);
    }

    for(char ch='a'; ch<='z' ; ch++)
    {
        printf("%c \t", ch);
    }

    printf("\nThank you!");

    return 0;
}