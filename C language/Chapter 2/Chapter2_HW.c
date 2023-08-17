#include<stdio.h>
#include<math.h>

int main()
{
    // Avg of 3 numbers
    int x=3, y=6, z=9;
    printf("Avg : %d", (x+y+z)/3 );


    // Check if given character is digit
    char x;
    printf("Enter a character : ");
    scanf("%c",&x);
    printf("%d", x>='0' && x<='9');


    // Print smallest number
    int a,b;
    printf("Enter a 2 numbers : ");
    scanf("%d",&a);
    scanf("%d",&b);
    printf("%d", (a>b)*b + (b>a)*a);

    /*
        Case 1: When a is greater
        (a > b) × b + (b > a) × a = 1 × b + 0 × a = b
        
        Case 2: When b is greater
        (a > b) × b + (b > a) × a = 0 × b + 1 × a = a
    */
    
    return 0;
}