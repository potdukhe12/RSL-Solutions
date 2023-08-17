#include<stdio.h>
int main()
{
    int age;
    printf("Enter age : ");
    scanf("%d", &age);

    // if-else statement

    if(age >= 18)
        printf("adult");
    else if(age > 13 && age < 18)
        printf("teenager");
    else
        printf("not adult");    
    
    printf("\n");

    // ternary statement

    (age >= 18) ? printf("adult") : printf("not adult")  ;

    printf("\n");

    // switch statement

    int day;
    printf("Enter day(1-7) : ");
    scanf("%d", &day);
    switch(day)
    {
        case 1 : printf("Monday");
                 break;
        case 2 : printf("Tuesday");
                 break;
        case 3 : printf("Wednesday");
                 break;
        case 4 : printf("Thusday");
                 break;
        case 5 : printf("Friday");
                 break;
        case 6 : printf("Saturday");
                 break;
        case 7 : printf("Sunday");
                 break;
        default : printf("Invalid");
    }

    printf("\nThank you!");

    return 0;
}