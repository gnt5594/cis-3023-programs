function $(id)
{
    return document.getElementById(id);
}//get id from html

function calculate_click()
{
    
    var floatFirstNum, floatSecNum,intChoice, floatBase, output, floatExponent,floatSeries;
    
intChoice = parseInt(prompt("Please select a number from the menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
for (;intChoice<1||intChoice>7;)
    {
        intChoice=parseInt(prompt("Error.\nPlease select a number from the menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exponent\n6. Mean\n7. Quit"));
    }//makes sure user chooses from the menu

    if( intChoice == 1)
    {
        floatFirstNum = parseFloat(prompt("Please select your first number."));
            for (;isNaN(floatFirstNum);)
                {
                    floatFirstNum = parseFloat(prompt("Error.\nPlease select your first number."));
                }
                
        floatSecNum = parseFloat(prompt("Please select your second number."));
                for (;isNaN(floatSecNum);)
                    {
                        floatSecNum = parseFloat(prompt("Error.\nPlease select your second number."));
                    }
                        
        output = floatFirstNum + floatSecNum;
        $("resultBox").value = output;
        calculate_click();
    }//runs if choice 1
    else
    {
        if( intChoice == 2)
        {
            floatFirstNum = parseFloat(prompt("Please select your first number."));
                for (;isNaN(floatFirstNum);)
                    {
                        floatFirstNum = parseFloat(prompt("Error.\nPlease select your first number."));
                    }
                
            floatSecNum = parseFloat(prompt("Please select your second number."));
                for (;isNaN(floatSecNum);)
                    {
                        floatSecNum = parseFloat(prompt("Error.\nPlease select your second number."));
                    }
                        
            output = floatFirstNum - floatSecNum;
            $("resultBox").value = output;
            calculate_click();
        }//runs if choice 2
        else
        {
            if(intChoice == 3)
            {
                floatFirstNum = parseFloat(prompt("Please select your first number."));
                    for (;isNaN(floatFirstNum);)
                        {
                            floatFirstNum = parseFloat(prompt("Error.\nPlease select your first number."));
                        }
                
                floatSecNum = parseFloat(prompt("Please select your second number."));
                    for (;isNaN(floatSecNum);)
                        {
                            floatSecNum = parseFloat(prompt("Error.\nPlease select your second number."));
                        }
                        
                output = floatFirstNum*floatSecNum;
                $("resultBox").value = output;
                calculate_click();
            }//runs if choice 3
            else
            {
                if(intChoice == 4)
                {
                    floatFirstNum = parseFloat(prompt("Please select your first number."));
                        for (;isNaN(floatFirstNum);)
                            {
                                floatFirstNum = parseFloat(prompt("Error.\nPlease select your first number."));
                            }
                
                    floatSecNum = parseFloat(prompt("Please select your second number."));
                        for (;isNaN(floatSecNum);)
                            {
                                floatSecNum = parseFloat(prompt("Error.\nPlease select your second number."));
                            }
                        
                    output = floatFirstNum/floatSecNum;
                    $("resultBox").value = output;
                    calculate_click();
                }//runs if choice 4
                else
                {
                    if(intChoice == 5)
                    {
                        floatBase = parseFloat(prompt("Please select your base number."));
                            for (;isNaN(floatBase);)
                                {
                                    floatBase = parseFloat(prompt("Error.\nPlease select your base number."));
                                }
                
                        floatExponent = parseFloat(prompt("Please select your exponent."));
                            for (;isNaN(floatExponent);)
                                {
                                floatExponent = parseFloat(prompt("Error.\nPlease select your exponent."));
                                }
                        
                        output = Math.pow(floatBase,floatExponent);
                        $("resultBox").value = output;
                        calculate_click();
                    }//runs if choice 5
                    else
                    {
                        if(intChoice == 6)
                        {
                            var i;
                            var sum =0;
                            var numSeries =0;
                            for(i=0;numSeries!="***";i++)
                            {
                                numSeries = prompt("Please enter a series of numbers.\nEnter *** when you are done.");
                               
                                for(;isNaN(numSeries)&&numSeries!="***";)//need *** to break so use it as an extra condition
                                {
                                    numSeries = prompt("Error.\nPlease enter a series of numbers.");
                                }
                                 if (numSeries == "***")
                                {
                                    break;
                                }//breaks when user inputs ***
                                sum += parseFloat(numSeries);//adds user inputs
                                output = sum/(i+1);//intCount seems to be one fewer than actual count so add 1

                            }
                                $("resultBox").value = output;
                                calculate_click();
                         }
                        else
                        {
                            if(intChoice == 7)
                            {
                                output = "Quit.";
                                $("resultBox").value = output;
                            }
                        }
                            //runs if choice 6 
                        
                    }//choice 5 else bracket 
                }//choice 4 else bracket
            }//choice 3 else bracket
        }//choice 2 else bracket 
    }//choice 1 else bracket  
}//end of function

    
  
    
    
    
    
    
    
