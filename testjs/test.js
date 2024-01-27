//for loop
var mylist = [
    "eating",
    "running",
    "sleeping",
    "coding",
    "gaming",
]
for(var u=1; u<mylist.length ; u++){
    console.log(mylist[u]);
}
//while loop
var counter = 10;
while(counter>=0){
    console.log(counter);
    counter--;
}
//do...while loop
var count = 0;
do{
    console.log(count);
    count++;
}while(count<5);
//Dom event
var button = document.querySelector('button');
button.addEventListener('click',function(){
    console.log("click is working")
})

//testing list note
var button = document.getElementById('but');
var input = document.getElementById('inputlist');
var ul = document.querySelector('ul');

button.addEventListener('click', function(){
    if(input.value.length>0){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);   
    input.value = "";
    }
})

//using function to get shorter
function checkinput(){
   return input.value.length;
}

function createlist(){
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);   
    input.value = "";
}
//using keyboard events instead of button
function afterenter(event){
    if(checkinput()>0 && event.keyCode === 13){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);   
        input.value = "";
}}
// use input because we dont need button. just directly to input
//shotter than button
input.addEventListener('keypress', afterenter);

//u can't call a variable which is inside a function
// but u can call a variable from outside into a funcion 
var a = "Hello";
function A(){
    console.log(a);
}

//switch statement (same as if/else if function)
//case refer to switch()
function Direction(place){
    switch (place){
        case "forward":console.log("Forward direction");
        break;
        case "backward":console.log("backward direction");
        break;
        case "Nowhere":console.log("Nowhere direction");
        break;
        default:console.log("None");
    }
}

//deconstruction(allow u to call all variable value in an object to outside directly
//by one sentence)
const obj={
    name:"tun",
    age:"12",
    gender:"male",
}
//without deconstruction
//const name = obj.name;
//const age = obj.age;
//const gender = obj.gender;

//With deconstruction
const{name,age,gender} = obj;

//defult argument
//normal function
function number(a,b){
    return a+b;
}
number (1+2);
//output will be 3

//with defult argument
function Number(a=1,b=1){
    return a+b;
//output will be 2 without adding any number 
}
Number(2,2);
//you can add new value too and it will replce to old value
//output will be 4


//Advance Array
//for each Method

 const myarray = [1,2,3,4,5];
 //normal array method
 for(let i=0; i<myarray.length;i++){
    console.log(myarray[i]);
 }
 //for each array method
 const double=[];
 const forEachArray = myarray.forEach(item=>{
    return double.push(item*2);
 });
  
 //check out put in cosole

 //Map method (like for each mathod)
 const maparray = myarray.map(item=>{
    return item*2;
 });
 console.log('map',maparray);
//filter method
const filterarray = myarray.filter(item=>{
    //like if function(this will output start form 2)
    return item>1;
});
console.log('filter',filterarray)
//reduce method 
const reducearray = myarray.reduce((accumulator,item)=>{
   //accumulator will save the result from a loop and add that to next loop 
    return accumulator+item;
},0);
console.log('reduce',reducearray)

 //use all function start from for each method title(all in one)