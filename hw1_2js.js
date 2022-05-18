
function age(age_1, age_2, age_3) {
     age_1=17;
     age_2=18;
     age_3=61;
   
if (typeof(age_1)!='number'||typeof(age_2)!='number'||typeof(age_3)!='number') 
{
    console.log("ERROR!!!");
}
else if (age_1 < age_2) {
    console.log("You don’t have access cause your age is", age_1, " It’s less then")
}
else if (age_1>=age_2 && age_1<age_3) {
  console.log("Welcome  !")
}
else if (age_1>age_3){
console.log("Keep calm and look Culture channel")
}
else {
console.log("Technical work")    
};
}

age();