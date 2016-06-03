 document.getElementById('submit_button').onclick= function ()
 {
 	var x =document.getElementById('form')
 	var name = x.elements[0].value;
 	var email= x.elements[1].value;
 	var pass = x.elements[2].value;
 	if(pass!='12345678')alert("invalid password");
 	if(isNumeric(name))alert("invalid name");
 	return false;

 }
 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
 console.log("working");
