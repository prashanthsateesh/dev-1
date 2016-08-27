$(document).ready(function(){
	$('#sent-requests').DataTable();
	$('#send-requests').DataTable();
})

$('.send-btn').click(function(){
	var regno=$(this).attr('regno');
			$(this).attr('disabled','disabled');
		$(this).html("sending");

	$.ajax({
		type:'POST',
		url:'../roommaterequest/mygroup/send_request',
		data:{'regno':regno},
		success:function(result)
		{
			console.log(result);
			
			window.location.reload();
			}
		})
})

$('.delete-btn').click(function(){
	var regno=$(this).attr('regno');
		$(this).attr('disabled','disabled');
		$(this).html("deleting");

	$.ajax({
		type:'POST',
		url:'../roommaterequest/mygroup/delete_request',
		data:{'regno':regno},
		success:function(result)
		{
			console.log(result);
			
			window.location.reload();
			}
		})
})

$('.deletegroup-btn').click(function(){
	var groupid=$(this).attr('groupid');
		$(this).attr('disabled','disabled');
		$(this).html("deleting");
	$.ajax({
		type:'POST',
		url:'../roommaterequest/mygroup/delete_group',
		data:{'group_id':groupid},

		success:function(result)
		{	
			// window.alert("groupid");
			console.log(result);
					
			window.location.reload();
			}
		
		})
})