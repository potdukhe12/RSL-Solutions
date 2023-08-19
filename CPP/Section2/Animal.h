//#include<iostream>
#include<string>

using namespace std;

class Animal
{
    public:
        Animal();
        ~Animal();

        virtual void makeSound();

    protected:
        string sound;
        string name;
};



