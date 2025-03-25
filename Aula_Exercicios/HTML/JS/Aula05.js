let num = [1,3,5,4,8,9,7];
let par = 0;
let impar = 0;
let i = 0;

for (i = 0; i < num.length; i++) {
    
    if (num[i] % 2 == 0) {
        par = par + 1;
    } else {
        impar = impar + 1;
    }
}
console.log(par);
console.log(impar);


