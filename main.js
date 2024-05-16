//import { emberekLISTA } from "./adat.js";

import { sorTorles, szuresNevSzerint, tablazatRendez } from "./adatKezelo.js";
import { megjelenites, tablazatOsszeallit } from "./fuggvenyek.js";
import { adatokListaba } from "./urlapKezelo.js";
import { deleteAdat, getAdat } from "./aszinkron.js";

//getAdat("adat.json",init)
getAdat("http://localhost:3000/emberekLISTA",init)



let nevIrany = 1;
//init(emberekLISTA);
nevSzuresEsemeny();



export function init(lista) {
  console.log("lista",lista)
  let txt = tablazatOsszeallit(lista);
  megjelenites(txt);
  nevRendezEsemeny(lista);
  sorTorlesEsemeny()
  adatokListaba(emberekLISTA)
}

function nevRendezEsemeny(lista) {
  /* ha a táblázat név fejlécmezőjére kattintunk, akkor berendezzük a listát, és megjelenítjük újra a táblázatot */
  const nevELEM = $(".adatok th").eq(0); /* első fejléc th elem */
  nevELEM.on("click", function () {
    const LISTA = tablazatRendez(lista, nevIrany);

    nevIrany *= -1;
    init(LISTA);
  });
}

function nevSzuresEsemeny() {
  /* a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó. 
Ezután megjelenítjük a szűrt listát az oldalon. 
Akkor fog lefutni, amikor megváltozik a szűrőmező tartalma  */
  const szuroELEM = $("#szNev");
  szuroELEM.on("keyup", function () {
    let szuroSZoveg = szuroELEM.val();
    const LISTA = szuresNevSzerint(emberekLISTA, szuroSZoveg);
    init(LISTA);
  });
}
/* szorgalmi: szűrés más mezők alaőpján is működjön  */

function sorTorlesEsemeny() {
  /* minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.   */
  const kukaELEM = $(".kuka");
  kukaELEM.on("click", function (event) {
    let id = event.target.id; /*  az aktuális kuka indexe */
    //const LISTA = sorTorles(emberekLISTA,index);
    //console.log(LISTA)
    //init(LISTA);
    deleteAdat("http://localhost:3000/emberekLISTA",id)
  });
}
/*  szorgalmi: Mi a hiba a programban?  */
