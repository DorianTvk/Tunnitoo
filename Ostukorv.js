// Loome ostukorvi objekti
var ostukorv = {
    tooted: [],

    // Meetod kogu sisu kuvamiseks
    kuvageSisu: function () {
        if (this.tooted.length === 0) {
            console.log("Ostukorv on tühi.");
        } else {
            console.log("Ostukorvi sisu:");
            this.tooted.forEach(function (toode) {
                console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
            });
        }
    },

    // Meetod toodete lisamiseks ostukorvi
    lisaToode: function (nimi, hind, kogus) {
        this.tooted.push({
            nimi: nimi,
            hind: hind,
            kogus: kogus
        });
        console.log(`Toode "${nimi}" lisatud ostukorvi.`);
    },

    // Meetod ostukorvi kogusumma arvutamiseks
    koguSumma: function () {
        var summa = 0;
        this.tooted.forEach(function (toode) {
            summa += toode.hind * toode.kogus;
        });
        return summa.toFixed(2); // Ümardame summa kahe komakohaga
    }
};

// Kuvame ostukorvi sisu (hetkel tühi)
ostukorv.kuvageSisu();

// Lisame tooteid ostukorvi
ostukorv.lisaToode('Kohv', 5.80, 2);
ostukorv.lisaToode('Leib', 2.50, 3);

// Kuvame uue ostukorvi sisu
ostukorv.kuvageSisu();

// Kuvame ostukorvi kogusumma
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma(), 'EUR');
