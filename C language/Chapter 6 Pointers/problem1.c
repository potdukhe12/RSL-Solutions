#include<stdio.h>

int main()
{
    //////////////////////////////

    int age = 22;
    int *ptr = &age;
    int _age = *ptr;

    printf("%d", _age);

    // format specifier for pointer ==> %p

// address
    printf("%p\n",&age);    // address in hexa format
    printf("%u\n",&age);    // unsigned integer
    printf("%u\n",ptr);     // o/p is same as &age
    printf("%u\n",&ptr);    // address of pointer is diff.

// values
    printf("%d\n",age);     // 22
    printf("%d\n",*ptr);    // 22
    printf("%u\n",*(&age));    // 22

    printf("\nThank You!\n\n"); 

    return 0;
}
