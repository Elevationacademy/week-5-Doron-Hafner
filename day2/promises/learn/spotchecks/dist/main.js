//===================== spot check-1 ===================== 
let p = $.get('/randomWord')
p.then(word => console.log(word))

//===================== spot check-2 ===================== 
let sentiment = $.get('/sentiment/Ploy')
sentiment.then(sentimentVal =>console.log(sentimentVal))
