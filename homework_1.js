//Задание №1 

//Написать, функцию, которая принимает в качестве аргумента объект и выводит в 
//консоль все ключи и значения только собственных свойств. Данная функция не 
//должна возвращать значение.



userSmirnov ({
        name: 'Ivan', 
        firstname: 'Smirnov',
        age : 20,
        city : 'Moscow'
        
});


function userSmirnov (obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key));
      console.log(`${key} : ${obj[key]} ` );
  }
}