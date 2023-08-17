#include<stdio.h>
#include<string.h>

struct student{
    int roll;
    float cgpa;
    char name[100];
};

int main()
{
    struct student s1;
    s1.roll = 1122;
    s1.cgpa = 9.2;
    // s1.name = "Saurabh";
    strcpy(s1.name,"Saurabh");

    printf("\nStudent 1\nName : %s\n",s1.name);
    printf("Roll no.: %d\n",s1.roll);
    printf("CGPA : %f\n",s1.cgpa);
    

    struct student s2;
    s2.roll = 1130;
    s2.cgpa = 8.6;
    strcpy(s2.name,"Atharv");

    printf("\nStudent 2\nName : %s\n",s2.name);
    printf("Roll no.: %d\n",s2.roll);
    printf("CGPA : %f\n",s2.cgpa);


    printf("\nThank You!\n\n"); 

    return 0;
}




