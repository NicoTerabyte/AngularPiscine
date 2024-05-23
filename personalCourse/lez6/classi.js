var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var lez6;
(function (lez6) {
    //dichiarazione di una classe astratta
    var Persona = /** @class */ (function () {
        function Persona(nome, cognome) {
            this.nome = nome;
            this.cognome = cognome;
        }
        Persona.prototype.presenta = function () {
            console.log("ciao sono ".concat(this.nome, " ").concat(this.cognome));
        };
        Persona.prototype.saluta = function (entity) {
            console.log("hey ".concat(entity.nome, " ").concat(entity.cognome, " come stai"));
        };
        Persona.prototype.setNome = function (newNome) {
            this.nome = newNome;
        };
        Persona.prototype.setCognome = function () {
        };
        return Persona;
    }());
    //classe con scorciatoia di typescript chiamato shorthand
    var ShortHandShowcase = /** @class */ (function () {
        //la dichiarazione e inizializzazione della variabile
        //avverrà tutta nel costruttore
        //la proprietà readonly rende impossibile da cambiare la
        //variabile che possiede questa proprietà
        function ShortHandShowcase(val1N, val2Str) {
            this.val1N = val1N;
            this.val2Str = val2Str;
        }
        ShortHandShowcase.prototype.showcase = function () {
            console.log("this is ".concat(this.val1N, " and ").concat(this.val2Str));
        };
        //I metodi e le prorpietà statiche sono proprietà
        //che possono essere chiamate senza usare un oggetto
        ShortHandShowcase.daje = function () {
            console.log("daje romaaaaaa hai chiamato un metodo statico");
        };
        return ShortHandShowcase;
    }());
    /*
    classe figlia che deriva da persona
    */
    var Studente = /** @class */ (function (_super) {
        __extends(Studente, _super);
        //lo studente può avere un costruttore super
        //che praticamente riceve valori dal padre
        //e vengono definiti nel metodo super
        function Studente(nome, cognome, materiaPreferita) {
            var _this = _super.call(this, nome, cognome) || this;
            _this.materiaPreferita = materiaPreferita;
            return _this;
        }
        Studente.prototype.test = function () {
            console.log("il test e stato un successo");
        };
        return Studente;
    }(Persona));
    //questa la utilizziamo per avere un'instanza singleton
    var Preside = /** @class */ (function () {
        //per forzare la regola è buona norma mettere il costruttore privato
        function Preside(nome, cognome) {
            this.nome = nome;
            this.cognome = cognome;
        }
        Preside.getInstance = function () {
            if (Preside.instance) {
                return this.instance;
            }
            this.instance = new Preside('marco', 'verdi');
            return this.instance;
        };
        Preside.prototype.presenta = function () {
            console.log("Buongiorno sono il preside ".concat(this.nome, " ").concat(this.cognome));
        };
        return Preside;
    }());
    // let entity: Persona = new Persona("carlo", "alberto")
    var shortEr = new ShortHandShowcase(7, "lollo");
    var entity = new Studente("carlo", "alberto", "scienze");
    // entity.presenta()
    entity.presenta();
    shortEr.showcase();
    ShortHandShowcase.daje();
    Preside.getInstance().presenta();
})(lez6 || (lez6 = {}));
