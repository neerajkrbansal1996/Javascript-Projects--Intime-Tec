function dis(value){
	document.getElementById("result").value += value;
}

function clr(){
	document.getElementById("result").value = "";
}

function solve(){
	try{
		var exp = document.getElementById("result").value;
		document.getElementById("result").value = eval(exp);	
	}catch (e) {
		console.log(e);
	  alert("Invalid Expression") // pass exception object to error handler -> your own function
	}
	
}