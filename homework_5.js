//Задание №5
//Переписать консольное приложение из предыдущего юнита на классы.


class ElectricAplicetion{
  constructor(power){
    this.device = 'домашний электроприбор';
    this.name = name;
}

getInfo(power, t, on){
   let workon = on;
    if (on === 1){
      workon = 'Прибор включен';
    } else {
       workon = 'Прибор выключен';
    };

 console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t } Вт. ${this.name}: ${workon}`);
 }
}


class Characteristic extends ElectricAplicetion {
  constructor (color, name, power ){
    super(power);
      this.color = color;
      this.name = name;
  }
}

const teapot = new Characteristic ('black' ,'Teapot');
const laptor = new Characteristic ('black' ,'laptor');
const TV = new Characteristic ('black' ,'TV');


teapot.getInfo(700, 3, 1);
laptor.getInfo(200, 1, 1);
TV.getInfo(50, 3, 0);