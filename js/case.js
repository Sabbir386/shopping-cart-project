
function calculateCaseNumber(newCachingNumber){
    const subTotalAmount=document.getElementById('sub-total-amount');
    const price=newCachingNumber*59;
    subTotalAmount.innerText=price;

}



document.getElementById('btn-plus').addEventListener('click',function(){
    const totalCaching=getValueInputElementById('plus-input-field',true);
    calculateCaseNumber(totalCaching);

    //calcualte sub total amount
    calCulateTotalSubAmount();

    


})
document.getElementById('btn-minus').addEventListener('click',function(){
   const totalCaching=getValueInputElementById('plus-input-field',false);
   calculateCaseNumber(totalCaching);
   //calcualte sub total amount
   calCulateTotalSubAmount();
  
})