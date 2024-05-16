export function getAdat(vegpont,callback){
    fetch(vegpont,{method:"GET"})
        .then((response)=>response.json())
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))
}








export function postAdat(vegpont,adat,callback){
    fetch(vegpont,
        {
        method:"POST",
        body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))
}








export function deleteAdat(vegpont,id){
    fetch(vegpont+"/"+id,
        {
        method:"DELETE",
        })
        .then((response)=>response.json())
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))
}







export function putAdat(vegpont, id, adat){
    fetch(vegpont+"/"+id,
        {
        method:"POST",
        body: JSON.stringify(adat)
        })
        .then((response)=>response.json())
        .then((data)=>{console.log(data)})
        .catch((error)=>console.log(error))
}





