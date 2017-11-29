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
    	<div style="background-color:white">
    		<img src="/harmoniouscity/Public/advator.jpg">
    		
    	
    	</div>
    	<table style="position:relative;top:-220px;left:400px;font-size:22px;"class="addr-table" border="0">
    		<?php if(is_array($myinfo)): $i = 0; $__LIST__ = $myinfo;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$myi): $mod = ($i % 2 );++$i;?><tr>
    			<td style="color:rgb(125,90,148)">昵称</td>
    			<td class="modifytd">
    				<span><?php echo ($myi["ru_nick"]); ?></span>
    				<span class="modifybutton" style="float:right;font-size:18px;visibility:hidden" ><a href="#">修改</a></span>
    				<input type="hidden" value="ru_nick">
    			</td>
    		</tr>

    		<tr>
    			<td style="color:rgb(125,90,148)">用户名</td>
    			<td >
    				<?php echo ($myi["ru_username"]); ?>
    				
    			</td>

    		</tr>

    		<tr>
    			<td style="color:rgb(125,90,148)">密码</td>
    			<td class="modifytd"><span>******</span>
    				<span  data-toggle="modal" data-target="#myModal"style="float:right;font-size:18px;visibility:hidden" ><a href="#">修改</a></span>
    			</td>
    		</tr>
<!-- Modal -->
			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <h4 class="modal-title" id="myModalLabel">修改密码</h4>
			      </div>
			      <div class="modal-body"style="width:300px;margin:0 auto">
<!-- 修改密码模态框 -->
			        

     				<div class="input-group">
     					<span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">原密码</span>
     					<input  name="oldpassword"type="password" class="password form-control" aria-describedby="basic-addon1">
     				</div>
     				<div class="input-group">
     					<span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">新密码</span>
     					<input  name="newpassword"type="password" class="password form-control" aria-describedby="basic-addon1">
     				</div>

			      </div>
			      <div class="modal-footer">
			        
			        <button type="button" class="btn btn-primary" onclick="modifypassword()">Submit</button>
			      </div>
			    </div>
			  </div>
			</div>
<script type="text/javascript">
	function modifypassword(){
		oldpassword=$('input[name=oldpassword]').val();
		newpassword=$('input[name=newpassword]').val();
		if (isPassword(newpassword)) {
		 data = {
	                oldpassword:oldpassword,
	                newpassword:newpassword
	            }

	            $.ajax({url:"<?php echo U('My/modifypassword');?>",type:'POST',data:data,success:
	                function(succ){
	                    	console.log(succ);
	                        result = JSON.parse(succ);
	                        
	                        if(result.result=='ok'){
	                              alert('密码修改成功');
	                             window.location.reload(); 
	                        }else{
	                            alert('原密码输入错误');
	                        }
	                            
	                }
	            })
	    }else{
	    	alert('密码包含数字和字母并在6-15位之间');
	    }
	}
	function isPassword(name){
            var pattern = /^[0-9a-zA-Z_]{6,15}$/;
            return pattern.test(name);
        }
</script>

    		<tr>
    			<td style="color:rgb(125,90,148)">联系方式</td>
    			<td class="modifytd">
    				<span><?php echo ($myi["ru_telephone"]); ?></span>
    				<span class="modifybutton" style="float:right;font-size:18px;visibility:hidden" ><a href="#">修改</a></span>
    				<input type="hidden" value="ru_telephone">
    			</td>
    		</tr>
<script type="text/javascript">
//弹出个人信息修改	
	$('.modifytd').hover(function(){
		
		$(this).children()[1].style.visibility="visible";
	},function(){
		$(this).children()[1].style.visibility="hidden";
	})
//点击修改

 $('.modifybutton').click(function(){
 	//console.log($(this).children().text());
 	if($(this).children().text()=="修改"){
 		//console.log('111');
 		nick=$(this).prev().text();
 		$(this).prev().html("<input type='text'size='9'value='"+nick+"''>");
 		$(this).children().text('保存');
 	}else{
 		//console.log('222');
 		value=$(this).prev().children().val();
 		name=$(this).next().val();
 		console.log(value);
 		data={
 			name:name,
 			value:value
 		}
 		$.ajax({url:"<?php echo U('My/myinfo_modify');?>",type:'POST',data:data,success:function(succ){
	            		
	                    result = JSON.parse(succ);
	                    if(result.result=='ok'){
	                          alert('修改成功');
	                          //localStorage.token = result.token;
	                          
	                          // window.location.href="./home.html"; 
	                          
	                    }
	            }
	        })
 		$(this).prev().html(value);
	                          $(this).children().text('修改');
 		
 	}
 })
</script>
    		<tr><td colspan="2"><h2>今天是你在<a style ="font-size:30px;color:#09C;margin-top:10px;"href="<?php echo U('index/index');?>">
	   				H&L</a>的第<?php echo ($time); ?>天</h2></td></tr>
    		
    	</table>

  <div style="position:relative;top:-390px;left:770px;"><h1><span class="glyphicon glyphicon-user" aria-hidden="true"></span><?php if(($myi["ru_iu_id"]) == "0"): ?><a style="font-size:25px"href="<?php echo U('My/ident');?>">点击进行身份认证</a>
  	
    				
  	<?php else: echo ($indentuser); endif; ?></h1></div><?php endforeach; endif; else: echo "" ;endif; ?>	
   	</div>
</div>