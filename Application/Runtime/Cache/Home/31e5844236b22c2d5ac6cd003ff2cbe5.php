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
    	<a href="<?php echo U('Share/index');?>"><button class="btn btn-default" style="margin:40px">返回</button></a>
    	<div style="margin:0px 40px">
    		<div class="page-header">
			  <h1><?php echo ($title); ?><small>作者：<?php echo ($author); ?></small></h1>

			</div>
			
				<p style="float:right;"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span><?php echo ($like); ?></p>
				<p style="float:right;margin-right:20px"><?php echo ($time); ?></p>
				
			<img style="width:70%"src="<?php echo ($picture); ?>">
			<h3><?php echo ($text); ?></h3>
    	</div>
	    <div>
	    	<h2 style="border-left:5px #ec971f solid;padding-left:10px">评论</h2>
	    	<div style="margin:0px 40px">
	    		<?php if(is_array($comment)): $i = 0; $__LIST__ = $comment;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$co): $mod = ($i % 2 );++$i;?><blockquote>
		    			<h5>第<?php echo ($co["loft"]); ?>楼</h5>
					  <p><?php echo ($co["co_text"]); ?></p>
					  <footer> <?php echo ($co["nick"]); ?>于<?php echo ($co["co_time"]); ?></footer>
					</blockquote><?php endforeach; endif; else: echo "" ;endif; ?>
				<?php if(is_array($checklog)): $i = 0; $__LIST__ = $checklog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; if(($vo["result"]) == "1"): ?><textarea id="content"style="width:100%;margin-top:25px" class="form-control" placeholder="你的评论（右下角可延伸输入框）" aria-describedby="sizing-addon1"></textarea>
					</textarea>
					<input type="hidden" name="b_id" value="<?php echo ($b_id); ?>">
					<button style="width:100%"class="btn btn-warning" onclick="public()">发表评论</button><?php endif; ?>
		   					<?php if(($vo["result"]) == "0"): ?><center>
		   							<a href="<?php echo U('index/index');?>">登录后发表自己的看法：）</a>
		   						</center><?php endif; endforeach; endif; else: echo "" ;endif; ?>
				
	    	</div>
	    </div>
    <div>
<script type="text/javascript">
	function public(){
		text = $('#content').val();
		b_id = $('input[name=b_id]').val();
		if(text == ''){
			alert('评论不能为空');
		}else{
			data = {
				b_text:text,
				b_id:b_id
			}
			console.log(data);
			$.ajax({url:"<?php echo U('Share/savecomment');?>",type:'POST',data:data, success:
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
    	</div>
    </div>
</div>
</body>