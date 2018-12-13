var donor;
$( document ).ready(function() {
	

	

$('#addDonor').click(function() {
		donor = {
			name : $("#name").val(),
			gender : $("input[name='gender']:checked").val(),
			dateofBirth : $("#bday").val(),
			phone : $("#phone").val(),
			homeAddress : $("#address").val(),
			bloodType : $("#bloodgroup option:selected").text(),
			anydiseases : $("input[name='diseases']:checked").val(),
			positiveBlood : $("input[name='positiveBlood']:checked").val(),
			allergies : $("input[name='allergies']:checked").val()
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