// Code your solutions in this file
// function writeCards(["Ada", "Brendan", "Ali"], "birthday"){
//     for (let i = 0; i < )
// }

// const person = ["Ada", "Brendan", "Ali"]
// function writeCards(person){
//     for(let i = 0; i < person.length; i++){
//         return(`Thank you, ${i}, for the wonderful birthday gift!`)
//     }
// }
function writeCards(names, event){
    let cards = []
    for(let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(num){
    while (num > 0){
        console.log(num)
        num -= 1
    }
    console.log(num)
}

