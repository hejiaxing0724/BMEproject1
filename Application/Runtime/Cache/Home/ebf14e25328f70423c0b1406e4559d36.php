<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
	<title>【H&L】HeJiaxing</title>
	<script type="text/javascript" src="/harmoniouscity/Public/js/jquery-3.1.0.js"></script>
	<link rel="stylesheet" type="text/css" href="/harmoniouscity/Public/bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<script type="text/javascript" src ="/harmoniouscity/Public/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
</head>
<body>
	<nav class ="navbar navbar-default" role ="navigation" style = "position:fixed; z-index:900; width:100% ;background:#fff;">
		<div class="container">
	   		<div class ="navbar-header ">
	   			<button type ="button" class= "navbar-toggle " data-toggle ="collapse" data-target ="#example-navbar-collapse">
	   				<span class="sr-only">切换导航</span>
	   				<span class ="icon-bar"></span>
	   				<span class ="icon-bar"></span>
	   			   	<span class ="icon-bar"></span>

	   			</button>

	   			<a style ="font-size:50px;color:#09C;margin-top:10px;"href="<?php echo U('index/index');?>">
	   				H&L</a>
	   		</div>

<!-- 导航匡 -->

	   		<div class ="collapse navbar-collapse" style="font-size:20px;"id = "example-navbar-collapse">
	   			<ul class ="nav navbar-nav">
	   				<li><a style="margin-top:10px;"href="<?php echo U('info/index');?>">数据分析</a></li>
	   				<!-- <li class ="divider"></li> -->
	   				<li><a style="margin-top:10px;"href ="<?php echo U('share/index');?>">博客讨论</a></li>
	   				<!-- <li class ="divider"></li> -->

	   				
	   				<li class ="dropdown" role="presentation">
	   					<a style="margin-top:10px;"class="dropdown-toggle"data-toggle="dropdown">个人中心

	   					</a>
<!-- my 下拉列表 -->
	   					<ul class="dropdown-menu">
<!-- 检查登录 -->
	   						<?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><li><a href="<?php echo U('My/myinfo');?>">我的资料</a></li>	
		   						<li><a href="<?php echo U('My/myblog');?>">我的博客</a></li>
		   						<li><a href="<?php echo U('index/log_out');?>">退出账号</a></li><?php endif; ?>
		   					<?php if(($vo["result"]) == "0"): ?><li><a href="<?php echo U('index/index');?>">请登录</a></li><?php endif; endforeach; endif; else: echo "" ;endif; ?>
	   					</ul>
	   				</li>
				
	   			</ul>
<!-- 搜索框 -->
	   			<form action="<?php echo U('Info/searchall');?>" method="post" class="navbar-form navbar-right" role="search">
	   				<div style="margin:10px"class="form-group">
	   					<input type ="text" class ="form-control"
	   					placeholder ="全库搜索数据和博客" name="searchcontent">
	   				</div>
	   				<input type ="submit" class ="btn btn-default" value="搜索">
	   			</form>
	   			
	   		</div>	
	   	</div>

	</nav>

<div style="background-color:white"class = "jumbotron">
	<div style="margin-top:50px" class="container" >
<div class="row">
<?php if(is_array($blog)): $i = 0; $__LIST__ = $blog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$bl): $mod = ($i % 2 );++$i;?><div class="col-sm-6 col-md-4">
		    <div class="thumbnail">
		      <img src="<?php echo ($bl["b_picture"]); ?>">
		      <div class="caption">
		        <h3><?php echo ($bl["b_title"]); ?><small style="margin-left:20px"><?php echo ($bl["b_time"]); ?></small></h3>
		        <p style="width:100px;overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
-o-text-overflow:ellipsis;"><?php echo ($bl["b_text"]); ?></p>
		        <p  style="font-size:16px">
		        	<a id="dianzan"href="javascript:void(0)">
		        		<input type="hidden" value="<?php echo ($bl["b_id"]); ?>">
		        		<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
		        	</a>
		        	<span><?php echo ($bl["b_like"]); ?></span>
		        	<a style="color:#ec971f;float:right"href="<?php echo U('Share/showblog');?>?b_id=<?php echo ($bl["b_id"]); ?>">
		        		learn more
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        	</a>


		        </p>
		      </div>
		    </div>
		  </div><?php endforeach; endif; else: echo "" ;endif; ?>
</div>
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <?php if(is_array($page)): $i = 0; $__LIST__ = $page;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$pa): $mod = ($i % 2 );++$i;?><li><a href="#?p=<?php echo ($pa["page"]); ?>"><?php echo ($pa["page"]); ?></a></li><?php endforeach; endif; else: echo "" ;endif; ?>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
	</div>
  </div>
<script type="text/javascript">
	$('#dianzan').click(function(){
		b_id = $(this).children().val();
		data ={
			b_id:b_id
		}
		$.ajax({url:"<?php echo U('Share/dianzan');?>",type:'POST',data:data, success:
		         function(succ){

		                
		                  
		            }
		           
		      })
		 number = $(this).next().text();
		 numbernow = parseInt(number)+1;
		         		//console.log(number);
		         		$(this).next().text(numbernow);

		         		
	})
</script>

</div>
<div class = "jumbotron">
	<?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><div style="margin-top:50px"class ="container">
    	<div style="width:450px;float:left">
    		<div style="border-left:#09C 5px solid;font-size:18px;margin-bottom:25px;padding-left:15px">编辑配图</div>
			<div style=" width:330px;height:300px; border:5px solid #09c;margin-bottom:25px">
				<form id="uploadform" type="post" enctype="multipart/form-data">
					<img style=" margin:15px 30px ;width:250px;height:200px;" src="<?php echo ($avatar); ?>"  id="insertintoimage" >
					<div>
						<input name="token" type="hidden" value="<?php echo ($value); ?>">
						<input name="file" type="file" style="margin:0 30px" onchange="previewimage()">
						<center style="color:#09c"><h5>显示配图则上传成功</h5></center>	
					</div>
					
				</form>
				
			</div>

    	</div>
    	<div style="width:450px;float:left">
    		<div style="border-left:#09C 5px solid;font-size:18px;padding-left:15px">编辑文字</div>
			<div class="input-group input-group-lg" style="margin-top:35px">
		 	 <span class="input-group-addon" id="sizing-addon1">标题</span>
		  	<input type="text"id="title" class="form-control" aria-describedby="sizing-addon1">
			</div>

			<div class="input-group input-group-lg" style="margin-top:35px">
		  
		 	 <textarea id="content"style="height:200px;width:450px;margin-bottom:25px" class="form-control" placeholder="编辑正文（右下角可延伸输入框）" aria-describedby="sizing-addon1"></textarea>
			</div>
    	</div>
    	<button style="width:450px"class="btn btn-warning" onclick="public()">发表</button><?php endif; ?>
		   					<?php if(($vo["result"]) == "0"): ?><center>
		   							<a href="<?php echo U('index/index');?>">登录后发表自己的看法：）</a>
		   						</center><?php endif; endforeach; endif; else: echo "" ;endif; ?>
    
		
</section> 
<script type="text/javascript">
		newpath='';
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
			if(title==""){
				alert('请输入标题');
			}if(content==""){
				alert('请输入正文');
			}
			if(newpath==""){
				alert('请上传配图');
			}else{
				data={
				b_picture:newpath,
				b_title:title,
				b_text:content
			}
				$.ajax({url:"<?php echo U('Share/saveblog');?>",type:'POST',data:data, success:
		         function(succ){
		         	result = JSON.parse(succ);
		         	console.log(result);
		         	if (result.result=='ok') {
		         		alert('发表成功');
		         		window.location.reload();
		         	}
		                
		                  
		            }
		      })
			}
			
		}



		
</script>