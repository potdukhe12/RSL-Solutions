#include<stdio.h>
#include<math.h>

int sumDigit(int num);
float sqRoot(int n);
void calTemp(int t);
int power(int a, int b);

int main()
{
    //////////////////////////////

    // sum of digits of a number

    int num = 567;
    printf("\nSum of digits of %d is : %d\n", num, sumDigit(num));

    ////////////////////////////////

    // sq root of a number

    int n = 25;
    printf("\nSq root of %d is : %f\n", n, sqRoot(n));

    ////////////////////////////////

    // Temperature

    int temp;
    printf("\nEnter temp : ");
    scanf("%d",&temp);
    printf("Temp. is : ");
    calTemp(temp);

    ////////////////////////////////

    // power function

    int a = 5, b = 3;
    printf("\n%d power %d is : %d\n", a, b, power(a,b));

    ////////////////////////////////

    printf("\nThank You!\n\n"); 

    return 0;
}

int sumDigit(int num)
{
    if(num == 0)
    {
        return 0;
    }
    
    return (num % 10) + sumDigit(num/10);
}

float sqRoot(int n)
{
    return sqrt(n);
}

void calTemp(int t)
{
    if(t >= 30)
        printf("HOT\n");
    else if(t >= 20)
        printf("WARM\n");        
    else
        printf("COLD\n");
}

int power(int a, int b)
{
    if(b != 0)
        return a + power(a,b-1);
    else
        return 1; 
}
