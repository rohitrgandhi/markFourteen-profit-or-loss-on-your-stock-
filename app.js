//taking variables from HTML world to Javascript world
var buy=document.querySelector("#buy-price");
var qty=document.querySelector("#quantity");

var cmp=document.querySelector("#currentmarketprice");

var output1=document.querySelector("#output1");
var output2=document.querySelector("#output2");
var output3=document.querySelector("#output3");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.
calculateButton.addEventListener("click", calculate);

function calculate()
{   
    cmp=cmp.value;
    buy=buy.value;
    qty=qty.value;
    if(cmp>buy)
    {
        var profit=cmp-buy;
        var abs=profit*qty;
        var percent=(profit/buy)*100;
        output2.innerText=abs;
        output3.innerText=percent,"%";
        output1.innerText="Hurray your are at a profit";
    }
    else
    {   
        var loss=buy-cmp;
        var abs=(loss*qty);
        var percent=(loss/buy)*100;
        output2.innerText=abs;
        output3.innerText=percent;
        output1.innerText="You're at a loss";
    }
}


