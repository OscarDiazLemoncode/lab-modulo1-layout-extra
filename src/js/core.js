export const handlerForm = ()=>{
    const outputUserName =  document.querySelector('.header__toolbar__name');
    const inputUserName =  document.querySelector('#username');
    const overflowContainer = document.querySelector('.overflow');
    const buttonForm = document.querySelector('.btnForm');
    if(!outputUserName || !inputUserName || !overflowContainer || !buttonForm) return;

    inputUserName.addEventListener('input', ()=>{
        setTimeout(()=>{
            if(inputUserName.value === ' ' || inputUserName.value.length === 0) return;
            buttonForm.removeAttribute('disabled');
            outputUserName.textContent = inputUserName.value;
        }, 500);
    });
    
    buttonForm.addEventListener('click', ()=>{
        console.log('submit');
        overflowContainer.classList.add('to__hidden');
    });
    
};