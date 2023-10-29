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

//Posortuj produkty od nadroższych do najtańszych
void zad2()
{
    class Produkt
    {
    public:
        std::string nazwa;
        float cena;

        Produkt(std::string _nazwa, float _cena)
        {
            this->nazwa = _nazwa;
            this->cena = _cena;
        }
    };

    std::vector<Produkt> produkty = 
    {
        Produkt("Name1", 3.33f),
        Produkt("Name2", 1.33f),
        Produkt("Name3", 2.33f),
        Produkt("Name4", 4.33f),
        Produkt("Name5", 5.33f),
        Produkt("Name6", 6.33f),
        Produkt("Name7", 7.33f),
        Produkt("Name8", 8.33f),
        Produkt("Name9", 9.33f),
        Produkt("Name10", 10.33f)
    };
}

int main()
{
    zad2();
}