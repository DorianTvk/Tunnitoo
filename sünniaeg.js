const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
];

// Lisame meetodi, mis leiab inimeste sünniaja ja vanuse
inimesteAndmed.forEach(function (isik) {
    // Eraldame isikukoodist sünnikuupäeva andmed
    const sünnikuupäev = isik.isikukood.slice(5, 7) + '/' + isik.isikukood.slice(3, 5) + '/' + isik.isikukood.slice(1, 3);

    // Arvutame vanuse
    const sünniaasta = parseInt(isik.isikukood.slice(1, 3), 10) > 21 ? 1900 + parseInt(isik.isikukood.slice(1, 3), 10) : 2000 + parseInt(isik.isikukood.slice(1, 3), 10);
    const praeguneAasta = new Date().getFullYear();
    const vanus = praeguneAasta - sünniaasta;

    // Lisame vanuse ja sünnikuupäeva isiku objektile
    isik.vanus = vanus;
    isik.sünnikuupäev = sünnikuupäev;
});

// Kontrollimiseks kuvame inimeste andmed, mis sisaldavad nüüd vanust ja sünnikuupäeva
inimesteAndmed.forEach(function (isik) {
    console.log(`${isik.nimi}: Isikukood ${isik.isikukood}, Vanus ${isik.vanus}, Sünnikuupäev ${isik.sünnikuupäev}`);
});
