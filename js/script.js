// let firstSportsmenName = prompt("Ismingizni kiriting")

// let secondSportsmenName = prompt("Ikkinchi sportchi ismingizni kiriting");


// const a = Number(prompt(`${firstSportsmenName}, Birinchi to'plagan ballingizni kiriting`));

// const b = Number(prompt(`${firstSportsmenName}, Ikkinchi to'plagan ballingizni kiriting`));

// const c = Number(prompt(`${firstSportsmenName}, Uchinchi to'plagan ballingizni kiriting`));

// const d = Number(prompt(`${secondSportsmenName}, Birinchi to'plagan ballingizni kiriting`));

// const g = Number(prompt(`${secondSportsmenName}, Ikkinchi to'plagan ballingizni kiriting`));

// const h = Number(prompt(`${secondSportsmenName}, Uchinchi to'plagan ballingizni kiriting`));

// const calcAvarage1 = (firsAttemptSportsmen, secondAttemptSportsmen, thirdAttemptSportsmen) => {

//   return `${(firsAttemptSportsmen + secondAttemptSportsmen + thirdAttemptSportsmen) / 3}`
// };

// const calcAvarage2 = (firsAttemptSportsmen, secondAttemptSportsmen, thirdAttemptSportsmen) => {

//   return `${(firsAttemptSportsmen + secondAttemptSportsmen + thirdAttemptSportsmen) / 3}`
// };

// const checkWinner = (calcAvarage1, calcAvarage2) => {
//    return calcAvarage1 > calcAvarage2 ? `${firstSportsmenName} g'olib bo'ldi` : `${secondSportsmenName} g'olib bo'ldi`;
// };

// console.log(calcAvarage1(a, b , c));

// console.log(calcAvarage2(d, g, h))

// console.log(checkWinner());


// HOMETASK

const elUserInputNumber = document.querySelector("#herobox__input");

const elUserSubmitBtn = document.querySelector(".herobox__btn");

const elUserResultDesc = document.querySelector(".herobox__desc");

// const enterNumber = elUserInputNumber.value;

// console.log(enterNumber);

elUserSubmitBtn.addEventListener('click', (evt) => {
  evt.preventDefault(0);

  elUserResultDesc.classList.remove("border-danger");

  elUserResultDesc.classList.toggle("border-success");

  const enterNumber = elUserInputNumber.value;

  const userNumber = Number(enterNumber);

  console.log(userNumber);

  if ( ((userNumber % 3) === 0) && ((userNumber % 5) > 0) ) {
    elUserResultDesc.textContent = "Fizz";
  } else if ( ((userNumber % 5) === 0) && ((userNumber % 3) > 0) ) {
    elUserResultDesc.textContent = "Buzz";
  } else if ( ((userNumber % 3) === 0) && ((userNumber % 5) === 0) ) {
    elUserResultDesc.textContent = "Fizz - Buzz";
  } else if (!userNumber && true) {
    elUserResultDesc.textContent = "Matematikaga ham to'g'ri kelmayaptiku, Brat!";
  } else if ( userNumber && true) {
    elUserResultDesc.textContent =  `${userNumber} 3 ga yoki 5 ga  bo'linmaydi`;
  };

});

console.log(typeof Number("salom"));