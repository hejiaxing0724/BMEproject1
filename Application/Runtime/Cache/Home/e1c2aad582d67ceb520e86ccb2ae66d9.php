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
    	<a href="<?php echo U('Info/index');?>"><button class="btn btn-default" style="margin:40px">返回</button></a>
    	<div style="margin:0px 40px">
    		
    	<table class="table  table-striped table-bordered">
    		<thead>
    			<tr><th colspan="10"><h2><?php echo ($c_name); echo ($year); ?>年<span style="color:#09c"><?php echo ($fi_name); ?></span>维度评价指数详情</h2></th></tr>
    			<tr>
    				<th  colspan="4"><h3>一级指标</h3></th>
    				<th  colspan="6"> <h3>二级指标</h3></th>   				
    			</tr>
    			<tr>
    				<th><h4>#</h4></th>
    				<th><h4>一级指标名称</h4></th>
    				<th><h4>一级指标权重</h4></th>
    				<th><h4>一级指标评价指数</h4></th>
    				<th><h4>#</h4></th>
    				<th><h4>二级指标名称</h4></th>
    				<th><h4>二级指标权重</h4></th>
                    <th><h4>二级指标类型</h4></th>
    				<th><h4>二级指标评价指数</h4></th>
    				<th><h4>二级指标具体数据</h4></th>
    			</tr>
    		</thead>
    		<tbody>
                <?php if(is_array($indexdetail)): $i = 0; $__LIST__ = $indexdetail;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$inde): $mod = ($i % 2 );++$i;?><tr>
                        <td><?php echo ($inde["si_id"]); ?></td>
                        <td><?php echo ($inde["si_name"]); ?></td>
                        <td><?php echo ($inde["si_weight"]); ?></td>
                        <td><?php echo ($inde["secondscore"]); ?></td>
                        <td><?php echo ($inde["ti_id"]); ?></td>
                        <td><?php echo ($inde["ti_name"]); ?></td>
                        <td><?php echo ($inde["ti_weight"]); ?></td>
                        <td><?php if(($inde["ti_type"]) == ""): ?>正向型<?php else: ?>负向型<?php endif; ?></td>
                        <td><?php echo ($inde["thirdscore"]); ?></td>
                        <td><?php echo ($inde["iv_value"]); echo ($inde["ti_measure"]); ?></td>
                    </tr><?php endforeach; endif; else: echo "" ;endif; ?>
    		</tbody>
    	</table>
    	</div>
    	
	</div>
</div>
</body>
</html>