//--------------------Function----------------------------
export function getRandomNumber(){
    let pageNum =  Math.floor(Math.random() * 10)
    console.log(`pageNum is ${pageNum}`)
    return pageNum
}