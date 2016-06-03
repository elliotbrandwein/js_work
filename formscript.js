 document.getElementById('submit_button').onclick= function ()
 {
 	var x =document.getElementById('form')
 	var name = x.elements[0].value;
 	var email= x.elements[1].value;
 	var pass = x.elements[2].value;
 	if(pass!='12345678')alert("invalid password");
 	console.log(name);
 	if(!isNumeric(name))alert("invalid name");
 	return false;

 }
 function isNumeric(n) {
 	var i =0;
 	while(i<n.length){
 		if(checkForNum(n.charAt(i)))return true;
 		i++;
 	}
 	return false;
}
 console.log("working");
function checkForNum(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}