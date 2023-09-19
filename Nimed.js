const nimed = [
    "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas",
    "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas",
    "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene",
    "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"
];

// Funktsioon nimede korrastamiseks ja emailide loomiseks
function kordaNimedJaLooEmailid(nimed) {
    const korrastatudNimed = nimed.map(nimi => {
        const osad = nimi.split(' ');
        const eesnimi = osad[0].charAt(0).toUpperCase() + osad[0].slice(1);
        const perenimi = osad[1].toLowerCase();
        const email = `${perenimi}@tthk.ee`;
        return `${eesnimi} ${perenimi} (${email})`;
    });
    return korrastatudNimed;
}

// Kuvab korrastatud nimed ja loodud emailid
const korrastatudNimedJaEmailid = kordaNimedJaLooEmailid(nimed);
console.log("Korrastatud nimed ja emailid:");
console.log(korrastatudNimedJaEmailid);

// Funktsioon, mis otsib nime massiivist
function otsiNimi(nimi, nimed) {
    const leitudNimed = nimed.filter(n => n.toLowerCase().includes(nimi.toLowerCase()));
    return leitudNimed.length > 0 ? leitudNimed : "Nime ei leitud";
}

// Otsib nime massiivist ja kuvab täisnimed
const otsitavNimi = "Kadi Kask";
const leitudNimed = otsiNimi(otsitavNimi, nimed);
console.log(`Nimi "${otsitavNimi}" leiti järgmiste täisnimedena:`);
console.log(leitudNimed);
