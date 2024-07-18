// problem number one 
function calculateMoney(ticketSale){
    const dailyExpenses = 500 + (50 * 8);
    const ticketPrice = 120;
    if(
        typeof ticketSale !== "number" || 
        ticketSale < 0){
        return "Invalid Number";
    }
    let moneyFromTicket  = ticketPrice * ticketSale;
    let dailyEarnings = moneyFromTicket - dailyExpenses;
    return dailyEarnings;
}

// problem number two 
function checkName(name){
    if(typeof name !== "string"){
        return "Invalid"
    }
    let str = name.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[str.length - 1] === "a" || str[str.length - 1] === "y" || str[str.length - 1] === 'i' || str[str.length - 1] === "e" || str[str.length - 1] === "o" || str[str.length - 1] === "u" || str[str.length - 1] === "w"){
            return "Good Name";
        } 
        else{
            return "Bad Name"
        }
    }
}

// problem number three 
function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array"
    }
    let filter = [];
    for(let element of array){
        if(typeof element === "number" && !isNaN(element)){
            filter.push(element);
        }
    }
    return filter;
}

// problem number four 

function password(obj){
    if(typeof obj.birthYear !== "number"){
        return "Invalid";
    }
    else if(obj.birthYear.toString().length !== 4){
        return "Invalid";
    }
    let firstLetter = obj.siteName[0].toUpperCase();
    let otherLetters = obj.siteName.slice(1);
    let fullSiteName = firstLetter + otherLetters;

    return `${fullSiteName}#${obj.name}@${obj.birthYear}`;
}

// problem number five 
function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr)){
        return "Invalid";
    }
    else if(typeof livingCost !== "number"){
        return "Invalid"
    }

    totalIncome = [];
    let sumOfTotalIncome = 0;
    for(let payment of arr){
        if(payment >= 3000){
            tax = (payment * 0.2);
            newPayment = payment - tax;
            totalIncome.push(newPayment);
        }
        else{
            totalIncome.push(payment);
        }
    }
    for(let i = 0; i < totalIncome.length; i++){
        sumOfTotalIncome = sumOfTotalIncome + totalIncome[i];
    }
    let savings = sumOfTotalIncome - livingCost;
    if(savings < 0){
        return "Earn more";
    }
    else{
        return savings;
    }
}