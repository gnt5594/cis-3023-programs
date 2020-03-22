function $(id){
    return document.getElementById(id);
}

function countAlpha_click() {
    var currentChampion = "";
    var currStr = "";
    for(;;){
        currStr = prompt("Enter a string or *** to exit");
        if (currStr == "***")
        break;
        if (countAlpha1(currStr) > countAlpha1(currentChampion))
        currentChampion = currStr;
        
    }//for
    
    alert("The string with max number of unique characters is: " + currentChampion + "\n The number of unique characters is: " + countAlpha1(currentChampion));
}//countAlpha


function countAlpha1(currStr){
    for(var i=0; i<currStr.length;i++){
        for(var j=i+1;j<currStr.length;j++){
            if(currStr[i] == currStr[j]){
                currStr = spliceChar(currStr,j);
                j--;
            }//if
        }//for j
    }//for i
return currStr.length;

}//countAlpha1

function spliceChar(currStr,pos){
    var prefix,suffix;
    prefix = currStr.slice(0,pos);
    suffix = currStr.slice(pos + 1, currStr.length);
    return(prefix + suffix);
}//spliceChar

