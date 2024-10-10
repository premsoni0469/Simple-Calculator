// alert("Prem Soni")

var main_display = document.getElementById('mainDisplay');
var sub_display = document.getElementById('subDisplay');

function getValue(val){
    if(main_display.value != '0')
        main_display.value += val;
    else
        main_display.value = val;
}

function removeLastDigit(){
    if(main_display.value.length > 1)
        main_display.value = main_display.value.slice(0, -1);
    else{
        main_display.value = main_display.value.slice(0, -1);
        main_display.value = "0";
    }
}

function solve(){
    var equation = main_display.value;
    console.log(equation);
    sub_display.value = equation + "=" ; 
    var ans = eval(equation);
    main_display.value = ans;

    history(equation, ans);
}

function clearAll(){
    main_display.value = '0';
    sub_display.value = "";
}

function history(equation, ans){
    var equation = sub_display.value;
    var ans = main_display.value;
    historyItems = document.getElementById('historyItems');
    historyItems.innerHTML += `<div id="historyItem">
                <p>${equation}</p>
                <p>${ans}</p>
            </div>
            <br>`;
}
function clearHistory(){
    if(confirm("Do you want to clear the history?")){
        document.getElementById('historyItems').innerHTML = '';
        main_display.value = '0';
        sub_display.value = '';
    }
}
function sqrt(){
    var n = parseInt(document.getElementById('mainDisplay').value);
    var ans = Math.sqrt(n);
    main_display.value = ans;
    sub_display.value = n;
    history(n, ans);
}
let flag=true;
function brackets()
{
    if(flag)
    {
        getValue("(");
        flag=false;
    }
    else
    {
        getValue(")");
        flag=true;
    }
}
function percentage() {
    let equation = main_display.value;
    let answer = eval(equation) / 100;
    main_display.value = answer;
    sub_display.value = equation + "%";
    history(equation + "%", answer);
}

function floating() {
    if (main_display.value === '' || main_display.value === '0') {
        getValue('0.');
    } else {
        const operators = ['+', '-', '*', '/'];
        let lastNumber = '';
        for (let i = main_display.value.length - 1; i >= 0; i--) {
            if (operators.includes(main_display.value[i])) {
                break;
            }
            lastNumber = main_display.value[i] + lastNumber;
        }
        if (lastNumber.indexOf('.') === -1) {
            getValue('.');
        }
    }
}
function toggleHistory() {
    const historyDiv = document.getElementById('history');
    if (historyDiv.style.display === 'none' || historyDiv.style.display === '') {
        historyDiv.style.display = 'block';
    } else {
        historyDiv.style.display = 'none';
    }
}