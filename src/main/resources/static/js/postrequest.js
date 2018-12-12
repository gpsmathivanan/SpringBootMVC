$( document ).ready(function() {
	
	var listCustomers = [];

	/**
	 * Using JQuery for hiding some elements in view when bootstrap app
	 */
	// Hide customer table when starting
	// we just show it if having any adding-customer
	$('#customerTable').hide();
	$('#postCustomersBtn').hide();
	
	// Customer-Form submit
    $("#customerForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		
		// get data from submit form
		
		var formCustomer = {
    			name : $("#name").val(),
    			age : $("#age").val(),
    			address : {
    		    	street : $("#street").val(),
    		    	postcode : $("#postcode").val()
    		    }
    	}
		
		// store customer
		listCustomers.push(formCustomer);
		
		// re-render customer table by append new customer to table
		
		var customerRow = '<tr>' +
							'<td>' + listCustomers.length + '</td>' +
							'<td>' + formCustomer.name.toUpperCase() + '</td>' +
							'<td>' + formCustomer.age + '</td>' +
							'<td>' + formCustomer.address.street + '</td>' +
							'<td>' + formCustomer.address.postcode + '</td>' +
					        '<td class="text-center">' +
					        	'<input type="hidden" value=' + (listCustomers.length - 1) + '>' +
					        	'<a>' +
					  				'<span class="glyphicon glyphicon-remove"></span>' +
								'</a>' +
					        '</td>' +
						  '</tr>';

		$('#customerTable tbody').append(customerRow);

		// just how customer table and POST button
		$('#customerTable').show();
		$('#postCustomersBtn').show();
		
		// Reset FormData after Posting
    	resetData();
	});
    
	// Do DELETE a Customer via JQUERY AJAX
	$(document).on("click","a",function() {
		var customerId = $(this).parent().find('input').val();
		$(this).closest("tr").remove()
	});
	
	// Submit List of Customer to Back-End server
	$('#postCustomersBtn').click(function(){
		ajaxPost();
	});
	
    function ajaxPost(){
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			accept: 'text/plain',
			url : window.location + "api/customer/save",
			data : JSON.stringify(listCustomers),
			dataType: 'text',
			success : function(result) {
				// clear customer body
				$('#customerTable tbody').empty();
				$('#customerTable').hide();
				
				// re-set customer table list
				listCustomers = [];
				
				// fill successfully message on view
				$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" + 
											result +
										  "</p>");
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    }
    
    function resetData(){
    	$("#name").val("");
    	$("#age").val("");
    	$("#street").val("");
    	$("#postcode").val("");
    }
})