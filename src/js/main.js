// add tag to dom for html 
$(".wlp-bighorn-book").after("<div class='loginPortlet'></div>");

// get query for login
$.getJSON( "https://arcintgepi.arccorp.com/sandbox/myarcportlet/data.json?923847", function( data ) {
	
	//code to sanitize JSON input to prevent injection
	/* 
		- minimal santize on code since json will be hosted on documetum / EPi - access only granted to super admins on backend
		- prevent script tags to run
	*/
	
	if($("#frmMyARCLogin").attr("name") == "frmMyARCLogin") {
		$(".loginPortlet" ).html(data["login"].body);
		$("#myARCrightCol").html(data["login"].ads);
	}
	
	//grab hidden input val() for switch conditional
	console.log($("#custOrg").val());
	
	var segment = $("#custOrg").val();
	
	switch (segment) {
		case "Internal":
			$("#ARC_Home").after(data["login"].body);
			break;
		
		case "Carrier":
			$("#ARC_Home").after(data["carrier"].body);
			break;
		
		/*
		case "Agency":
			$("#ARC_Home").after(data["agency"].body);
			break;
			
		case "VTC":
			$("#ARC_Home").after(data["VTC"].body);
			break;
			
		...	
			
		*/
		
		default:
			break;
	}
	
});

// html DOM edits
$("#nav2").html($("#nav2").html().replace("|", "").replace("|", ""));