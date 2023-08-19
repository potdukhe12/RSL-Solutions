#include "Animal.h"

class Cat : public Animal
{

public:
    Cat();
    ~Cat();

    void MakeSound() override;

    void Cat :: MakeSound()
    {
         cout << name << ":" << sound << endl;
    }
};


