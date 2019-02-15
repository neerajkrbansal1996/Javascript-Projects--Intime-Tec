const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector(".calculator__display")
const history = document.querySelector(".calculator__display_history")

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
   const key = e.target
   const action = key.dataset.action
   const keyContent = key.textContent
   const displayedNum = display.textContent
   const previousKeyType = calculator.dataset.previousKeyType
   const historyData = history.textContent

   // Remove .is-depressed class from all keys
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))

    if(!action){
	   	console.log("Number Key!")
	   	if (displayedNum === '0' || previousKeyType === 'operator') {
		    display.textContent = keyContent
		  } else {
		    display.textContent = displayedNum + keyContent
		}
	   	calculator.dataset.previousKeyType = 'number'
   }else if(action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
	   	console.log("Operator Key!")
	   	const firstValue = calculator.dataset.firstValue
		const operator = calculator.dataset.operator
		const secondValue = displayedNum

		var opt = "";
		opt = operation(action)
		
		if(previousKeyType === "calculate"){
			history.textContent = displayedNum + opt
		}else if (
		  firstValue &&
		  operator &&
		  previousKeyType !== 'operator'
		) {
		  const calcValue = calculate(firstValue, operator, secondValue)
		  
		  display.textContent = calcValue
		// Update calculated value as firstValue
		  calculator.dataset.firstValue = calcValue

		history.textContent += displayedNum + opt

		} else if(previousKeyType === "operator"){
			
			var string = history.textContent
			var newString = string.substr(0, string.length - 1)
			history.textContent = newString
			history.textContent +=  opt
		}
		else {
		  // If there are no calculations, set displayedNum as the firstValue
		  calculator.dataset.firstValue = displayedNum
		  history.textContent += displayedNum + opt

		}
		key.classList.add('is-depressed')
		calculator.dataset.previousKeyType = 'operator'
		calculator.dataset.operator = action
   }else if(action === "clear"){

	   	calculator.dataset.previousKeyType = 'clear'
	   	display.textContent = "0"
	   	calculator.dataset.firstValue = "0"
	   	history.textContent = ""

	   	console.log("Clear Key!")
   }else if(action === "calculate"){
   		console.log("calculate Key!")
   	  	let firstValue = calculator.dataset.firstValue
  		const operator = calculator.dataset.operator
  		const secondValue = displayedNum
		if (firstValue) {
    		if (previousKeyType === 'calculate') {
      		firstValue = displayedNum
    	}
    	if(previousKeyType === 'calculate'){
    		var opt = operation(operator)
    		history.textContent += opt
    	}
		history.textContent += secondValue
		display.textContent = calculate(firstValue, operator, secondValue)
		calculator.dataset.firstValue = display.textContent
  		}
  		// calculator.dataset.modValue = secondValue
  		calculator.dataset.previousKeyType = 'calculate'
   		}else if(action === "decimal"){
   			console.log("Decimal Key!")
   			if (!displayedNum.includes('.')) {
	    		display.textContent = displayedNum + '.'
	  		} 
   			calculator.dataset.previousKey = 'decimal'
   			
 		}
 		else if(action === "backspace"){
   			console.log("Backspace Key!")

   			if(calculator.dataset.previousKeyType == "calculate"){
	   				history.textContent = ""
	   				calculator.dataset.firstValue = "0"
	   		}

   			display.textContent = "0"
   		}
}
});

const calculate = (n1, operator, n2) => {
  let result = ''
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  return result
}

function operation(action) {
			if(action === "add"){
				return "+"
			}else if(action === "subtract"){
				return "-"
			}else if(action === "multiply"){
				return "*"
			}else if(action === "divide"){
				return "/"
			}
}