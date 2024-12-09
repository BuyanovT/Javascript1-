let msg = prompt("Введите число");
if (isNaN(msg)){
    document.querySelector(".message").innerHTML="Это не число"
}
else {
  let number = parseFloat(msg);
  if (number > 0) {
      document.querySelector(".message").innerHTML = `Введенное число ${number} положительное`;
  } else if (number < 0) {
      document.querySelector(".message").innerHTML = `Введенное число ${number} отрицательное`;
  } else {
      document.querySelector(".message").innerHTML = `Введенное число ${number} равно нулю`;
  }
}