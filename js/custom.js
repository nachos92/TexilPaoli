var chiSiamo = "\
        TEXIL PAOLI SRL OPERA NEL SETTORE DEL COMMERCIO DI TESSUTI \
        E ABBIGLIAMENTO DI  STOCK DA OLTRE 30 ANNI. IL NOSTRO CORE BUSINESS È IL RITIRO \
        E LA COMMERCIALIZZAZIONE DI RIMANENZE DI PRODOTTO (TESSUTI DI STOCK ABBIGLIAMENTO DI STOCK ) \
        DI FAMOSI BRAND ITALIANI.";
var sez_chiSiamo = ""
//TODO Inserire stringona qui o spostare tutte le stringhe in un altro file.

$(document).ready(function () {
    Init();
}
);


function Init() {
    /**
     * Metto i testi nei relativi elementi.
     */
    jQuery('#chiSiamo').text(chiSiamo);
    console.log("Init");

}


function getTesti() {

}