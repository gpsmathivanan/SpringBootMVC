var admin;
$( document ).ready(function() {
$('#adminDetails').click(function() {
	admin = {
			bloodType : $("#searchdropdown1 option:selected").text()
		}
		ajaxAdminPost();
	});

function myFunction() {
	  var input, filter, table, tr, td, i, txtValue;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("myTable");
	  tr = table.getElementsByTagName("tr");
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }       
	  }
	}

$('#searchdropdown').on('change', function(){
	   console.log($('#searchdropdown').val());
	    $('#searchdropdown1').html('');
	    if($('#searchdropdown').val()=="opt1"){
	        $('#searchdropdown1').append('<option value="t1">O+</option>');
	        $('#searchdropdown1').append('<option value="t2">O-</option>');
	        $('#searchdropdown1').append('<option value="t3">A+</option>');
	        $('#searchdropdown1').append('<option value="t4">A-</option>');
	        $('#searchdropdown1').append('<option value="t5">B+</option>');
	        $('#searchdropdown1').append('<option value="t6">B-</option>');
	        $('#searchdropdown1').append('<option value="t7">AB+</option>');
	        $('#searchdropdown1').append('<option value="t8">AB-</option>');
	    }else{
	        $('#searchdropdown1').append('<option value="t1">Expired</option>');
	        $('#searchdropdown1').append('<option value="t2">Non-Expired</option>');
	    }
	});

})

	
  function ajaxAdminPost(){
	$('#tableDiv').html("");
	    	$.ajax({
				type : "POST",
				contentType : "application/json",
				accept: 'text/plain',
				url : window.location + "api/bloodbank/admin",
				data : JSON.stringify(admin),
				dataType: 'json',
				success : function(result) {
					var content = "<table id='myTable' >"
						content += "<tr>   <th>Name</th><th>Gender</th><th>Dateofdonation</th><th>Phone</th><th>HomeAddress</th><th>BloodType</th><th>Anydiseases</th><th>PositiveBlood</th><th>Allergies</th></tr>"
						for (var i = 0; i < result.length; i++) {
							 var object = result[i];
						    content += '<tr>'
						    content +='<td>' +object.name+ '</td> <td>' +object.gender+ '</td>'
						    content +='<td>' +object.dateofBirth+ '</td> <td>' +object.phone+ '</td>'
						    content +='<td>' +object.homeAddress+ '</td> <td>' +object.bloodType+ '</td>'
						    content +='<td>' +object.anydiseases+ '</td> <td>' +object.positiveBlood+ '</td>'
						    content +='<td>' +object.allergies+ '</td>'
						    content += '</tr>';
						}
						content += "</table>"

						$('#tableDiv').append(content);
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