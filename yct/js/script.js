$(function() {
	
	var bin = "https://api.myjson.com/bins/4s7vf";
	var coop = 0;
	var dad = 0;
	var eva = 0;

	var scores = $.get(bin, function(data) {
		coop = data.coop;
		dad = data.dad;
		eva = data.eva;
		// coop = dad = eva = 0;
		$("#coop_score").html(coop);
		$("#dad_score").html(dad);
		$("#eva_score").html(eva);
	})

	$("button").click(function() {
		action = $(this).attr("id");
		switch(action) {
		    case "coop_plus_one":
		    	coop = coop + 1;
		    	break;
		    case "coop_plus_five":		        
		        coop = coop + 5;
		        break;
		    case "dad_plus_one":		        
		    	dad = dad + 1;
		        break;
		    case "dad_plus_five":		        
		    	dad = dad + 5;
		        break;
		    case "eva_plus_one":		        
		    	eva = eva + 1;
		        break;
		    case "eva_plus_five":		        
		        eva = eva + 5;
		        break;
		    default:		        
		}
		$("#coop_score").html(coop);
		$("#dad_score").html(dad);
		$("#eva_score").html(eva);
		$.ajax({
		    type: 'PUT',
		    dataType: 'json',
		    url: bin,
		    contentType: "application/json",
		    data: '{"coop": '+coop+', "dad": '+dad+', "eva": '+eva+'}'
		});

	})


});