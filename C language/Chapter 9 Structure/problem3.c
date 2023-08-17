#include<stdio.h>
#include<string.h>

typedef struct student{
    int roll;
    float cgpa;
    char name[100];
} stu ;

typedef struct computerengineerstudent{
    int roll;
    float cgpa;
    char name[100];
} coe ;

void printInfo(struct student s1);

int main()
{
    // Structure using function

    struct student s1 = {1164, 9.4, "Saurabh"};
    printInfo(s1);


    // 'typedef' keyword  ==>  create nickname/alias for structure name

    coe s2;
    s2.roll = 1168;
    s2.cgpa = 5.6;
    strcpy(s2.name,"Saurabh");
    printf("Student Name : %s\n",s2.name);


    printf("\nThank You!\n\n"); 

    return 0;
}


void printInfo(struct student s1)
{
    printf("Student Information : \n");
    printf("Name : %s\n",s1.name);
    printf("Roll no.: %d\n",s1.roll);
    printf("CGPA : %f\n",s1.cgpa);
}

