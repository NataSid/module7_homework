//Задание №4

//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricAplicetion(power){
  this.device = 'домашний электроприбор',
  this.name = name
}

ElectricAplicetion.prototype.getPower = function (power, t, on){
   let workon = on;
    if (on === 1){
      workon = 'Прибор включен';
    } else {
       workon = 'Прибор выключен';
    }


 console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t } Вт. ${this.name}: ${workon}`);

};


function Characteristic (color, name ){
  this.color = color,
    this.name = name
}



Characteristic.prototype = new ElectricAplicetion();


const teapot = new Characteristic ('black' ,'Teapot');
const laptor = new Characteristic ('black' ,'laptor');
const TV = new Characteristic ('black' ,'TV');


teapot.getPower(700, 3, 1);
laptor.getPower(200, 4, 2);
TV.getPower(50, 3, 1);


