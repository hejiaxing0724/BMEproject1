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
     <li class="active">编辑指标</li>
	</ol>

<div class = "jumbotron">
    <div style="background-color:white;padding:10px"class ="container">

    	<table class="table table-bordered">
        <thead>
          <tr><th><h3>#</h3></th><th colspan="2"><h3>维度</h3></th><th colspan="2"><h3>一级指标</h3></th><th colspan="4"><h3>二级指标</h3></th></tr>
          <tr><th>#<a href="#"style="font-size:16px;color:#c03" data-toggle="modal" data-target="#myModal">添加 </a></th>
            <th>名称</th><th>权重</th>
            <th>名称</th><th>权重</th>
            <th>名称</th><th>权重</th><th>指标类型</th><th>单位</th></tr>
        </thead>
        <tbody> 
<!-- Modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">添加指标</h4>
            </div>
            <div class="modal-body">
<!-- 添加指标模态框 -->
              
            添加
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="firstindex"> 维度
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="secondindex"> 一级指标
            </label>
            <label class="radio-inline">
              <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="thirdindex"> 二级指标
            </label>
<script type="text/javascript">

  $('#inlineRadio1').click(function(){
     $('#firstindex').show();
     $('#secondindex').hide();
     $('#thirdindex').hide();
  }) 
     
  $('#inlineRadio2').click(function(){
     $('#secondindex').show();
     $('#thirdindex').hide();
     $('#firstindex').hide();
  })
  $('#inlineRadio3').click(function(){
     $('#thirdindex').show();
     $('#secondindex').hide();
     $('#firstindex').hide();
  })
</script>
<!-- 维度框 -->
<div id="firstindex" style="margin:20px;display:none">
  <div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">维度编号</span>
              <input  name="fi_id"type="text" class="form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">维度名称</span>
              <input  name="fi_name"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">维度权重</span>
              <input  name="fi_weight"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
</div>
<!-- 一级指标框 -->
<div id="secondindex" style="margin:20px;display:none">
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">所属维度</span>
              <select id="suoshuweidu"class="form-control">
 <!-- 遍历维度                -->
              <?php if(is_array($firstindex)): $i = 0; $__LIST__ = $firstindex;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$fi): $mod = ($i % 2 );++$i;?><option value="<?php echo ($fi["fi_id"]); ?>">【<?php echo ($fi["fi_id"]); ?>】<?php echo ($fi["fi_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>  
              </select>
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">一级指标编号</span>
              <input  name="si_id"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">一级指标名称</span>
              <input  name="si_name"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">一级指标权重</span>
              <input  name="si_weight"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
</div>
<!-- 二级指标框 -->
<div id="thirdindex" style="margin:20px;display:none">
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">所属一级指标</span>
              <select id="suoshuyijizhibiao"class="form-control">
<!-- 遍历一级指标 -->
<?php if(is_array($secondindex)): $i = 0; $__LIST__ = $secondindex;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$si): $mod = ($i % 2 );++$i;?><option value="<?php echo ($si["si_id"]); ?>">【<?php echo ($si["si_id"]); ?>】<?php echo ($si["si_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>               
              </select>
            </div>

<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">二级指标编号</span>
              <input  name="ti_id"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">二级指标名称</span>
              <input  name="ti_name"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">二级指标权重</span>
              <input  name="ti_weight"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">二级指标类型</span>
              <select class="form-control" id="ti_type">
                <option value="1">正向型</option>
                <option value="2">负向型</option>
              </select>
            </div>
<div class="input-group">
              <span class="glyphicon  input-group-addon" id="sizing-addon1"aria-hidden="true">二级指标单位</span>
              <input  name="ti_measure"type="text" class="password form-control" aria-describedby="basic-addon1">
            </div>
</div>
            </div>
            <div class="modal-footer">
              
              <button type="button" class="btn btn-primary" onclick="addindex()">Submit</button>
            </div>
          </div>
        </div>
      </div>
<?php if(is_array($index)): $i = 0; $__LIST__ = $index;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$index): $mod = ($i % 2 );++$i;?><script type="text/javascript">
 function addindex(){
   if($('input[name=fi_id]').val()!=''){
    fi_id=$('input[name=fi_id]').val();
    fi_name=$('input[name=fi_name]').val();
    fi_weight=$('input[name=fi_weight]').val();
    data = {
      fi_id:fi_id,
      fi_name:fi_name,
      fi_weight:fi_weight
    }
   }
   if($('input[name=si_id]').val()!=''){
      si_id=$('input[name=si_id]').val();
      si_name=$('input[name=si_name]').val();
      si_weight=$('input[name=si_weight]').val();
      si_fi_id=$('#suoshuweidu option:selected').val();
      data = {
      si_id:si_id,
      si_name:si_name,
      si_weight:si_weight,
      si_fi_id:si_fi_id
    }
   }
   if($('input[name=ti_id]').val()!=''){
      ti_id=$('input[name=ti_id]').val();
      ti_name=$('input[name=ti_name]').val();
      ti_weight=$('input[name=ti_weight]').val();
      ti_si_id=$('#suoshuyijizhibiao option:selected').val();
      ti_type=$('#ti_type option:selected').val();
      ti_measure=$('input[name=ti_measure]').val();
      data = {
        ti_id:ti_id,
        ti_name:ti_name,
        ti_weight:ti_weight,
        ti_measure:ti_measure,
        ti_si_id:ti_si_id,
        ti_type:ti_type
      }
   }
   $.ajax({url:"<?php echo U('Admin/addindex_submit');?>",type:'POST',data:data,success:
                          function(succ){
                                console.log(succ);
                                  result = JSON.parse(succ);
                                  
                                  if(result.result=='ok'){
                                        alert('添加成功');
                                        //window.location.reload();
                                  }else{
                                      if (result.id=='0') {
                                          alert('该编号已存在');
                                      }
                                     
                                  }
                                      
                          }
                      })
 }
</script>

  <!-- 遍历指标内容 -->
          <tr class="indexrows">
            <td style="width:120px">
              <span><?php echo ($index["fi_id"]); echo ($index["si_id"]); echo ($index["ti_id"]); ?></span>
              
              <span style="visibility:hidden">
                <a herf="#"class="modifyindex" style="font-size:12px;color:#09c;">修改</a>
                <a class="deleteindex" style="font-size:12px;color:#999"
                onclick="return config()">删除 </a>
              </span>
            </td>
            <td><?php echo ($index["fi_name"]); ?></td><td><?php echo ($index["fi_weight"]); ?></td>
           <td><?php echo ($index["si_name"]); ?></td><td><?php echo ($index["si_weight"]); ?></td>
            <td><?php echo ($index["ti_name"]); ?></td><td><?php echo ($index["ti_weight"]); ?></td><td><?php if(($index["ti_type"]) == "1"): ?>正向型<?php endif; if(($index["ti_type"]) == "2"): ?>负向型<?php endif; ?> </td><td><?php echo ($index["ti_measure"]); ?></td>
          </tr><?php endforeach; endif; else: echo "" ;endif; ?>      
        </tbody>
   
      </table>
 <script type="text/javascript">

      $('.indexrows').mouseover(function(){
          $(this).children().children()[1].style.visibility="visible";

        })
    $('.indexrows').mouseout(function(){
          $(this).children().children()[1].style.visibility="hidden";
        })
    // 删除修改js
    $('.modifyindex').click(function(){
      if($(this).text()=="修改"){
         fi_name=$(this).parent().parent().siblings().eq(0).text();
        fi_weight=$(this).parent().parent().siblings().eq(1).text();
        si_name=$(this).parent().parent().siblings().eq(2).text();
        si_weight=$(this).parent().parent().siblings().eq(3).text();
        ti_name=$(this).parent().parent().siblings().eq(4).text();
        ti_weight=$(this).parent().parent().siblings().eq(5).text();
        ti_measure=$(this).parent().parent().siblings().eq(7).text();
        $(this).parent().parent().siblings().eq(0).html("<input type='text' size='10'value='"+fi_name+"'>");
        $(this).parent().parent().siblings().eq(1).html("<input type='text' size='5'value='"+fi_weight+"'>");
        $(this).parent().parent().siblings().eq(2).html("<input type='text' size='10'value='"+si_name+"'>");
        $(this).parent().parent().siblings().eq(3).html("<input type='text' size='5'value='"+si_weight+"'>");
        $(this).parent().parent().siblings().eq(4).html("<input type='text' size='30'value='"+ti_name+"'>");
        $(this).parent().parent().siblings().eq(5).html("<input type='text' size='5'value='"+ti_weight+"'>");
        $(this).parent().parent().siblings().eq(6).html("<select class='form-control' id='ti_type'><option value='1'>正向型</option><option value='2'>负向型</option></select>");
        $(this).parent().parent().siblings().eq(7).html("<input type='text' size='5'value='"+ti_measure+"'>");
        $(this).text('保存');
      }else{
        fi_name=$(this).parent().parent().siblings().eq(0).children().val();
        fi_weight=$(this).parent().parent().siblings().eq(1).children().val();
        si_name=$(this).parent().parent().siblings().eq(2).children().val();
        si_weight=$(this).parent().parent().siblings().eq(3).children().val();
        ti_name=$(this).parent().parent().siblings().eq(4).children().val();
        ti_weight=$(this).parent().parent().siblings().eq(5).children().val();
        ti_measure=$(this).parent().parent().siblings().eq(7).children().val();
        ti_type=$(this).parent().parent().siblings().eq(6).children().val();
        id=$(this).parent().siblings().text();
        fi_id=id.substr(0,1);
        si_id=id.substr(1,1);
        ti_id=id.substr(2.2);
        console.log(fi_id);
    data={
     fi_name:fi_name,
     fi_weight:fi_weight,
     si_name:si_name,
     si_weight:si_weight,
     ti_name:ti_name,
     ti_weight:ti_weight,
     ti_measure:ti_measure,
     ti_type:ti_type,
     fi_id:fi_id,
     si_id:si_id,
     ti_id:ti_id
    }
    $.ajax({url:"<?php echo U('Admin/modifyindex');?>",type:'POST',data:data,success:function(succ){
                  
                      result = JSON.parse(succ);
                      console.log(succ);
                      if(result.result=='ok'){
                            alert('修改成功');
                            //localStorage.token = result.token;
                            
                             window.location.reload();
                            
                      }else{
                        alert('您没有修改任何内容');
                      }
              }
          })
     $(this).text('修改');

      }
     
    })
    
    $('.deleteindex').click(function(){
        result = confirm('确定要删除吗？');
        if(result){
id=$(this).parent().siblings().text();
        ti_id=id.substr(2.2);
        console.log(id);
        data = {
          ti_id:ti_id
        }
         $.ajax({url:"<?php echo U('Admin/deleteindex');?>",type:'POST',data:data,success:function(succ){
                  
                      result = JSON.parse(succ);
                      console.log(succ);
                      if(result.result=='ok'){
                            alert('删除成功');
                            //localStorage.token = result.token;
                            
                             window.location.reload();
                            
                      }else{
                        alert('您没有修改任何内容');
                      }
              }
          })
          
        }
        
    })

    

     
 </script>   	
    	
	</div>
</div>

</body>
</html>