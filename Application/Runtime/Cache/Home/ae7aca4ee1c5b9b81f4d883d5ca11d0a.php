<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
	<title>【H&L】HeJiaxing </title>
	<script type="text/javascript" src="/harmoniouscity/Public/js/jquery-3.1.0.js"></script>
	<link rel="stylesheet" type="text/css" href="/harmoniouscity/Public/bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<script type="text/javascript" src ="/harmoniouscity/Public/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
</head>
<body>
	<div class = "jumbotron">
    <div style="background-color:white;"class ="container">
    	<a href="<?php echo U('My/myblog');?>"><button class="btn btn-default" style="margin:40px">返回</button></a>

    	<div style="margin-top:50px"class ="container">
    	<div style="width:450px;float:left">
    		<div style="border-left:#09C 5px solid;font-size:18px;margin-bottom:25px;padding-left:15px">修改配图</div>
			<div style=" width:330px;height:300px; border:5px solid #09c;margin-bottom:25px">
				<form id="uploadform" type="post" enctype="multipart/form-data">
					<img style=" margin:15px 30px ;width:250px;height:200px;" src="<?php echo ($picture); ?>"  id="insertintoimage" >
					<div>
						<input name="token" type="hidden" value="<?php echo ($value); ?>">
						<input name="file" type="file" style="margin:0 30px" onchange="previewimage()">
					<center style="color:#09c"><h5>显示配图则上传成功</h5></center>	
					</div>
					
				</form>
				
			</div>

    	</div>
    	<div style="width:450px;float:left">
    		<div style="border-left:#09C 5px solid;font-size:18px;padding-left:15px">修改文字</div>
			<div class="input-group input-group-lg" style="margin-top:35px">
				<input name="b_id"type="hidden" value="<?php echo ($b_id); ?>">
		 	 <span class="input-group-addon" id="sizing-addon1">标题</span>
		  	<input type="text"id="title" class="form-control" aria-describedby="sizing-addon1" value="<?php echo ($title); ?>">
			</div>

			<div class="input-group input-group-lg" style="margin-top:35px">
		  
		 	 <textarea id="content"style="height:200px;width:450px;margin-bottom:25px" class="form-control" placeholder="<?php echo ($text); ?>" aria-describedby="sizing-addon1"></textarea>
			</div>
    	</div>
    	<button style="width:450px"class="btn btn-warning" onclick="public()">修改</button>


   <script type="text/javascript">
   newpath=$('#insertintoimage')[0].src;
    	function previewimage(imgFile)
		{

				var frm = document.forms[1];
				var imgFile = $('input[type=file]');
				var filextension=imgFile.val().substring(imgFile.val().lastIndexOf("."),imgFile.val().length);
			    filextension=filextension.toLowerCase();
			    if ((filextension!='.jpg')&&(filextension!='.gif')&&(filextension!='.jpeg')&&(filextension!='.png')&&(filextension!='.bmp'))
			    {
			    alert("对不起，系统仅支持标准格式的照片，请您调整格式后重新上传，谢谢 !");
			    imgFile.focus();
			    }
			    else
			    {  

	// 文件上传formData
					var frm = document.forms[1];
					//console.log('999');
					console.log(frm);
			    	var formData = new FormData(frm);
			    	console.log(formData);
		 			$.ajax({  
				          url: "http://up.qiniu.com",  
				          type: 'POST', 
				          data: formData,  
				          async: true,  
				          cache: false,  
				          contentType: false,  
				          processData: false,  
				    
				          success: function (succ) {  
				              
				              
				              newpath = 'http://oe72gh812.bkt.clouddn.com/'+succ.key;
				              console.log(newpath);
			    				$('#insertintoimage')[0].src=newpath;
				          },  
				          error: function (returndata){  
				              alert(returndata);  
				          }  
		     		});  
			    	
			    }	
		}

		function public(){
			title = $('#title').val();
			content = $('#content').val();
			b_id = $('input[name=b_id]').val();
			if(title==""){
				alert('请输入标题');
			}if(content==""){
				alert('请输入正文');
			}
			if(newpath==""){
				alert('请上传配图');
			}else{
				data={
				b_id:b_id,
				b_picture:newpath,
				b_title:title,
				b_text:content
			}
				$.ajax({url:"<?php echo U('My/modifyblog');?>",type:'POST',data:data, success:
		         function(succ){
		         	result = JSON.parse(succ);
		         	console.log(result);
		         	if (result.result=='ok') {
		         		alert('修改成功');
		         		window.location.reload();
		         	}
		                
		                  
		            }
		      })
			}
			
		}
   </script>