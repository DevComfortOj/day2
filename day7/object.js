//object
//block scope
{
    let x="Asabeneh";
    console.log(x);
}
//functional scope
function letAsabeneh(){
    let a="Javascripts";
    console.log(a);
}
letAsabeneh();

//global scope
let day = 'wednesday';
function letdaY(){
    console.log(day);
}
letdaY();
let name='bolu'
let g="javascripts";
let h="10"
function letslearnscope(){
    console.log(g,h);
    if (true){
        let a="html"
        let h="css"
    }
    console.log(name);
}console.log(g,h);
letslearnscope();

//object
const a={}
const person={
    firstname:"comfort",
    lastname:"Ojo",
    age:20,
    skill:["html","css","javascript"],
    city:"kogi",
    getfullname:function(){
        return`${this.firstname} ${this.lastname}`;
    }
};
console.log(person.getfullname());
// person.firstname="comfort";
// person["lastname"]="Ojo"
console.log(person);

let copyPerson=Object.assign({},person);
copyPerson.skill.push('react')
console.log(copyPerson);
copyPerson.address="No 3 Jatto close";
console.log(copyPerson);


const keys=Object.keys(copyPerson);
console.log(keys);
const values = Object.values(copyPerson);
console.log(values);
const entries= Object.entries(copyPerson);
console.log(entries);
console.log(copyPerson.firstname);
console.log(copyPerson["firstname"]);



//hasown property(include)
console.log(copyPerson.hasOwnproperty("firstname"));

console.log();

//exercises level 1
console.log();
const dog={};
console.log(dog);
dog.name="bingo";
dog.breed="caucasion";
dog.getdoginfo= function(){
    return`${this.name} ${this.breed}`
}

//exercises level2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };


  // find the person who has many skills in the user object.

  function letmostskills(){
    letmostskills=""
    for(let skill in users){
      if(users[j].skill.length >letmostskills.lenth){
        letmostskills=[i];
      }
    }
    return letmostskills;
  }
  console.log(letmostskills);