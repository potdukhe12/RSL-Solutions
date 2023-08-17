#include<stdio.h>

void helloWorld(int cnt);
int sum(int n);
int fact(int num);
float convertTemp(float celsius);
void fibonacci(int x);

int main()
{
    //  Recursion

    helloWorld(10);  

    //////////////////////////////

    // sum of n natural numbers

    printf("\nSum is : %d\n", sum(5));

    ////////////////////////////////

    // factorial of a number

    printf("\nFactorial is : %d\n", fact(5));

    ////////////////////////////////

    // Temperature

    float celsius = 37;
    float farh = convertTemp(celsius);
    printf("\nfarh conversion of %f celsius is : %f\n", celsius,farh);

    ////////////////////////////////

    // fibonacci series     *mistake in youtube video*

    printf("\nFibonacci is : \n");
    fibonacci(6);       // enter range as parameter

    ////////////////////////////////

    printf("\nThank You!\n\n"); 

    return 0;
}

void helloWorld(int cnt)
{
    if(cnt == 0)
    {
        return;
    }
    printf("Hello World\n");
    helloWorld(--cnt);
}

int sum(int n)
{
    if(n == 1)
    {
        return 1;
    }
    int total = sum(n-1) + n;
    return total;
}

int fact(int num)
{
    if(num == 0)
        return 1;

    return fact(num-1) * num;
}

float convertTemp(float celsius)
{
    float farh = celsius * (9.0/5.0) + 32;
    return farh;
}

void fibonacci(int x)
{
    int a=0, b=1, c;
    while (a <= x)
    {
        printf("%d\t", a);
        c = a+b;
        a = b;
        b = c;
    }   
}