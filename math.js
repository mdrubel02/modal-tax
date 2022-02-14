const age=[ 25, 45, 47, 78, 68];
let total=0;
for(let i =0; i<age.length; i++){
    const element = age[i];
    total=total * element;
    // console.log(total);
}

let myfriend='Robin';
for(let price of myfriend){
    console.log(price);
}