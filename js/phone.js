
function calculatePhoneNumber(totalPhoneNumber){
    const subTotalAmount=document.getElementById('phone-sub-total');
    const price=totalPhoneNumber*1219;
    subTotalAmount.innerText=price;

}

document.getElementById('phone-plus-btn').addEventListener('click',function(){
    const totalphoneNumber= getValueInputElementById('phone-input-field',true);
    calculatePhoneNumber(totalphoneNumber);
    calCulateTotalSubAmount();

})
document.getElementById('phone-minus-btn').addEventListener('click',function(){
   const totalphoneNumber=getValueInputElementById('phone-input-field',false);
   calculatePhoneNumber(totalphoneNumber);
   calCulateTotalSubAmount();
  
})