
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