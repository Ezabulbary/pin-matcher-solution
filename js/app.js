function getPin(){
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function(evant){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previusNumber = calcInput.value;
        const newNumber = previusNumber + number;
        calcInput.value = newNumber;
    }
});

function varifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const failError = document.getElementById('notify-fail');
    const successMassage = document.getElementById('notify-success');

    if(pin == typedNumber){
        successMassage.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        successMassage.style.display = 'none';
    }
};