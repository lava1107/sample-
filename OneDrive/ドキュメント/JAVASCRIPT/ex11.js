console.log("\nLAVANYA M");
//1
/*const products=[
    {name:'Laptop',price:1200},
    {name:'Phone',price:800},
    {name:'Monitor',price:300}
];

max=0;
for(let p of products)
{
    if(p.price>max)
    {
        max=p.price;
    }

}
console.log("Highest Price :",max);


//2
const numbers = [1, 2, 3, 2, 4, 1, 5]; 
const uniqueElement=[...new Set(numbers)];
console.log(uniqueElement);


//3
const fruits=['apple','banana','apple','orange','banana','banana','banana'];
const freq=fruits.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]||0)+1;
    return acc;
},{});
console.log(freq);


//4 object to arrays
const user={
    name:'John',
    age:30,
    job:'Developer'
};
const arrr=Object.entries(user);
console.log(arrr);


//5
const nestedArray=[1,[2,3],[4,5],6];
const flatt=nestedArray.flat(Infinity);
console.log(flatt);


//6
const array1=[1,2,3,4,5];
const array2=[4,5,6,7,8];
const commonElements=array1.filter(i=> array2.includes(i));
console.log(commonElements);

//7
const people=[
    {id:1,name:'Alice'},
    {id:2,name:'Bob'},
    {id:3,name:'Charlie'}
]
const idToRemove=1;
const updatePeople=people.filter(i=>i.id!=idToRemove);
console.log(updatePeople);


//8
const peoplee = [ 
{ name: 'John', age: 35 }, 
{ name: 'Alice', age: 25 }, 
{ name: 'Bob', age: 30 } 
]; 
peoplee.sort((a,b)=>b.age-a.age);
console.log(peoplee);


//9
let shop=[]

function addItem(name,price,qty)
{
    const existing=shop.find(i=>i.name.toLowerCase()==name.toLowerCase());
    if(existing)
    {
        shop.quantity+=qty;
    }
    else{
        shop.push({name,price,qty});
    }
}
function updateQuantity(name,qty)
{
    const f=shop.find(i=>i.name.toLowerCase()==name.toLowerCase());
    if(f)
    {
        f.qty=qty;
    }
    console.log(name," - ",qty," Updated");
}

function removeItem(name)
{
    shop=shop.filter(i=>i.name.toLowerCase()!=name.toLowerCase());
    console.log(name," Removed");
}
function show()
{
    console.log(shop);
}
function calculateTotal()
{
    return shop.reduce((acc,i)=> acc+i.price*i.qty,0);
}  
addItem('Phone',20000,2);
addItem('Laptop',50000,1);
console.log(calculateTotal());
updateQuantity('Phone',3);
show();
removeItem('Phone');
show();
console.log(calculateTotal());

//10
const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [78, 82, 80] },
  { name: "Charlie", grades: [95, 88, 91] },
  { name: "David", grades: [70, 75, 72] }
];

function calculateAverage(grades)
{
    const sum=grades.reduce((acc,i)=> acc+i,0);

    return sum/grades.length;
}
function topGrades()
{
    let max=0;
    for(const s of students)
    {
        const aa= calculateAverage(s.grades);
        if(aa>max)
        {
            max=aa;

        }
    }
    console.log("Highest Grade: ",max);
}

topGrades();

//11
const library = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "available" },
  { title: "1984", author: "George Orwell", status: "available" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", status: "checked out" },
  { title: "Moby Dick", author: "Herman Melville", status: "available" }
];

function checkOut(title)
{
    let is=library.find(i=> i.title==title)
    if(is)
    {
        if(is.status=="available")
        {
            console.log(title," Book checkout");
            is.status="checked out";
        }
        else{
            console.log(title," not available");
        }
    }
}

function returnBook(title)
{
    let iss=library.find(i=>i.title==title)
    {
        if(iss)
        {
            if(iss.status=="checked out")
            {
                console.log(title," Book is returned");
                console.log(title," Book is available now");
                iss.status="available";
            }
        }
    }
}

function showAvailableBook()
{
    for(let l of library)
    {
        if(l.status=="available")
        {
            console.log("Title :",l.title);
            console.log("Author : ",l.author);
            console.log("Status : ",l.status);
        }
    }
}

checkOut(1984);
console.log("\nAvailable Books :\n");
showAvailableBook();
returnBook(1984);


//12                           
const posts=[
    {content:"Post 1",timeStamp: new Date("2026-06-11T18:25:00")},
    {content:"Post 2",timeStamp: new Date("2026-04-13T08:18:00")}
];

posts.sort((a,b)=>(b.timeStamp-a.timeStamp));

posts.forEach(post=>{
    console.log(post.content," ",post.timeStamp.toLocaleString());
})


//13

employees=[
    {name:"lavanya",hourlyWage: 200,hoursWorked: 48},
    {name:"Yugan",hourlyWage:250,hoursWorked:40},
    {name:"Yazhal",hourlyWage:210,hoursWorked:58}
]
function calculatePayRoll(emp)
{
    let total=0;
    
    emp.forEach(i=>{
        let salary;
        if(i.hoursWorked>40)
        {
            let over=i.hoursWorked-40;
            salary=(40*i.hourlyWage)+(1.5*over*i.hourlyWage);
        }
        else{
            salary=i.hoursWorked*i.hourlyWage;
        }
        console.log(i.name," ",salary);
        total+=salary;
    });

    console.log("Total Pay ROll : ",total);
}
calculatePayRoll(employees);

//14
event1={
    name:"Meeting",startTime: new Date("2026-06-27T10:00:00"),
    endTime:new Date("2026-06-27T11:30:00")
};
event2={
    name:"Seminar",startTime:new Date("2026-06-27T11:00:00"),
    endTime:new Date("2026-06-2712:00:00")
};
function checkOverLap(e1,e2)
{
    if(e1.startTime<e2.endTime || e1.endTime>e2.startTime)
    {
        console.log("Events OverLap");
    }
    else{
        console.log("Event Do Not OverLap");
    }
}
checkOverLap(event1,event2);
*/

//15
tasks=[];
function addTask(title,description)
{
    tasks.push({
        title:title,
        description: description,
        status:"pending"
    });
    console.log(title,"added");
}
function markCompleted(title)
{
    let task=tasks.find(i=>i.title.toLowerCase()==title.toLowerCase());
    task.status="completed";
    console.log(title,"Status Marked as Completed");
}
function getPendingTask()
{
    console.log("\nPending Tasks :");
    tasks.forEach(task=>{
        if(task.status=="pending"){
            console.log(task.title,"-",task.description);
        }
    });
}
addTask("Study","Preparation of JS");
addTask("Assignment","Submit JS assignment");
addTask("Project","Complete mini project");
markCompleted("Project");
getPendingTask();
/*
//16
let products=[
    {name:"Laptop",qty:10,price:50000},
    {name:"Mouse",qty:20,price:500},
    {name:"Keyboard",qty:15,price:1000}
];
function restock(name,qty)
{
    let p=products.find(i=>i.name.toLowerCase()==name.toLowerCase());
    p.qty+=qty;
    console.log(name,"Restocked");
}
function sell(name,qty)
{
    products.forEach(i=>{
        if(i.name=name){
            if(i.qty>=qty){
                i.qty-=qty;
            }
            else{
                console.log("Not enough stock !!");
            }
        }
        else{
            console.log("Product not found!!");
        }
    });
}
function totalInventoryValue()
{
    let total=0;
    products.forEach(i=>{
        total+=i.qty*i.price;
    }
    );
    console.log("Total Inventory Value :",total);
}
restock("Laptop",5);
sell("Mouse",5);
totalInventoryValue();
*/