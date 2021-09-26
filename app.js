//taking variables from HTML world to Javascript world
var buy=document.querySelector("#buy-price");
var qty=document.querySelector("#quantity");

var cmp=document.querySelector("#currentmarketprice");

var output=document.querySelector("#output");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.
calculateButton.addEventListener("click", calculatePNL);


function calculatePNL(){
    var CP=Number(buy.value);
    var SP=Number(cmp.value);
    var Q=Number(qty.value);
    calculate(CP,Q,SP);
}

function calculate(buy,qty,cmp)
{   
    if(buy>0 && qty>0 && cmp>0)
    {
        if(cmp>buy)
        {
            var totalProfit=(cmp-buy)*qty;
            var profitPercentage=(totalProfit/buy)*100;
            output.style.color="green"; //bonus
            outputMsg(`Hurray...Total Profit is Rs.${totalProfit} and the Profit Percentage is ${profitPercentage.toFixed(2)}%`)//bonus
        }
        else if(cmp<buy)
        {   
            var totalLoss=(buy-cmp)*qty;
            var lossPercentage=(totalLoss/buy)*100;
            output.style.color="red";//bonus
            outputMsg(`Unfortunately, Loss is Rs.${totalLoss} and the percent is ${lossPercentage.toFixed(2)}%`)//bonus
        }
        else
        {   output.style.color="#00BFA6";
            outputMsg(`No Profit No Loss`)
        }
    }
    else alert('Please fill out all Fields');
}

function outputMsg(message)
{   output.innerHTML=message;
}