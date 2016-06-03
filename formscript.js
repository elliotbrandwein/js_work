 document.getElementById('submit_button').onclick= function ()
 {
 	var x =document.getElementById('form')
 	var name = x.element[0].value;
 	var email= x.element[1].value;
 	var pass = x.element[2].value;
 	if(pass!='12345678')alert("invalid password");
 	if(isNumeric(name))alert("invalid name");
 	return false;

 }
 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
 console.log("working");
