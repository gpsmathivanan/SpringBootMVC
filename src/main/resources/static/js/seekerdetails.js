var seeker;
$(document).ready(function() {
	$('#addSeeker').click(function() {
		seeker = {
			name : $("#nameSeeker").val(),
			gender : $("input[name='genderSeeker']:checked").val(),
			tillRequiredDate : $("#tillDateSeeker").val(),
			phone : $("#phoneSeeker").val(),
			homeAddress : $("#addressSeeker").val(),
			bloodType : $("#bloodgroupSeeker option:selected").text()
		}
		ajaxSeekerPost();
	});

})

function ajaxSeekerPost() {

	$.ajax({
		type : "POST",
		contentType : "application/json",
		accept : 'text/plain',
		url : window.location + "api/bloodbank/seeker",
		data : JSON.stringify(seeker),
		dataType : 'text',
		success : function(result) {
			alert("Details Inserted Successfully");
			$("#nameSeeker").val('');
			$(".gender").prop('checked', false);
			$("#tillDateSeeker").val('');
			$("#phoneSeeker").val('');
			$("#addressSeeker").val('');
			$("#bloodgroupSeeker").removeAttr('selected');
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