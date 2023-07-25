var registerElements = document.querySelectorAll('.header__navbar-item-strong')

var logElements = document.querySelectorAll('.auth-form')

var modalElement = document.querySelector('.modal')

var backElements = document.querySelectorAll('.auth-form__control-back')

var submitRegisterBtns = document.querySelectorAll('.auth-form__control .btn.btn__primary')

var userElement = document.querySelector('.header_navbar-user')

var logOutElement = document.querySelector('.user__info-list-item:nth-child(4)')
//  Register behavior
registerElements[0].addEventListener('click', function(){
    if(!modalElement.classList.contains('active_none')
    && !logElements[0].classList.contains('active_none')){
        modalElement.classList.add('active_flex');
        logElements[0].classList.add('active_block')
        logElements[1].classList.add('active_none')

    }else{
        modalElement.classList.replace('active_none','active_flex');
        logElements[0].classList.replace('active_none','active_block')
    }
})

backElements[0].addEventListener('click', function(){
    modalElement.classList.replace('active_flex', 'active_none')
    logElements[0].classList.replace('active_block','active_none')
})

submitRegisterBtns[0].addEventListener('click', function(){
    modalElement.classList.replace('active_flex', 'active_none')
    logElements[0].classList.replace('active_block','active_none')

    registerElements[0].classList.add('active_none')
    registerElements[1].classList.add('active_none')

    if(userElement.classList.contains('active_none')){
        userElement.classList.replace('active_none','active_flex')
    }else{
        userElement.classList.add('active_flex')
    }
})



// Login behavior

registerElements[1].addEventListener('click', function(){
    if(!modalElement.classList.contains('active_none')
    && !logElements[1].classList.contains('active_none')){
        modalElement.classList.add('active_flex');
        logElements[1].classList.add('active_block')
        logElements[0].classList.add('active_none')

    }else{
        modalElement.classList.replace('active_none','active_flex');
        logElements[1].classList.replace('active_none','active_block')
    }
})

backElements[1].addEventListener('click', function(){
    modalElement.classList.replace('active_flex', 'active_none')
    logElements[1].classList.replace('active_block','active_none')
})

submitRegisterBtns[1].addEventListener('click', function(){
    modalElement.classList.replace('active_flex', 'active_none')
    logElements[1].classList.replace('active_block','active_none')

    registerElements[0].classList.add('active_none')
    registerElements[1].classList.add('active_none')

    if(userElement.classList.contains('active_none')){
        userElement.classList.replace('active_none','active_flex')
    }else{
        userElement.classList.add('active_flex')
    }
})


// logout behavior
logOutElement.addEventListener('click', function(){
    registerElements[0].classList.replace('active_none','active_block')
    registerElements[1].classList.replace('active_none','active_block')

    userElement.classList.replace('active_flex', 'active_none')
})