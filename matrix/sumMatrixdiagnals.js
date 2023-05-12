let a1 = [11,2,4];
let a2 = [4,5,6];
let a3 = [10,8,-12];

let matrix = [a1,a2,a3]
let m1 = 0;  
let m2 = 0;
let count = 0
for(let i = 0; i < matrix.length; i++){ 
 count += 1
 m1 += matrix[i][i] 
 m2 += matrix[i][ matrix[i].length - count ]
}

console.log(Math.abs(m1-m2))
