//uno strumento che permette di creeare componenti riutilizzabili
var lez8;
(function (lez8) {
    //il costrutto Array<> indica una generic
    //la T è un template riutilizzabile che accetta dei tipi
    //generici
    var arr = ['primo', 'secondo'];
    function creaArray(items) {
        return new Array().concat(items);
    }
    //implementiamo la versione con le generic per rimanere
    //precisi sul tipo di dato che anmdiamo a inserire nell'array
    function creaArrayFixed(items) {
        return new Array().concat(items);
    }
    var arr1 = creaArray([1, 2, 3]);
    var arr2 = creaArray(['q', 'c', 'd']);
    //però a noi non va bene questa implementazione perché
    //non possiamo controllare il tipo di dato che entrerà nel nostro array
    //esempio come vedi arr2 accetta 55 che è un NUMBER
    arr2.push(55);
    //invece con le generic lo potremmo fare
    //quindi ricapitolando abbiamo una funzione che restituisce
    //un array con un tipo definito da noi, un tipo GENERICO
    var arr1Fix = creaArrayFixed([1, 2, 3]);
    var arr2Fix = creaArrayFixed(['cia', 'c', 'd']);
    //e l'azione di prima non  si può fare
    // arr2Fix.push(8)
})(lez8 || (lez8 = {}));
