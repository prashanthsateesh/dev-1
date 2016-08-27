// sushrut kasture
var BASE_URL = window.location.pathname;
pth = BASE_URL.split('/');
BASE_URL = '/'+pth[1];
// window.alert(BASE_URL);

$(".btn-x").click(function() {
	// console.log($(tdis).data('value'));
	var gid = $(this).data('value');
	// window.alert(gid);
	
	$.ajax({
			type:'POST',
			url:'groupdetails',
			data:{'group_id':gid},
			success:function(result)
			{	
				details = JSON.parse(result);
				console.log(details);
				k = details.length;
				// window.alert(k);
				var gender;// = details[0]['gender']?"male":"female";
				if(details[0]['gender']==0) gender = "female";
				else gender="male"; 
				$("#modal-gpname").html(details[0]['group_name']);
				// window.alert(details[0]['']);
				var str = "<tr><td><b>"+"Group ID"+"</b></td><td><center>&nbsp &nbsp"+details[0]['group_id']+"</center></td></tr>"+"<tr><td><b>"+"Gender"+"</b></td><td><center>&nbsp &nbsp"+gender+"</center></td></tr>"+"<tr><td><b>"+"Class"+"</b></td><td><center>&nbsp &nbsp"+details[0]['class']+"</center></td></tr>"+"<tr><td><b>"+"Year"+"</b></td><td><center>&nbsp &nbsp"+details[0]['new_year']+"</center></td></tr>";
				$("#det1").html(str);
				$(".delete-grp").data('grid',details[0]['group_id']);
				var str1 = "";
				
				for(var i=0;i<k;i++){
				
				var dis=""; if(details[i]['is_group_admin']==1){dis="admin";
				$('body').data('admin_id',details[i]['userid'])}
				else dis="";



					str1 = str1 + "<tr><td>"+details[i]['regno']+"</td><td>"+details[i]['name']+"&nbsp<span class='badge'>"+dis+"</span></td></tr>";
				}
				$("#det2").html(str1);

			}
		})
});
$(".delete-grp").click(function(){
			$(this).attr('disabled','disabled');
	$(this).html("deleting, please wait..");
		// window.alert(window.location.pathname);
		$.ajax({
			type:'POST',
			url:BASE_URL+'/roommaterequest/mygroup/delete_group',
			data:{'group_id':$(".delete-grp").data("grid")},
			success:function(result)
			{
						console.log(result);
						
						window.location.reload();

			}
		})
});

