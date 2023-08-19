#include<iostream>
#include<string>
using namespace std;

void namePerson(string name);
bool wantToGreet(string name);
void autoGreet(string name);

int main()
{
    // if (wantToGreet("Brother"))
    // {  
    //      namePerson("Brother");
    // }
    
    // printf("The number is %d",4);

    autoGreet("Brother");
    autoGreet("Link");
    autoGreet("Jack");

    return 0;
}

void namePerson(string name)
{
    cout << "Hi " << name << "!" << endl ;
}

bool wantToGreet(string name)
{
    if(name == "Brother")
    {
        return true;
    }
    else if(name == "Bob")
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

void autoGreet(string name)
{
    if(wantToGreet("Brother"))
    {
        namePerson("Brother");
    }
}