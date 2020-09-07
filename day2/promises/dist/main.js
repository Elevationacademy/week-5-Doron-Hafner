// //===================== spot check-1 ===================== 
// let p = $.get('/randomWord')
// p.then(word => console.log(word))

// //===================== spot check-2 ===================== 
// let sentiment = $.get('/sentiment/Ploy')
// sentiment.then(sentimentVal =>console.log(sentimentVal))

// //===================== exrecise-1,2 ===================== 

// const render = (book, gif) => $('body').append(`<h1>${book.items[0].volumeInfo.title}</h1><IMG SRC="${gif.data[0].images.downsized_medium.url}">`)

// $.get('/randomWord')
//     .then(word => {
//         let book = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
//         let gif = $.get(`https://api.giphy.com/v1/gifs/search?api_key=SH1xgxBXrdHw6Il4qxWDAl2e3YeswdGM&q=${word}&limit=1&offset=0&rating=g&lang=en`)
//         Promise.all([book, gif])
//             .then(results => render(results[0], results[1]))
//     }
    
//     )
    