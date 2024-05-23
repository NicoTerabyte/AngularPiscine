var lez8Pt3;
(function (lez8Pt3) {
    var Prova = /** @class */ (function () {
        function Prova() {
            this.lista = [];
        }
        Prova.prototype.addItem = function (item) {
            this.lista.push(item);
        };
        Prova.prototype.removeItem = function (item) {
            this.lista.splice(this.lista.indexOf(item, 1));
        };
        return Prova;
    }());
    var listaStringhe = new Prova();
    listaStringhe.addItem("daje");
    var listaNumeri = new Prova();
    listaNumeri.addItem(221);
})(lez8Pt3 || (lez8Pt3 = {}));
