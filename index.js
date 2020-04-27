// Code your solutions in this file
function writeCards(stringNames, eventName){
    let answer = []
    for(let i = 0; i < stringNames.length; i++){
        answer.push(`Thank you, ${stringNames[i]}, for the wonderful surprise gift!`)
    }
    return answer
}

function countDown(){
    let i = 10
    while(i >= 0){
        console.log(i)
        i--
    }
}