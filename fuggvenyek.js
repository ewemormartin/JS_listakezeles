export function tablazatLetrehoz(lista){
    let txt = `<table class="text-center table-striped container-fluid " style="max-width: 400px">
            <tr>
                <th class="border border-dark">Név</th>
                <th class="border border-dark">Kor</th>
                <th class="border border-dark">Nem</th>
                <th class="border border-dark">§ 😎 §</th>
            </tr>`;
    lista.forEach((element,index) => {
        txt += `<tr">
            <td class="border border-dark">${element.nev}</td>
            <td class="border border-dark">${element.kor}</td>
            <td class="border border-dark">${element.nem?"nő":"férfi"}</td>
            <td class="border border-dark"><button type="button" class="btn btn-primary" id="${index}">🗑️</button></td>
        </tr>`;
    });
    return txt;
}
export function megjelenit(text) {
    let adatok = $(".adatok");
    adatok.html(text);
}