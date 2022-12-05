const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");

const output = document.querySelector("#output");

function compareValue(sum , luckyNumber){
    if(sum%luckyNumber ===0 ){
        output.innerText ="you are lucky";
    }else{
        output.innerText = "you are not lucky";
    }
}

function checkNumberIsLucky(){
  const date = dob.value;
  const sum = calculateSum(date);
  if (sum&&date) {
    output.innerText = "Please enter value in both the fields";
  }
  compareValue(sum , luckyNumber.value);
}
function calculateSum(date){
 date = date.replaceAll("-" , "");
 let sum = 0;
 for (let index = 0; index < date.length; index++) {
    sum = sum + Number(date.charAt(index));
    
 }
 return sum;
}

checkNumberBtn.addEventListener("click" , checkNumberIsLucky);
