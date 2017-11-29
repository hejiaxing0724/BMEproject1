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
    	<div style="border-left:#09C 5px solid;font-size:25px;margin-bottom:25px;padding-left:15px">身份认证</div>
        <?php if(($daiident) == "1"): ?><h3>您的身份认证已提交，请耐心等待管理员审核：）<a href="<?php echo U('My/myinfo');?>">返回</a></h3><?php else: ?>
            <h4>请您确保提交身份信息的真实性，稍后我们的管理员会和您取得联系进行核实：）</h4>
            <div class="input-group">
                        <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">称谓</span>
                        <input style="width:400px" name="iu_name"type="text" class="password form-control" aria-describedby="basic-addon1">
                        <a onclick="submit()" href="#"style="margin:5px 50px;font-size:24px">提交</a>
                    </div><?php endif; ?>
	</div>
</div>

<script type="text/javascript">
    function submit(){
        diu_name = $('input[name=iu_name]').val();
         data = {
                 diu_name:diu_name,                  
                }

                $.ajax({url:"<?php echo U('My/ident_submit');?>",type:'POST',data:data,success:
                    function(succ){
                            console.log(succ);
                            result = JSON.parse(succ);
                            
                            if(result.result=='ok'){
                                  alert('提交成功');
                                  
                                   window.location.reload(); 
                            }
                                
                    }
                })
                     
        
    }
					           
        
</script>