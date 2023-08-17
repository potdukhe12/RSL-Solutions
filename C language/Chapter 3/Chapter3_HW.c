#include<stdio.h>
#include<math.h>

int main()
{
    // Armstrong number w/o using loop

    int x;
    printf("Enter a 3 digit number : ");
    scanf("%d",&x);
    int temp = pow(x%10,3) + pow((x/10)%10,3) + pow((x/100)%10,3);

    if(x == temp)
        printf("It is Armstrong");
    else
        printf("Not Armstrong");

    // natural number

    int num;
    printf("Enter a number : ");
    scanf("%d",&num);

    if(num >= 1)
        printf("It is Natural");
    else
        printf("Not Natural");

    return 0;
}