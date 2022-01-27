function checkVowel(array){
    let check = false;
    for(let i=0;i<array.length;i++){
        if(array[i]=="a" ||
            array[i]=="e" ||
            array[i]=="i" ||
            array[i]=="o" ||
            array[i]=="u"
        ){
            check = true;
        }
    }
    return check;
}
let sample = ["t","h","i","e","t","n","n"]
let result = checkVowel(sample);
console.log(result);