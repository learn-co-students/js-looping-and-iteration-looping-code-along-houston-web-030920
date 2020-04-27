let writeCards = (stringNames, eventName) => {
  let messages = []
  for (let i = 0; i < stringNames.length; i++) {
    messages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
  }
  return messages
}


let countDown = (num) => {
  while(num >= 0){
    console.log(num)
    num--
  }
}
