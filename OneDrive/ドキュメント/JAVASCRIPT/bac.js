const person={
    name:'Lavanya',
    age:19,
    isStudent :true,

    greet: function(){
        console.log(`Hello, myself ${this.name}`);
    }
}

console.log(person['age']);
person.greet();

person.city='NewYork';

console.log(person.city);

//map
let arr=['apple','mango','banana'];

const ua=arr.map(arr=>arr.toUpperCase());

console.log(ua);

let num=[1,2,3,4,5,6];

const newNum=num.map(n=>n**3);
console.log(newNum);


//filter
const newfriut=arr.filter(a=>a.length>5);
console.log(newfriut);

const newNumm=num.filter(n=>n%2==0);
console.log(newNumm);

//reduce

const val=num.reduce((acc,i)=>i+acc);
console.log(val);

//spread

let num1=[1,2,3,4,5];
let num2=[9,8,7,6,5];
let merge=[...num1,33,444,5555,6666,...num2];
console.log(merge);

//
const countt=arr.map(i=>i.length);
console.log(countt);


//
let fruit=['apple','mango','apple','banana','apple'];
const countFruit=fruit.reduce((acc,i)=>{
    acc[i]= ( acc[i] || 0 )+1;
    return acc;
},{});
console.log(countFruit);