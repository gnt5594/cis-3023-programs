var $ = function(id) {
    return document.getElementById(id);
};

function getArticle() {
    var articleString = $("article").value;
    var articles = articleString.split(" ");
    var randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
}

function getNoun() {
    var nounString = $("noun").value;
    var nouns = nounString.split(" ");
    var randomIndex = Math.floor(Math.random() * nouns.length);
    return nouns[randomIndex];
}

function getVerb() {
    var verbString = $("verb").value;
    var verbs = verbString.split(" ");
    var randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
}

function getPreposition() {
    var prepositionString = $("preposition").value;
    var prepositions = prepositionString.split(" ");
    var randomIndex = Math.floor(Math.random() * prepositions.length);
    return prepositions[randomIndex];
}//getPreposition

function getAdjective() {
    var adjectiveString = $("adjective").value;
    var adjectives = adjectiveString.split(" ");
    if(Math.random() < 0.5) {
        var randomIndex = Math.floor(Math.random() * adjectives.length);
        return (adjectives[randomIndex] + " " );
    }//if
    return "";
}//getAdjective

function getSentence() {
    return (getArticle() + " " + getAdjective() + getNoun() + " " + getVerb() + " " + getPreposition() + " " + getArticle() + " " + getAdjective() + getNoun() + ". ");
}//getSentence

function genEssay() {
    var numSentences;
    var everyNth = Math.floor(Math.random() * 5) + 6;
    for (; ;) {
        numSentences = parseInt(prompt("How many sentences in essay?"));
        if(!isNaN(numSentences))
            break;
    }//for
    var tempEssay = "";
    for(var i = 0;i < numSentences;i++) {
        tempEssay += getSentence();
        if ((i % everyNth) == 0)
            tempEssay += "\n \n ";
    }//for
    $("essay").value = tempEssay;
}//genEssay

function eventHandler() {
    $("generate").onclick = genEssay;
}//eventHandler

window.onload = function() {
    eventHandler();
    $("article").value = "";
    $("noun").value = "";
    $("verb").value = "";
    $("preposition").value = "";
    $("adjective").value = "";
    $("essay").value = "";
};


