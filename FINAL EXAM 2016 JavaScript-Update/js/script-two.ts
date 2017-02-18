class ListaNaSostojki {
    public brasno: string ; // so ova dokolku korisnikot ne vnese vrednost imamde defoltna vrednost prazen string a vo isto vreme ni dozvoluva da imame New Lista na Sostojki bez da deklarirame vrednosti
    public mleko: string ;
    public maslo: string ;
    public  sol: string ;
    public seker: string ;
    public jajca: string ;
    public domati: string ;
    public piperki: string;
    public sirenje: string;
    public kaskaval: string;
    public kompir: string ;
    public meso: string;
    constructor(brasno = "", mleko = "", maslo = "", sol = "", seker = "", jajca = "", domati = "", piperki = "", sirenje = "", kaskaval = "", kompir = "", meso = "") {
        this.brasno = brasno;
        this.mleko = mleko;
        this.maslo = maslo;
        this.sol = sol;
        this.seker = seker;
        this.jajca = jajca;
        this.domati = domati;
        this.piperki = piperki;
        this.sirenje = sirenje;
        this.kaskaval = kaskaval;
        this.kompir = kompir;
        this.meso = meso;
    }
}


class Recept {
    public name: string;
    public origin: string;
    public sostojki: ListaNaSostojki;

    constructor(ime:string, cklj: string, sostojki: ListaNaSostojki ) {
        this.name = ime;
        this.origin = cklj;
        this.sostojki = sostojki;
    }
}

let prvaRecepta = new Recept("Spageti", "Italija", new ListaNaSostojki("tip 1000", "1 litro", "2 lazici"));
console.log(prvaRecepta);


