#include<stdio.h>

int main()
{
    // Perimeter of rectangle
    int a,b;
    printf("Enter sides of rectangle : ");
    scanf("%d",&a);
    scanf("%d",&b);
    printf("Perimeter = %d", 2*(a+b));


    // cube
    int x;
    printf("Enter a number : ");
    scanf("%d",&x);
    printf("%d", x*x*x);


    /* 
        Print smallest number 
    */
    int a,b;
    printf("Enter a 2 numbers : ");
    scanf("%d",&a);
    scanf("%d",&b);
    printf("%d", (a>b)*b + (b>a)*a);

 
    return 0;
}