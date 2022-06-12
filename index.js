

//function findMatching(drivers,string){

//{
    //return drivers.filter((driver)=>drivers.toLowerCase()=== string.toLowerCase());
//}
//}
//const fuzzyMatch=(drivers,string)=>{
//    return drivers.filter((driver)) => drivers.chartAt(0)===string.chartAt(0)
//}
const findMatching =(names, returnDrivers)=>{
    return names.filter((filterdNames) => 
    filterdNames.toLowerCase() === returnDrivers.toLowerCase());
}

const fuzzyMatch = (names, returnDrivers) =>{
    return names.filter((filterdNames) => 
    filterdNames.toLowerCase().indexOf(returnDrivers.toLowerCase()) === 0);
}

const matchName = (names, hometown) =>{
    return names.filter((filterdNames) => 
    filterdNames.name ===hometown)
}