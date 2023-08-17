#include<stdio.h>

int main(){
    
    // Area of Square
    int a;

   printf("Enter side of square = ");
   scanf("%d",&a);
   printf("Area of Square is %d",a*a);


    // Area of Circle
    float r;

   printf("\nEnter radius of circle = ");
   scanf("%f",&r);
   printf("Area of Circle is %f",3.14*r*r);

    return 0;
}