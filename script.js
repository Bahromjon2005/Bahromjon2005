// let ekran = document.querySelector('#ekran');
// document.querySelectorAll("td").forEach(function(td) {
//     td.addEventListener('click', function(e) {
//         let belgi = e.target.innerText;
//         if (belgi == "C") {
//             ekran.value = "";
//         } else if (belgi == "=") {
//             ekran.value = (eval(ekran.value));
//         } else {
//             ekran.value += belgi;
//         }
//     })
// });








function numberClicked(num) {
    let input = document.getElementsByClassName('calc-typed')[0]
    if (input.innerHTML.length < 8) {
        input.innerHTML += num
    }
}

function actionClicked(arg) {
    let input = document.getElementsByClassName('calc-typed')[0]
    let topScreen = document.getElementsByClassName('calc-operation')[0];

    if (arg === 'Y') {
        if (input.innerHTML.length >= 1) {
            input.innerHTML = input.innerHTML.slice(0, -1)
        }
    } else {
        if (input.innerHTML.length > 0 && arg != '=') {
            topScreen.innerHTML += input.innerHTML + arg
            input.innerHTML = ''
        }

        if (arg == '=') {
            topScreen.innerHTML += input.innerHTML
            input.innerHTML = input = (eval(input.value))
            compute(topScreen.innerHTML)
                // topScreen.innerHTML += input.value

        }
        if (arg == '=') {

        }

    }
}

function compute(arg) {
    alert(gg)
}

const btn = document.getElementsByClassName('button')
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = () => {
        switch (parseInt(btn[i].innerHTML)) {
            case 1:
                numberClicked(1)
                break;
            case 2:
                numberClicked(2)
                break;
            case 3:
                numberClicked(3)
                break;
            case 4:
                numberClicked(4)
                break;
            case 5:
                numberClicked(5)
                break;
            case 6:
                numberClicked(6)
                break;
            case 7:
                numberClicked(7)
                break;
            case 8:
                numberClicked(8)
                break;
            case 9:
                numberClicked(9)
                break;
            case 0:
                numberClicked(0)
                break;
            default:
                break;
        }

        switch (btn[i].innerHTML) {
            case '+':
                actionClicked('+')
                break;
            case '-':
                actionClicked('-')
                break;
            case '*':
                actionClicked('*')
                break;
            case '/':
                actionClicked('/')
                break;
            case '=':
                actionClicked('=')
                break;
            case 'Y':
                actionClicked('Y')
                break;

            default:
                break;
        }

        if (btn[i].innerHTML == 'C') {
            document.getElementsByClassName('calc-operation')[0].innerHTML = ''
            document.getElementsByClassName('calc-typed')[0].innerHTML = ''
        }

    }
}