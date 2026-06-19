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



/**
 * Question 2
 * 
 */

let baseLine = [
    {id: 'TC1', status:'fail'},
    {id: 'TC2', status:'Fail'},
]
let actual = [
    {id: 'TC1', status:'pass'},
    {id: 'TC2', status:'fail'},
]

let mapBase = new Map<string,string>();
for(let {id,status} of baseLine){
  mapBase.set(id,mapBase.get(id)??status)
}
let mapAcc = new Map<string,string>();
for(let {id,status} of actual){
  mapAcc.set(id,mapAcc.get(id)??status);
}
let setTest = new Set<string>();
for(let id of mapBase.keys()){
  
  if(mapBase.get(id)?.toLowerCase() !== mapAcc.get(id)?.toLowerCase()){
      setTest.add(id);
  }
}
console.log(setTest);











