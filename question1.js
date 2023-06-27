// let number="1234567899";
// let numval;
// console.log(`entered ${number} is`);
// console.log((numfun(number)?"valid":"not valid"));
//  function numfun(number)
//  {
//     if(number.length==10)
//     {
//         return true;
//     }
//     else
//     {
//         return false;

//     }
//  }

//  let gmail="qwer@gmail.com";
// console.log("gmail is "+(gmail.endsWith("@gmail.com")?"valid":"not valid"));

// let weekdays=["monday","tuesday","sunday"];
// console.log(`${weekdays[(weekdays.length-1)]}`);
// let i=0;
// while(i<weekdays.length)
// {
//     console.log(weekdays[i]);
//     i++;
// }

// let expensive=[10000,20000,34000,45000,50000,90000,27000];
// let higest=0;
// let smallest=expensive[0];
// let sum=0;
// for(let ele of expensive)
// {
//     (ele>higest?higest=ele:higest=higest);
//     (ele<smallest?smallest=ele:smallest=smallest);
//     sum=sum+ele;
    
// }
// console.log(`${higest} is the largest `);

// console.log(`${smallest} is the smallest `);


// console.log(`${sum} is the total `);
 

let key=2;
let position=-1;
let arr=[10,11,1,2,3,14];
for(let ele in arr)
{
    if(arr[ele]==key)
    {
        position=ele;
        
        break;
    }
    
}

if(position>=0)
{
    position++;
    console.log(` find AT position ${position}`);
}
else
{
    console.log("sorry");
}