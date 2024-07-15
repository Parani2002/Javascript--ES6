//ARRAY DESTRUCTURING

//SWAPPING VARIABLES VALUES USING DESTRUCTURING

let a = 10;
let b = 20;

 [b,a] = [a,b]
 console.log(a)
 console.log(b)

 const numbers = [1, 2, 3, 4, 5];

// Using the rest operator to collect remaining items
const [first, second, ...rest] = numbers;

console.log(first);  
console.log(second); 
console.log(rest);   


//  const {handleSubmit,register} = useForm()  //-----> useForm return de structured into values  Object destructuring

 const [x,y,z] = [2,3,4]
 console.log(x,y,z); 

 //OBJECT DESTRUCTURING

 const user = {
    firstname:"Paranitharan",
    lastname:"Suntharalingam",
    age:22,
    place:"Jaffna",
    degreeDetails: {degree:"BEng(Hons) Software Engineering", institute:"Informatics Institute of Technology"}
 }


 const objectReturn = () => user   //It returns user object

 const {firstname,lastname,...p} = objectReturn()  //Object destructuring
 console.log(firstname);
 console.log(lastname);
 console.log(p);