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
	<div style="margin-top:50px;" class="container" >
		<div class="page-header">
  <h3 class="col-sm-8 col-md-6">有关<cite title="Source Title"><?php echo ($searchcontent); ?></cite>的数据和博客搜索</h3>
</div>
<h3><small>和谐宜居城市评价系统数据库</small></h3>
<ul class="list-group">
  
  <?php if(is_array($index)): $i = 0; $__LIST__ = $index;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$in): $mod = ($i % 2 );++$i;?><li class="list-group-item"><?php echo ($in["ti_name"]); ?><span class="label label-warning">数据分析</span><a style="float:right"href="#">
  		<!-- "<?php echo U('Info/showindex');?>?ti_id=<?php echo ($in["ti_id"]); ?>" -->
		        		learn more
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        	</a></li><?php endforeach; endif; else: echo "" ;endif; ?>
  <?php if(is_array($blog)): $i = 0; $__LIST__ = $blog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$bl): $mod = ($i % 2 );++$i;?><li class="list-group-item"><?php echo ($bl["b_title"]); ?><span class="label label-info">博客讨论</span><a style="float:right"href="<?php echo U('Share/showblog');?>?b_id=<?php echo ($bl["b_id"]); ?>">
		        		learn more
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        		<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
		        	</a></li><?php endforeach; endif; else: echo "" ;endif; ?>
</ul>