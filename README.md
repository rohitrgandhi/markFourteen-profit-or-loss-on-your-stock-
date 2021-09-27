# markFourteen (Build Basics)
## profit or loss

## Problem Statement
-Take the user's stock price for one stock when he bought it.
- Take the stocks quantity as well.
- Now take today's price of that Stock.
- Tell the Profit / Loss, the user's making -
1. In Percentage
2. In Absolute

### Step 1: Building the UI
**Ex-01: Elements we need in our HTML**
Challenge
- Create 3 Inputs for Initial Price, Quantity, and the Current Price
- Create 1 Button Tell me! for Getting the Profile / Loss Output.
- Create a Div for Displaying the Output.

**Ex-02: Adding id to Elements**
Challenge
- Add id="..." to different elements, so they can be later used in our js file.
code (<input type='number' id='initial-price' placeholder='Add Initial Price Here...' />)

### Step 2: Building the Logic**
**Ex-03: Breaking the problem into pieces**
Challenge
- Taking Input - Selecting all the elements from HTML.
- Processing Part 1 - Adding Event Listeners.
- Processing Part 2 - Creating functions for the logic part.
- Output - Displaying the Output to the user.
- Post Completion - Checking bugs and corner cases.

**Ex-04: Selecting Elements using querySelector**
Challenge
Select Elements that we created in Ex-01, using querySelector
const initialPrice = document.querySelector('#ip_input');

**Ex-05: Create Function for Calculating Loss and Profit**
We need a function for Calculating 
- Profit
- Profit Percentage
- Loss
- Loss Percentage
Formula
- Profit = (SellingPrice - CostPrice)
- Profit Percentage = (Profit/CostPrice)*100
- Loss = (CostPrice - SellingPrice)
- Loss Percentage = (Loss/CostPrice)*100

Challenge
Create a Function calculateProfitAndLoss to calculate Loss and Profit.
Use Conditional Branching to check if Loss is to be calculated or Profit.

Add console.log to check if the function is working properly.

**Ex-06: Adding Event Listeners**
To run the program, we need to add a click event listener to the Submit Button.
submitBtn.addEventListener('click', submitHandler);
Challenge
Create a function submitHandler to handle the button Click.
Get the values of inputs using inputName.value, and store them in a variable.
Call the function calculateProfitAndLoss, created in Ex-05, after adding some checks.

**Ex-07: Bonus (Optional)  Handling the corner cases**
Challenge
- Limit the Decimal points to 2 digits, using toFixed(digits)
- Restrict the user to enter only numbers, by using type='numbers' as an attribute in the input tag.
- Add a check to see if the user has no empty inputs. Show alert('Please fill out all Fields') if validation fails.

**Ex-08: Bonus (Optional)**
Challenge
Change the theme of application according to profit and loss, accessing the styles of the element using element.style.<cssPropertyName>
code(outputBox.style.color = 'green';)
