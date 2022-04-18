let a = 5;

if(a !== 0){
    document.write("Вірно");
} else {
    document.write("Невірно");
}





let time = prompt("Число від 1 до 59 : ");

if(time <=15&&time>0){
    document.write("<div>1 частина години</div>");
}
else if(time<=30&&time>=16){
    document.write("<div>2 частина години</div>");
}
else if(time <=45&&time >= 31){
    document.write("<div>3 частина години</div>");
}
else if(time <= 59 && time >=46){
    document.write("<div>4 частина години</div>");
}
else{
    document.write("<div>Error</div>");
}






let day = prompt("Введи число від 1 до 31 :  ");
if(day <= 10 && day > 0){
    document.write("<div>Декада №1</div>>");
}
else if(day <= 20 && day > 10){
    document.write("<div>Декада №2</div>");
}
else if(day <= 31&& day >20){
    document.write("<div>Декада №3</div>");
}
else {
        document.write("<div>!!!!Перезавантаж сторінку і прочитай умову!!!!</div>");
}





let week = prompt("Число від 1 до 7 : ");
switch (week){
    case '1' :
        document.write("<div>МОНДЕЙ</div>");
        break;
    case '2' :
        document.write("<div>ТЬЮЗДЕЙ</div>");
        break;
    case '3' :
        document.write("<div>ВЕДНЕЗДЕЙ</div>");
        break;
    case '4' :
        document.write("<div>СЕЗДЕЙ</div>");
        break;
    case '5' :
        document.write("<div>ФРАЙДЕЙ</div>");
        break;
    case '6' :
        document.write("<div>САТУДЕЙ</div>");
        break;
    case '7' :
        document.write("<div>САНДЕЙ</div>");
        break;
    default:
        document.write("<div>ерор</div>");
        }





let num1 = prompt("Введи перше число : ");
let num2 = prompt("Введи друге число : ");

if(num1>num2){
    document.write(`<div> ${num1} > ${num2}</div>`);
}
else if (num1<num2){
    document.write(`<div> ${num1} < ${num2}</div>`);
}
else {
    document.write(`<div> ${num1} = ${num2}</div>`);
}

