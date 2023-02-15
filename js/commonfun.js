function getValueInputElementById(inputFieldId,decideId){
    const btnId=document.getElementById(inputFieldId);
    const btnValueString=btnId.value;
    const btnValueNumber=parseInt(btnValueString);
    let currentValue;
    if(decideId===true){
        currentValue=btnValueNumber+1;
    }
    else{
        currentValue=btnValueNumber-1;
    }
    btnId.value=currentValue;
    return  currentValue;
}

function elementTotalAmount(elementId){
    const ElementId=document.getElementById(elementId);
    const AmountString= ElementId.innerText;
    const totalAmount=parseInt(AmountString);
    return totalAmount;
}
function SetvalueByid(Id,value){
    const totalSubAmount=document.getElementById(Id);
    totalSubAmount.innerText=value;
}
function calCulateTotalSubAmount(){
    const currentCaseTotal=elementTotalAmount('sub-total-amount');
    const currentPhoneTotal=elementTotalAmount('phone-sub-total');

    const finalSubTotalAmount=currentCaseTotal+currentPhoneTotal;

    SetvalueByid('sub-total',finalSubTotalAmount);
    

    //calculate tax

    const taxAmountString=(finalSubTotalAmount*0.1).toFixed(2);
    const taxAmount=parseFloat(taxAmountString);
    SetvalueByid('tax-amount', taxAmount);
    const finalAmountphoneandcase=finalSubTotalAmount+taxAmount;
    SetvalueByid('final-amount',finalAmountphoneandcase);
    
}