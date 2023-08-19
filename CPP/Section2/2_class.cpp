#include<iostream>
#include<string>
#include "Animal.h"
#include "Cat.h"
#include "Mouse.h"
using namespace std;

int main()
{
    Animal animal;
    Mouse mouse;
    Cat cat;
    animal.makeSound();

    cat.makeSound();
    return 0;
}
