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
    <div style="margin-top:50px"class ="container">

<div class="media">
  <div class="media-left">
    <div style="margin:30px">
<!-- 替换城市名  -->   <?php if(is_array($city)): $i = 0; $__LIST__ = $city;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ci): $mod = ($i % 2 );++$i; if(($ci["c_id"]) == $cid): ?><h3><?php echo ($ci["c_name"]); ?></h3>
        <h1><?php echo ($ci["thisyearscore"]); ?></h1><?php endif; endforeach; endif; else: echo "" ;endif; ?>
    </div>
  </div>

  <div style="width:600" class="media-body">
<!-- 遍历指标组——年份 --><?php if(is_array($arr)): $i = 0; $__LIST__ = $arr;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$arr): $mod = ($i % 2 );++$i;?><div><?php echo ($arr["ic_year"]); ?></div>
        <div style="width:550"class="progress active">
          <?php echo ($arr["is_score"]); ?>
       
                    <?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><a href="secondinfo?cid=<?php echo ($cid); ?>&fi_id=1&year=<?php echo ($arr["ic_year"]); ?>"><?php endif; ?>
                <?php if(($vo["result"]) == "0"): ?><a href="#" onclick="pointlog()"><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    <div class="progress-bar progress progress-bar " role="progressbar" style="width: <?php echo ($arr["1"]); ?>;background-color:#09c" data-toggle="tooltip" data-placement="top" title="城市安全:<?php echo ($arr["1"]); ?> ">
                    </div></a>
   <!-- 第二维度                 -->

                   <?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><a href="secondinfo?cid=<?php echo ($cid); ?>&fi_id=2&year=<?php echo ($arr["ic_year"]); ?>"><?php endif; ?>
                <?php if(($vo["result"]) == "0"): ?><a href="#" onclick="pointlog()"><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    <div class="progress-bar progress progress-bar " role="progressbar" style="width: <?php echo ($arr["2"]); ?>;background-color:#09c" data-toggle="tooltip" data-placement="top" title="城市生活:<?php echo ($arr["2"]); ?> ">
                    </div></a>

<!-- 第三维度 -->

                    <?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><a href="secondinfo?cid=<?php echo ($cid); ?>&fi_id=3&year=<?php echo ($arr["ic_year"]); ?>"><?php endif; ?>
                <?php if(($vo["result"]) == "0"): ?><a href="#" onclick="pointlog()"><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    <div class="progress-bar progress progress-bar " role="progressbar" style="width: <?php echo ($arr["3"]); ?>;background-color:#09c" data-toggle="tooltip" data-placement="top" title="城市环境:<?php echo ($arr["3"]); ?> ">
                    </div></a>
<!-- 第四维度 -->

                    <?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><a href="secondinfo?cid=<?php echo ($cid); ?>&fi_id=4&year=<?php echo ($arr["ic_year"]); ?>"><?php endif; ?>
                <?php if(($vo["result"]) == "0"): ?><a href="#" onclick="pointlog()"><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    <div class="progress-bar progress progress-bar " role="progressbar" style="width: <?php echo ($arr["4"]); ?>;background-color:#09c" data-toggle="tooltip" data-placement="top" title="城市环境:<?php echo ($arr["4"]); ?> ">
                    </div></a>

<!-- 第五维度 -->
                 <?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><a href="secondinfo?cid=<?php echo ($cid); ?>&fi_id=5&year=<?php echo ($arr["ic_year"]); ?>"><?php endif; ?>
                <?php if(($vo["result"]) == "0"): ?><a href="#" onclick="pointlog()"><?php endif; endforeach; endif; else: echo "" ;endif; ?>
                    <div class="progress-bar progress progress-bar " role="progressbar" style="width: <?php echo ($arr["5"]); ?>;background-color:#09c" data-toggle="tooltip" data-placement="top" title="城市环境:<?php echo ($arr["5"]); ?> ">
                    </div></a>

        </div><?php endforeach; endif; else: echo "" ;endif; ?>


  </div>

  选择城市
  <select class="form-control" style="width:100px">
<!-- 遍历所有城市  -->   <?php if(is_array($city)): $i = 0; $__LIST__ = $city;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ci): $mod = ($i % 2 );++$i;?><option value="<?php echo ($ci["c_id"]); ?>"<?php if(($ci["c_id"]) == $cid): ?>selected<?php endif; ?>/><?php echo ($ci["c_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>  
  </select>
</div>
      
        
</div>
</div>
</div>
</div>
<div class="container">

</div>


<script type="text/javascript">
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//选择城市
$('select').change(function(){
    cid=$('select option:selected').val();
    
          window.location.href="index?cid="+cid;
        
    })

function pointlog(){
  alert('登录后查看维度评价指数详情。');
}
</script>