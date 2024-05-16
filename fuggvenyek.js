export function tablazatOsszeallit(lista) {
  /* összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka! */
  let txt = "";
  txt += "<table class='table table-striped'>";
  txt += "<tr><th>Név</th><th>Kor</th><th>Nem</th><th></th></tr>";
  /*  szorgalmi: a fejléc kulcsait is ciklussal írd ki! */
  lista.forEach((element,i) => {
    txt += `<tr>`;
    for (const key in element) {
      /* objektumokon iterál végig */
      
      txt += `<td>${element[key]}</td>`;
    }

    txt += ` <td id="${element.id}" class="kuka">🗑️</td>
            </tr>`;
  });
  txt += "</table>";
  return txt;
}

export function megjelenites(txt) {
  /* megjelníti egy html szoveget egy html elemben */
  const adatokELEM = $(".adatok");
  adatokELEM.html(txt);
}
