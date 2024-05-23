var lez8Pt2;
(function (lez8Pt2) {
    //qua usiamo i costraints
    //in parole povere diamo un limite ai tipi che T può essere
    //un vincolo
    var arr = ['primo', 'secondo'];
    function creaArrayFixed(items) {
        return new Array().concat(items);
    }
    var arr1Fix = creaArrayFixed([1, 2, 3]);
    //non può esssere di tipo number in questo caso
    var arr2Fix = creaArrayFixed(['cia', 'c', 'd']);
})(lez8Pt2 || (lez8Pt2 = {}));
