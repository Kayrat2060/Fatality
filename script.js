const form = document.querySelector('form.form');
const email = document.querySelector('input.email');
const password = document.querySelector('input.password');
const repassword = document.querySelector('input.repassword');


form.addEventListener('submit', (event) => {    
    if(email.value.trim() === '') {
        email.classList.add('error');
        event.preventDefault();
    }
    if(password.value.trim() === '') {  
        password.classList.add('error');
        repassword.classList.remove('success');
        event.preventDefault();
    }
    if(repassword.value.trim() === '') {  
        repassword.classList.add('error');
        repassword.classList.remove('success');
        event.preventDefault();
    }
    if (repassword.value.trim() !== password.value.trim()) {
        event.preventDefault();
    }
})  

email.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        email.classList.remove('error');
    } else {
        email.classList.add('error');        
    }
})

password.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        password.classList.remove('error');
    } else {
        password.classList.remove('success');
        password.classList.add('error');
    }
    if (repassword.value.trim() !== '') {
        verification();
    }
})

function verification() {
    if (repassword.value.trim() === password.value.trim()) {
        password.classList.remove('error');
        repassword.classList.remove('error');
        password.classList.add('success');
        repassword.classList.add('success');
    } else {
        password.classList.remove('success');
        repassword.classList.remove('success');
        password.classList.add('error');
        repassword.classList.add('error');
    }
}


repassword.addEventListener('input', (event) => {
    if (event.target.value.trim() !== '') {
        repassword.classList.remove('error');
    } else {
        repassword.classList.remove('success');
        repassword.classList.add('error');
    }
    verification();

})

// функционал звездного рейтинга

const starsAll = document.querySelectorAll('.star');
const stars = document.querySelector('.stars');
const starsСount  = document.querySelector('.input__text');


let n = 0; // количество кликов по звездам
const starsArray = [...starsAll];

function colorReset() {
    starsArray.forEach(element => {
        element.classList.remove('gold');
        element.classList.add('grey');
    });
}

starsArray.forEach(element => {
    element.addEventListener('click', () => {
        let indexEl = starsArray.indexOf(element);
        starsСount.value = indexEl + 1;
        starsСount.textContent = indexEl + 1;
        n++;
        for (let index = 0; index < starsArray.length; index++) {
            if (index <= indexEl) {
                starsArray[index].classList.remove('grey');
                starsArray[index].classList.add('gold');
            } else {
                starsArray[index].classList.remove('gold');
                starsArray[index].classList.add('grey');
            }
        }
    });
});

starsArray.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (n < 1) {
            let indexEl = starsArray.indexOf(element);
            for (let index = 0; index < starsArray.length; index++) {
                if (index <= indexEl) {
                    starsArray[index].classList.remove('grey');
                    starsArray[index].classList.add('gold');
                } else {
                    starsArray[index].classList.remove('gold');
                    starsArray[index].classList.add('grey');
                }
            }
        }
    });
});

stars.addEventListener('mouseout', () => {
    if (n < 1) {
        colorReset();
    }
})