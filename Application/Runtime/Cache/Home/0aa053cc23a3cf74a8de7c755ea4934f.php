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
     <li><a href="<?php echo U('Admin/indexadmin');?>">指标管理</a></li>
     <li class="active">录入数据</li>
	</ol>

<div class = "jumbotron">
    <div style="background-color:white;padding:10px"class ="container">
    <div class="input-group" style="width:200px; float:left; margin-right:30px">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">城市</span>
              <select class="form-control" id="ic_c_id">
<!-- 遍历城市 -->
<?php if(is_array($city)): $i = 0; $__LIST__ = $city;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ci): $mod = ($i % 2 );++$i;?><option value="<?php echo ($ci["c_id"]); ?>"<?php if(($ci["c_id"]) == $c_id): ?>selected<?php endif; ?>/><?php echo ($ci["c_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>                
              </select>
            </div>

<script type="text/javascript">
//ajax传城市
$('#ic_c_id').change(function(){
  c_id = $('#ic_c_id option:selected').val();
    window.location.href='indexadminsj?c_id='+c_id; 
})
</script>

  <div class="input-group" style="width:200px;float:left; margin-right:30px;">
             <input  name="newcity"type="text" class="text form-control" aria-describedby="basic-addon1"><span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true"><a href="#"onclick="add_newcity()">添加新城市</a></span>
  </div>  
  <div class="input-group" style="width:200px;float:left; margin-right:30px;">
              <select class="form-control" id="createnewyear">
 <!-- 遍历可选年份 -->
 <?php if(is_array($createyear)): $i = 0; $__LIST__ = $createyear;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$cy): $mod = ($i % 2 );++$i;?><option value="<?php echo ($cy["year"]); ?>"><?php echo ($cy["year"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>              
              </select> 
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true"><a href="#" onclick="add_newyear()">添加新年份</a></span>
  </div> 
  <div  style="margin:10px ">选择数据年份
 <!-- 遍历已有年份 -->
 <?php if(is_array($chooseyear)): $i = 0; $__LIST__ = $chooseyear;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$cy): $mod = ($i % 2 );++$i;?><label class="radio-inline">

              <input type="radio" name="inlineRadioOptions" class="chooseyear" value="<?php echo ($cy["ic_year"]); ?>" <?php if(($year) == $cy["ic_year"]): ?>checked<?php endif; ?>> <?php echo ($cy["ic_year"]); ?>
            </label><?php endforeach; endif; else: echo "" ;endif; ?>
  </div> 

 <div>
  <h5 id="configinfo" style="color:#c03">正在录入<?php echo ($c_name); echo ($year); ?>年的数据：）</h5>

</div>
<table class="table table-bordered">
        <thead>
          <tr><th><h4>#</h4></th>
            <th><h4>二级指标名称</h4></th>
            <th><h4>当前二级指标数值</h4></th>
            <th><h4>输入二级指标数值</h4></th>
            <th><h4>二级指标单位</h4></th></tr>
          
        </thead>
        <tbody> 
          <form id="indexvalue">
            <input type="hidden" name="year"  value="<?php echo ($year); ?>">
            <input type="hidden" name="ic_c_id" value="<?php echo ($c_id); ?>">
<?php if(is_array($thirdindex)): $i = 0; $__LIST__ = $thirdindex;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$ti): $mod = ($i % 2 );++$i;?><tr class="indexrows">
             <td >
             <?php echo ($ti["ti_id"]); ?>
            </td>
            <td >
             <?php echo ($ti["ti_name"]); ?>
            </td>
            <td >
           
            <?php if(($ti["iv_value"]) == ""): ?>当前无数值<?php else: echo ($ti["iv_value"]); endif; ?>
            </td>
             <td >
              <input name="<?php echo ($ti["ti_id"]); ?>"type="text"> 
            </td> 
            <td >  
            <?php echo ($ti["ti_measure"]); ?>
            </td>
          </tr><?php endforeach; endif; else: echo "" ;endif; ?>
</form>
<tr style="border:0 red solid"><td></td><td></td><td></td><td><button id="saveindexvalue" onclick="return config()">保存</button></td><td></td></tr>
        </tbody>
   
      </table>
      <h4 id="configinfo" style="color:#09c">
        该指标组和谐宜居城市评价指数为<span id="score"></span><small><button onclick="jisuan()">计算评价指数</button></small>
      </h4>
      
 <script type="text/javascript">
    
 //ajax传年份和城市   
$('.chooseyear').click(function(){
  c_id = $('#ic_c_id option:selected').val();
  chooseyear = $('.chooseyear:checked').val();
 
   window.location.href='indexadminsj?c_id='+c_id+'&year='+chooseyear; 
 
})

   function add_newcity(){
       newcity = $('input[name=newcity]').val();
       if(newcity==''){
        alert('城市名称不能为空');
       }else{
          data = {
         c_name:newcity       
      }

      $.ajax({url:"<?php echo U('Admin/add_newcity');?>",type:'POST',data:data,success:
          function(succ){
                console.log(succ);
                  result = JSON.parse(succ);
                  
                  if(result.result=='ok'){
                        alert('添加成功');
                       
                         window.location.reload(); 
                  }
            }
      })
       }
      
   }
   function add_newyear(){
      newyear = $('#createnewyear option:selected').val();
     ic_c_id = $('#ic_c_id option:selected').val();
      data = {
         ic_year:newyear, 
         ic_c_id:ic_c_id      
      }

      $.ajax({url:"<?php echo U('Admin/add_newyear');?>",type:'POST',data:data,success:
          function(succ){
                console.log(succ);
                  result = JSON.parse(succ);
                  
                  if(result.result=='ok'){
                        alert('添加成功');
                       
                         window.location.reload(); 
                  }
            }
      })
   }

   $('#saveindexvalue').click(function(){
    data = new FormData(document.forms[0]) ;
  
        $.ajax({url:"<?php echo U('Admin/saveindexvalue');?>",type:'POST',data:data,async: true,  
                  cache: false,  
                  contentType: false,  
                  processData: false, success:
          function(succ){
                alert('修改成功');
                  window.location.reload();
            }
      })
   })
    

    function config(){
      var begin = Date.now();
      var result = confirm('确认执行此操作？');
      var end = Date.now();
      if (end - begin < 10) {
          console.log('您禁用了confirm弹窗');
      }else{
          if(result){
          return true;
        }else{
          return false;
        }
      }
      
    } 
    function jisuan(){
      c_id = $('#ic_c_id option:selected').val();
  chooseyear = $('.chooseyear:checked').val();
      data = {
         ic_year:chooseyear, 
         ic_c_id:c_id      
      }
       $.ajax({url:"<?php echo U('Admin/jisuan');?>",type:'POST',data:data,success:function(succ){
                  console.log(succ);
                   result = JSON.parse(succ);
                    alert('该指标组评价指数计算完成：）');
                    $('#score').text(result.score);
              }
          })

    }

 </script>


    </div>
</div>

</body>
</html>