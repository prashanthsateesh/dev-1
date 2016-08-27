$("#create-grp").click(function(){
	$('#add-grp-modal').modal('show');

	$('#add-grp').click(function(){
	$(this).attr('disabled','disabled');
	$(this).html("creating, please wait..");

		$.ajax({
			type:'POST',
			url:'../roommaterequest/mygroup/add_group',
			data:{'name':$('#group_name').val()},
			success:function(result)
			{
				console.log(result);
				// if(result==0)
				// {
				// 	window.alert('Group name already Exists');
				// 	$('#group_name').val('');
				// }
				// else if(result==1)
				// {
				// 	window.alert('Group created successfully');
				// 	window.location.reload();
				// }
				// else
				// {
				// 	window.alert('Group not created . Please try again.');
				// 	$('#group_name').val('');		
				// }
				window.location.reload();
			}
		})
	})
})