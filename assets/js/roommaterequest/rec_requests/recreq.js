//Author : Tejas Niphadkar

$(document).ready(function(){

	var table = $('.dataTable').DataTable(
		{
        	"columnDefs":
        	[
	            {
	                "targets": [ 7 ],
	                "visible": false,
	                "searchable": false
	            }
        	]
    	} 
	);

	var table1 = $('.dataTable1').DataTable(
		{
        	"columnDefs":
        	[
	            {
	                "targets": [ 5 ],
	                "visible": false,
	                "searchable": false
	            }
        	]
    	} 
	);


	$('.dataTable tbody').on( 'click', '.accept', function () {
		var tableData = table.row( $(this).parents('tr') ).data();
		data={
			'reqid' : parseInt(tableData[0])
		}
		//console.log(data);
		$('.accept').attr('disabled','disabled');
		$('.reject').attr('disabled','disabled');
		$.ajax({
			type: "POST",
			url : "requestsin/accept_request",
			data : data
		}).done(function(data){
			location.reload();
		 		//console.log("Accepted");
		 	}).fail(function(data){
		 		window.alert('Could not Accept');
		 	});

		 } );


	$('.dataTable tbody').on( 'click', '.reject', function () {
		var tableData = table.row( $(this).parents('tr') ).data();
		data={
			'reqid' : parseInt(tableData[0])
		}
		$('.accept').attr('disabled','disabled');
		$('.reject').attr('disabled','disabled');

		console.log(data);
		$.ajax({
			type: "POST",
			url : "requestsin/reject_request",
			data : data
		}).done(function(data){
			location.reload();
		 		//console.log("Rejected");
		 	}).fail(function(data){
		 		window.alert('Could not Reject');
		 	});

		 } );

	function format(data,showPhone) {

		//Check how many members are there.
		//Display that many rows in table
	// data={
	// 		'reqid' : parseInt(tableData[0])
	// 	}		
	var retCode = '';
	var members = JSON.parse(data);
	//console.log(members);
	var i;
	retCode = retCode + 
	 '<table class="table table-striped table-bordered table-hover table-condensed">'+
	 '<thead>'+
	 '<th class="ative text-center">Roll No. </th>'+
	 '<th class="ative text-center">Name</th>'+
	 '<th class="ative text-center">Contact Number</th>'+
	 '</thead>'+
	 '<tbody class="text-center">';
	for(i=0;i < (members.length); i++ )
	{
		retCode = retCode+
		'<tr class="info">'+
			'<td>'+members[i].rollNo+'</td>'+
			'<td>'+members[i].name+'</td>';
		if(showPhone==0)
		{
	    	retCode = retCode+'<td>Private : Will be shown after accepting Request</td>';
		}
		else
		{
			retCode = retCode+'<td>'+members[i].mobile+'</td>' 
		}
		retCode= retCode+'</tr>';
	}
	retCode = retCode + 
	 '</tbody>'+
	 '</table>';
	return retCode;
}


$('.dataTable tbody').on('click', 'td .members', function () {
	var tr = $(this).closest('tr');
	var row = table.row( tr );
	var tableData = table.row( $(this).parents('tr') ).data();
	var members = tableData[7]; 


	if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(members,0)).show();
            tr.addClass('shown');
        }
    } );


$('.dataTable1 tbody').on('click', 'td .members1', function () {
	var tr = $(this).closest('tr');
	var row = table1.row( tr );
	var tableData = table1.row( $(this).parents('tr') ).data();
	var members = tableData[5]; 


	if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(members,1)).show();
            tr.addClass('shown');
        }
    } );	


});

