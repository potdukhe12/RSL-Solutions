#include<stdio.h>

int sum(int a, int b);
void calPrice(float value);

int main()
{
    ///////////////////////////////////

    int a, b;
    printf("Enter a : ");
    scanf("%d", &a);
    
    printf("Enter b : ");
    scanf("%d", &b);
    
    printf("Sum = %d",sum(a,b));  

    //////////////////////////////

    float value = 100.0;
    calPrice(value);                // 118
    printf("Value is : %f", value); // 100

    ///////////////////////////////

    printf("\nThank You!"); 

    return 0;
}

int sum(int x, int y)
{
    return x+y;
}

void calPrice(float value)
{
    value = value + 0.18*value;
    printf("Value is : %f", value);     //118
}