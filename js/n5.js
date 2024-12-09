let a = +prompt("Введите число");
let b = +prompt("Введите число");
let c = +prompt("Введите число");
let d = +prompt("Введите число");
if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d))
{
    document.querySelector(".msg").innerHTML="Неверный ввод";
}
else
{
    let select=prompt("Выберите способ решения 1 ИЛИ 2");
    let max=a+b;
    let num1=a;
    let num2=b;
    switch(select) 
    {
       case "1":
            if(max<c+d) {max=c+d;num1=c;num2=d}
            if(max<a+c) {max=a+c;num1=a;num2=c}
            if(max<b+c) {max=b+c;num1=b;num2=c}
            if(max<a+d) {max=a+d;num1=a;num2=d}
            if(max<b+d) {max=b+d;num1=b;num2=d}
            document.querySelector(".msg").innerHTML= `Сумма чисел ${num1} и ${num2} максимальна и равна ${max} `;
            break;
        case "2":
            max=Math.max(a+b,a+c,a+d,b+c,b+d,c+d);
             document.querySelector(".msg").innerHTML="Максимальная сумма ${max}";
             break;
        default:
            max="Неверный выбор";
    }
    document.querySelector(".msg").innerHTML= `Сумма чисел равна ${max} `;
}