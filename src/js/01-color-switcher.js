
  const buttonStart = document.querySelector('[data-start]');
  const buttonStop = document.querySelector('[data-stop]');
  buttonStop.setAttribute('disabled', true);
  let intervalId = null;

  const onStart = () => {
    if(buttonStart.clicked = true) {
        buttonStart.setAttribute('disabled', true);
        buttonStop.removeAttribute('disabled');
    }; 
    
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  };

  const onStop = () => {
    if(buttonStop.clicked = true) {
        buttonStop.setAttribute('disabled',true);
        buttonStart.removeAttribute('disabled');
        clearInterval(intervalId);
    };
  };

  buttonStart.addEventListener('click', onStart);

  buttonStop.addEventListener('click', onStop);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

