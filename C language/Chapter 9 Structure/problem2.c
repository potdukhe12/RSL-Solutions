#include<stdio.h>
#include<string.h>

struct student{
    int roll;
    float cgpa;
    char name[100];
};

int main()
{
    // Array of Structure

    struct student arr[100];
    arr[0].roll = 1122;
    arr[0].cgpa = 9.2;
    strcpy(arr[0].name,"Saurabh");

    printf("\nStudent arr\nName : %s\n",arr[0].name);
    printf("Roll no.: %d\n",arr[0].roll);
    printf("CGPA : %f\n\n",arr[0].cgpa);

    // Initialization of structures

    struct student s1 = {1664, 9.2, "Saurabh"};
    printf("Student Roll no.: %d\n",s1.roll);

    // Pointer to structure

    struct student *ptr = &s1;
    printf("Student Roll no.: %d\n",(*ptr).roll);
        // *ptr ==> refer to whole 's1' structure
    
    // Arrow Operator
        // (*ptr).roll  ==>  ptr->roll
    printf("\nStudent s1\nName : %s\n",ptr->name);
    printf("Roll no.: %d\n",ptr->roll);
    printf("CGPA : %f\n",ptr->cgpa);    


    printf("\nThank You!\n\n"); 

    return 0;
}




