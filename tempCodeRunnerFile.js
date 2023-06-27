let expensive=[10000,20000,34000,45000,50000,90000,27000];
let higest=0;
let smallest=expensive[0];
let sum=0;
for(let ele of expensive)
{
    (ele>higest?higest=ele:higest=higest);
    (ele<smallest?smallest=ele:smallest=smallest);
    sum=sum+ele;
    
}
console.log(`${higest} is the largest `);

console.log(`${smallest} is the smallest `);


console.log(`${sum} is the total `);
 