// add tag to dom for html 
$(".wlp-bighorn-book").after("<div class='loginPortlet'></div>");

// get query for login
<<<<<<< HEAD
$.getJSON( "https://arcintgepi.arccorp.com/myarccomp/updated/data.json", function( data ) {
=======
$.getJSON( "https://arcintgepi.arccorp.com/sandbox/myarcportlet/data.json?923847", function( data ) {
>>>>>>> c1831206f2ade074b4804906b729af9294b76312
	
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
<<<<<<< HEAD
$("#nav2").html($("#nav2").html().replace("|", "").replace("|", ""));

$("#arcLogo").after("<div class='productName'><h2>My ARC</h2></div>");
=======
$("#nav2").html($("#nav2").html().replace("|", "").replace("|", ""));
>>>>>>> c1831206f2ade074b4804906b729af9294b76312
