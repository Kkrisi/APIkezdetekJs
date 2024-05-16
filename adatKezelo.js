export function tablazatRendez(lista, irany) {
  console.log(irany);
  /* - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát */
 
  lista.sort(function (a, b) {
    /* szorgalmi: a.nev első betűjének karakterkódja alapján */
    /*    if (a.nev > b.nev) {
      return 1;
    } else {
      return -1;
    } */
    
    return a.nev.toUpperCase() > b.nev.toUpperCase()
      ? 1 * irany
      : -1 * irany; /*  pozitív, vagy negatív érték kell */
      
  });

  return lista;
}
export function tablazatRendezSzamSzerint(lista, irany) {
  console.log(irany);
  /* - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát */
 
  lista.sort(function (a, b) {
    /* szorgalmi: a.nev első betűjének karakterkódja alapján */
    /*    if (a.nev > b.nev) {
      return 1;
    } else {
      return -1;
    } */
    
    return a.kor - b.kor
    
      
  });

  return lista;
}

/* szorgalmi hf: lehessen rendezni kor szerint is! *** tetszőleges mező szerint */

function atalakit(szoveg) {
  /*  szorgalmi házi feladat: 
  Á- A É- E 
  replaceAll()
*/
}

export function szuresNevSzerint(lista, szurtSzoveg) {
  /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
  const SZURTLiSTA = lista.filter(function (elem) {
    return elem.nev.includes(szurtSzoveg);
  });
  console.log(SZURTLiSTA);
  return SZURTLiSTA;
}

export function sorTorles(lista, index) {
  /* - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.   */
  lista.splice(index, 1);
  return lista;
}
