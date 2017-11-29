<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
	<title>hcc admin</title>
	<script type="text/javascript" src="/harmoniouscity/Public/js/jquery-3.1.0.js"></script>
	<link rel="stylesheet" type="text/css" href="/harmoniouscity/Public/bootstrap-3.3.5-dist/css/bootstrap.min.css">
	<script type="text/javascript" src ="/harmoniouscity/Public/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
</head>
<body>
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a style ="font-size:50px;color:#09C;margin-top:10px;"class="navbar-brand" href="<?php echo U('index/index');?>">
        H&L
      </a> <span style="font-size:24px;position:relative;top:20px">和谐宜居城市评价系统后台</span>
    </div>
  </div>
</nav>

	<ol class="breadcrumb">
	  <li><a href="<?php echo U('Admin/index');?>">目录</a></li>
	</ol>

<div class = "jumbotron">
    <div style="margin-top:20px"class ="container">
    	<a href="<?php echo U('Admin/indexadmin');?>">
    		<div style="width:95px"class="alert alert-info" >指标管理</div>
    	</a>
    	<a href="<?php echo U('Admin/blogadmin');?>">
    		<div style="width:95px"class="alert alert-info" >博客管理</div>
    	</a>
    	<a href="<?php echo U('Admin/useradmin');?>">
    		<div style="width:95px"class="alert alert-info" >用户管理</div>
    	</a>
    	
    	
	</div>
</div>

</body>
</html>