#include <iostream>
#include <vector>
using namespace std;
double logarytmNaturalny(double x) {
    if (x <= 0) {
        return 0.0;
    }

    double wynik = 0.0;
    double poprzedniWynik = 0.0;
    double potega = (x - 1) / (x + 1);
    double potegaKwadrat = potega * potega;
    double mianownik = 1.0;

    for (int i = 1; i <= 1000; i += 2) {
        poprzedniWynik = wynik;
        wynik += (1.0 / mianownik) * potega;
        potega *= potegaKwadrat;
        mianownik += 2.0;
    }

    return 2.0 * wynik;
}

double mediana(const vector<double>& liczby) {
    vector<double> kopia = liczby;
    sort(kopia.begin(), kopia.end());

    if (kopia.size() % 2 == 0) {
        int srodek1 = kopia.size() / 2 - 1;
        int srodek2 = kopia.size() / 2;
        return (kopia[srodek1] + kopia[srodek2]) / 2.0;
    } else {
        int srodek = kopia.size() / 2;
        return kopia[srodek];
    }
}

int eksponent(int x, int y) {
    int potega = x;

    for (int i = 1; i < y; ++i) {
        potega *= x;
    }

    return potega;
}

int main() {
    double liczba = 2.0;
    cout << "Logarytm naturalny z " << liczba << " to: " << logarytmNaturalny(liczba) << endl;
    vector<double> liczby = {3.5, 11.0, 4.8, 1.1, 5.0, 9.7, 2.0, 6.0, 5.2};
    cout << "Mediana zbioru liczb to: " << mediana(liczby) << endl;
    int wykladnik = 3;
    int podstawa = 2;
    cout << "Potega z " << podstawa << " do " << wykladnik <<  " to: " << eksponent(podstawa, wykladnik) << endl;


    cout << "Hello, World!" << endl;
    return 0;
}
