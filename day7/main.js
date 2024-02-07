//question 1
function fullname(){
    console.log("Ojo comfort oluwadamilare");
}

fullname();


//question 2
function name(lastname,firstname){
    let age= 20
console.log(`${lastname} ${firstname}`);
}
name("Adetola peter");
name();


//question 3
//question 13
function BMI(w,h) {
    constbmivalves=w/(h*h);
    returnbmivalve;

    if(bmivalves<18.5){
        return"underweight";
    }else if(bmivalves>=18.4 || bmivalves<=25){
        return"normal weight";  
    }else if(bmivalves>= 25 || bmivalves<=29.9){
        return"overweight"
    }else {
        return"obese";
    }
    

}

console.log(BMI(150,100));