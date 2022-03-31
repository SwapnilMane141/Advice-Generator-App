'use strict';


const textbox = document.querySelector('.advice-box__text');
const nextAdviceButtom = document.querySelector('.next-advice');

// const getNewAdvice = function(){
    
// }

nextAdviceButtom.addEventListener('click',function(){
    const newAdvicePromise = fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
        const newAdvice = data.slip.advice;
        
        textbox.innerHTML = newAdvice;
    })
})

