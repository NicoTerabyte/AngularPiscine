"use strict";
var Lez4;
(function (Lez4) {
    //vogliamo mettere dei delimitatori
    //per le nostre variabili
    //gli enum sono dei numeri e possono essere
    //anche modificati per non essere disposti in maniera crescente
    //oppure puoi metterci delle stringhe in ts
    let Role;
    (function (Role) {
        Role["ADMIN"] = "admin";
        Role["USER"] = "user";
        Role["GUEST"] = "guest";
        Role["EXTRA"] = "extra";
    })(Role || (Role = {}));
    const person = {
        Name: "Luca",
        lastName: "Rossi",
        role: Role.GUEST
    };
})(Lez4 || (Lez4 = {}));
