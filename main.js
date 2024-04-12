import { ADATLISTA } from "./adat.js";
import { rendez } from "./adatKezelo.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";

megjelenit(tablazatLetrehoz(ADATLISTA))
console.log(rendez(ADATLISTA, "nev"))

function init(){
    let txt = tablazatLetrehoz(lista)
        megjelenit(txt);
        redezesEsemeny();
}

function redezesEsemeny(){
    const nevMezoELEM=$(".adatok table th").eq(0);
    nevMezoELEM.on("click",function(){
        const lista = rendez(ADATLISTA)
        megjelenit(tablazatLetrehoz(lista))
        init();
        rIrany *= -1;
        console.log(rIrany)
    })
}