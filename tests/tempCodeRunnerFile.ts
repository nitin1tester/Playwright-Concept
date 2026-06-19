/**
 * Question 1 do it using Map
 */

let result = [
    {suite:'Auth',duration:120},
    {suite:'Checkout',duration:300},
    {suite:'Auth',duration:80},
] 

let map = new Map<string,number>();

for(let {suite,duration} of result){
  map.set(suite,(map.get(suite)??0)+duration)
}
console.log(map);
