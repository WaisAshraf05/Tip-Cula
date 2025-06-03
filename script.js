const billInput = document.getElementById('billamount');
const tipRadio = document.getElementsByName('tip');
const calculate = document.getElementById('btn');
const tipAmountDisplay = document.getElementById('tipAmount')
const totalAmountDisplay = document.getElementById('totalAmount');
console.log('The tips Amount is');
calculate.addEventListener('click',()=>{
    const bill = parseFloat(billInput.value);
if ( isNaN(bill)|| bill <= 0) {
    alert('please Enter any Valid Amount!')
    return;
} 
let selectedTip = 0;
  for (let radio of tipRadio) {
    if (radio.checked) {
      selectedTip = parseFloat(radio.value);
      break;
    }
  }
if(selectedTip === 0){
    alert('Please Select any Tip percentage');
    return;
}
const tipAmount = bill * selectedTip;
const totalAmount = tipAmount + bill;
tipAmountDisplay.textContent =  ` ${tipAmount}`;
totalAmountDisplay.textContent = `${totalAmount}`;
});



