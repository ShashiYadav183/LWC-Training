const Li_Data = 3.14

function add(a,b){
    return a+b
}



//export together
//export {Li, add}

//exprot alias
export {Li_Data as Li, add}

//export by default
export default function minus(a,b){ //only one default variable /function exist
    return a-b;
}