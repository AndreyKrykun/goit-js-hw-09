import Notiflix from "notiflix";

const refs = {
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
  submitButton: document.querySelector('button'),
  form: document.querySelector('form')
}

refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let delayValue = parseInt(refs.delayInput.value);
  const stepValue = parseInt(refs.stepInput.value);
  const amountValue = parseInt(refs.amountInput.value);
  
  for(let i = 1; i <= amountValue; i += 1) {
    createPromise (i, delayValue)
      .then(value => {
        Notiflix.Notify.success(value);;
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
      delayValue += stepValue;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);          
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
}
