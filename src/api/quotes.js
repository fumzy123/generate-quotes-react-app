

//--------------------Constant Variables----------------------------
// Define URL and options parameters for getting a list of Quote https://rapidapi.com/skjaldbaka17/api/quotel-quotes/
const url = 'https://quotel-quotes.p.rapidapi.com/quotes/list'
// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '2ad232f86cmsh099647682daab73p14bdd1jsn8bf84f30255e',
//         'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
//     },
//     body: JSON.stringify({
//         pageSize: 6,
//         page: getRandomNumber()
//     })
// }


//--------------------API Call Function--------------------------------
export async function getQuotes(pageNum){

try {
    const response = await fetch(url, 
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '2ad232f86cmsh099647682daab73p14bdd1jsn8bf84f30255e',
                'X-RapidAPI-Host': 'quotel-quotes.p.rapidapi.com'
            },
            body: JSON.stringify({
                pageSize: 6,
                page: pageNum
            })
        }
    )
    const quoteList = await response.json()
    console.log(quoteList)
    return quoteList

} catch (error) {
    console.error(error);
}

}