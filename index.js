//Callbacks are functions that take function/s as argument
function callback(){
    console.log("I am a callBack")
}
// Higher order functions that take one or more function as argument and return function.
 function higherOrderFunction(func){
    console.log("I am Higher order function");
    return func();
 }
higherOrderFunction(callback);
//map function takes arrays of values and return a new array which transform single value in a array.
//It doesnot alter the original array
const list = [1,2,3,4];
const result = list.map((num) =>{
    return num * 2;
})
console.log(list);
console.log(result);

//Filter function return new array with certain condition.
const list2 = [1,2,3,4,5,6,7,8,9,10];
const result1 = list2.filter((num) => {
    return num % 2;
})
console.log(result1);

//Reduce function
const list3 = [1,3,6,7,8,9];
const maxValue = list3.reduce((max, curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
})
console.log(maxValue);


const calcBonus = (salary) => salary * 0.05
console.log(calcBonus(5000));


const useState = (value) => {
    let state = value;
    function setData (newValue)  {
        state = newValue;
       
    };
   
    return [state, setData]
}

const [state, setData] = useState(23);
console.log(state);
setData(500);
console.log(state);




