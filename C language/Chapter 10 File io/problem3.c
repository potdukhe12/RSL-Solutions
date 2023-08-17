#include<stdio.h>

int main()
{
    // program to save student info. into a file
    
    FILE *fptr;
    fptr = fopen("Student.txt","w");

    char name[100];
    int age;
    float cgpa;

    printf("Enter name : ");
    scanf("%s", name);
    printf("Enter age : ");
    scanf("%d", &age);
    printf("Enter cgpa : ");
    scanf("%f", &cgpa);

    fprintf(fptr, "Name : %s\n", name);
    fprintf(fptr, "Age  : %d\n", age);
    fprintf(fptr, "CGPA : %f\n", cgpa);

    fclose(fptr);

    // program to write all odd numbers from 1 to n into a file
    
    FILE *fptr2;
    fptr2 = fopen("Odd.txt","w");

    int n;
    printf("Enter n : ");
    scanf("%d", &n);

    for(int i=1; i<=n; i++)
    {
        if(i%2 != 0)
        {
            fprintf(fptr2, "%d\n", i);
        }
    }

    fclose(fptr2);

    printf("\nThank You!\n\n"); 

    return 0;
}
