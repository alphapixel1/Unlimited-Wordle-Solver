document.getElementById("Unlimited").onclick=function(){
    chrome.tabs.create({ url: "https://wordleunlimited.org/" });
}
document.getElementById("NYT").onclick=function(){
    chrome.tabs.create({ url: "https://www.nytimes.com/games/wordle/index.html" });
}