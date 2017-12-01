




function reverseText(text){
    if (text){ //Checks to see if reverseText has passable arguement.
  var splitText = text.split("")
  var reverseArray = splitText.reverse()
  }

return new Promise(function(resolve,reject){ //Returns result of promise.

    if (reverseArray){ //Check to see if variable in function exists, which is only possible if action is carried out.
        resolve (" word did reverse " +(reverseArray.join(""))) //Asks to return var reverseArray
    } else {
        reject (" did not reverse")
    }
    })
}



reverseText().then(function(result){ //Must pass arguement in reverseText for promise to be executed.
    console.log ("Success:" + result)
}) .catch(function(result){
    console.log("Failed:" + result)
})
