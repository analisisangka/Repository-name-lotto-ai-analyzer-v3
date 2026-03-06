function runAnalysis(){

let result = runUltraAnalysis()

document.getElementById("top4d").innerHTML =
"TOP 4D : "+result.top4d

document.getElementById("bbfs").innerHTML =
"BBFS : "+result.bbfs

document.getElementById("digits").innerHTML =
"TOP DIGIT : "+result.topDigits.join(",")

}
