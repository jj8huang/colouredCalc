var x = 0;
var outputArray = [];
var arithmeticArray = [];
function formLoad() {
	x = 0;
	document.getElementById("inputBox").value = x;
}
function oneOutput(){ 
	x = x*10 + 1;
	document.getElementById("inputBox").value = x;
	console.log(x);
}
function twoOutput(){
	 x = x * 10 + 2; 
	document.getElementById("inputBox").value = x;
}
function threeOutput(){
	x = x * 10 + 3;
	document.getElementById("inputBox").value = x;
}
function fourOutput(){
	x = x * 10 + 4;
	document.getElementById("inputBox").value = x;
}
function fiveOutput(){
	x = x * 10 + 5;
	document.getElementById("inputBox").value = x;
}
function sixOutput(){
	x = x * 10 + 6;
	document.getElementById("inputBox").value = x;
}
function sevenOutput(){
	x = x * 10 + 7;
	document.getElementById("inputBox").value = x;
}
function eightOutput(){
	x = x * 10 + 8;
	document.getElementById("inputBox").value = x;
}
function nineOutput(){
	x = x * 10 + 9;
	document.getElementById("inputBox").value = x;
}
function zeroOutput(){
	x = x*10;
	document.getElementById("inputBox").value= x;
}
function isNumberVal(num){
    var charCode = (num.which) ? num.which : event.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}
function plusOutput(){
	arithmeticArray.push("+");
	var y =document.getElementById("inputBox").value;
	outputArray.push(y);
	y = 0;
	x = 0;
	document.getElementById("inputBox").value = x;
}
function minusOutput(){
	arithmeticArray.push("-");
	var y = document.getElementById("inputBox").value;
	outputArray.push(y);
	y = 0;
	x = 0;
	document.getElementById("inputBox").value = x;
}
function productOutput(){
	arithmeticArray.push("*");
	var y = document.getElementById("inputBox").value;
	outputArray.push(y);
	y = 0;
	x = 0;
	document.getElementById("inputBox").value = x;
}
function divideOutput(){
	arithmeticArray.push("/");
	var y = document.getElementById("inputBox").value;
	outputArray.push(y);
	y = 0;
	x = 0;
	document.getElementById("inputBox").value = x;
}
function equalOutput(){
	var i = 0;
	var outputVal = outputArray[0];
	arithmeticArray.push("=");
	var y = document.getElementById("inputBox").value;
	outputArray.push(y);
	y = 0;
	for(i = 0; i < outputArray.length; i++ ){
		if(arithmeticArray[i] == "+" ){
			outputVal = parseFloat(outputVal) + parseFloat(outputArray[i + 1]);
		}
		if(arithmeticArray[i] == "-"){
			outputVal = parseFloat(outputVal) - parseFloat(outputArray[i + 1]);
		}
		if(arithmeticArray[i] == "*"){
			outputVal = parseFloat(outputVal) * parseFloat(outputArray[i + 1]);
		}
		if(arithmeticArray[i] == "/"){
			outputVal = parseFloat(outputVal) / parseFloat(outputArray[i + 1]);
		}
		if(arithmeticArray[i] == "="){
			if (outputVal != null ){
				document.getElementById("inputBox").value = outputVal;
				x=0;
				outputVal=0;
				arithmeticArray = [];
				outputArray = [];
			}
			else {
				document.getElementById("inputBox").value = 0;
				x=0;
				outputVal=0;
				arithmeticArray = [];
				outputArray = [];
			}
		}
	}
}


