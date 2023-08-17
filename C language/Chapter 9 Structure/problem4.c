#include<stdio.h>
#include<string.h>

struct vector{
    int x;
    int y;
};

void calSum(struct vector v1, struct vector v2, struct vector sum);

struct complex{
    int real;
    int img;
};

int main()
{
    // program for Vector

    struct vector v1 = {5,10};
    struct vector v2 = {3,7};
    struct vector sum = {0};
    
    calSum(v1, v2, sum);

    // program for Complex number

    struct complex n1 = {5,10};
    struct complex *ptr = &n1;
    printf("\nreal : %d", ptr->real);
    printf("\nimg  : %d", ptr->img);


    printf("\nThank You!\n\n"); 

    return 0;
}

void calSum(struct vector v1, struct vector v2, struct vector sum)
{
    sum.x = v1.x + v2.x;
    sum.y = v1.y + v2.y;
    
    printf("Sum of x : %d\n", sum.x);
    printf("Sum of y : %d\n", sum.y);
}
