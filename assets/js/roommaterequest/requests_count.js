// sushrut kasture
var BASE_URL = window.location.pathname;
pth = BASE_URL.split('/');
BASE_URL = '/'+pth[1];
// window.alert(BASE_URL);

    $.ajax({
      type:'POST',
      url:BASE_URL+'/roommaterequest/requestsin/getcount',
      data:{},
      success:function(result)
      { if(result==1) s = "";
        else s = "s";
      	if(result>=0)
        $(".noreq").html(result+" pending request"+s);
      }
    });
$.ajax({
      type:'POST',
      url:BASE_URL+'/roommaterequest/mygroup/count_grps',
      data:{},
      success:function(result)
      { if(result==1) s = "";
        else s = "s";
        if(result>=0)
        $(".nogrps").html(result+" Group"+s);
      }
    });


