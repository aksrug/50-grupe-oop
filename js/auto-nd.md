class -> Car (Automobilis)

-   pavadinimas (Audi)
-   modelis (80)
-   color
-   kuro bako talpa (litrais)
-   vidutines kuro sanaudos 100km
-   ar ijungtas variklis (default: false)
-   greitis (default: 0)

metodai:

-   ijungti varikli
    -   ijungto varikli dar karto ijungti negalima, sugadinti starteri
    - jeigu variklis siuo metu ijungtas, tu esi jau pradejes vaziuoti ir tu bandai isjungti varikli, geriau taip nedaryti, is pradziu sustok ir isjunk varikli
-   isjungti varikli
    -   isjungto variklio isjungti negalima...
-   pradeti vaziuoti (greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
-   vaziuoti (naudoja 1x litro kuro sanaudu)
-   sustoti (greitis tiesiog tampa nulinis)
Galim tureti ekstra metodus:
-   kiek liko kuro?
-   uzpilti kuro baka (kiek litrais)


# Bendrai

-   baze:

    -   README failas
    -   3+ commit'u
    -   Car.js failas
    -   klase "Car" pavadinimu (tiksliai)
    -   kodo formatavimas
    -   be lietuvisku pavadinimu
        -   kad ir kaip apmaudu
    -   lietuviskos zinutes - galimos, bet nebutinos

-   constructor:

    -   pavadinimas
    -   modelis
    -   spalva
    -   kuro bako talpa
    -   vidutines kuro sanaudos
    -   ar ijungtas varyklis (default: false)
    -   greitis (default: 0)

-   metodas: ijungti varykli:

    -   negali ijungti ijungto
    -   negali, jei bakas tuscias
    -   ijungiamas varyklis

-   metodas: isjungti varykli:

    -   negali, jei jau isjungtas
    -   negali, jei vaziuoji
    -   isjungiamas varyklis

-   metodas: pradeti vaziuoti:

    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
    -   negali, jei varyklis nera ijungtas
    -   greitis tampa ne nulinis (bet koks normalus teigiamas skaicius)
    -   sunaudoja 2x kuro (vidutiniu kuro sanaudu)
    -   jei po sekmingo pradejimo vaziuoti kuro bakas tampa tuscias:
        -   automatiskai sustoja
        -   greitis tampa nulisnis
        -   automatiskai issijungia varyklis

-   metodas: vaziuoti / testi vaziavima:

    -   negali, jei varyklis nera ijungtas
    -   negali, jei greitis nulinis
        -   nes tai reiskia, jog dar nepradejai vaziuoti / nepajudeta is vietos
    -   negali, jei nera pakankamo kiekio kuro
    -   sunaudoja 1x kuro (vidutiniu kuro sanaudu)
    -   jei po sekmingo vaziuoti kuro bakas tampa tuscias:
        -   automatiskai sustoja
        -   greitis tampa nulisnis
        -   automatiskai issijungia varyklis

-   metodas: sustoti:

    -   negalima, jei nevaziuoji
    -   greitis tampa nulinis
    -   varyklis neissijungia

-   metodas: kiek liko kuro:

    -   grazina kuro likuti bake

-   metodas: uzpilti kuro baka (kiek litrais):
    -   blogai, jei nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   negali, jei bakas jau pilnas
    -   bandant uzpilti daugiau nei yra laisvo turio, uzpilama tik laisvoji dalis, bet ne daugiau

VERTINIMAS:

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei vaziuoji
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
    -   negali, jei nera pakankamo kiekio kuro
    -   nesunaudoja 1x kuro
-   metodas: sustoti:
    -   negalima, jei nevaziuoji
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei bakas jau pilnas
