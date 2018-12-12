var donor;
$( document ).ready(function() {
	

	
	$('#addDonor').click(function(){
		
		alert($("#name").val());
		alert($("input[name='gender']:checked").val());
		alert($("#bday").val());
		alert($("#phone").val());
		alert($("#address").val());
		alert($( "#bloodgroup option:selected" ).text());
		alert($("input[name='diseases']:checked").val());
		alert($("input[name='positiveBlood']:checked").val());
		alert($("input[name='allergies']:checked").val());
		
		
		 donor = {
				name : $("#name").val(),
				age : $("#age").val(),
				street : $("#street").val(),
				postcode : $("#postcode").val()
		}
		ajaxPost();
	});
	

})


  function ajaxPost(){
		  alert("hi"); 
	    	// DO POST
	    	$.ajax({
				type : "POST",
				contentType : "application/json",
				accept: 'text/plain',
				url : window.location + "api/bloodbank/donor",
				data : JSON.stringify(donor),
				dataType: 'text',
				success : function(result) {
					console.log(result);
				},
				error : function(e) {
					console.log("ERROR: ", e);
				}
			});
	    }

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 