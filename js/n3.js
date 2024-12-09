let a = +prompt("Введите число");
let b = +prompt("Введите число");
let c = +prompt("Введите число");
if (isNaN(a) || isNaN(b) || isNaN(c))
{
    document.querySelector(".message").innerHTML="Неверный ввод";
}
else if (a == 0) {
    document.querySelector(".message").innerHTML = "Ошибка: a не может быть равен 0.";
} else {
    let D = b * b - 4 * a * c;
    if (D > 0) {
        document.querySelector(".message").innerHTML = `Уравнение имеет два различных корня.`;
    } else if (D == 0) {
        document.querySelector(".message").innerHTML = `Уравнение имеет один корень.`;
    } else {
        document.querySelector(".message").innerHTML = `Уравнение не имеет действ корней.`;
    }
}