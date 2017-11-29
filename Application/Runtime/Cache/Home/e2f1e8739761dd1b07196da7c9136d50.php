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
    	<div style="border-left:#09C 5px solid;font-size:25px;margin-bottom:25px;padding-left:15px">用户注册</div>
    	<form>        
            <table class="addr-table" border="0">            
                <tbody>
                    <tr>                
                        <td valign="top">
                            <span class="l-label">用&nbsp;&nbsp;户&nbsp;&nbsp;名</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="uname"  value="" class="placeholder-con" pattern="/^\s*[\u4e00-\u9fa5]{1,}[\u4e00-\u9fa5.·]{0,15}[\u4e00-\u9fa5]{1,}\s*$/" required="required"style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#09c">*</span>                        </div>                        
                                            <div id="checkuname" class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">
                                                以英文开头至少6位,最多15位</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr>   
                        <tr>                
                        <td valign="top">
                            <span class="l-label">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="password" name="password"  value="" class="placeholder-con"  style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#09c">*</span>                        </div>                        
                                            <div id="checkpassword" class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">字母（大小写不限）、数字、下划线组成的6-15位字符</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr> 
                        <tr>                
                        <td valign="top">
                            <span class="l-label">确认密码</span></td>               
                             <td>                    
                                                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="password" name="password2"  value="" class="placeholder-con" style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#09c">*</span>                        </div>                        
                                            <div id="confirmpassword" class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">两次密码输入不一致</div>               
                                    </div>                    
                                             
                            </td>            
                        </tr>             
                        <tr>                
                            <td valign="top"><span class="l-label">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话</span>
                            </td>                
                            <td>                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="telephone" value="" class="placeholder-con"style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                        <span style="color:#09c">*</span>                        
                                    </div>                        
                                    <div id="checkphone"class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">请填写正确的手机号</div>                    
                                </div>                
                            </td>   
                                        
                        </tr>            
                          <tr>
                          	<td valign="top"><span class="l-label">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
                            </td> 
                          	<td>                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="nick" value="" class="placeholder-con"style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                                               
                                    </div>                        
                                    <div id="checkphone"class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">请填写正确的手机号</div>                    
                                </div>                
                            </td>     
                          </tr> 
                          <tr>
                          	<td></td>
                          	<td>
                          		<div class="form-group">                        
                                    <div class="input-control">                            
                                         <img id="yzm"src="/harmoniouscity/Public/yanzhengma.php" width="200px" height="34px"><a href="#" onclick="reloadyzm()">reload</a>                           
                                    </div>
                                </td>
                          </tr>  
                           <tr>
                          	<td valign="top"><span class="l-label">验&nbsp;&nbsp;证&nbsp;&nbsp;码</span>
                            </td> 
                          	<td>                    
                                <div class="form-group">                        
                                    <div class="input-control">                            
                                        <input type="text" name="yanzhengma" value="" class="placeholder-con"style="padding: 10px 9px;
    border: 1px solid #e4e4e4;height: 20px;
    line-height: 20px;">                            
                                     <span style="color:#09c">*</span>                           
                                    </div>                        
                                    <div id="checkyanzhengma"class="error-msg v-hide"style="font-size:6px;color:#09c;visibility:hidden">请输入验证码</div>                    
                                </div>                
                            </td>     
                          </tr>       
                    </tbody>
                </table>        
                <div class="form-group form-submit">   
                <div class="error-msg v-hide"style="font-size:6px;color:#09c;">*为必填内容</div>        
                 <button value="submit"type="button" class="btn btn-primary">提交</button>                              
                                       
                </div>   
            </form>
	</div>
</div>
</section>
<script type="text/javascript">
function reloadyzm(){
		document.getElementById("yzm").src="/harmoniouscity/Public/yanzhengma.php";
	}
$('input[name=password]').blur(function(){
            if(!isPassword($(this).val())){
                $('#checkpassword')[0].style.visibility="visible";
            }else{$('#checkpassword')[0].style.visibility="hidden";}
        })
        $('input[name=password2]').blur(function(){
            if($(this).val()==$('input[name=password]').val()){
                $('#confirmpassword')[0].style.visibility="hidden";
            }else{$('#confirmpassword')[0].style.visibility="visible";}
        })
        $('input[name=telephone]').blur(function(){
        
            if(!isPhone($(this).val())){
                $('#checkphone')[0].style.visibility="visible";
            }else{$('#checkphone')[0].style.visibility="hidden";}

        })
        $('input[name=uname]').blur(function(){
            if(!isUsername($(this).val())){
             $('#checkuname')[0].style.visibility="visible";
            }else{$('#checkuname')[0].style.visibility="hidden";}
        })
    	$('input[name=yanzhengma]').blur(function(){
    		if ($(this).val()=="") {
    			$('#checkyanzhengma')[0].style.visibility="visible";
    		}else{
    			$('#checkyanzhengma')[0].style.visibility="hidden";
    		}
    	})
        function isPhone(name) {
            var pattern = /^1[34578]\d{9}$/;
            return pattern.test(name);
        }
        function isPassword(name){
            var pattern = /^[0-9a-zA-Z_]{6,15}$/;
            return pattern.test(name);
        }
        function isUsername(name){
            var pattern = /^[a-zA-Z][a-zA-Z0-9_]{5,}$/;
            return pattern.test(name);
        }


        $('button[value=submit]').click(function(){
        	if(!isPassword($('input[name=password]').val())){
                $('#checkpassword')[0].style.visibility="visible";
            }else{
            	if($('input[name=password2]').val()!=$('input[name=password]').val()){
                $('#confirmpassword')[0].style.visibility="visible";
            	}else{
            		if(!isPhone($('input[name=telephone]').val())){
                $('#checkphone')[0].style.visibility="visible";
           			 }else{
            			if(!isUsername($('input[name=uname]').val())){
             $('#checkuname')[0].style.visibility="visible";
           			 	}else{
           			 		if($('input[name=yanzhengma]')==""){
           			 			$('#checkyanzhengma')[0].style.visibility="visible";
           			 		}else{
           			 		    uname = $('input[name=uname]').val();
					            password = $('input[name=password]').val();
					            telephone = $('input[name=telephone]').val();
					            nick=$('input[name=nick]').val();
					            yanzhengma=$('input[name=yanzhengma]').val();
					            data = {
					                uname:uname,
					                password:password,
					                telephone:telephone,
					                nick:nick,
					                yanzhengma:yanzhengma
					            }

					            $.ajax({url:"<?php echo U('Index/register_submit');?>",type:'POST',data:data,success:
					                function(succ){
					                    	console.log(succ);
					                        result = JSON.parse(succ);
					                        
					                        if(result.result=='ok'){
					                              alert('注册成功');
					                              localStorage.setItem('token',result.token);
					                               window.location.href="<?php echo U('Index/index');?>"; 
					                        }else{
					                            if (result.id=='0') {
					                                alert('注册失败');
					                            }
					                            if(result.id=='1'){
					                                alert('用户名已存在');
					                            }
					                            if(result.id=='9'){
					                            	alert('验证码不正确');
					                            }
					                        }
					                            
					                }
					            })
           			 	}
           			 }
            		}
            	}
            }
        
        })
</script>