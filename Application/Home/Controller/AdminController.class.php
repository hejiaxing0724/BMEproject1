<?php
namespace Home\Controller;
use Think\Controller;

class AdminController extends Controller{

	public function index(){
		layout(false); 
		$this->display();
	}
	public function indexadmin(){
		layout(false); 
		$this->display();
	}
	public function blogadmin(){
		layout(false); 
		$this->display();
	}
	public function useradmin(){
		layout(false); 
		$this->display();
	}
	public function indexadminjj(){
		layout(false); 
		$this->display();
	}
	public function indexadminsf(){
		layout(false); 
		$this->display();
	}
	public function indexadminzb(){
		$index = M('secondindex')
		->join('hl_firstindex on hl_firstindex.fi_id = hl_secondindex.si_fi_id')
		->join('hl_thirdindex on hl_thirdindex.ti_si_id = hl_secondindex.si_id')
		->order('hl_firstindex.fi_id asc,hl_secondindex.si_id asc,hl_thirdindex.ti_id')
		->select();
		$this->assign('index',$index);
		$firstindex=M('firstindex')->select();
		$this->assign('firstindex',$firstindex);
		$secondindex=M('secondindex')->select();
		$this->assign('secondindex',$secondindex);
		layout(false); 
		$this->display();
	}
	public function modifyindex(){
		$fi_name=I('fi_name');
		$fi_weight=I('fi_weight');
		$si_name=I('si_name');
		$si_weight=I('si_weight');
		$ti_name=I('ti_name');
		$ti_weight=I('ti_weight');
		$ti_type=I('ti_type');
		$ti_measure=I('ti_measure');
		
		$fi_id=I('fi_id');
		$si_id=I('si_id');
		$ti_id=I('ti_id');
		$erro1=(M('firstindex')->where(array('fi_id'=>$fi_id))->save(array('fi_name'=>$fi_name,'fi_weight'=>$fi_weight)));
		if(M('firstindex')->where(array('fi_id'=>$fi_id))->save(array('fi_name'=>$fi_name,'fi_weight'=>$fi_weight))||M('secondindex')->where(array('si_id'=>$si_id))->save(array('si_name'=>$si_name,'si_weight'=>$si_weight))||M('thirdindex')->where(array('ti_id'=>$ti_id))->save(array('ti_name'=>$ti_name,'ti_weight'=>$ti_weight,'ti_type'=>$ti_type,'ti_measure'=>$ti_measure))){
			
					echo json_encode(array('result'=>'ok'));
				
			}else{
			echo json_encode(array('result'=>'no','id'=>$erro1));
		}
	}

	public function deleteindex(){
		$ti_id=I('ti_id');
		if(M('thirdindex')->where(array('ti_id'=>$ti_id))->delete()){
			echo json_encode(array('result'=>'ok'));
		}
	}
	public function addindex_submit(){
		$fi_id=I('fi_id');
		$fi_name=I('fi_name');
		$fi_weight=I('fi_weight');
		$si_id=I('si_id');
		$si_name=I('si_name');
		$si_weight=I('si_weight');
		$si_fi_id=I('si_fi_id');
		$ti_id=I('ti_id');
		$ti_name=I('ti_name');
		$ti_weight=I('ti_weight');
		$ti_si_id=I('ti_si_id');
		$ti_type=I('ti_type');
		$ti_measure=I('ti_measure');
		if(!empty($fi_id)){
			if(M('firstindex')->where(array('fi_id'=>$fi_id))->select()){
				echo json_encode(array('result'=>'no','id'=>'0'));
			}else{
				if(M('firstindex')->add(array('fi_id'=>$fi_id,'fi_name'=>$fi_name,'fi_weight'=>$fi_weight))){
					echo json_encode(array('result'=>'ok'));
				}
			}
		}
		if(!empty($si_id)){
			if(M('secondindex')->where(array('si_id'=>$si_id))->select()){
				echo json_encode(array('result'=>'no','id'=>'0'));
			}else{
				if(M('secondindex')->add(array('si_id'=>$si_id,'si_name'=>$si_name,'si_weight'=>$si_weight,'si_fi_id'=>$si_fi_id))){
					echo json_encode(array('result'=>'ok'));
				}
			}
		}
		if(!empty($ti_id)){
			if(M('thirdindex')->where(array('ti_id'=>$ti_id))->select()){
				echo json_encode(array('result'=>'no','id'=>'0'));
			}else{
				if(M('thirdindex')
					->add(array('ti_id'=>$ti_id,'ti_name'=>$ti_name,'ti_weight'=>$ti_weight,'ti_si_id'=>$ti_si_id,'ti_type'=>$ti_type,'ti_measure'=>$ti_measure))){
					echo json_encode(array('result'=>'ok'));
				}
			}
		}


	}
	public function indexadminsj(){
		layout(false); 
		$city = M('city')->select();
		$this->assign('city',$city);
		$yearnow = date('Y',time());
		
		for ($i=0; $i <5 ; $i++) {
			$arr['year'] = $yearnow-$i; 
			$year[] =  $arr;
		}//遍历近5年年份
		//dump($year);
		$this->assign('createyear',$year);
		$c_id = I('c_id');
		if(empty($c_id)){
			$c_id=1;
		}
		$iv_year = I('year');
		if(empty($iv_year)){
			$iv_year = 2017;
		}
		$indexclass = M('indexclass')->where(array('ic_year'=>$iv_year,'ic_c_id'=>$c_id))->select();
		$ic_id = $indexclass[0]['ic_id'];
		$this->assign('c_id',$c_id);
		$arr = M('city')->where(array('c_id'=>$c_id))->select();
		$c_name = $arr[0]['c_name'];
		$this->assign('c_name',$c_name);
		$this->assign('year',$iv_year);
		$chooseyear = M('indexclass')->where(array('ic_c_id'=>$c_id))->select();
		$this->assign('chooseyear',$chooseyear);
		//echo($iv_year);
		$thirdindex = M('thirdindex')
		->join('left join hl_indexvalue on hl_indexvalue.iv_ti_id = hl_thirdindex.ti_id and hl_indexvalue.iv_ic_id='.$ic_id)
		->select();

		$this->assign('thirdindex',$thirdindex);
		$this->display();
	}

	public function add_newcity(){
		$c_name = I('c_name');
		$city = M('city')->where(array('c_name'=>$c_name))->select();
		if(empty($city)){
			if(M('city')->add(array('c_name'=>$c_name))){
			echo json_encode(array('result'=>'ok'));
			}
		}else{
			echo json_encode(array('result'=>'no'));
		}
		

	}
	public function add_newyear(){
		$ic_year = I('ic_year');
		$ic_c_id = I('ic_c_id');
		$year = M('indexclass')->where(array('$ic_c_id'=>$ic_c_id))->select();
		foreach ($year as $key => $value) {
			$value['ic_year'] ==$ic_c_id;
		}
		if(M('indexclass')->add(array('ic_year'=>$ic_year,'ic_c_id'=>$ic_c_id))){
			echo json_encode(array('result'=>'ok'));
		}
		

	}
	public function saveindexvalue(){
		$ic_year = I("year");
		$ic_c_id = I('ic_c_id');
		$indexclass = M('indexclass')->where(array('ic_year'=>$ic_year,'ic_c_id'=>$ic_c_id))->select();
		$iv_ic_id = $indexclass[0]['ic_id'];
		$thirdindex = M('thirdindex')->select();
		foreach ($thirdindex as $key => $value) {
			if(I($value['ti_id'])!=''){
				if(M('indexvalue')->where(array('iv_ic_id'=>$iv_ic_id,'iv_ti_id'=>$value['ti_id']))->select()){
					M('indexvalue')->where(array('iv_ic_id'=>$iv_ic_id,'iv_ti_id'=>$value['ti_id']))->save(array('iv_value'=>I($value['ti_id'])));
				}else{
					M('indexvalue')->add(array('iv_ic_id'=>$iv_ic_id,'iv_ti_id'=>$value['ti_id'],'iv_value'=>I($value['ti_id'])));
				}
			}
		}
		
	}

	public function jisuan(){
		$ic_year = I("ic_year");
		$ic_c_id = I('ic_c_id');
		$indexclass = M('indexclass')->where(array('ic_year'=>$ic_year,'ic_c_id'=>$ic_c_id))->select();
		$ic_id = $indexclass[0]['ic_id'];
		$indexvalue = M('indexvalue')->where(array('iv_ic_id'=>$ic_id))->select();
		//遍历每个指标组中每个二级指标的原始值计算每个二级指标的评价指数
		//写入评分表
		
		foreach ($indexvalue as $key => $value) {
			//无刚量化处理start
			$thirdindex = M('thirdindex')->where(array('ti_id'=>$value['iv_ti_id']))->select();
			//冒泡排序求出max min
			$arr = M('indexvalue')->where(array('iv_ti_id'=>$value['iv_ti_id']))->select();
			$len = count($arr);
			for ($i=$len; $i >0 ; $i--) { 
				for ($j=0; $j <($i-1) ; $j++) { 
					if($arr[$j]['iv_value']>$arr[$j+1]['iv_value']){
						$b = $arr[$j]['iv_value'];
						$arr[$j]['iv_value'] = $arr[$j+1]['iv_value'];
						$arr[$j+1]['iv_value'] = $b;
					}
				}
			}
			//判断正负向指标
			if($thirdindex[0]['ti_type']=='2'){
				$max = $arr[$len-1]['iv_value'];
				$min = $arr[0]['iv_value'];
			}else{
				$min = $arr[$len-1]['iv_value'];
				$max = $arr[0]['iv_value'];
			}
			$wuganglianghuascore = ($max-$value['iv_value'])/($max-$min)*100;

			//无刚量化finnish
			if(M('indexscore')->where(array('is_type'=>'3','is_i_id'=>$value['iv_ti_id'],'is_ic_id'=>$value['iv_ic_id']))->select()){
				
				M('indexscore')->where(array('is_type'=>'3','is_i_id'=>$value['iv_ti_id'],'is_ic_id'=>$value['iv_ic_id']))->save(array('is_score'=>$wuganglianghuascore));
			}else{
				M('indexscore')->add(array('is_type'=>'3','is_i_id'=>$value['iv_ti_id'],'is_ic_id'=>$value['iv_ic_id'],'is_score'=>$wuganglianghuascore));
			}
		}
		//计算一级指标评价指数
		$secondindex = M('secondindex')->select();
		
		foreach ($secondindex as $key => $value) {
			$thirdindex = M('thirdindex')
			->join('hl_indexscore on hl_indexscore.is_i_id = hl_thirdindex.ti_id and hl_indexscore.is_type =3 and hl_indexscore.is_ic_id='.$ic_id)
			->where(array('ti_si_id'=>$value['si_id']))->select();
			$secondscore = 0;
			foreach ($thirdindex as $key => $valueee) {
				$secondscore = $secondscore + $valueee['is_score']*$valueee['ti_weight'];
			}

			if(M('indexscore')->where(array('is_type'=>'2','is_i_id'=>$value['si_id'],'is_ic_id'=>$ic_id))->select()){
				M('indexscore')->where(array('is_type'=>'2','is_i_id'=>$value['si_id'],'is_ic_id'=>$ic_id))->save(array('is_score'=>$secondscore));
			}else{
				M('indexscore')->add(array('is_type'=>'2','is_i_id'=>$value['si_id'],'is_ic_id'=>$ic_id,'is_score'=>$secondscore));
			}
		}

			
		//计算维度评价指数
		$firstindex = M('firstindex')->select();
		foreach ($firstindex as $key => $value) {
			$secondindex = M('secondindex')
			->join('hl_indexscore on hl_indexscore.is_i_id = hl_secondindex.si_id and hl_indexscore.is_type=2 and hl_indexscore.is_ic_id='.$ic_id)
			->where(array('si_fi_id'=>$value['fi_id']))->select();
			$firstscore = 0;
			foreach ($secondindex as $key => $valueee) {
				$firstscore = $firstscore + $valueee['is_score']*$valueee['si_weight'];
			}
			if(M('indexscore')->where(array('is_type'=>'1','is_i_id'=>$value['fi_id'],'is_ic_id'=>$ic_id))->select()){
				M('indexscore')->where(array('is_type'=>'1','is_i_id'=>$value['fi_id'],'is_ic_id'=>$ic_id))->save(array('is_score'=>$firstscore));
			}else{
				M('indexscore')->add(array('is_type'=>'1','is_i_id'=>$value['fi_id'],'is_ic_id'=>$ic_id,'is_score'=>$firstscore));
			}
		}

		//计算总指标
		$allindex = M('firstindex')
		->join('hl_indexscore on hl_indexscore.is_i_id = hl_firstindex.fi_id and hl_indexscore.is_type=1')
		->where('hl_indexscore.is_ic_id='.$ic_id)
		->select();
		$allscore = 0;
		foreach ($allindex as $key => $value) {
			$allscore = $allscore + $value['is_score']*$value['fi_weight'];
		}
		
		if(M('indexscore')->where(array('is_type'=>'0','is_ic_id'=>$ic_id))->select()){
				M('indexscore')->where(array('is_type'=>'0','is_ic_id'=>$ic_id))->save(array('is_score'=>$allscore));
			}else{
				M('indexscore')->add(array('is_type'=>'0','is_ic_id'=>$ic_id,'is_score'=>$allscore));
			}
		echo json_encode(array('score'=>$allscore));
	}
}







