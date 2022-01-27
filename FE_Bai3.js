function checkVowel(array){
    let count = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]=="a" ||
            array[i]=="e" ||
            array[i]=="i" ||
            array[i]=="o" ||
            array[i]=="u"
        ){
            count++;
        }

    }
    if (count ==0){
        count = -1
    }
    return count;
}
let sample = ["t","h","i","e","t","n","n"]
let result = checkVowel(sample);
console.log(result);