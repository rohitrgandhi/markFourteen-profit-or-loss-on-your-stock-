//taking variables from HTML world to Javascript world
const dob=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const output=document.querySelector("#output");
const checkButton=document.querySelector("#button");

//when button is clicked check function is called.
checkButton.addEventListener("click", check);

function check()
{
    let birthDate=dob.value;
    let sum=calculateSum(birthDate);
    //this is where it checks for luck
    if (sum%luckyNumber.value===0)
    {
        output.innerText="Your Birthday is lucky";
    }
    else
    {
        output.innerText="You have to make your OWN luck";
    }
}
function calculateSum(birthDate) //returns addition of digits
{   
    //this removes dashes to make it a string of numbers
    birthDate=birthDate.replaceAll("-","");

    // addition of numbers takes place here
    let add=0;
    for(let i=0;i<birthDate.length;i++)
    {
        add=add+Number(birthDate.charAt(i)); //birthDate is a string and cannot be added to add hence converted to a number.
    }
    return add;
}

