function checkArray(x,array){
    let check = "không";
    for(let i =0;i<array.length;i++){
        if (x==array[i]){
            check = "có";
        }
    }
    return check;
}
let sample = [0,12,25,1998];
let result = checkArray(12,sample);
console.log(result);