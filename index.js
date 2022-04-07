convert();
function convert() {
  const name = prompt("Ваше имя?");
  const secondName = prompt("Ваша фамилия?");
  const middleName = prompt("Ваше отчество?");
  const age = prompt("Сколько вам лет?");
  let gender = confirm("Ваш пол: мужской?");
  const ageInDay = age * 365;
  const ageInFive = Number(age) + 5;
  let err = [];

  if (gender === true) {
    gender = "Мужской";
  } else {
    gender = "Женский";
  }

  if (gender === "Мужской") {
    if (age < 60) {
      pension = "Нет";
    } else {
      pension = "Да";
    }
  } else {
    if (age < 55) {
      pension = "Нет";
    } else {
      pension = "Да";
    }
  }

  if (secondName == "" || secondName == null) {
    err += ["Вы ввели неверную фамилию\n"];
  }

  if (name == "" || name == null) {
    err += ["Вы ввели неверное имя\n"];
  }

  if (middleName == "" || middleName == null) {
    err += ["Вы ввели неверное отчество\n"];
  }
  if (isNaN(Number(age)) === true || age === "" || age > 100) {
    err += ["Вы ввели неверный возраст\n"];
  }

  if (err.length === 0) {
    alert(
      `Ваше ФИО: ${secondName} ${name} ${middleName}\nВаш возраст в годах: ${age}\nВаш возраст в днях: ${ageInDay}\nЧерез 5 лет вам будет: ${ageInFive}\nВаш пол: ${gender}\nВы на пенсии: ${pension}`
    );
  } else {
    alert(err);
    reload = confirm("Попробуете еще раз?");
    if (reload === true) {
      convert();
    }
  }
}
