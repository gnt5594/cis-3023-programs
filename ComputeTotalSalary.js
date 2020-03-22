
var salesPerson = "";
var baseSalary = 0;
var totalSales = 0;
var runAgain = "Y";
var totalPay = 0;
for(;;){
    if(runAgain=="no"||runAgain=="N") break;
    
for(;;){//for 1
    salesPerson = prompt("Enter sales person's name", "Dwight Shrute");
    if (salesPerson.length >= 2) break;
}//for 1 close

for(;;){//for 2
    baseSalary = parseFloat(prompt("Enter base salary of " + salesPerson));
    if(!isNaN(baseSalary) && baseSalary>0) break;
}//for 2 close

for(;;){//for 3 
    totalSales = parseFloat(prompt("Enter sales of " + salesPerson));
    if (!isNaN(totalSales) && totalSales > 0) break;
}//for 3 close

if(totalSales >= 0 && totalSales <25000)
{
    totalPay = (totalSales * 0.05) + baseSalary;
}
    if(totalSales >= 25000 && totalSales <  50000)
    {
        totalPay= (totalSales * 0.1) + baseSalary;
    }
        if(totalSales >= 50000 && totalSales < 100000)
        {
            totalPay = (totalSales * 0.15) + baseSalary;
        }
            if(totalSales >= 100000)
            {
                totalPay = (totalSales * 0.2) + baseSalary;
            }

alert("The final salary of " + salesPerson + " is " + totalPay );


    runAgain = prompt("Enter Y or Yes to run again.");
    
}//runagain for 