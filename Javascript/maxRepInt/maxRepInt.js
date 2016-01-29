var addCheckbox = function() {
	var input = "<p><input type='text'/><button type='button' onclick='delCheckbox(this)'>x</button></p>";
	document.getElementById("block").innerHTML += input;
}
var delCheckbox = function(current) {
	current.parentElement.remove();
}
var rep = {};
var num;
var maxNum;
var maxRepInt = function() {
	var element = document.getElementById("block").childNodes;
	var child = document.getElementById("block").getElementsByTagName("p");
	for (var i = 0; i < element.length; i++) {
		for(var j =0; j < child[i].childNodes.length; j++){
			if(child[i].childNodes[j].nodeName === "INPUT"){
				num = child[i].childNodes[j].value;
				typeof rep[num] != "undefined" ? rep[num]++ : rep[num] = 1;
			}
		}
	}
	var max = 0;
	for ( var k in rep) {
		if (max < rep[k]) {
			maxNum = k;
			max = rep[k];
		}
	}
	document.getElementById("p").innerHTML = maxNum;
}
