function checkArray(x,array){
    let check = false;
    for(let i =0;i<array.length;i++){
        if (x==array[i]){
            check = true;
        }
    }
    return check;
}
let sample = [0,12,25,1998];
let result = checkArray(12,sample);
console.log(result);