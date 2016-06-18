
var page = require('webpage').create();
//var email = require('nodemailer');

page.open('https://www.cms.gov/Research-Statistics-Data-and-Systems/Downloadable-Public-Use-Files/Cost-Reports/?redirect=/CostReports/02_HospitalCostReport.asp', function() {
	//page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
    	var foo = page.evaluate(function() {
        	var ctrl = document.getElementsByTagName('table')[0];
        	if (ctrl != undefined){
        		console.log(ctrl.rows.length);
        		var str = '';
        		for (var i = 1; i <= ctrl.rows.length - 1; i++) {
        			str += ' | ' + ctrl.rows[i].cells[5].innerText;
        		};
        		return str;
        	} else 
        		return "No date was found.";
    	});
    	

    	console.log(foo);
    	// do what you gotta do with 'foo'
    	// ...
    	phantom.exit();
	//});
});