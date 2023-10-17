#include <iostream>
#include <vector>

void zad1()
{
    int AA[10];
    std::vector<int> BB;
    int counter = 0;
    int userInput;
    for (int i = 0; i < 10; ++i)
    {
        std::cin >> userInput;
        AA[i] = userInput;
        if (userInput < 0)
        {
            ++counter;
            BB.push_back(userInput);
        }
    }

    std::cout << "Pominieto: " << 10 - counter << "\nIlosc liczb minusowych: " << BB.size() << "\n";
    for (int i = 0; i < BB.size(); ++i)
    {
        std::cout << BB[i] << "\n";
    }
}

int main()
{

}