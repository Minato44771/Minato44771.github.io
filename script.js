const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const Yesbtn = document.querySelector('.Yes-btn');
const Nobtn = document.querySelector('.No-btn');

const wrapperRect = wrapper.getBoundingClientRect

Yesbtn.addEventListener('click', () => {
question.innerHTML = 'Pag Free ka, chat nalang kung kailan :)';
});

Nobtn.addEventListener('click', () => {
    question.innerHTML = 'Awww Okay :((';
    });