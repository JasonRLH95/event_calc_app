const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
const resultArea1 = document.getElementById('result1');
const resultArea2 = document.getElementById('result2');
const resultArea3 = document.getElementById('result3');
const basket = 25;
// const numPeoples=()=>{
//     // console.log(input1.value);
//     return input1.value
// }
const numtables=()=>{

}
const logResult=()=>{
    if(input1.value.length!==0){
        for(let i=0;i<input1.value.length;i++){
            if(input1.value[i]<=9&&input1.value[i]>=0){
                continue;
            }
            else{return alert('only numbers')}
        }
        let egg = input1.value/basket;
        let eggRes = egg - (egg/25);
        let wine = input1.value/(2*basket);
        let wineRes = wine - (wine/25);
        let plate = input1.value/40;
        resultArea1.innerHTML = `${eggRes} egg baskets`;
        resultArea2.innerHTML = `${wineRes} wine baskets`;
        resultArea3.innerHTML = `${plate} plate baskets`;
        // console.log(input1.value/40)
    }
    // if(input2.value.length!==0 && input2.value.length===0){
    //     for(let i=0;i<input2.value.length;i++){
    //         if(input2.value[i]<=9&&input2.value[i]>=0){
    //             continue;
    //         }
    //         else{return alert('only numbers')}
    //     }
    //     let temp = (input2.value/2);
    //     let temp2 = (1/25)*input2.value;
    //     let final = temp-temp2;
    //     resultArea1.innerHTML = final;
    // }
    // else if(input1.value.length!==0 && input2.value.length!==0){
    //     return alert('You can only insert one type of data!')
    // }
    // if(){}
}