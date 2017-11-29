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
      <a style ="font-size:25px;color:#09C;margin-top:10px;"class="navbar-brand" href="<?php echo U('index/index');?>">
        H&L
      </a> <span style="font-size:24px;position:relative;top:20px">和谐宜居城市评价系统后台</span>
    </div>
  </div>
</nav>

	<ol class="breadcrumb">
	  <li><a href="<?php echo U('Admin/index');?>">目录</a></li>
     <li><a href="<?php echo U('Admin/indexadmin');?>">指标管理</a></li>
     <li class="active">编辑评价系统简介</li>
	</ol>

<div class = "jumbotron">
    <div style="margin-top:50px"class ="container">
    	<button class="btn btn-primary" type="button">
  修改
      </button>
    	
    	
	</div>
</div>

</body>
</html>