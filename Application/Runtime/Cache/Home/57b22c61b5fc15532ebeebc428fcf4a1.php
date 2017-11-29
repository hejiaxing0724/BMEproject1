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

<div class = "jumbotron">
	<div style="margin-top:50px" class="container" >
		<ul style="width:50%"class="list-group">
			<?php if(is_array($myblog)): $i = 0; $__LIST__ = $myblog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$myb): $mod = ($i % 2 );++$i;?><li class="list-group-item blogrows">
		  	<span>
			  		<?php echo ($myb["b_title"]); ?>
			  	<small style="margin:0px 50px">
			  		<?php echo ($myb["b_time"]); ?></small>
			  	<span class="glyphicon glyphicon-heart" aria-hidden="true"></span><span style="margin:0px 5px"><?php echo ($myb["b_like"]); ?></span>	
		  	</span>
		  	<span style="float:right;visibility:hidden">
		  		<a href="<?php echo U('My/showmyblog');?>?b_id=<?php echo ($myb["b_id"]); ?>" style="color:#09c">修改</a>
                
                <input type="hidden" value="<?php echo ($myb["b_id"]); ?>">
                <a href="javascrip:void(0)"class="deleteblog" style="color:#999">删除</a>
                
              </span>
		  </li><?php endforeach; endif; else: echo "" ;endif; ?>
		</ul>
<script type="text/javascript">
	$('.blogrows').mouseover(function(){
          $(this).children()[1].style.visibility="visible";

        })
    $('.blogrows').mouseout(function(){
          $(this).children()[1].style.visibility="hidden";
        })

    $('.deleteblog').click(function(){
    	var result = confirm('确定要删除此条博客吗？');
    	if(result){
    		b_id = $(this).prev().val();
    	 data = {
    	 	b_id:b_id
    	 }
    	 $.ajax({url:"<?php echo U('My/deleteblog');?>",type:'POST',data:data, success:
			         function(succ){
			         	result = JSON.parse(succ);
			         	console.log(result);
			         	if (result.result=='ok') {
			         		alert('删除成功');
			         		window.location.reload();
			         	}
			                
			                  
			            }
			      })
    	}
    	 
    })

     
</script>