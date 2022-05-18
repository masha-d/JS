let age_1;
let age_2;
let age_3;
function age(age_1, age_2, age_3) {
age_1 = prompt('age_1=');
age_2 = prompt('age_2=');
age_3 = prompt('age_3=');
   age_1=Number(age_1);
   age_2=Number(age_2);
   age_3=Number(age_3);
  
if (isNaN(age_1)==true||isNaN(age_2)==true||isNaN(age_3)==true) 
{
    console.log("ERROR!!!");
    }

else if (age_1 < age_2) {
    
    console.log(`You don't have access cause your age is  ${age_1}  It's less then`)
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