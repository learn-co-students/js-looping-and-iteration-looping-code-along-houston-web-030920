let cards = []
const names=["Ada", "Brendan", "Ali"];
const event='surprise';
function writeCards(names,event){
    for(let i=0; i< names.length; i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return cards;


}
function countDown(num){
    while(num>0){
    console.log(num)
    num -=1;
    }
    console.log(num);
    }


