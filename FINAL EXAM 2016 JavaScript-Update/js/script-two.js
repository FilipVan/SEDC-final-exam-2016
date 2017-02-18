var ListaNaSostojki = (function () {
    function ListaNaSostojki(brasno, mleko, maslo, sol, seker, jajca, domati, piperki, sirenje, kaskaval, kompir, meso) {
        if (brasno === void 0) { brasno = ""; }
        if (mleko === void 0) { mleko = ""; }
        if (maslo === void 0) { maslo = ""; }
        if (sol === void 0) { sol = ""; }
        if (seker === void 0) { seker = ""; }
        if (jajca === void 0) { jajca = ""; }
        if (domati === void 0) { domati = ""; }
        if (piperki === void 0) { piperki = ""; }
        if (sirenje === void 0) { sirenje = ""; }
        if (kaskaval === void 0) { kaskaval = ""; }
        if (kompir === void 0) { kompir = ""; }
        if (meso === void 0) { meso = ""; }
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
    return ListaNaSostojki;
}());
var Recept = (function () {
    function Recept(ime, cklj, sostojki) {
        this.name = ime;
        this.origin = cklj;
        this.sostojki = sostojki;
    }
    return Recept;
}());
var prvaRecepta = new Recept("Spageti", "Italija", new ListaNaSostojki("tip 1000", "1 litro", "2 lazici"));
console.log(prvaRecepta);
