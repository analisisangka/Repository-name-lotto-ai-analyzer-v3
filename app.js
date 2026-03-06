function runAnalysis(){

let result = runUltraAnalysis()

document.getElementById("top4d").innerHTML = result.top4d
document.getElementById("bbfs").innerHTML = result.bbfs
document.getElementById("digits").innerHTML = result.topDigits.join(",")

document.getElementById("status").innerHTML =
"PREDICTION LOCKED"

}
