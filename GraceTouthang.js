function $(id){
    return document.getElementById(id);
}

function countVowels_click() {//function to retrieve string
    var userWord = "";
    var userVowels = "";
    
        for(;!isNaN(userWord);){//makes sure its not all numbers
            userWord = prompt("Enter a string or *** to exit");
        }//for
        
        userWord = userWord.toLowerCase();//turns input to all lowercase so it counts uppercase too
        if (userWord == "***"){
            alert("Thanks for using the vowel counter!");//alerts thanks
            clear();//clears resultBox
        }//if
        userVowels = countVowels1(userWord);//uses countVowels1 function
    
    $("resultBox").value = userVowels;//push output to html
    countVowels_click(); //reruns function
 }//countVowels_click  
    

function countVowels1(userWord){//function to find vowels in string
    var insideVowels = userWord.match(/[aeiou]/gi);//looks for given matches in text
    return insideVowels.length;//outputs the number of vowels
}//countVowels1



function clear(){//function to clear resultBox
    $("resultBox").value = "";
}//clear


/*BELOW IS MY ATTEMPT AT USING SLICE
I didn't like it so I used a different method 

function countVowels1(userWord) {
    for(var i=0;i<userWord.length;i++){
        
        if((userWord.charAt(i) != "a") || (userWord.charAt(i) != "e") || (userWord.charAt(i) != "i") || (userWord.charAt(i) != "o") || (userWord.charAt(i) != "u")){
        userWord = spliceChar(userWord,i);
        
        
        }
        
    }
    return userWord;
}

function spliceChar(userWord,pos){
    var prefix,suffix;
    prefix = userWord.slice(0,pos);
    suffix = userWord.slice(pos+1, userWord.length);
    return(prefix + suffix);
}//spliceChar

}//for
*/
