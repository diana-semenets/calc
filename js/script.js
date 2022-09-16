
let a = ''; //первое число
let b = ''; //второе число
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; //первое число
    b = ''; //второе число
    sign = ''; //знак операции
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    //нажата кнопка ас
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    //получаем нажатую кнопку
    const key = event.target.textContent;

    //если нажата 0-9 или .
    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a += key;
            
            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a , b , sign);
        return;
    }

    //если нажат знак
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a , b , sign);
        return;        
    }
    //нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a , b , sign);
    }
}
