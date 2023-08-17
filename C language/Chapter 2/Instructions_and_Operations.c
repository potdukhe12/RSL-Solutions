#include<stdio.h>
#include<math.h>

int main()
{
    printf("Hello World\n");
    
    // Valid Instructions

    int a = 22;
    int b = a;
    int c = b * 6;
    int d=1, e;

    int oldAge = 22;
    int years = 5;
    int newAge = oldAge + years;

    int x, y, z;
    x = y = z = 4;

    /* Arithmetic Instructions
       Operator = +,-,*,/,%
       Operands = a,b
          ex.: sum=a+b

        Invalid ==> q = xy; <== multi is missing
    */

   int p, q = x*y;

    // use math.h to use mathematical operations

    int power = pow(b,d);

    // Arithmetic Instructions

    printf("\n16 %% 10 = %d",16%10);

    // Type Convertion

    printf("\nint * float = float  %f",4 * 4.0);

    int z = (int) 1.999;    // force conversion
    printf("%d", z);

    // Operator Precedence or priority *,/,%,+,-

    int x = 4 + 9 * 10;
    printf("%d", x);

    float y = 4 * 3 / 6 * 2;
    printf("%f", y);

    // Associativity rule(operator of same precedence)
    //  calculate left to right

    float x = 4 * 3 / 6 * 2;
    printf("%f", x);

    // Practice Q4

    printf("%f", 5*2-2*3);      //4
    printf("%f", 5*2/2*3);      //15
    printf("%f", 5*(2/2)*3);    //15
    printf("%f", 5+2/2*3);      //8

    // Control

    // Relational Operators

    printf("%d", 4==4);     // 1 ==> true
    printf("%d", 4==6);     // 0 ==> false
    printf("%d", 4>4);      // 0 ==> false
    printf("%d", 6>=6);     // 1 ==> true
    printf("%d", 6!=7);     // 1 ==> true

    // Logical Operators

    printf("%d", 4>3 && 5>2);     // 1 ==> true
    printf("%d", 2>3 && 5>2);     // 0 ==> false
    
    printf("%d", 4>3 || 5>2);     // 1 ==> true
    printf("%d", 2>3 || 5>2);     // 1 ==> true
    
    printf("%d", !(4>3));         // 0 ==> false
    printf("%d", !( (4>3) && (5>2) ));     // 0 ==> false
    
    // Assignment Operator

    a += 5;
    a *= 2;



    return 0;
}