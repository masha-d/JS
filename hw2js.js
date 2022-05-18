
function checkStr(str){
    
if (typeof str !=='string'){
    console.log('ОШИБКА!!!');
    return; 
}     

if (str.length<5){
    console.log('Должно быть минимум 5 символов в строке');
}
 if (str.length>64){
    console.log('Должно быть максимум 64 символа в строке');
}
if (/^(?=.*?[A-Za-zА-Яа-яЁё])/.test(str)!=true) {
    console.log("В строке должны быть буквы");  
}
if (/^(?=.*?[A-Z-А-Я-Ё])/.test(str)!=true) {
    console.log("Должна быть хотя бы одна буква в верхнем регистре"); 
} 
if (/\d/.test(str ) !=true) {
    console.log("Должна быть хотя бы одна цифра");  
} 
 if (str.includes('@')!=true) {
    console.log("Должна быть хотя бы одна @");
}
if (str.length===0){
    console.log('Строка не должна быть пустой');
}
}
checkStr('');
