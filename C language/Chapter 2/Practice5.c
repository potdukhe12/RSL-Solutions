#include<stdio.h>
#include<math.h>

int main()
{
    // Chect no. divisible by 7
    int x;
    printf("Enter a no : ");
    scanf("%d",&x);
    printf("%d",x%7==0);

    // Chect no. is even or odd
    int x;
    printf("Enter a no : ");
    scanf("%d",&x);
    printf("%d",x%2==0);

    // output of 8^8
    printf("%d",8^8);   //valid statement but output = 0 <== '^' or XOR operator is a bitwise operator

    int x; int y = x;   //valid, because terminater is used
    // int x, int y = x;   //invalid
    //  char stars = '**'   //invalid, multiple value


    int isSunday = 1;
    int isSnowing = 1;
    printf("%d \n", isSunday && isSnowing);


    int isMonday = 0;
    int isRaining = 1;
    printf("%d \n", isMonday || isRaining);


    // Check if number is between 9 and 100
    int x;
    printf("Enter number : ");
    scanf("%d",&x);
    printf("%d \n", x>9 && x<100);


    

    return 0;
}