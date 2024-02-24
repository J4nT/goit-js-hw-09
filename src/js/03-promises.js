/* import Notiflix from 'notiflix';

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();
  const delay = parseInt(this.elements['delay'].value);
  const step = parseInt(this.elements['step'].value);
  const amount = parseInt(this.elements['amount'].value);
});
let amount;
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

for (let i = 0; i <= amount; i++) {  
  createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
};
 */

import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector("[name='delay']");
const step = document.querySelector("[name='step']");
const numberInputs = document.querySelectorAll("[type='number']");
const amount = document.querySelector("[name='amount']");

function createPromise(position, delay) { 
  const newResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (newResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();
  let newPromises = 0;

  setTimeout(() => {
    const timer = setInterval(() => {
      if (newPromises >= amount.value) {
        clearInterval(timer);
        numberInputs.forEach(input => {
          input.value = '';
        });
        return;
      }

      createPromise(
        newPromises + 1,
        parseInt(delay.value) + parseInt(step.value) * newPromises
      )
        .then(resolved => Notiflix.Notify.success(resolved))
        .catch(rejected => Notiflix.Notify.failure(rejected));
      newPromises++;
    }, step.value);
  }, delay.value);
});