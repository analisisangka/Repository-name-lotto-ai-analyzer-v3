let lockedPrediction = null

function runUltraAnalysis(){

if(lockedPrediction){
return lockedPrediction
}

let freq = Array(10).fill(0)

lottoData.forEach(n=>{
n.toString().split("").forEach(d=>{
freq[d]++
})
})

let ranking = freq
.map((v,i)=>({digit:i,val:v}))
.sort((a,b)=>b.val-a.val)

let topDigits = ranking.slice(0,6).map(x=>x.digit)

lockedPrediction = {

top4d: topDigits.join(""),
bbfs: topDigits.join(""),
topDigits: topDigits

}

return lockedPrediction

}
