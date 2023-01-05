//Задание №2 

//Написать функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

const userSmirnov = {
        name: 'Ivan', 
        firstname: 'Smirnov',
        age : 20,
        city : 'Moscow'
        
};

function Smirnov (obj, str){
      return (str in obj) ;
  } 
  
console.log(Smirnov(userSmirnov, "age"));