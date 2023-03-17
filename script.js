const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const resultArea1 = document.getElementById('result1');
const resultArea2 = document.getElementById('result2');
const resultArea3 = document.getElementById('result3');
const basket = 25;
const optionsArea = document.getElementById('optionsDiv');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
var flag = false;

const logResult=()=>{
    //checks basiclly that the inputs are numbers and nothing else, alert if does, and if everything is ok
    // then it's calculating seperatly and returns the results 
    if(input1.value.length!==0){
        for(let i=0;i<input1.value.length;i++){
            if(input1.value[i]<=9&&input1.value[i]>=0){
                continue;
            }
            else{return alert('only numbers')}
        }
        let eggRes = input1.value/basket;
        let wineRes = input1.value/(2*basket);
        let plateRes = input1.value/40;
        resultArea1.innerHTML = `${eggRes} - באסקטים ביצה`;
        resultArea2.innerHTML = `${wineRes} - באסקטים יין`;
        resultArea3.innerHTML = `${plateRes} - באסקטים צלחות`;
    }
    if(input2.value.length!==0){
        for(let i=0;i<input2.value.length;i++){
            if(input2.value[i]<=9&&input2.value[i]>=0){
                continue;
            }
            else{return alert('only numbers')}
        }
        let eggRes = ((input2.value*12)/basket)
        let wineRes = ((input2.value*6)/basket)
        let plateRes = ((input2.value*12)/40)
        resultArea1.innerHTML = `${eggRes} - באסקטים ביצה`;
        resultArea2.innerHTML = `${wineRes} - באסקטים יין`;
        resultArea3.innerHTML = `${plateRes} - באסקטים צלחות`;
    }
}

const change1=()=>{
    // function for the first button, it replacing the input2 into input1 and refreshes the last search
    input1.style.display = 'inline-block';
    input2.value = ''
    input2.style.display = 'none';
    resultArea1.innerHTML ='';
    resultArea2.innerHTML = '';
    resultArea3.innerHTML = '';
    //and closing the options tab at mobile view 
    optionsArea.style.height = '0';
    option1.style.height = '0';
    option2.style.height = '0';
    option1.innerHTML = ''
    option2.innerHTML = ''
    flag=false;
}

const change2=()=>{
    // function for the seconed button, it replacing the input1 into input2 and refreshes the last search
    input2.style.display = 'inline-block';
    input1.value = ''
    input1.style.display = 'none';
    resultArea1.innerHTML ='';
    resultArea2.innerHTML = '';
    resultArea3.innerHTML = '';
    //and closing the options tab at mobile view 
    optionsArea.style.height = '0';
    option1.style.height = '0';
    option2.style.height = '0';
    option1.innerHTML = ''
    option2.innerHTML = ''
    flag=false;
}

const showOptions=()=>{
    //function for mobile view, open and closing the options tab by transition on every click on the "≡" button
    flag= !flag;
    console.log(flag)
    if(flag===true){
        optionsArea.style.height = '205px';
        option1.style.height = '100px';
        option2.style.height = '100px';
        option1.innerHTML = 'חשב על פי כמות האנשים'
        option2.innerHTML = 'חשב על פי כמות השולחנות'
    }
    if(flag===false){
        optionsArea.style.height = '0';
        option1.style.height = '0';
        option2.style.height = '0';
        option1.innerHTML = ''
        option2.innerHTML = ''
    }
}