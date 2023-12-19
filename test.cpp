#include "pch.h"
#include "../../IO/testy/funkcje.cpp"

TEST(EksponentTest, DodatniaPotega) {
    EXPECT_DOUBLE_EQ(eksponent(2.0, 3), 8.0);
    EXPECT_DOUBLE_EQ(eksponent(5.0, 2), 25.0);
    EXPECT_DOUBLE_EQ(eksponent(3.0, 4), 81.0);
}

TEST(EksponentTest, UjemnaPotega) {
    EXPECT_DOUBLE_EQ(eksponent(2.0, -3), 0.125);
    EXPECT_DOUBLE_EQ(eksponent(5.0, -2), 0.04);
    EXPECT_DOUBLE_EQ(eksponent(3.0, -4), 0.012345679012345678);
}

TEST(EksponentTest, PotegaZero) {
    EXPECT_DOUBLE_EQ(eksponent(2.0, 0), 1.0);
    EXPECT_DOUBLE_EQ(eksponent(5.0, 0), 1.0);
    EXPECT_DOUBLE_EQ(eksponent(3.0, 0), 1.0);
}

TEST(EksponentTest, PodstawaZero) {
    EXPECT_DOUBLE_EQ(eksponent(0.0, 3), 0.0);
    EXPECT_DOUBLE_EQ(eksponent(0.0, 5), 0.0);
}

TEST(MedianaTest, PustaTablica) {
    std::vector<double> values;
    EXPECT_DOUBLE_EQ(mediana(values), 0.0); 
}

TEST(MedianaTest, NieparzystaWielkosc) {
    std::vector<double> values = { 4.0, 2.0, 7.0, 1.0, 5.0 };
    EXPECT_DOUBLE_EQ(mediana(values), 4.0);
}

TEST(MedianaTest, ParzystaWielkosc) {
    std::vector<double> values = { 4.0, 2.0, 7.0, 1.0, 5.0, 8.0 };
    EXPECT_DOUBLE_EQ(mediana(values), 4.5);
}

TEST(MedianaTest, PosorotwanaTablica) {
    std::vector<double> values = { 1.0, 2.0, 3.0, 4.0, 5.0 };
    EXPECT_DOUBLE_EQ(mediana(values), 3.0);
}

TEST(LogarytmTest, DodatnieWartosci) {
    EXPECT_DOUBLE_EQ(logarytmNaturalny(1.0), 0.0);
    EXPECT_DOUBLE_EQ(logarytmNaturalny(2.0), std::log(2.0));
    EXPECT_DOUBLE_EQ(logarytmNaturalny(10.0), std::log(10.0));
}

TEST(LogarytmTest, WartoscZero) {
    EXPECT_DOUBLE_EQ(logarytmNaturalny(0.0), 0.0);
}

TEST(LogarytmTest, UjemneWartosci) {
    EXPECT_DOUBLE_EQ(logarytmNaturalny(-1.0), 0.0);
}
