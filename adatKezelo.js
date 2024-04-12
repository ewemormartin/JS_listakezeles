export function rendez(lista,kulcs, rIrany){
    const rlista = lista.sort(function(ember1,ember2){
        return ember1[kulcs]<ember2[kulcs]?-1*rIrany:1*rIrany;
       /*  return ember1.nev<ember2.nev?-1:1; */
    })
    return rlista;

}

export function szures(lista, keresoSzoveg){
    const szurtLista = lista.filter(function(ember){
        return ember.nev.includes(keresoSzoveg);
    })
    return szurtLista;
}