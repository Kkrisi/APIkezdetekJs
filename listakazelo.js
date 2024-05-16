import { emberekLISTA } from "./adat.js";


for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element)
}

emberekLISTA.forEach(function (ember, i) {
    console.log(ember.nev, i)

})
/* adatLISTA.forEach((element,index) => {
    console.log(element)
    console.log(index)

})
 */

/* szűrjük a férfiakra a listának */

const FERFIAK = emberekLISTA.filter(function (ember) {
    return !ember.nem  //ez az érték mindig logikai változó! true/false
})
const FERFIAK2 = emberekLISTA.filter((ember) => {
    return !ember.nem  //ez az érték mindig logikai változó! true/false
})

console.log(FERFIAK)
/* azokat az embereket szeretném, akik 20 évnél fiatalabbak */
const FIATALOK=emberekLISTA.filter(function(ember){
    return ember.kor<20
})
console.log(FIATALOK)
/*  10 évnél idősebb férfiak */

const FERFIAK10FELETT=emberekLISTA.filter((ember)=>{
    return ember.kor>10 && !ember.nem
})

/* RENDEZÉS */
/*  rendezzük fordított sorrendbe kor szerint az embereinket */
emberekLISTA.sort(function(e1,e2){
    console.log(e1.kor, e2.kor, e1.kor-e2.kor)
    return e1.kor-e2.kor 
})
console.log(emberekLISTA)

/*  véletlen sorrendű rendezés, kor szerint keverés */
/* emberekLISTA.sort(function(e1,e2){

  
    return Math.random()-0.5
})
console.log(emberekLISTA) */