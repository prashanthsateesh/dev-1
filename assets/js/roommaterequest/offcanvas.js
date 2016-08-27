$('.relinquish-btn').click(function(){
	var userid=$(this).attr('userid');
				$(this).attr('disabled','disabled');
	$(this).html("in process, please wait..");

	$.ajax({
		type:'POST',
		url:'../roommaterequest/mygroup/relinquish',
		data:{'new_admin':userid},
		success:function(result)
		{
			console.log(result);
			
			window.location.reload();
			}
		})
})